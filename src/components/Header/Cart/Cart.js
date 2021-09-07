import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleCart } from '../../../redux/reducers/checkoutReducer'
import cls from './Cart.module.scss'
import CartItem from './CartItem/CartItem'

function Cart({ toggleCart, cartItems }) {
    const Items = cartItems.map(item => {
        return <CartItem key={item.id} item={item} />
    })
    return (
        <div>
            <div className={cls.container}>
                <div className={cls.items}>
                    {Items.length ? Items : <span className={cls.empty}>The cart is empty</span>}
                </div>
                <button onClick={() => toggleCart()} className={cls.button}>
                    <Link to='/checkout'>Go to Checkout</Link>
                </button>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return { cartItems: state.checkout.items }
}
export default connect(mapStateToProps, { toggleCart })(Cart)
