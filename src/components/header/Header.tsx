import React from 'react';
import styles from './Header.module.css';
import { Layout, Typography, } from 'antd';
import logo from '../../assets/logo.svg';

export const Header: React.FC = () => {
    return <div className={styles['app-header']}>
        <Layout.Header className={styles['main-header']}>
            <img src={logo} alt="logo" className={styles['App-logo']} />
            <Typography.Title level={3} className={styles.title}>Frank's Food Blog</Typography.Title>
        </Layout.Header>
    </div>;
}