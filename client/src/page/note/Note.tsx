import style from './style.module.scss';

export default function Note() {

    return (
        <div className={style.wrapper}>
            <h1>Update Note</h1>
            <div className={style.inpUpDate}>
                <input type="text" name='title' onChange={changeInput} placeholder='Input your note...' />
                <input type="text" name='description' onChange={changeInput} placeholder='Input your description note...' />
            </div>

            <div className={style.butUpDate}>
                <button onClick={CancelTask}>CANCEL</button>
                <button onClick={ApplyTask}>APPLY</button>
            </div>
        </div>
    )
}
