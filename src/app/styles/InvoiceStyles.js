const useStyles = theme => ({
    appBg:{
      background:theme.palette.primary.main
    },
    title:{
    fontWeight:'bold',
    fontSize:'20px',
    height:'40px'
    },
    invoiceId:{
    fontSize:'20px',
    color:'#C6C6CA'
    },
    tablecell:{
    borderBottom: "none",
    [theme.breakpoints.up('xl')]: {
      width:'90%'
      }, 
    },
    gray:{
      color:'#C6C6CA'
    },
    paper:{
      width:'100%',
      margin:'0 auto',
      paddingTop:'40px',
      borderRadius:'10px',
      [theme.breakpoints.up('lg')]: {
        width:'90%'
      }, 
      [theme.breakpoints.up('xl')]: {
        width:'90%'
      }, 
    },
  });

  module.exports = useStyles;