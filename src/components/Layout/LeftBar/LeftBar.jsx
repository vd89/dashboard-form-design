import React from 'react';
import { Button, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import LeftBarStyle from './LeftBarStyle';

const LeftBar = () => {
  const classes = LeftBarStyle();
  const onClickHandler = () => {
    console.log('on Create');
  };
  const onMouseOverHandler = () => {
    console.log('This is on Mouse over');
  };
  return (
    <div className={classes.root}>
      <Button variant='contained' className={classes.button} startIcon={<AddIcon fontSize='large' />} onClick={onClickHandler}>
        Create
      </Button>
      <>
        <Typography variant='h3' className={classes.h3}>
          Forms
        </Typography>
        <List className={classes.subdivider}>
          {['Today', 'Monday 21 Oct'].map((text, i) => (
            <ListItem button key={i}>
              <ListItemText className={classes.h5} primary={text} onMouseOver={onMouseOverHandler} onClick={onClickHandler} />
            </ListItem>
          ))}
        </List>
      </>
    </div>
  );
};

export default LeftBar;
