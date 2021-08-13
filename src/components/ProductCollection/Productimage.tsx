import React from 'react';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom'

interface PropsType extends RouteComponentProps {
    id: number;
    name: string;
    time: string;
    picture: string;
}

const ProductImageComponent: React.FC<PropsType> = (props) => {
    let { id, name, time, picture, } = props;
    return <Link to={`detail/${id}`}><div>{name}</div></Link>;
}

export const ProductImage = withRouter(ProductImageComponent)