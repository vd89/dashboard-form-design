import { makeStyles } from '@material-ui/core';

const LeftBarStyle = makeStyles(() => ({
  root: {
    display: 'flex',
    width: 450,
    backgroundColor: '#2196f3',
    height: '100vh',
    color: 'white',
    flexDirection: 'column',
    alignItems: 'left',
  },
  button: {
    color: '#2196f3',
    backgroundColor: 'white',
    width: '75%',
    marginTop: '5em',
    fontSize: '1.2em',
    borderRadius: '20px',
    marginBottom: '2em',
    alignSelf: 'center',
  },
  h3: {
    margin: '0px 0px 0px 15px',
  },
  subdivider: {
    margin: '0px 0px 0px 25px',
    alignSelf: 'left',
  },
  h5: {
    cursor: 'pointer',
    fontSize: '3em',
    marginTop:'-1px'
  },
}));

export default LeftBarStyle;
