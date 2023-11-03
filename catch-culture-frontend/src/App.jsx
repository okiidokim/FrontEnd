import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import { GlobalStyle } from './styles/globalStyle';

const Layout = () => {
  return (
    // <div className="backGround">
    <div className="wrapper">
      <div className="content">
        <Outlet />
      </div>
      <NavBar />
    </div>
    // </div>
  );
};

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout />
    </>
  );
}

export default App;
