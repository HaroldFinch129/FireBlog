import React from 'react'
import Navbar from '../components/Navbar'
import {BrowserRouter,Route, Switch} from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Register from '../pages/Register'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar/>

            <Switch>

                <Route exact path = '/' component ={Dashboard}>Dashboard</Route>
                <Route exact path = '/Login' component ={Login}>Login</Route>
                <Route exact path = '/Register' component ={Register}>Register</Route>



            </Switch>


        </BrowserRouter>
    )
}

export default AppRouter
