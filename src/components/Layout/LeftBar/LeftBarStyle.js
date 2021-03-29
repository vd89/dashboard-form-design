import { makeStyles } from '@material-ui/core';

const LeftBarStyle = makeStyles(() => ({
  root: {
    display: 'flex',
    width: 450,
    backgroundColor: '#2196f3',
    height: '100vh',
    color: 'white',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    color: '#2196f3',
    backgroundColor: 'white',
    width: '50%',
    marginTop: '5em',
    fontSize: '1.2em',
    borderRadius: '20px',
    marginBottom: '2em',
  },
  h3: {},
}));

export default LeftBarStyle;
