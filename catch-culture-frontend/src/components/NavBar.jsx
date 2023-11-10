import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { TbCategory } from "react-icons/tb";
import { BiSolidUser } from "react-icons/bi";

const Nav = styled.nav`
    width:100%;
    height:75px;
    display:flex;
    border-top: solid 1px grey;
    flex-direction: row;
    position:sticky;
    bottom:0;
    z-index: 10;
  `;

  const NavTab = styled(NavLink)`
    width: 97.5px;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    text-decoration-line: none;
    background-color:white;

    :first-child {
      width: 30px;
      height: 30px;
      color: grey;
    }

    div {
      margin-top: 5px;
      font-size: 10px;
      color: grey;
    }

    &.active {
      * {
        color: #018C0D;
      }
    }
  `;

function NavBar() {
    return (
      <Nav>
        <NavTab to="/" >
          <AiFillHome />
          <div>
            홈
          </div>
        </NavTab>
        <NavTab to="/map">
          <MdLocationPin />
          <div>
            지도
          </div>
        </NavTab>
        <NavTab to="/category">
          <TbCategory />
          <div>
            카테고리
          </div>
        </NavTab>
        <NavTab to="/mypage">
          <BiSolidUser />
          <div>
            마이페이지
          </div>
        </NavTab>
      </Nav>
    );
  };

  
  
  export default NavBar;
  