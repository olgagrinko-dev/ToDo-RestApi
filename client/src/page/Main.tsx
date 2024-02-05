import style from './style.module.scss';
import axios from 'axios';
import { useState } from 'react';

export default function Main() {
    const [inp, setInp] = useState({ title: '', description: '' });

    function changeInput(event: any) {
        setInp({ ...inp, [event.target.name]: event.target.value });
    };

    async function isShow() {
        const result = await axios.post('http://localhost:3000/task', inp);
        console.log(result);
    }

    return (
        <div className={style.wrapper}>
            <h1>TODO LIST</h1>
            <div className={style.inpCreat}>
                <input type="text" name='title' onChange={changeInput} placeholder='Create note...' />
                <input type="text" name='description' onChange={changeInput} placeholder='Create description note...' />
                <button onClick={isShow}>CREATE</button>
            </div>

            <div className={style.inpTask1}>
                <input type="checkbox" ></input>
                <h2>Note #1</h2>
                <p>DESCRIPTION...</p>
                <div className={style.imgMain}>
                    <div className={style.imgPencil}></div>
                    <div className={style.imgBasket}></div>
                </div>
            </div>

            <div className={style.line}></div>

            <div className={style.inpTask2}>
                <input type="checkbox"></input>
                <h2>Note #2</h2>
                <p>DESCRIPTION...</p>
                <div className={style.imgMain}>
                    <div className={style.imgPencil}></div>
                    <div className={style.imgBasket}></div>
                </div>
            </div>

            <div className={style.line}></div>

            <div className={style.inpTask3}>
                <input type="checkbox"></input>
                <h2>Note #3</h2>
                <p>DESCRIPTION...</p>
                <div className={style.imgMain}>
                    <div className={style.imgPencil}></div>
                    <div className={style.imgBasket}></div>
                </div>
            </div>

        </div>
    )
}