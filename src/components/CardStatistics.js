import React from 'react';
import { Card, Statistic, Icon } from 'antd';

export default function({ style, valueStyle, value, icon, title }) {
    return (
        <Card style={style}>
            <Statistic
                title={title}
                value={value}
                precision={1}
                valueStyle={valueStyle}
                prefix={icon ? <Icon type={icon} /> : null}
                />
        </Card>
    )
}