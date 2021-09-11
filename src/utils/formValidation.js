export const validation = {
    common: {
        required: 'Required Field',
        maxLength: {
            value: 40,
            message: 'Max length is 40 symbols'
        }
    },
    email: {
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Incorrect email adress'
        }
    },
    name: {
    },
    city: {
    },
    adress: {
    },
    cardNumber: {

        maxLength: {
            value: 16,
            message: '16 symbols required'
        },
    },
    expiration: {
    },
    cvc: {
        maxLength: {
            value: 3,
            message: '3 symbols required'
        },

    },
    onlyNumbers: {
        pattern: {
            value: /^[ 0-9]+$/,
            message: 'Only numbers allowed'
        }
    }
}