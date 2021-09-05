import { Link } from 'react-router-dom'
import cls from './Collection.module.scss'

function Collection({ collection }) {
    const classes = [cls.collection]
    if (collection.id === 1 || collection.id === 2) classes.push(cls.primary)
    return (
        <Link to={collection.linkUrl} className={classes.join(' ')}>
            <div className={cls.background} style={{ backgroundImage: `url(${collection.imageUrl})` }}></div>
            <div className={cls.text}>
                <h1>{collection.title}</h1>
                <span>Shop now</span>
            </div>
        </Link>
    )
}

export default Collection
