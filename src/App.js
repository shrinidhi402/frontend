import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderNavbar from "./components/HeaderNavbar";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SellMen from "./components/SellMen";
import SellKids from "./components/SellKids";
import Login from "./components/Login";
import MenShop from "./components/MenShop";
import KidsShop from "./components/KidsShop";
import AboutUs from "./components/AboutUs";
// import Accordion from './components/Accordion'
function App() {
  return (
    <>
    <div className="header_combination">
    <Header />
    <HeaderNavbar />
    </div>
      <Router>
        <Switch>
          http://localhost:3000/
          <Route path="/" exact component={Homepage}></Route>
          <Route path="/sell-men"  component={SellMen}></Route>
          <Route path="/sell-kids"  component={SellKids}></Route>
          <Route path="/login"  component={Login}></Route>
          <Route path="/shop-men"  component={MenShop}></Route>
          <Route path="/shop-kids"  component={KidsShop}></Route>
          <Route path="/about-us"  component={AboutUs}></Route>
          {/* <Route path="/accordion"  component={Accordion}></Route> */}
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
