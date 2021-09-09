import cls from './CheckoutItem.module.scss'

function CheckoutItem({ item, removeItem, addItem, decreaseQuantity }) {
    return (
        <div>
            <div className={cls.container}>
                <div className={`${cls.col} ${cls.product}`}>
                    <div className={cls.image}>
                        <img src={item.imageUrl} alt={item.name} />
                    </div>
                    <span>{item.name}</span>
                </div>
                <div className={`${cls.col} ${cls.quantity}`}>
                    <div onClick={() => decreaseQuantity(item)}> - </div>
                    <span>{item.quantity}</span>
                    <div onClick={() => addItem(item)}> + </div>
                </div>
                <div className={`${cls.col} ${cls.price}`}>${item.price}</div>
                <div className={cls.col}>
                    <button className={cls.remove} onClick={() => removeItem(item)}>&times;</button>
                </div>
            </div>
        </div>

    )
}

export default CheckoutItem
