import { ErrorMessage } from '@hookform/error-message'

function FormErrorMessage({ errors, name }) {
    const styles = {
        position: 'absolute',
        color: 'red',
        fontSize: '.8rem',
        left: '0',
        bottom: '100%',
        whiteSpace: 'nowrap'
    }
    return (
        <ErrorMessage errors={errors} name={name} render={({ message }) => <p style={styles}>{message}</p>} />
    )
}

export default FormErrorMessage
