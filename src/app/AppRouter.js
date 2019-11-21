import React from 'react';
import Invoice from './components/Invoice'
import { Route,  Switch,  BrowserRouter} from 'react-router-dom';
import NotFound from './containers/NotFound'
import useStyles from './styles/InvoiceStyles.js'
import { withStyles } from '@material-ui/core/styles';

export default withStyles(useStyles)(function App() {

    return (
             <BrowserRouter>
                <Switch>
                   <Route exact path="/" render={(props) => (<Invoice/>)} />
                   <Route component={NotFound}/>        
                </Switch>
             </BrowserRouter>
           )
})









