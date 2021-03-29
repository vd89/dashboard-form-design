import React from 'react';
import { Button, Divider, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import LeftBarStyle from './LeftBarStyle';

const LeftBar = () => {
  const classes = LeftBarStyle();
  const onClickHandler = () => {
    console.log('on Create');
  };
  return (
    <div className={classes.root}>
      <Button variant='contained' className={classes.button} startIcon={<AddIcon fontSize='large' />} onClick={onClickHandler}>
        Create
      </Button>
      <Divider />
      <div>
        <Typography variant='h3' className={classes.h3} >Forms</Typography>
      </div>
    </div>
  );
};

export default LeftBar;
