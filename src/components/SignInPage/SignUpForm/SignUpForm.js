import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { signUp } from '../../../redux/reducers/authReducer'
import { validation } from '../../../utils/formValidation'
import FormButton from '../../common/FormButton/FormButton'
import FormErrorMessage from '../../common/FormErrorMessage/FormErrorMessage'
import FormInput from '../../common/FormInput/FormInput'
import FormHeader from '../FormHeader/FormHeader'
import cls from '../SignInPage.module.scss'

function SignUpForm({ signUp, history }) {
    const { register, watch, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange', criteriaMode: 'all' })
    function submitHandler(data) {
        signUp(data)
        history.push('/')
    }
    return (
        <div>
            <FormHeader signIn={false} />
            <form onSubmit={handleSubmit(submitHandler)} className={cls.form}>
                <div>
                    <FormInput props={{ ...register('Name', { ...validation.common }) }} type='text' placeholder='Display name' />
                    <FormErrorMessage errors={errors} name='Name' />
                </div>
                <div >
                    <FormInput props={{ ...register('Email', { ...validation.email, ...validation.common }) }} type='email' placeholder='Email' />
                    <FormErrorMessage errors={errors} name='Email' />
                </div>
                <div>
                    <FormInput props={{ ...register('Password', { ...validation.password }) }} type='password' placeholder='Password' maxLength='20' />
                    <FormErrorMessage errors={errors} name='Password' />
                </div>
                <div>
                    <FormInput
                        props={{ ...register('Confirm_Password', { ...validation.password, validate: v => v === watch('Password') || 'Password does not match' }) }}
                        type='password' placeholder='Confirm Password' maxLength='20' />
                    <FormErrorMessage errors={errors} name='Confirm_Password' />
                </div>
                <FormButton type='submit' text='Sign Up' />
            </form>
        </div>
    )
}
export default connect(null, { signUp })(SignUpForm)
