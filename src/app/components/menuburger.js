'use client'
import { push as Menu } from 'react-burger-menu';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/page.module.css';

const Sidebar = () => {
  var styleMenu = {
    bmBurgerButton: {
      position: 'fixed',
      width: '40px',
      height: '35px',
      left: '80px',
      top: '96px'
    },
    bmBurgerBars: {
      background: '#ffff'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      top: 0
    },
    bmMenu: {
      background: '#ffffff',
      right:'0',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
      overflowY: 'hidden'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#171026',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.8)',
      top: 0,
      right: 0
    } 
  };

  return (
      <Menu styles={styleMenu} isOpen={false} pageWrapId='page-wrap' outerContainerId='outer-container' customBurgerIcon={<img src="/hmbmenu.svg"/>}>
          <Link to="/"><p className={styles.itemlist}> Home</p></Link>
          <br/>
          <Link to="project-archive"><p className={styles.itemlist}> Project Archive</p></Link>
          <br/>
          <Link to="contacts"><p className={styles.itemlist}>Where to find me</p></Link>
      </Menu>
  )};

export default Sidebar;