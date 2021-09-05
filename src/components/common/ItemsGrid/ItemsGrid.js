import cls from './ItemsGrid.module.scss'

function ItemsGrid({ Component }) {
    return (
        <div className={cls.grid}>
            {Component}
        </div>
    )
}

export default ItemsGrid
