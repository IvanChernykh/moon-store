import { Link, NavLink } from 'react-router-dom'
import cls from './Header.module.scss'
import logo from '../../assets/images/moon-logo.svg'
import { ReactComponent as CheckoutIcon } from '../../assets/images/bag-icon.svg'
import Cart from './Cart/Cart'
import { connect } from 'react-redux'
import { toggleCart } from '../../redux/reducers/checkoutReducer'
import { signOut } from '../../redux/reducers/authReducer'

function Header({ toggleCart, checkout, auth, signOut }) {
    return (
        <header className={cls.container}>
            <div>
                <Link to='/' className={cls.logo}>
                    <img src={logo} alt='Moon Store' />
                </Link>
            </div>
            <div className={cls.menu}>
                <NavLink to='/shop' className={cls.link} activeClassName={`${cls.link} ${cls.active}`}>Shop</NavLink>
                {auth.isAuth ? <button className={`${cls.link} ${cls.btn}`} type='button' onClick={() => signOut()}>Sign Out</button>
                    : <NavLink to='/signin' className={cls.link} activeClassName={`${cls.link} ${cls.active}`}> Sign In</NavLink>}
                <button onClick={() => toggleCart()} className={cls.checkout}>
                    <span className={cls.items}>{checkout.totalItems}</span>
                    <CheckoutIcon className={cls.icon} />
                </button>
                {checkout.showCart && <Cart />}
            </div>
        </header>
    )
}
const mapStateToProps = state => {
    return { checkout: state.checkout, auth: state.auth }
}

export default connect(mapStateToProps, { toggleCart, signOut })(Header)
