import { Outlet } from 'react-router-dom';
import './Layout.css';
import NavBar from './components/NavBar.jsx';

function Layout() {
  return (
    <>
      <div id="grid">
        <content>
          <Outlet />
        </content>
        <div id="nav">
          <NavBar />
        </div>
      </div>
    </>
  );
}

export default Layout;
