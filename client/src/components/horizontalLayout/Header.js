import React, { useState } from 'react'
import { Layout, Menu, Badge } from 'antd';

import { useAuth0 } from "@auth0/auth0-react";
import { ShoppingCartOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom'
const { Header } = Layout;

function TopHeader() {
    const { isAuthenticated } = useAuth0();
    // const loggedInUser = useSelector((state)=>state.auth.loggedInUser);

    const [current, setCurrent] = useState('home');

    const menuSelectHandler = (e) => {
        setCurrent(e.key);
    }

    return (
        <Header className="header" >
            <div className="logo" >Logo</div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[current]} onClick={menuSelectHandler} selectedKeys={[current]} >
                <Menu.Item key="home"><NavLink exact to="/">Home</NavLink></Menu.Item>
                <Menu.Item key="shop"><NavLink exact to="/shop">Shop</NavLink></Menu.Item>
                {
                    (isAuthenticated) ?
                        <>
                            <Menu.Item key="profile"><NavLink exact to="/profile">Profile</NavLink></Menu.Item>
                            <Menu.Item key="logout"><NavLink exact to="/logout">Logout</NavLink></Menu.Item>
                        </>
                        :
                        <>
                            <Menu.Item key="signup"><NavLink exact to="/signup">Sign Up</NavLink></Menu.Item>
                            <Menu.Item key="login"><NavLink exact to="/login">Login</NavLink></Menu.Item>
                        </>

                }

                <Menu.Item key="4">
                    <Badge count={5}>
                        <a href="https://www.google.com/" className="head-example" ><ShoppingCartOutlined /></a>
                    </Badge>
                </Menu.Item>
            </Menu>
        </Header>
    )
}

export default TopHeader
