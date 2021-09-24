import { Toolbar, makeStyles, Button } from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: '#400CCC',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  titleStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  menuButton: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    size: '18px',
    marginLeft: '38px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default function Header({ headersData, updateLabel, title }) {
  const { header, menuButton, toolbar, titleStyle } = useStyles();

  const handleClick = (event) => {
    console.log('from handle click', event.target.name, event.target);
    updateLabel(event.target.name);
  };
  const getMenuButtons = () => {
    return headersData.map(({ label }) => {
      return (
        <button
          key={label}
          name={label}
          className={menuButton}
          onClick={handleClick}
        >
          {label}
        </button>
      );
    });
  };

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  return (
    <header>
      <div className={titleStyle}>
        <h1>{title}</h1>
      </div>
      <div className={header}>{displayDesktop()}</div>
    </header>
  );
}
