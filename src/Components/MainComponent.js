import React ,{Component} from 'react'
import {Route,Switch} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Login from './Login'
import SignUp from './SignUp'
import Profile from './Profile'
import Home from './home'


class MainComponenet extends Component {
    render(){
    return (
        <div className='app'>
            
            
            <Navbar />
          
             {/*for now button but we  get seesion from backend to update  log in or log out*/}
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/SignUp" component={SignUp}></Route>
                <Route path="/Profile" component={Profile}></Route>
                <Route path="/Home" component={Home} />
            </Switch>
            <Footer/>
        </div>
    )
}}

export default MainComponenet
