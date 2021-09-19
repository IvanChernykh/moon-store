import { connect } from "react-redux";
import { Route } from "react-router";
import Category from "./Category/Category";
import Checkout from "./Checkout/Checkout";
import RouteHoc from "./common/RouteHoc/RouteHoc";
import Header from "./Header/Header";
import HomePage from "./HomePage/HomePage";
import ShopPage from "./ShopPage/ShopPage";
import SignInPage from "./SignInPage/SignInPage";

function App(props) {
  const Categories = Object.entries(props.shop).map(el => {
    return (
      <Route exact path={el[1].linkUrl} key={el[0]}>
        <RouteHoc Component={<Category category={el[1]} />} />
      </Route>
    )
  })
  return (
    <div className="app"  >
      <Header />
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route exact path='/shop'>
        <RouteHoc Component={<ShopPage />} />
      </Route>
      <Route exact path='/checkout'>
        <Checkout />
      </Route>
      <Route exact path='/signin'>
        <SignInPage />
      </Route>
      {Categories}
    </div>
  );
}
const mapStateToProps = state => ({ shop: state.shop.shopData })
export default connect(mapStateToProps)(App)
