import React, { useState, useEffect, lazy, Suspense } from 'react';
import './App.css';

import {
  Switch,
  Route,
  Redirect

} from "react-router-dom";

import Header from './Components/Header/Header';

import { auth, createUserProfileDocument } from './firebase.utils';

import CheackOut from './Components/CheckOut/CheackOut';
import Test from './Components/Test/Test';
import UserContext from './contexts/users/users.context';

import { GlobalStyle } from './GlobalStyle';
import WithSpinner from './Components/WithSpinner/WithSpinner';
import ErrorBundry from './Error-boundry/Error-boundry';

const Homepage = lazy(() => import('./Pages/Homepage/Homepage'))
const ShopPage = lazy(() => import('./Pages/ShopPage/ShopPage'))
const CheckoutPage = lazy(() => import('./Pages/ChekOut/CheckoutPage'))
const SignInAndSignUp = lazy(() => import('./Pages/SignInAndSignUp/SignInAndSignUp'))

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
        <ErrorBundry>

          <Suspense fallback={<div>...loading</div>}>
            <Route exact path='/' component={Homepage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/checkout' component={CheckoutPage} />

            <Route path='/signin'
              render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)} />

          </Suspense>
        </ErrorBundry>
      </Switch>



    </>
  );


}




export default App;



////// 21 3 
