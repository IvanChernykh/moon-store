function FormHeader({ signIn }) {
    const style = { textAlign: 'center', display: 'block' }
    return (
        <div>
            <h2 style={style} >I {signIn ? 'already' : 'do not'} have an account</h2>
            <span style={style}>Sing {signIn ? 'in' : 'up'} with your email and password</span>
        </div>
    )
}

export default FormHeader
