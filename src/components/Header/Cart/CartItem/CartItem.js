import cls from './CartItem.module.scss'

function CartItem({ item }) {
    return (
        <div className={cls.container}>
            <div className={cls.image}>
                <img src={item.imageUrl} alt={item.name} />
            </div>
            <div className={cls.text}>
                <span>{item.name}</span>
                <span>{item.quantity} &times; {item.price}$</span>
            </div>
        </div>
    )
}

export default CartItem
