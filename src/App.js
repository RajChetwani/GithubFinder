import React from 'react'
import Navbar from './components/layout/Navbar'
//import UserItem from './components/users/UserItem'
import Users from './components/users/Users'
import Search from './components/users/Search'
import { Alert } from './components/layout/Alert'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import About from './components/pages/About'
import User from './components/users/User'
import GithubState from './context/GithubState'
import AlertState from './context/alert/AlertState'
import NotFound from './components/layout/NotFound'

const App = () =>{

    return (
      <GithubState>
      <AlertState>
      <BrowserRouter>
      <div>
        <Navbar />
        <Alert />
        <Switch>
          <Route exact path='/' render={props => (
            <React.Fragment>
               <Search />
               <Users />
            </React.Fragment>    
          )}>

          </Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/user/:login' component={User}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
      </BrowserRouter>
      </AlertState>
      </GithubState>
    )
  }

export default App