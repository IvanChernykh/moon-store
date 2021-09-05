import { Route } from "react-router";
import Header from "./Header/Header";
import HomePage from "./HomePage/HomePage";

function App() {
  return (
    <div className="app"  >
      <Header />
      <Route exact path='/'>
        <HomePage />
      </Route>
    </div>
  );
}

export default App;
