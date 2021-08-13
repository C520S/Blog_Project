import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
    id: string;
}

export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = (props) => {
    return <div>旅游路径详情页面{props.match.params.id}</div>
}