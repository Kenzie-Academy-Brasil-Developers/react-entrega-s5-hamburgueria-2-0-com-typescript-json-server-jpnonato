import {Switch,Route} from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Cart from '../pages/Cart'

const Routes = () => {

    return(
        <Switch>
            <Route exact path="/">
               <Login />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/home/:id">
                <Home />   
            </Route>
            <Route path="/cart">
                <Cart />
            </Route>
        </Switch>
    )
}

export default Routes