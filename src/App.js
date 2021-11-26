import React, {Component, useEffect, useState} from "react"
import {Redirect, Route, Switch} from "react-router-dom"

import './App.css';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
// import RentItem from "./components/Rents/RentItem"
import RentList from "./components/Rents/RentList"
import HeroBanner from "./components/HeroBanner/HeroBanner"
import NotFound from "./components/NotFound/NotFound"
import RentItemDetail from "./components/Rents/RentItemDetail"

// const rentsData = [
//   {
//     "id": "c67ab8a7",
//     "title": "Appartement cosy",
//     "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
//     "pictures": [
//       "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
//       "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
//       "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
//       "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
//       "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
//     ],
//     "description": "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
//     "host": {
//       "name": "Nathalie Jean",
//       "picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg"
//     },
//     "rating": "5",
//     "location": "Ile de France - Paris 17e",
//     "equipments": [
//       "Équipements de base",
//       "Micro-Ondes",
//       "Douche italienne",
//       "Frigo",
//       "WIFI"
//     ],
//     "tags": [
//       "Batignolle",
//       "Montmartre"
//     ]
//   },
//   {
//     "id": "b9123946",
//     "title": "Magnifique appartement proche Canal Saint Martin",
//     "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
//     "pictures": [
//       "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
//       "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-2.jpg",
//       "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-3.jpg",
//       "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-4.jpg",
//       "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-5.jpg",
//       "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-6.jpg"
//     ],
//     "description": "Profitez du charme de la vie parisienne dans un magnifique appartement. A 3 minutes à pied du Canl Saint Martin, vous serez proche des transports, mais également de nombreux commerces. L'appartement est tout équipé, et possède également un parking pour ceux qui souhaitent se déplacer en voiture.",
//     "host": {
//       "name": "Della Case",
//       "picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg"
//     },
//     "rating": "4",
//     "location": "Ile de France - Paris 10e",
//     "equipments": [
//       "Parking",
//       "Sèche Cheveux",
//       "Machine à laver",
//       "Wi-fi",
//       "Cuisine équipée",
//       "Télévision"
//     ],
//     "tags": [
//       "Canal Saint Martin",
//       "République",
//       "Appartement"
//     ]
//   },
//   {
//     "id": "46d188c5",
//     "title": "Studio de charme - Buttes Chaumont",
//     "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg",
//     "pictures": [
//       "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg",
//       "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-2.jpg",
//       "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-3.jpg",
//       "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-4.jpg"
//     ],
//     "description": "À seulement deux pas des Buttes Chaumont, venez découvrir Paris dans ce studio tout équipé. Entièrement équipé pour votre confort et élégamment décoré, il vous permettra de vivre comme un Parisien le temps de votre séjour.",
//     "host": {
//       "name": "Franck Maher",
//       "picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-2.jpg"
//     },
//     "rating": "3",
//     "location": "Ile de France - Paris 20e",
//     "equipments": [
//       "Wi-fi",
//       "Cuisine équipée",
//       "Télévision",
//       "Sèche Cheveux"
//     ],
//     "tags": [
//       "Buttes Chaumont",
//       "Laumière",
//       "Studio"
//     ]
//   }
// ]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      rents: []
    };
  }
  // const [rents, setRents] = useState(null)
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(false)
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     rents: [],
  //     isLoaded: false,
  //     error: false
  //   }
  // }
  // componentDidMount(props) {
  //   // this.state = {
  //   //   rents: [],
  //   //   loading: true,
  //   //   error: false
  //   // }
  //   // useEffect(() => {
  //   fetch('https://raw.githubusercontent.com/devb0x/Moniezgeoffrey_11_17112021/master/public/data.json')
  //     // .then(response => {
  //     //   if (response.ok) {
  //     //     return response.json()
  //     //   }
  //     //   throw response
  //     // })
  //     // .then(result => {
  //     //   // setRents(rents)
  //     //   this.setState({
  //     //     rents: result.rents
  //     //   })
  //     //   console.log(rents)  // ok 20 results
  //     // })
  //     // .catch(error => {
  //     //   // setError(true)
  //     //   this.setState({error: true})
  //     //   console.log(error)
  //     // })
  //     // .finally((loading) => {
  //     //   // setLoading(false)
  //     //   console.log(this.state)
  //     //   this.setState({loading: false})
  //     // })
  //     .then(res => res.json())
  //     .then(result => {
  //       this.setState({
  //         isLoaded: true,
  //         rents: result.rents
  //       })
  //     })
  //
  //
  //
  //   // }, [])
  //   //   console.log(rents)
  //     //
  //     // if (loading) return 'loading'
  //     // if (error) return 'error'
  // }
  componentDidMount() {
     fetch('https://raw.githubusercontent.com/devb0x/Moniezgeoffrey_11_17112021/master/public/data.json')
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            isLoaded: true,
            rents: result
          });
           console.log(this.state.rents)
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
       // .then(() => {
       //   console.log(this.state.items)
       // })
  }


  render() {
    const { error, isLoaded, rents } = this.state;
    console.log(isLoaded)
    console.log(rents.id)
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Header />
          <Switch>
            <Route path={"/"} exact>
             <Redirect to={"/homepage"} />
           </Route>

            <Route path={"/homepage"} exact>
              <HeroBanner />
              <RentList items={rents} />
            </Route>

            <Route path={"/rents/rent=:this.props.itemsId"} >
              <RentItemDetail />
            </Route>

            <Route path={'*'}>
              <NotFound />
            </Route>

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