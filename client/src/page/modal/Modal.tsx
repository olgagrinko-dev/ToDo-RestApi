import style from './style.module.scss';
import React, { useState } from 'react';
import { iTask } from '../../interfaces';
import axios from 'axios';

interface ModalProps {
    setOpen: (arg: boolean) => void;
    task: iTask;
}

const Modal: React.FC<ModalProps> = ({ setOpen, task }) => {
    const [inp, setInp] = useState({ title: '', description: '' });

    const changeInput = (event: React.ChangeEvent<HTMLInputElement>) =>
        setInp({ ...inp, [event.target.name]: event.target.value });

    return (
        <div className={style.wrapperModal}>
            <h1>Update Note</h1>
            <div className={style.inpUpDate}>
                <input onChange={changeInput} type="text" name='title' placeholder='Input your note...' />
                <input onChange={changeInput} type="text" name='description' placeholder='Input your description note...' />
            </div>

            <div className={style.butUpDate}>
                <button onClick={() => setOpen(false)}>CANCEL</button>
                <button onClick={async () => {
                    const result = await axios.put(`http://localhost:3000/task/${task._id}`, inp);
                    console.log(result);
                    location.reload();
                }}>APPLY</button>
            </div>
        </div>
    )
}

export default Modal;
