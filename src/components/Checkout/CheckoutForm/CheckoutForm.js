import { useForm } from 'react-hook-form'
import { validation } from '../../../utils/formValidation';
import FormErrorMessage from '../../common/FormErrorMessage/FormErrorMessage';
import cls from './CheckoutForm.module.scss'
import FormButton from '../../common/FormButton/FormButton';
import FormInput from '../../common/FormInput/FormInput';

function CheckoutForm({ price, setFormIsOpen }) {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange', criteriaMode: 'all' })
    function submitHandler(data) {
        setFormIsOpen(false)
        alert('Successfull')
        console.log(data);
    }
    return (
        <div>
            <h1 className={cls.title}>Shipping and payment details</h1>
            <span className={cls.total}>Your total: ${price}</span>
            <form className={cls.form} onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <FormInput props={{ ...register('Email', { ...validation.email, ...validation.common }) }} type='email' placeholder='Email' />
                    <FormErrorMessage errors={errors} name='Email' />
                </div>
                <div>
                    <FormInput props={{ ...register('Name', { ...validation.common }) }} type='text' placeholder='Name' />
                    <FormErrorMessage errors={errors} name='Name' />
                </div>
                <div>
                    <FormInput props={{ ...register('City', { ...validation.common }) }} type='text' placeholder='City' />
                    <FormErrorMessage errors={errors} name='City' />
                </div>
                <div>
                    <FormInput props={{ ...register('Adress', { ...validation.common }) }} type='text' placeholder='Adress' />
                    <FormErrorMessage errors={errors} name='Adress' />
                </div>
                <div className={cls.paymentInfo}>
                    <div className={cls.cardNumber}>
                        <FormInput props={{ ...register('Card_CardNumber', { ...validation.cardNumber, ...validation.onlyNumbers }) }} maxLength='16' type='tel' placeholder='Card Number' />
                        <FormErrorMessage errors={errors} name='Card_CardNumber' />
                    </div>
                    <div className={cls.expiration}>
                        <FormInput props={{ ...register('Card_Expiration', validation.expiration) }} maxLength='5' type='tel' placeholder='MM/YY' />
                        <FormErrorMessage errors={errors} name='Card_Expiration' />
                    </div>
                    <div>
                        <FormInput props={{ ...register('Card_CVC', { ...validation.cvc, ...validation.onlyNumbers }) }} type='tel' placeholder='CVC' maxLength='3' />
                        <FormErrorMessage errors={errors} name='Card_CVC' />
                    </div>
                </div>
                <div className={cls.bottom}>
                    <FormButton text='Back' callback={setFormIsOpen} callbackValue={false} />
                    <FormButton type='submit' text='Submit' />
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm
