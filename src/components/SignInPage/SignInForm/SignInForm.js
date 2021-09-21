import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { signIn } from '../../../redux/reducers/authReducer'
import { validation } from '../../../utils/formValidation'
import FormButton from '../../common/FormButton/FormButton'
import FormErrorMessage from '../../common/FormErrorMessage/FormErrorMessage'
import FormInput from '../../common/FormInput/FormInput'
import FormHeader from '../FormHeader/FormHeader'
import cls from '../SignInPage.module.scss'

function SignInForm({ signIn }) {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange', criteriaMode: 'all' })
    const history = useHistory()
    function submitHandler(data) {
        signIn(data)
        history.push('/')
    }
    return (
        <div>
            <FormHeader signIn={true} />
            <form onSubmit={handleSubmit(submitHandler)} className={cls.form}>
                <div >
                    <FormInput props={{ ...register('Email', { ...validation.email, ...validation.common }) }} type='email' placeholder='Email' />
                    <FormErrorMessage errors={errors} name='Email' />
                </div>
                <div>
                    <FormInput props={{ ...register('Password', { ...validation.password }) }} type='password' placeholder='Password' maxLength='20' />
                    <FormErrorMessage errors={errors} name='Password' />
                </div>
                <FormButton type='submit' text='Sign In' />
            </form>
        </div>
    )
}

export default connect(null, { signIn })(SignInForm)
