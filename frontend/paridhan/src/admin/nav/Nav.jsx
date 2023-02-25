import React from 'react'
import style from './nav.module.css';
import { Link, useNavigate } from 'react-router-dom';
import {
    Button,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
  } from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../redux/authReducer/action';

const Nav = () => {

    // const isAuth=true;

    const { isAuth, user } = useSelector((store) => store.AuthReducer);
    const dispatch = useDispatch();
    const navigate=useNavigate()

  return (
    <div className={style.navbar}>
      <div className={style.left}>
        <h1>ADMIN DASHBOARD</h1>
      </div>
      <div className={style.mid}>
        <Link to="/dashboard">DASHBOARD</Link>
        <Link to="/products">PRODUCTS</Link>
        <Link to="/users">USERS</Link>
        <Link to="/orders">ORDERS</Link>
      </div>
      <div className={style.right}>
      <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {isAuth ? user.name : `PROFILE`}
          </MenuButton>
          {!isAuth ? (
            <MenuList>
              <MenuItem>
                <Link to="/signin">
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
                  navigate("/login")
                  }}>Sign out</button>
              </MenuItem>
            </MenuList>
          )}
        </Menu>
      </div>
    </div>
  )
}

export default Nav
