function FormHeader({ signIn }) {
    return (
        <div>
            <h2>I {signIn ? 'already' : 'do not'} have an account</h2>
            <span>Sing {signIn ? 'in' : 'up'} with your email and password</span>
        </div>
    )
}

export default FormHeader
