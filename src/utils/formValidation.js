export const validation = {
    common: {
        required: 'Required Field',
        maxLength: {
            value: 40,
            message: 'Max length is 40 symbols'
        }
    },
    onlyNumbers: {
        pattern: {
            value: /^[ 0-9]+$/,
            message: 'Only numbers allowed'
        }
    },
    email: {
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Incorrect email adress'
        }
    },
    password: {
        required: 'Required Field',
        minLength: {
            value: 6,
            message: 'Min length is 6 symbols'
        },
        maxLength: {
            value: 20,
            message: 'Max length is 20 symbols'
        }
    },
    cardNumber: {
        required: 'Required Field',
        maxLength: {
            value: 16,
            message: '16 symbols required'
        },
    },
    expiration: {
        required: 'Required Field',
        pattern: {
            value: /\d\d\/\d\d/g,
            message: 'Please enter numbers in MM/YY format'
        }
    },
    cvc: {
        required: 'Required Field',
        maxLength: {
            value: 3,
            message: '3 symbols required'
        },
    },
}