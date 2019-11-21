import React,{Component} from 'react';
import '../styles/App.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import useStyles from '../styles/InvoiceStyles.js'


const fakeApiFetch = [
  {
    name:'Espresso',
    size:'large',
    unit:'1',
    price:'2.90'
  },
  {
    name:'Cappuccino',
    size:'small',
    unit:'2',
    price:'7.00'
  },
];

class Invoice extends Component {
  
 componentWillMount(){
    // Data is fetched
    const fetchedData = fakeApiFetch
    // send data to store    
    this.props.dispatch({
      type: 'HANDLE_TX_DATA',
      payload: {
        txData:fetchedData
      }
    })    
    //then() transform sale_id to UI_STRING example: uint(10,000,000) => string('10 000 000')   

  }

  render(){
    const { classes } = this.props;
     const Header = () => (       
          <div >
            <Grid container justify="center">
                <Grid item xs={6}>
                  <Typography className={classes.title} color="secondary" align="left" variant="overline"> Invoice </Typography>
                  <Typography variant="overline" align="left" className={classes.gray}> 16/02/2016 </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className={classes.invoiceId}   align="right" variant="overline"> #89 289 </Typography>
                </Grid>                  
            </Grid>
          <hr style={{marginTop:'60px'}} className="dash" />
    </div>  
    )
    const Content = () => (
    <div>
      <Grid container>    
          <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell  colSpan={5} className={classes.tablecell}  padding ="none" align="left"><Typography className={classes.gray} variant="overline" > Product</Typography></TableCell>
                  <TableCell className={classes.tablecell}   align="right"><Typography  className={classes.gray} variant="overline">Unit</Typography></TableCell>
                  <TableCell className={classes.tablecell}  align="right"><Typography className={classes.gray} variant="overline">Price</Typography></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.txData.map(row => (
                      <TableRow key={row.name}>
                      <TableCell colSpan={5} className={classes.tablecell}   padding ="none" align="left" component="th" scope="row">
                          <Typography color="secondary" style={{fontWeight:'bold',fontSize:'15px',display: 'inline-block'}}>
                              {row.name}
                          </Typography>
                          <Typography color="secondary" style={{display: 'inline-block',marginLeft:'5px'}}>
                          ({row.size})
                          </Typography>            
                      </TableCell>
                      <TableCell className={classes.tablecell}  align="right"><Typography style={{fontSize:'15px'}}color="secondary">{row.unit}</Typography> </TableCell>
                        <TableCell className={classes.tablecell}  align="right"><Typography  style={{fontSize:'15px'}}color="secondary">{row.price}</Typography> </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={5}  className={classes.tablecell} padding ="none"> <Typography color="secondary" style={{fontWeight:'bold',fontSize:'15px'}}>Total</Typography> </TableCell>
                  <TableCell   className={classes.tablecell}  align="right"></TableCell>
                  <TableCell   className={classes.tablecell}  align="right"> <Typography color="secondary">9.90</Typography></TableCell>
                </TableRow>
              </TableBody>    
            </Table>
          </Grid>
     <hr style={{marginTop:'40px'}} className="dash" />
    </div>
    )

    const Action = () => (
    <Grid container justify="flex-end" style={{paddingTop:'10px',paddingBottom:'10px'}}>
        <Button className={classes.gray} style={{fontWeight:'bold'}}> Later</Button>
        <Button color="primary"  style={{fontWeight:'bold'}}>  Pay Now</Button>
    </Grid>
    ) 

    return (
      <div className={classes.appBg}>
      <header className="App-header">
        <Grid container justify="center"> 
          <Grid item xs={12} md={4} lg={4} xl={3} >
            <Paper 
            elevation={12}
            className={classes.paper}
            > 
                <Grid container justify="center">
                  <Grid item xs={10}>
                      <Header/>   
                      <Content/>                    
                      <Action/>
                  </Grid>
                </Grid>          
            </Paper>
          </Grid>
        </Grid>
      </header>
    </div>
    )
  }
}


function mapStateToProps(state, props){
  return{
        txData:state.txData
    }


}

export default withStyles(useStyles)(connect(mapStateToProps)(Invoice));