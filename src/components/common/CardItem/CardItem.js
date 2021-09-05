import cls from './CardItem.module.scss'

function CardItem({ item }) {
    return (
        <div className={cls.card}>
            <div className={cls.image}>
                <div className={cls.imageHover}>
                    <button>Add To Cart</button>
                </div>
                <img src={item.imageUrl} alt={item.name} />
            </div>
            <div className={cls.text}>
                <h4 >{item.name}</h4>
                <span>{item.price}$</span>
            </div>
        </div>
    )
}

export default CardItem
