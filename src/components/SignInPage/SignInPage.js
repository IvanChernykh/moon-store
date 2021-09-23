import SignInForm from './SignInForm/SignInForm'
import SignUpForm from './SignUpForm/SignUpForm'
import cls from './SignInPage.module.scss'
import { useHistory } from 'react-router'

function SignInPage() {
    const history = useHistory()
    return (
        <div className={cls.container}>
            <SignInForm history={history} />
            <SignUpForm history={history} />
        </div>
    )
}

export default SignInPage
