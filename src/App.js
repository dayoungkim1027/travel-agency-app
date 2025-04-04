import { Route, Routes, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Home from './views/home.js'

const AppContainer = styled.div`
  display: flex;
  overflow: scroll;
`;

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Routes>
          <Route path="/" element={<Home/>}/>      
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
