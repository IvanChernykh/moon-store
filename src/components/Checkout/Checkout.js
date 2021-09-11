import { useState } from 'react'
import { connect } from 'react-redux'
import { addItem, decreaseQuantity, removeItem } from '../../redux/reducers/checkoutReducer'
import cls from './Checkout.module.scss'
import CheckoutForm from './CheckoutForm/CheckoutForm'
import CheckoutItem from './CheckoutItem/CheckoutItem'

function Checkout({ items, totalPrice, removeItem, addItem, decreaseQuantity }) {
    const Items = items.map(item => {
        return <CheckoutItem item={item} key={item.id} removeItem={removeItem} addItem={addItem} decreaseQuantity={decreaseQuantity} />
    })
    const [formIsOpen, setFormIsOpen] = useState(false)
    return (
        <div className={cls.container}>
            {formIsOpen ? <CheckoutForm price={totalPrice} />
                : (<div>
                    <div className={cls.top}>
                        <span>Product</span>
                        <span>Quantity</span>
                        <span>Price</span>
                        <span>Remove</span>
                    </div>
                    {Items.length ? <div className={cls.items}> {Items}</div> : <span className={cls.empty}>The cart is empty</span>}
                    <span className={cls.totalPrice}>Total: ${totalPrice}</span>
                    <div>
                        {!!Items.length && <button onClick={() => setFormIsOpen(!formIsOpen)} className={cls.payButton}>Pay now</button>}
                    </div>
                </div>)}
        </div>
    )
}
const mapStateToProps = state => {
    return { items: state.checkout.items, totalPrice: state.checkout.totalPrice }
}

export default connect(mapStateToProps, { removeItem, addItem, decreaseQuantity })(Checkout)
