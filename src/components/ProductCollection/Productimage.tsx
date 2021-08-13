import React from 'react';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import styles from './Productimage.module.css';

interface PropsType extends RouteComponentProps {
    id: number;
    name: string;
    time: string;
    picture: string;
}

const ProductImageComponent: React.FC<PropsType> = (props) => {
    let { id, name, time, picture, } = props;
    return <Link to={`detail/${id}`}>
        <div className={styles['recipe-box']}>
            <img className={styles['recipe-img']} src={picture} />
            <div className={styles['recipe-font']}><strong>Recipe Name:</strong>{name}</div>
            <div className={styles['recipe-font']}><strong>Making Time:</strong>{time}</div>
        </div>
    </Link>;
}

export const ProductImage = withRouter(ProductImageComponent)