import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from '../styles/InvoiceStyles.js'
import { withStyles } from '@material-ui/core/styles';

export default withStyles(useStyles)(function NotFound(props) {
  var {classes} = props;
  return (
    <div className="App" className={classes.appBg}>
    <header className="App-header">
        <Typography  variant ="h1" style={{color:'white'}}>404 Not Found </Typography>
    </header>
    </div>
  );
})