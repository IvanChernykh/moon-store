import { useForm } from 'react-hook-form'
import FormErrorMessage from '../../common/FormErrorMessage/FormErrorMessage';
import cls from './CheckoutForm.module.scss'

function CheckoutForm({ price }) {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onBlur', criteriaMode: 'all' })
    function submitHandler(data) {
        console.log(data);
    }
    const validation = {
        email: {
            required: 'Required Field',
        },
        name: {
            required: 'Required Field',
        },
        city: {
            required: 'Required Field',
        },
        adress: {
            required: 'Required Field',
        },
        cardNumber: {
            required: 'Required Field',
            maxLength: 16,
            minLength: 16,
            validate: value => value.length === 16
        },
        expiration: {
            required: 'Required Field',
        },
        cvc: {
            required: 'Required Field',
            maxLength: 3,
            minLength: 3,
        }
    }
    return (
        <div>
            <h1 className={cls.title}>Shipping and payment details</h1>
            <form className={cls.form} onSubmit={handleSubmit(submitHandler)}>
                <div className={cls.email}>
                    <input {...register('Email', validation.email)} type='email' placeholder='Email' />
                    <FormErrorMessage errors={errors} name='Email' />
                </div>
                <div>
                    <input {...register('Name', validation.name)} type='text' placeholder='Name' />
                    <FormErrorMessage errors={errors} name='Name' />
                </div>
                <div>
                    <input {...register('City', validation.city)} type='text' placeholder='City' />
                    <FormErrorMessage errors={errors} name='City' />
                </div>
                <div>
                    <input {...register('Adress', validation.adress)} type='text' placeholder='Adress' />
                    <FormErrorMessage errors={errors} name='Adress' />
                </div>
                <div className={cls.paymentInfo}>
                    <div className={cls.cardNumber}>
                        <input {...register('Card_CardNumber', validation.cardNumber)} maxLength='16' type='tel' placeholder='Card Number' />
                        <FormErrorMessage errors={errors} name='Card_CardNumber' />
                    </div>
                    <div className={cls.expiration}>
                        <input  {...register('Card_Expiration', validation.expiration)} maxLength='4' type='tel' placeholder='MM/YY' />
                        <FormErrorMessage errors={errors} name='Card_Expiration' />
                    </div>
                    <div>
                        <input {...register('Card_CVC', validation.cvc)} className={cls.cvc} type='tel' placeholder='CVC' maxLength='3' />
                        <FormErrorMessage errors={errors} name='Card_CVC' />
                    </div>
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
