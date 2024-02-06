import style from './style.module.scss';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { iTask } from '../interfaces';

export default function Main() {
    const [inp, setInp] = useState({ title: '', description: '' });
    const [array, setArray] = useState<iTask[]>([]);
    const descriptionRefs = useRef<Array<HTMLParagraphElement>>([]);

    function swapFlagCheck(event: React.ChangeEvent<HTMLInputElement>) {
        const newArray = [...array];
        newArray[index].isCheck = !newArray[index].isCheck;
        setArray(newArray)
        console.log(array);
        if (descriptionRefs.current[index]) {
            descriptionRefs.current[index].style.color = newArray[index].isCheck ? 'red'
        }
    }

    function changeInput(event: React.ChangeEvent<HTMLInputElement>) {
        setInp({ ...inp, [event.target.name]: event.target.value });
    }

    async function getAllTask() {
        const data = await axios.get('http://localhost:3000/task');
        console.log(data.data);
        const listTaskCheck = data.data.map((el: iTask) => {
            return { ...el, isCheck: false }
        })
        setArray(listTaskCheck);
    }

    useEffect(() => {
        getAllTask();

    })

    async function CreateTask() {
        const data = await axios.post('http://localhost:3000/task', inp);
        console.log(data);
    }

    async function deleteTask(event: React.ChangeEvent<HTMLInputElement>) {
        const filtered: iTask = array.filter((elem: iTask) => elem._id === event.target.id);
        const data = await axios.delete('http://localhost:3000/task/${filtered.id}');
        console.log(data);
    }

    return (
        <div className={style.wrapper}>
            <h1>TODO LIST</h1>
            <div className={style.inpCreat}>
                <input type="text" name='title' onChange={changeInput} placeholder='Create note...' />
                <input type="text" name='description' onChange={changeInput} placeholder='Create description note...' />
                <button onClick={CreateTask}>CREATE</button>
            </div>

            {array.map((el: iTask, index) => <div className={style.inpTask}>
                <input name={String(index)} onChange={swapFlagCheck} type="checkbox" ></input>
                <h2 ref={descriptionRefs.current[index]} className={elem.isCheck ? "" : style }{el.title}</h2>
                <p>{el.description}</p>
                <div className={style.imgMain}>
                    <button  className={style.imgPencil}></button>
                    <button onClick={deleteTask} id={elem._id} className={style.imgBasket}></button>
                </div>
            </div>)}
        </div>
    )
}