import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParamsLink } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Login from './Login'
import SignUp from './SignUp'
import Home from './Home'
import EnhanceImageUpload from './EnhanceImageUpload'
import RestoreImageUpload from './RestoreImageUpload'
import NewsProvider from './NewsProvider'

const MainComponenet = () => {
    return (
        <div className='app'>
            <Navbar />
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/SignUp" component={SignUp}></Route>
                <Route path="/enhance" >
                    <EnhanceImageUpload location='http://localhost:5000/uploader' />
                </Route>
                <Route path="/restore" component={RestoreImageUpload} ></Route>
                <Route path ="/news" component={NewsProvider} ></Route>
                <Route path="/" component={Home} />
            </Switch>
            <Footer/>
        </div>
    )
}

export default MainComponenet
