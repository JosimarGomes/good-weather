import React from 'react'
import { Row, Col } from 'antd';
import { colors, fontSizes } from '../design-system';

import CardStatistics from './CardStatistics';

export default function({ maxTemp, minTemp, currentTemp, humidity, windSpeed }) {
    return (
        <Row gutter={16}>
          <Col span={12}>
            <CardStatistics
              style={{minHeight: '198px'}}
              title="Temperatura atual"
              value={`${currentTemp} °C`}
              valueStyle={{
                color: colors.primary,
                fontSize: fontSizes.big
              }}
            />
          </Col>
          <Col span={6}>
            <CardStatistics
              title="Máxima"
              value={`${maxTemp} °C`}
              valueStyle={{
                color: colors.success,
                fontSize: fontSizes.small
              }}
              icon="arrow-up"
            />
            <CardStatistics
              title="Umidade"
              value={`${humidity} %`}
              valueStyle={{
                color: colors.grey,
                fontSize: fontSizes.small
              }}
            />
          </Col>
          <Col span={6}>
            <CardStatistics
              title="Mínima"
              value={`${minTemp} °C`}
              valueStyle={{
                color: colors.danger,
                fontSize: fontSizes.small
              }}
              icon="arrow-down"
            />
            <CardStatistics
              title="Vento"
              value={`${windSpeed} km/h`}
              valueStyle={{
                color: colors.danger,
                fontSize: fontSizes.small
              }}
            />
          </Col>
        </Row>
      )
}