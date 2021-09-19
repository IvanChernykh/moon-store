import cls from './FormButton.module.scss'

function FormButton({ type, text, callback, callbackValue = null }) {
    const clickHandler = () => {
        if (callback) return callback(callbackValue)
        return
    }
    return <button className={cls.btn} type={type} onClick={clickHandler}>{text}</button>
}

export default FormButton
