import { makeStyles } from '@material-ui/core';

const LayoutStyle = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: 200,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 200,
  },
}));

export default LayoutStyle;
