import style from './style.module.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { iTask } from '../../interfaces';
import Modal from '../modal/Modal';

export default function Main() {
    const [inp, setInp] = useState({ title: '', description: '' });
    const [array, setArray] = useState<iTask[]>([]);
    const [open, setOpen] = useState<boolean>(false);
    const [activ, setActiv] = useState<iTask>({_id: '', title: '', description: '', isCheck: false });

    function changeInput(event: React.ChangeEvent<HTMLInputElement>) {
        setInp({ ...inp, [event.target.name]: event.target.value });
    };

    function checkBoxChange(index: number) {
        const newArray = [...array];
        newArray[index].isCheck = !newArray[index].isCheck;
        setArray(newArray);
    }

    async function getAllTask() {
        const data = await axios.get('http://localhost:3000/task');
        console.log(data.data);
        const listTaskCheck = data.data.map((task: iTask) => ({ ...task, isCheck: false }));
        setArray(listTaskCheck);
    }

    useEffect(() => {
        getAllTask();
    }, []);

    useEffect(() => {
        if (open) document.body.style.backgroundColor = '#00000025';
        else document.body.style.backgroundColor = 'white';
    }, [open]);


    async function CreateTask() {
        const result = await axios.post(`http://localhost:3000/task`, inp);
        console.log(result);
        location.reload();
    }

    async function deleteTask(id: string) {
        const data = await axios.delete(`http://localhost:3000/task/${id}`);
        console.log(data);
        const newArray: iTask[] = array.filter((task: any) => task._id !== id);
        setArray(newArray);
        location.reload();
    }

    return (
        <div className={style.wrapper}>
            <h1>TODO LIST</h1>
            <div className={style.inpCreat}>
                <input type="text" name='title' onChange={changeInput} placeholder='Create note...' />
                <input type="text" name='description' onChange={changeInput} placeholder='Create description note...' />
                <button onClick={CreateTask}>CREATE</button>
            </div>

            {array.map((task: iTask, index) => <div className={style.inpWrap}>
                <div className={style.inpTask}>
                    <input onChange={() => checkBoxChange(index)} name={String(index)} type="checkbox" ></input>
                    <h2 className={task.isCheck ? style.checked : style.def}>{task.title}</h2>
                    <p className={task.isCheck ? style.checked : ''}>{task.description}</p>
                    <div className={style.imgMain}>
                        <button onClick={() => { setOpen(true); setActiv(array[index]) }} className={style.imgPencil}></button>
                        <button onClick={() => { deleteTask(task._id) }} className={style.imgBasket}></button>
                    </div>
                </div>
                <div className={style.line}></div>
                {open ? <Modal setOpen={setOpen} task = {active} /> : null};
            </div>
            )}
        </div>
    )
}