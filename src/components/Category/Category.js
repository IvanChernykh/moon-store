import CardItem from '../common/CardItem/CardItem'
import ItemsGrid from '../common/ItemsGrid/ItemsGrid'
import cls from './Category.module.scss'

function Category({ category }) {
    const Items = category.items.map(item => {
        return <CardItem key={item.id} item={item} />
    })
    return (
        <div className={cls.category}>
            <h1>{category.title}</h1>
            <ItemsGrid Component={Items} />
        </div>
    )
}

export default Category
