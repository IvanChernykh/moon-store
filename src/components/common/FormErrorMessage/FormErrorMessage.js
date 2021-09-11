import { ErrorMessage } from '@hookform/error-message'

function FormErrorMessage({ errors, name }) {
    const styles = {
        position: 'absolute',
        color: 'red',
        fontSize: '.8rem',
        right: '0.7rem',
        bottom: '100%',
    }
    return (
        <ErrorMessage errors={errors} name={name} render={({ message }) => <p style={styles}>{message}</p>} />
    )
}

export default FormErrorMessage
