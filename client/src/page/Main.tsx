import style from './style.module.scss';

export default function Main() {

    return (
        <div className={style.wrapper}>
            <h1>TODO LIST</h1>

            <div className={style.inpCreat}>
                <input placeholder='Create note...'/>
                <input placeholder='Create description note...'/>
                <button>CREATE</button>
            </div>
            <div>
                <input type="checkbox" checked></input>
            </div>


        </div>
    )
}