import { Link, NavLink } from 'react-router-dom'
import cls from './Header.module.scss'
import logo from '../../assets/images/moon-logo.svg'

function Header() {
    return (
        <header className={cls.container}>
            <div>
                <Link to='/' className={cls.logo}>
                    <img src={logo} alt='Moon Store' height='50px' />
                </Link>
            </div>
            <div>
                <NavLink to='/shop' className={cls.link} activeClassName={`${cls.link} ${cls.active}`}>Shop</NavLink>
                {/*  <Link to='/checkout'></Link> */}
            </div>
        </header>
    )
}

export default Header
