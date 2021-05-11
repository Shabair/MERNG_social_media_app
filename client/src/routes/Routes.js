import { Switch, Route, Redirect } from "react-router-dom";

// Import Routes
import NotFound from '../pages/error/NotFound';
// import { logout } from '../redux/actions/auth'

import { PublicRoute, PrivateRoute, AdminRoute } from './index';
// import { useDispatch, useSelector } from 'react-redux'
// import { authenticate } from '../redux/actions/auth'

//pages
import Home from '../pages/public/Home'
import Logout from '../pages/auth/Logout'
import Login from '../pages/auth/Login'
import Profile from '../pages/user/Profile'
// import Profile from '../pages/Profile'
// import About from '../pages/About'
// import Shop from '../pages/Ecommerce/Shop'
// import Signup from '../pages/Auth/Signup'
// import Signin from '../pages/Auth/Login'
//admin
// import AdminDashboard from '../pages/Admin/Dashboard'
// import Products from '../pages/Admin/Products/ProductsList'
// import AddProduct from '../pages/Admin/Products/AddProduct'

const Routes = () => {

    return (
        <>
            <Switch>
                <PublicRoute path="/" exact component={Home} pageTitle="Home" />
                {/* <PublicRoute path="/shop" exact component={Shop} pageTitle="Shop" />
                <PublicRoute path="/about" exact component={About} pageTitle="About" />
                <PublicRoute path="/signin" exact component={Signin} pageTitle="Sign In" />
                <PublicRoute path="/signup" exact component={Signup} pageTitle="Sign Up" /> */}
                {/* <PublicRoute path="/product/:productId" exact component={Product} /> */}
                {/* <PublicRoute path="/cart" exact component={Cart} /> */}
                <PublicRoute path="/login" exact component={Login} pageTitle="Login" />
                <PublicRoute path="/logout" exact component={Logout} />


                {/* <AdminRoute path="/admin" exact component={AdminDashboard} pageTitle="Admin Dashboard" />
                <AdminRoute path="/products" exact component={Products} pageTitle="Products List" />
                <AdminRoute path="/product/add" exact component={AddProduct} pageTitle="Add Product" /> */}

                {/* <AdminRoute path="/admin/orders" exact component={Orders} /> */}
                {/* <AdminRoute path="/admin/product/update/:productId" exact component={UpdateProduct} /> */}
                {/* <AdminRoute path="/admin/category/update/:categoryId" exact component={UpdateCategory} /> */}

                {/* <PrivateRoute path="/user/dashboard" exact component={Dashboard} /> */}
                {/* <PrivateRoute path="/profile/:userId" exact component={Profile} /> */}
                {/* <PrivateRoute path="/admin/products" exact component={ManageProducts} /> */}

                {/* <Route path="/logout" exact component={() => { dispatch(logout()); return <Redirect to="/" /> }} /> */}
                <PrivateRoute path="/profile" exact component={Profile} /> 
                <Route component={NotFound} />
            </Switch>
        </>
    )
}

export default Routes;