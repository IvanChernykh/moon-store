import { connect } from 'react-redux'
import { addItem } from '../../../redux/reducers/checkoutReducer'
import cls from './CardItem.module.scss'

function CardItem({ item, addItem }) {
    return (
        <div className={cls.card}>
            <div className={cls.image}>
                <div className={cls.imageHover}>
                    <button onClick={() => addItem(item)}>Add To Cart</button>
                </div>
                <img src={item.imageUrl} alt={item.name} />
            </div>
            <div className={cls.text}>
                <h4 >{item.name}</h4>
                <span>${item.price}</span>
            </div>
        </div>
    )
}

export default connect(null, { addItem })(CardItem)
