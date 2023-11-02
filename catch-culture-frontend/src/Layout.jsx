import { Outlet } from 'react-router-dom';
import './Layout.css';
import NavBar from './components/NavBar.jsx'

function Layout() {
    return (
    <>
        <header>

        </header>
        <content>

            <Outlet />

        </content>
    
        <NavBar />
    </>
    );
  }
  
  export default Layout;
  