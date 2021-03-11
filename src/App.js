import React, { useReducer } from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import {Switch, Route} from 'react-router-dom';
import Header from "./components/header/header.component.jsx";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth ,createUserProfileDocumnet} from "./firebase/firebase.utils";

class App extends React.Component {
  constructor () {

    super();
    this.state = {
        currentUser: null
    }
  }
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuath => { 
      if(userAuath)
      {
        const useRef  = await createUserProfileDocumnet(userAuath);

        useRef.onSnapshot(snapShot => {
          this.setState({
                currentUser: {
                    id: snapShot.id,
                    ...snapShot.data()
                }
          });
          console.log(this.state);
        });
      }

      this.setState({currentUser : userAuath});
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render () {
    return(
      <div className="App">
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
            <Route exact path='/' component= {HomePage}/>
            <Route exact path='/shop' component= {ShopPage}/>
            <Route exact path='/signin' component= { SignInAndSignUpPage }/>
        </Switch>
      </div>
    )
  };
}

export default App;
