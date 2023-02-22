import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import style from "./navbar.module.css";
import logo from '../../assets/paridhanLogo.png'
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../redux/authReducer/action';

const Navbar = () => {

  const { isAuth, user } = useSelector((store) => store.AuthReducer);
  const dispatch = useDispatch();
  const navigate=useNavigate()

  return (
    <div className={style.navbar}>
       <div className={style.ham}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem>
              <Link to="/all-products/Women">
                <button>WOMEN</button>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/all-products/Men">
                <button>MEN</button>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/all-products/Kids">
                <button>KIDS</button>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/offer">
                <button>OFFER</button>
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
      <div className={style.left}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div className={style.menu}>
          <ul>
            <li>
              <Link to="/all-products/Women">WOMEN</Link>
            </li>
            <li>
              <Link to="/all-products/Men">MEN</Link>
            </li>
            <li>
              <Link to="/all-products/Kids">KIDS</Link>
            </li>
            <li>
              <Link to="/offer" className={style.offer}>
                OFFERS
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.right}>
        <Link to="">OFFERS</Link>
        <Link to="">SEARCH</Link>
        <Link to={"/cart"}>CART</Link>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {isAuth ? user.name : `PROFILE`}
          </MenuButton>
          {!isAuth ? (
            <MenuList>
              <MenuItem>
                <Link to="/login">
                  <button>Sign In</button>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/signup">
                  <button>Sign Up</button>
                </Link>
              </MenuItem>
            </MenuList>
          ) : (
            <MenuList>
              <MenuItem>
                <button onClick={() => {
                  dispatch(signout())
                  navigate("/")
                  }}>Sign out</button>
              </MenuItem>
            </MenuList>
          )}
        </Menu>
      </div>
    </div>
  );
}

export default Navbar
