import SignInForm from './SignInForm/SignInForm'
import SignUpForm from './SignUpForm/SignUpForm'
import cls from './SignInPage.module.scss'

function SignInPage() {
    return (
        <div className={cls.container}>
            <div>
                <SignInForm />
            </div>
            <div>
                <SignUpForm />
            </div>
        </div>
    )
}

export default SignInPage
