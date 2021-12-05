import React, { Component } from "react"
import { Redirect, Route, Switch } from "react-router-dom"

import './App.css';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import RentList from "./components/Rents/RentList"
import HeroBanner from "./components/HeroBanner/HeroBanner"
import NotFound from "./components/NotFound/NotFound"
import RentItemDetail from "./components/Rents/RentItemDetail/RentItemDetail"

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
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

  }


  render() {
    const { error, isLoaded, rents } = this.state;
    // console.log(isLoaded)
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>

          <Header />

          <Switch>
            <Route exact path={"/"} >
             <Redirect to={"/homepage"} />
            </Route>

            <Route exact path={"/homepage"} >
              <HeroBanner />
              <RentList items={rents} />
            </Route>

            <Route
              exact path={"/rents/:id"}
              render={(props) =>
                (
                  <RentItemDetail {...props} items={rents} />
                )}
            />

            <Route path={'*'} component={NotFound} />

          </Switch>

          <Footer />
        </div>
      );
    }
  }


  // render() {
  //   const { error, isLoaded, rents } = this.state;
  //   if (error) {
  //     return <div>Error: {error.message}</div>;
  //   } else if (!isLoaded) {
  //     return <div>Loading...</div>;
  //   } else {
  //     return (
  //       <ul>
  //         {rents.map(item => (
  //           <li key={item.id}>
  //             {item.title} {item.id}
  //           </li>
  //         ))}
  //       </ul>
  //     );
  //   }
  // }

  // render() {
  //     const { error, isLoaded, rents } = this.state;
  //     console.log(rents)
  //
  //   return (
  //     <div>
  //       <Header />
  //       <Switch>
  //
  //         <Route path={"/"} exact>
  //           <Redirect to={"/homepage"} />
  //         </Route>
  //
  //         <Route path={"/homepage"} exact>
  //           <HeroBanner />
  //           {/*<RentList items={rentsData} />*/}
  //           <RentList items={rents} />
  //         </Route>
  //
  //         <Route path={"/rents/rent=:rents.rentId"} exact>
  //           <RentItemDetail />
  //         </Route>
  //
  //         <Route path={'*'}>
  //           <NotFound />
  //         </Route>
  //
  //       </Switch>
  //       <Footer />
  //     </div>
  //   );
  // }
}
// const App = () => {
//   const [rents, setRents] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(false)
//
//   useEffect(() => {
//     fetch('https://raw.githubusercontent.com/devb0x/Moniezgeoffrey_11_17112021/master/public/data.json')
//       .then(response => {
//         if (response.ok) {
//           return response.json()
//         }
//         throw response
//       })
//       .then(rents => {
//         setRents(rents)
//       })
//       .catch(error => {
//         console.log(error)
//         setError(true)
//       })
//       .finally(() => {
//         setLoading(false)
//       })
//   }, [])
//   console.log(rents)
//
//   if (loading) return 'loading'
//   if (error) return 'error'
//
//   return (
//     <div>
//       <Header />
//       <Switch>
//
//         <Route path={"/"} exact>
//           <Redirect to={"/homepage"} />
//         </Route>
//
//         <Route path={"/homepage"} exact>
//           <HeroBanner />
//           {/*<RentList items={rentsData} />*/}
//           <RentList items={rents} />
//         </Route>
//
//         <Route path={"/rents/rent=:rents.rentId"} exact>
//           <RentItemDetail />
//         </Route>
//
//         <Route path={'*'}>
//           <NotFound />
//         </Route>
//
//       </Switch>
//       <Footer />
//     </div>
//   );
// }

export default App