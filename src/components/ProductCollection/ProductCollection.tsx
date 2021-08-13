import React from 'react';
import styles from './ProductCollection.module.css'
import { Divider, Typography } from 'antd';
import {ProductImage} from './Productimage'

interface PropsType {
    title: JSX.Element;
    products: any[];

}
export const ProductCollection: React.FC<PropsType> = (props) => {
    let { title, products } = props;
    return <div className={styles['page-context']}>
        <div className={styles['Top-line']}>
            <Divider orientation='left'>{title}</Divider>
        </div>
        <div className={styles['Product-menu-info']}>
            {products.map(p => <ProductImage id={p.idrecipe} name={p.foodname} time={p.times} picture={p.picture} />)}
        </div>
    </div>

}