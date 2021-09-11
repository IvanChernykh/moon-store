import { useForm } from 'react-hook-form'
import cls from './CheckoutForm.module.scss'

function CheckoutForm({ price }) {
    const { register, handleSubmit } = useForm()
    function submitHandler(data) {
        console.log(data);
    }
    const validation = {
        cardNumber: {
            required: true,
            maxLength: 16,
        },
        expiration: {
            required: true,
        },
        cvc: {
            required: true,
            maxLength: 3,
        }
    }
    return (
        <div>
            <h1 className={cls.title}>Shipping and payment details</h1>
            <form className={cls.form} onSubmit={handleSubmit(submitHandler)}>
                <input {...register('Email')} type='email' placeholder='Email' />
                <input {...register('Name')} type='text' placeholder='Name' />
                <input {...register('City')} type='text' placeholder='City' />
                <input {...register('Adress')} type='text' placeholder='Adress' />
                {/* <div className={cls.paymentInfo}>
                </div> */}
                <div className={cls.paymentInfo}>
                    <input {...register('Card_CardNumber', validation.cardNumber)} maxLength='19' className={cls.cardNumber} type='tel' placeholder='Card Number' />
                    <input  {...register('Card_ExpirationMonth', validation.expiration)} maxLength='4' type='tel' placeholder='MM/YY' className={cls.expiration} />
                    <input {...register('Card_CVC', validation.cvc)} className={cls.cvc} type='tel' placeholder='CVC' maxLength='3' />
                </div>
                <div className={cls.bottom}>
                    <span>Your total: ${price}</span>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm
