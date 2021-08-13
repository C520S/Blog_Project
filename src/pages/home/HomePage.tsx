import React from 'react';
import styles from './HomePage.module.css';
import { Menu, Typography, Spin } from 'antd';
import { Header, Footer, Carousel, ProductCollection, BusinessPartners } from '../../components'
import axios from 'axios';

interface State {
    loading: boolean;
    error: string | null;
    prodcutList: any[];

}

interface Props {

}





export class HomePage extends React.Component<Props, State>{

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            prodcutList: [],


        }
    }

    async componentDidMount() {
        try {
            const { data } = await axios.get(`http://localhost:5000/homePageData`);
            this.setState({ loading: false, error: null, prodcutList: data });
        } catch (error) {
            this.setState({ error: error.message, loading: false });
        }

    }
    getCategories = (e) => {

        axios.get(`http://localhost:5000/categories_list/${e.key}`).then(({ data }) => { this.setState({ prodcutList: data }) })
    }




    render() {

        const { prodcutList, loading, error } = this.state;
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
        return (<div><Header />
            <div className={styles.menu}>
                <Menu mode={'horizontal'} className={styles['main-menu']}>
                    <Menu.Item key="1" onClick={this.getCategories}>Pasta</Menu.Item>
                    <Menu.Item key="2" onClick={this.getCategories}>Red meat</Menu.Item>
                    <Menu.Item key="3" onClick={this.getCategories}>Chicken</Menu.Item>
                    <Menu.Item key="4" onClick={this.getCategories}>Salads</Menu.Item>
                    <Menu.Item key="5" onClick={this.getCategories}>Seafood</Menu.Item>
                    <Menu.Item key="6" onClick={this.getCategories}>Sushi</Menu.Item>
                    <Menu.Item key="7" onClick={this.getCategories}>Vegan</Menu.Item>
                    <Menu.Item key="8" onClick={this.getCategories}>Finnish food</Menu.Item>
                    <Menu.Item key="9" onClick={this.getCategories}>Armenian food</Menu.Item>
                    <Menu.Item key="10" onClick={this.getCategories}>Chinese food</Menu.Item>
                </Menu>
            </div>
            <div className={styles['image-box']}>
                <Carousel />
            </div>
            <ProductCollection
                title={<Typography.Title level={3} type={'warning'}>Recommended Menu</Typography.Title>}
                products={prodcutList} />
            <div className={styles.Coperation}> <BusinessPartners /></div>

            <Footer />
        </div>)
    }

}

