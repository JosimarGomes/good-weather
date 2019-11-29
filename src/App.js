import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Card } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
  background: red;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 50px;
  height: 100vh;
`;

const Content = styled(Card)`
  width: 50%;
`;

function App() {

  const teste = () => {
    
  }

  useEffect(() => {

    axios.get("http://api.openweathermap.org/data/2.5/weather?APPID=ebd024465e138374770235a87dbab4b7&lat=-22.852126400000003&lon=-47.204491&units=metric")
      .then(res => console.log("veio res", res))
  }, [])

  return (
      <Container>
        <Content>
            <h1>teste</h1>
        </Content>
      </Container>
  );
}

export default App;
