import React from 'react'
import Navbar from '../components/Navbar'
import {BrowserRouter,Route, Switch} from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Register from '../pages/Register'
// import Details from '../pages/Details'
// import NewBlog from '../pages/NewBlog'
import Profile from '../pages/Profile'
// import Update from '../pages/UpdateBlog'
// import About from '../pages/About'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar/>

            <Switch>

                <Route exact path = '/' component ={Dashboard}>Dashboard</Route>
                <Route exact path = '/Profile' component ={Profile}>Profile</Route>
                <Route exact path = '/Login' component ={Login}></Route>
                <Route exact path = '/Register' component ={Register}>Register</Route>



            </Switch>

            


        </BrowserRouter>
    )
}

export default AppRouter
