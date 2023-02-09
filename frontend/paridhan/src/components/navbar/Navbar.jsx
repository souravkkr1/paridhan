import React from 'react'
import {Link} from 'react-router-dom'
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

const isAuth=true;

const Navbar = () => {
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
              <Link to="/all-products?gender=female">
                <button>WOMEN</button>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/all-products?gender=male">
                <button>MEN</button>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/all-products?gender=kids">
                <button>KIDS</button>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/">
                <button>HOME</button>
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
          {/* <img src={logo} alt="" /> */}
          <h1>PARIDHAN</h1>
        </Link>
        <div className={style.menu}>
          <ul>
            <li>
              <Link to="/all-products?gender=female">WOMEN</Link>
            </li>
            <li>
              <Link to="/all-products?gender=male">MEN</Link>
            </li>
            <li>
              <Link to="/all-products?gender=kids">KIDS</Link>
            </li>
            <li>
              <Link to="/">HOME</Link>
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
            {isAuth ? "SOURAV" : `PROFILE`}
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
                <button>Sign out</button>
              </MenuItem>
            </MenuList>
          )}
        </Menu>
      </div>
    </div>
  );
}

export default Navbar
