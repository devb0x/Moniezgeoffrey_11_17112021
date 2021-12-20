import React, {Component, Fragment} from "react"
import { Redirect, Route, Switch } from "react-router-dom"

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import RentList from "./components/Rents/RentList"
import HeroBanner from "./components/HeroBanner/HeroBanner"
import NotFound from "./components/NotFound/NotFound"
import RentItemDetail from "./components/Rents/RentItemDetail/RentItemDetail"
import About from "./components/About/About"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      rents: []
    };
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/devb0x/Moniezgeoffrey_11_17112021/master/public/data.json')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            rents: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const {error, isLoaded, rents} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Fragment>
          <main>
            <Header/>

            <Switch>
              <Route exact path={"/"}>
                <Redirect to={"/homepage"}/>
              </Route>

              <Route exact path={"/homepage"}>
                <HeroBanner/>
                <RentList items={rents}/>
              </Route>

              <Route exact path={"/about"} component={About}/>

              <Route
                exact path={"/rents/:id"}
                render={(props) =>
                  (
                    <RentItemDetail {...props} items={rents}/>
                  )}
              />

              <Route path={'*'} component={NotFound}/>

            </Switch>
          </main>

          <Footer/>
        </Fragment>
      );
    }
  }
}

export default App