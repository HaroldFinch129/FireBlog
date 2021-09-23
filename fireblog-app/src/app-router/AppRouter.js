import React from 'react'
import Navbar from '../components/Navbar'
import {BrowserRouter,Route, Switch} from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Register from '../pages/Register'
// import Details from '../pages/Details'
// import NewBlog from '../pages/NewBlog'
import Profile from '../pages/Profile'
import { AuthContextProvider } from '../contexts/AuthContext'
import PrivateRouter from "./PrivateRouter";
// import Update from '../pages/UpdateBlog'
// import About from '../pages/About'

const AppRouter = () => {
    return (
        <AuthContextProvider>
        <BrowserRouter>
            <Navbar/>

            <Switch>

                <PrivateRouter exact path = '/Profile' component ={Profile}/>
                {/* <PrivateRouter exact path = '/Details' component ={Details}>Details</PrivateRouter>
                <PrivateRouter exact path = '/NewBlog' component ={Newblog}>NewBlog</PrivateRouter> */}
                <Route exact path = '/' component ={Dashboard}/>
                <Route exact path = '/Login' component ={Login}/>
                <Route exact path = '/Register' component ={Register}/>



            </Switch>

            


        </BrowserRouter>
        </AuthContextProvider>
    )
}

export default AppRouter
