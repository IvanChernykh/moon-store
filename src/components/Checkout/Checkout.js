import { connect } from 'react-redux'
import { addItem, decreaseQuantity, removeItem } from '../../redux/reducers/checkoutReducer'
import cls from './Checkout.module.scss'
import CheckoutItem from './CheckoutItem/CheckoutItem'

function Checkout({ checkout, removeItem, addItem, decreaseQuantity }) {
    const Items = checkout.items.map(item => {
        return <CheckoutItem item={item} key={item.id} removeItem={removeItem} addItem={addItem} decreaseQuantity={decreaseQuantity} />
    })
    return (
        <div className={cls.container}>
            <div className={cls.top}>
                <span>Product</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Remove</span>
            </div>
            {Items.length ? <div className={cls.items}> {Items}</div> : null}
        </div>
    )
}
const mapStateToProps = state => {
    return { checkout: state.checkout }
}

export default connect(mapStateToProps, { removeItem, addItem, decreaseQuantity })(Checkout)
