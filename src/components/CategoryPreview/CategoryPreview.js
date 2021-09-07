import { Link } from 'react-router-dom'
import CardItem from '../common/CardItem/CardItem'
import ItemsGrid from '../common/ItemsGrid/ItemsGrid'
import cls from './CategoryPreview.module.scss'

function CategoryPreview({ category }) {
    const Items = category.items.map(item => {
        if (category.items.indexOf(item) >= 4) return null
        return <CardItem key={item.id} item={item} />
    })
    return (
        <div className={cls.container}>
            <div className={cls.link}>
                <Link to={category.linkUrl}>{category.title}</Link>
            </div>
            <ItemsGrid Component={Items} />
        </div>
    )
}

export default CategoryPreview
