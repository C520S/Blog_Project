import React from 'react';

interface PropsType {
    id: number;
    name: string;
    time: string;
    picture: string;
}

export const ProductImage: React.FC<PropsType> = (props) => {
    let { id, name, time, picture } = props;
    return <div>{name}</div>;
}