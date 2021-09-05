import { connect } from 'react-redux'
import CategoryPreview from '../CategoryPreview/CategoryPreview'
import cls from './ShopPage.module.scss'

function ShopPage(props) {
    const Previews = Object.entries(props.shop).map(el => {
        return <CategoryPreview category={el[1]} key={el[0]} />
    })
    return (
        <div className={cls.shop}>
            <h1>Moon Store</h1>
            <div>
                {Previews}
            </div>
        </div>
    )
}
function mapStateToProps(state) {
    return {
        shop: state.shop.shopData
    }
}
export default connect(mapStateToProps)(ShopPage)
