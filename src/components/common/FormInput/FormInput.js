import cls from './FormInput.module.scss'

function FormInput({ maxLength, type, placeholder, props }) {

    return <input
        {...props} type={type} placeholder={placeholder} maxLength={maxLength} className={cls.input} />
}

export default FormInput
