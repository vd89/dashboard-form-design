import React from 'react';
import LayoutStyle from './LayoutStyle';
import LeftBar from './LeftBar/LeftBar';
import Main from './Main/Main';

const Layout = () => {
  const classes = LayoutStyle();
  return (
    <div className={classes.root}>
      <LeftBar />
      <Main/>
    </div>
  );
};

export default Layout;
