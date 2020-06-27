import React, { useState, useEffect } from 'react';
import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import {
  Switch,
  Route,
  Redirect

} from "react-router-dom";
import ShopPage from './Pages/ShopPage/ShopPage';
import Header from './Components/Header/Header';
import SignInAndSignUp from './Pages/SignInAndSignUp/SignInAndSignUp';
import { auth, createUserProfileDocument } from './firebase.utils';

import CheackOut from './Components/CheckOut/CheackOut';
import Test from './Components/Test/Test';
import UserContext from './contexts/users/users.context';
import CheckoutPage from './Pages/ChekOut/CheckoutPage';
import { GlobalStyle } from './GlobalStyle';

const App = ({ }) => {

  const [unsubscribeFromAuth, setunsubscribeFromAuth] = useState(null)
  const [currentUser, setCurrentUser] = useState(null)


  useEffect(() => {


    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {

          setCurrentUser({
            currentUser: {

              id: snapShot.id,
              ...snapShot.data()

            }
          })
        })
        setCurrentUser(userAuth)
      }
    })
  }
    , [])




  return (

    <>
      <GlobalStyle />
      <UserContext.Provider value={currentUser}>
        <Header />

      </UserContext.Provider>


      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/checkout' component={CheckoutPage} />
        <Route path='/test' component={Test} />
        <Route path='/signin'
          render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)} />
      </Switch>



    </>
  );


}




export default App;



////// 21 3 
