import React from 'react';
import { Layout, Typography, } from 'antd';
import styles from './Footer.module.css'



export const Footer: React.FC = () => {
    return <div className={styles.footer}>
        <Layout.Footer className={styles['main-footer']}>
            <Typography.Title level={5} className={styles['footer-title']}>
                Copyright @Frank's Food Blog
            </Typography.Title>
        </Layout.Footer>
    </div>;
}