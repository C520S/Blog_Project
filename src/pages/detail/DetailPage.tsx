import React, { useState, useEffect } from 'react';
import { RouteComponentProps, useParams, withRouter, Link } from 'react-router-dom';
import { Spin } from 'antd';
import axios from 'axios';
import styles from './DetailPage.module.css'
import { Header, Footer, BusinessPartners } from '../../components'

interface MatchParams {
    id: string;
}

const DetailPageComponent: React.FC<RouteComponentProps<MatchParams>> = (props) => {

    const { id } = useParams<MatchParams>();
    const [loading, setLoading] = useState<boolean>(true);
    const [product, setProduct] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get(`http://localhost:5000/recipes_detail/${id}`);
                setProduct(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }
        fetchData();
    }, []);
    if (loading) {
        return (
            <Spin
                size="large"
                style={{
                    marginTop: 200,
                    marginBottom: 200,
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100%",
                }}
            />
        );
    }
    if (error) {
        return <h1>Website error:{error}</h1>;
    }

    return <>
        <Header />
        <div className={styles['back-box']}>
            <Link to="/"><div className={styles['back-button']}>Back</div></Link>
        </div>
        <div className={styles['recipe-content']}>
            <div className={styles['recipe-info']}>
                <div className={styles['recipe-box-1']}>
                    <img src={product.recipe.picture} className={styles['recipe-img']} />
                    <div className={styles['font-color']}><strong>Cuisine Name:</strong>{product.recipe.foodname}</div>
                    <div className={styles['font-color']}><strong>Making time:</strong>{product.recipe.times}</div>
                    <div className={styles['font-color']}><strong>Difficulty level:</strong>{product.recipe.levels}</div>
                </div>
                <div className={styles['recipe-box-1']}>
                    <div className={styles['ingredients']}><strong>Ingredients</strong></div>
                    <div dangerouslySetInnerHTML={{ __html: product.recipe.shoppinglist }} className={styles['ingredients-info']}></div>

                </div>
            </div>
            <div></div>
        </div>

    </>;
}

export const DetailPage = withRouter(DetailPageComponent)