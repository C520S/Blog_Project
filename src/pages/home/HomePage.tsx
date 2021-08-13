import React from 'react';
import styles from './HomePage.module.css';
import { Menu, Typography } from 'antd';
import { Header, Footer, Carousel, ProductCollection, BusinessPartners } from '../../components'
const prodcutList = [{ idrecipe: 1, id_category: 2, foodname: '肉夹馍', times: '10min', shoppinglist: '苹果', guide: '知道', levels: '10' }, { idrecipe: 1, id_category: 2, foodname: '菜价', times: '10min', shoppinglist: '苹果', guide: '知道', levels: '10' }];

export class HomePage extends React.Component {

    render() {
        return <div><Header />
            <div className={styles.menu}>
                <Menu mode={'horizontal'} className={styles['main-menu']}>
                    <Menu.Item key="1">Pasta</Menu.Item>
                    <Menu.Item key="2">Red meat</Menu.Item>
                    <Menu.Item key="3">Chicken</Menu.Item>
                    <Menu.Item key="4">Salads</Menu.Item>
                    <Menu.Item key="5">Seafood</Menu.Item>
                    <Menu.Item key="6">Sushi</Menu.Item>
                    <Menu.Item key="7">Vegan</Menu.Item>
                    <Menu.Item key="8">Finnish food</Menu.Item>
                    <Menu.Item key="9">Armenian food</Menu.Item>
                    <Menu.Item key="10">Chinese food</Menu.Item>
                </Menu>
            </div>
            <div className={styles['image-box']}>
                <Carousel />
            </div>
            <ProductCollection
                title={<Typography.Title level={3} type={'warning'}>Recommended Menu</Typography.Title>}
                products={prodcutList} />
            <div className={styles.Coperation}> <BusinessPartners /></div>

            <Footer /></div>
    }
}