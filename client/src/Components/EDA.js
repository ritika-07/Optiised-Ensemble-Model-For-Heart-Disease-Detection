import React from 'react';
import "../App.css";
import { Layout } from 'antd';
import "antd/dist/antd.css";

function EDA() {
    const { Content } = Layout;
    return (
        <Content style={{ padding: '0 50px', margin: '50px 0 0 0' }}>
        <div className="site-layout-content">
        <iframe src='https://ritika-07.github.io/MedAssist/' title="EDA"></iframe>
        </div>
        </Content>
    );
}

export default EDA;