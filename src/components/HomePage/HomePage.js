import { connect } from 'react-redux'
import Collection from './Collection/Collection'
import cls from './HomePage.module.scss'

function HomePage({ collections }) {
    const collection = collections.map(c => {
        return (
            <Collection key={c.id} collection={c} />
        )
    })
    return (
        <div className={cls.grid}>
            {collection}
        </div>
    )
}
const mapStateToProps = state => ({ collections: state.collections.collections })

export default connect(mapStateToProps)(HomePage)
