'use client'
import { stack as Menu } from 'react-burger-menu';
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '40px',
      height: '35px',
      left: '80px',
      top: '94px'
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
      <Menu styles={styles} isOpen={false} pageWrapId='page-wrap' outerContainerId='outer-container'>
          <Link to="/"><p id="item-list"> Home</p></Link>
          <br/>
          <Link to="project-archive"><p id="item-list"> Project Archive</p></Link>
      </Menu>
  )};

export default Sidebar;