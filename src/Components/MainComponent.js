import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Login from './Login'
import SignUp from './SignUp'

const MainComponenet = () => {
    return (
        <div className='app'>
            <Navbar />
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/SignUp" component={SignUp}></Route>
                <Route path="/" component={()=><h1>home</h1>} />
            </Switch>
            <Footer/>
        </div>
    )
}

export default MainComponenet
