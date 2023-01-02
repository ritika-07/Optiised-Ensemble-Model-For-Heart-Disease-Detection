import React from 'react';
import { Layout, Menu } from 'antd';
import "antd/dist/antd.css";
import "../App.css";
import {Link} from 'react-router-dom';

function Navbar() {
    const { Header } = Layout;
    return (
        <Header>
        <Link to='/'>
        <div className="logo">
            <h1 className='logo'><b className='logo'>Med</b>Assist</h1>
        </div>
        </Link>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Link to='/eda'>
            <Menu.Item key={1}>EDA</Menu.Item>
            </Link>

            <Link to='/'>
            <Menu.Item key={2}>Predict</Menu.Item>
            </Link>

            <Link to='/analyse'>
            <Menu.Item key={3}>Analyse</Menu.Item>
            </Link>
        </Menu>

        </Header>
    );
}

export default Navbar;
