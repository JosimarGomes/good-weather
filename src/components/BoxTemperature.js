import React from 'react'
import { Row, Col, Card, Statistic, Icon } from 'antd';
import { colors, fontSizes } from '../design-system';
export default function({ maxTemp, minTemp, currentTemp, imageId }) {
    return (
        <Row gutter={16}>
          <Col span={12}>
            <Card style={{minHeight: '198px'}}>
              <Statistic
                title="Temperatura atual"
                value={currentTemp}
                precision={1}
                valueStyle={{ color: colors.primary, fontSize: fontSizes.big }}
                suffix="°C"
                prefix={<img src={`https://openweathermap.org/img/wn/${imageId}@2x.png`} alt=""/>}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="Máxima"
                value={maxTemp}
                precision={1}
                valueStyle={{ color: colors.success, fontSize: fontSizes.small }}
                prefix={<Icon type="arrow-up" />}
                suffix="°C"
              />
            </Card>
            <Card>
              <Statistic
                title="Umidade"
                value={28}
                suffix="%"
                valueStyle={{ color: colors.grey, fontSize: fontSizes.small }}
                />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="Mínima"
                value={minTemp}
                precision={1}
                valueStyle={{ color: colors.danger, fontSize: fontSizes.small }}
                prefix={<Icon type="arrow-down" />}
                suffix="°C"
              />
            </Card>
            <Card>
              <Statistic
                title="Vento"
                value={8.7}
                suffix="km/h"
                valueStyle={{ color: colors.grey, fontSize: fontSizes.small }}
                />
            </Card>
          </Col>
        </Row>
      )
}