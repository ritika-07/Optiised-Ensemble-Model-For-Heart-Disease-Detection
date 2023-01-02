import React from 'react';
import { Layout, Menu } from 'antd';
import "antd/dist/antd.css";
import "../App.css";

function Navbar() {
    const { Header } = Layout;
    return (
        <Header style={{backgroundColor: 'inherit', padding: 0}}>

        <div className="logo logoAnalyse">
            <h1 className='logoAnalyse'>Performace Analysis</h1>
        </div>

        <Menu theme="light" mode="horizontal">
            
            <Menu.Item key={1}><a href='#accuracy'> Accuracy </a> </Menu.Item>

            <Menu.Item key={2}> <a href='#cm'> CM </a></Menu.Item>

            <Menu.Item key={3}> <a href='#roc'>ROC </a></Menu.Item>

            <Menu.Item key={4}> <a href='#time'>Time </a></Menu.Item>

            <Menu.Item key={5}> <a href='#others'> Others </a></Menu.Item>

        </Menu>

        </Header>
    );
}

export default Navbar;
