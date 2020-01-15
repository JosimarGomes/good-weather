import React, { useEffect, useState } from 'react';
import './App.css';
import { Card, Icon, Typography, message } from 'antd';
import styled from 'styled-components';
import Geolocation from './libs/geolocation';
import WeatherApi from './apis/weatherApi';
import { colors, fontSizes } from './design-system';
import ButtonRefresh from './components/ButtonRefresh';
import BoxTemperature from './components/BoxTemperature';
import background from './assets/world.png';

const Container = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  height: 100vh;
  background: url(${background});
  background-opacity: 0.5;
`;

const Content = styled(Card)`
  width: 50%;
  background: #e5f0f8;
  border-radius: 10px;
`;

function App() {

  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);

  async function requestWeather() {

    const { latitude, longitude } = await Geolocation.getCurrentPosition();

    return WeatherApi.getWeather({ latitude, longitude })
      .then(res => {
        setWeather(res.data);
      });
  }

  function refresh() {
    setLoadingButton(true);
    requestWeather().then(() => {
      setLoadingButton(false);
      message.success('Atualizado com sucesso!');
    });
  }

  useEffect(() => {
    setLoading(true);
    requestWeather()
      .then(() => {
        setLoading(false);
      })
  }, [])

  const cityName = weather.name;
  const title = cityName ? `Clima na cidade de ${cityName}` : "Clima na sua região";

  return (
      <Container>
        <Content>
          <Icon type="environment" style={{ fontSize: '56px', color: colors.grey }}/>
          <Typography.Title type="secondary">{title}</Typography.Title>
          {
            loading &&
              <Icon type="loading" style={{ fontSize: fontSizes.medium, color: colors.grey }} />
          }
          {
            weather.main &&
              <>
                <BoxTemperature
                  maxTemp={weather.main.temp_max}
                  minTemp={weather.main.temp_min}
                  currentTemp={weather.main.temp}
                  imgId={weather.weather[0].icon}
                  humidity={weather.main.humidity}
                  windSpeed={weather.wind.speed}
                  />
                <ButtonRefresh loading={loadingButton} onClick={refresh}>Atualizar</ButtonRefresh>
              </>
          }
        </Content>
      </Container>
  );
}

export default App;
