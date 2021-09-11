import { ErrorMessage } from '@hookform/error-message'

function FormErrorMessage({ errors, name }) {
    const styles = {
        position: 'absolute',
        color: 'red',
        right: '0.7rem',
        top: '50%',
        transform: 'translateY(-50%)',
    }
    return (
        <ErrorMessage errors={errors} name={name} render={({ message }) => <p style={styles}>{message}</p>} />
    )
}

export default FormErrorMessage
