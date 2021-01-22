import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box ,Avatar} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Heart from './images/heart.jpg';
import Coffee from './images/coffee.jpg';
import Tear from './images/tear.jpg';
import Pure from './images/pure.png';
import Jobless from './images/jobless.png';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import BackGroundImg from './images/backgroundImg.png';
import { IconButton } from '@material-ui/core';
import  './AboutUs.css';

// override the font theme
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";



function pxToRem(value) {
  return `${value / 16}rem`;
}

// override the font theme
// Generate breakpoints so we can use them in the theme definition
const breakpoints = createBreakpoints({});
const theme = createMuiTheme({
  breakpoints,
  overrides: {
    MuiTypography: {
  
      h1: {
        fontSize: pxToRem(80),

        [breakpoints.up("xs")]: {
          fontSize: pxToRem(40)
        },

        [breakpoints.up("sm")]: {
          fontSize: pxToRem(60)
        },

        
        [breakpoints.up("md")]: {
          fontSize: pxToRem(60)
        },

        [breakpoints.up("lg")]: {
          fontSize: pxToRem(80)
        },

        [breakpoints.up("xl")]: {
          fontSize: pxToRem(160)
        }
      },


      h2: {
        fontSize: pxToRem(80),
        fontWeight:'bold',
        fontStyle:'oblique',
        letterSpacing:'10px',
        fontFamily:'-apple-system',

        [breakpoints.up("xs")]: {
          fontSize: pxToRem(40)
        },

        [breakpoints.up("sm")]: {
          fontSize: pxToRem(50)
        },

        
        [breakpoints.up("md")]: {
          fontSize: pxToRem(60)
        },

        [breakpoints.up("lg")]: {
          fontSize: pxToRem(80)
        },

        [breakpoints.up("xl")]: {
          fontSize: pxToRem(130)
        }
      },


      body1: {
        fontSize: pxToRem(40),
        marginTop:'30px',

        [breakpoints.up("xs")]: {
          fontSize: pxToRem(17)
        },

        [breakpoints.up("sm")]: {
          fontSize: pxToRem(25)
        },

        
        [breakpoints.up("md")]: {
          fontSize: pxToRem(35)
        },

        [breakpoints.up("lg")]: {
          fontSize: pxToRem(26)
        },

        [breakpoints.up("xl")]: {
          fontSize: pxToRem(70)
        }
      },
    
      h3: {
        fontSize: pxToRem(40),
      
        letterSpacing:'5px',
        fontFamily:'-apple-system',

        [breakpoints.up("xs")]: {
          fontSize: pxToRem(20)
        },

        [breakpoints.up("sm")]: {
          fontSize: pxToRem(30)
        },

        
        [breakpoints.up("md")]: {
          fontSize: pxToRem(40)
        },

        [breakpoints.up("lg")]: {
          fontSize: pxToRem(50)
        },

        [breakpoints.up("xl")]: {
          fontSize: pxToRem(130)
        }
      },

      h4: {
        fontSize: pxToRem(40),
      
        fontFamily:'-apple-system',

        [breakpoints.up("xs")]: {
          fontSize: pxToRem(15)
        },

        [breakpoints.up("sm")]: {
          fontSize: pxToRem(25)
        },

        
        [breakpoints.up("md")]: {
          fontSize: pxToRem(30)
        },

        [breakpoints.up("lg")]: {
          fontSize: pxToRem(30)
        },

        [breakpoints.up("xl")]: {
          fontSize: pxToRem(80)
        }
      },
 
    }
  
  }
});



const useStyles = makeStyles(theme => ({
 
  root: {
    height: '100vh',

  

  },

  ResizeIconButton:{

    [breakpoints.up("xs")]: {
      width:'30px',
      height:'30px',
    
    },

    [breakpoints.up("sm")]: {
      width:'50px',
      height:'50px',
      margin:theme.spacing(0 , 3),
    },

    [breakpoints.up("md")]: {
      width:'60px',
      height:'6s0px',
      margin:theme.spacing(0 , 3),
    },

    [breakpoints.up("lg")]: {
      width:'50px',
      height:'50px',
      margin:theme.spacing(0 , 6),
    },

    [breakpoints.up("xl")]: {
      width:'60px',
      height:'70px',
      margin:theme.spacing(0 , 6),
    }
  },



  PureGirlImage: {
    backgroundImage: `url(${Pure})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  JobLessImage:{
    backgroundImage: `url(${Jobless})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
     backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  BackGroundimage: {
     backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
      backgroundSize: 'cover',
    backgroundPosition: 'center',
    
  },
  SocialMediaButtons:{
    alignItems:'center',
    display:'flex',
    justifyContent:'center',
  },

  

  paper: {
    // margin: theme.spacing(4, 8),
     margin: theme.spacing(0, 6),
    display: 'flex',
     flexDirection: 'column',
    alignItems: 'center',
  },

  paperWidth:{
    width: theme.spacing(16),
    left:'600px',
  },


  center:{
    
    position: 'absolute', 
    left: '50%', 
    top: '13%',
    transform: 'translate(-50%, -50%)',
    width:'100%',
     
    [breakpoints.up("xs")]: {
      top: '17%',
    },

    [breakpoints.up("sm")]: {
      top: '13%',
    },

    
    [breakpoints.up("md")]: {
      marginTop:'4%',
    },

    [breakpoints.up("lg")]: {
      top: '17%',
    },

    [breakpoints.up("xl")]: {
      top: '10%',
    }
  },

  

  // subHeading:{
  //   fontSize:'60px',
  // },
  
  body:{
    backgroundColor:'transparent',
  },

  IconsGrid:{
    // margin:theme.spacing(8),
    height: '20vh',
  
    [breakpoints.up("xs")]: {
      height: '20vh',
    },

    [breakpoints.up("sm")]: {
      height: '20vh',
    },

    [breakpoints.up("md")]: {
      height: '20vh',
    },

    [breakpoints.up("lg")]: {
      height: '50vh',
    },

    [breakpoints.up("xl")]: {
      height: '40vh',
    }
  },

  // somePadding:{
  //     marginTop:'100px',
  // },

  large: {
    
    width: theme.spacing(23),
    marginTop: theme.spacing(15),
    height: theme.spacing(23),
    margin:'auto',

    [breakpoints.up("xs")]: {
      width:'80%',
      height:'40%',
    
    },

    [breakpoints.up("sm")]: {
      width:'80%',
      height:'60%',
    
    },

    [breakpoints.up("md")]: {
      width:'60%',
      height:'50%',
    
    },

    [breakpoints.up("lg")]: {
      width:'40%',
      height:'60%',
    
    },
    [breakpoints.up("xl")]: {
      width:'50%',
      height:'70%',
    
    },


  },
  marginFromTitle:{
      marginTop:'5%',
  },
 
  NameAdjustMent:{
    Color:'white',
  },
  abovePage:{
  //  marginTop:'100px',
  top:'100px',
  },

  dividerStyle:{
    backgroundColor:'black',
    padding:'1px',
  },


  subHeaderStyle1:{
    backgroundColor:'black',
    padding:'0.22px',
    [breakpoints.up("xs")]: {
      padding:'0.22px',
    
    },

    [breakpoints.up("sm")]: {
      padding:'0.22px',
    
    },

    [breakpoints.up("md")]: {
      padding:'0.22px',
    
    },

    [breakpoints.up("lg")]: {
      padding:'0.22px',
    },

    [breakpoints.up("xl")]: {

      padding:'2px',
    
    },

  },

  subHeaderStyle2:{
    backgroundColor:'black',
  },

  footer:{
    textAlign:'center',
  },

  Heart:{
    width:'20px',
    height:'20px',
    
    [breakpoints.up("xs")]: {
      width:'25px',
      height:'25px',
    
    },

    [breakpoints.up("sm")]: {
      width:'30px',
      height:'30px',
    
    },

    [breakpoints.up("md")]: {
      width:'50px',
      height:'30px',
    
    },

    [breakpoints.up("lg")]: {
      width:'50px',
      height:'30px',
    
    },
    [breakpoints.up("xl")]: {
      width:'100px',
      height:'60px',
    
    },
  },
  Coffee:{
    width:'24px',
    height:'30px',
    
    [breakpoints.up("xs")]: {
      width:'25px',
      height:'25px',
    
    },

    [breakpoints.up("sm")]: {
      width:'40px',
      height:'40px',
    
    },

    [breakpoints.up("md")]: {
      width:'60px',
      height:'40px',
    
    },

    [breakpoints.up("lg")]: {
      width:'60px',
      height:'40px',
    
    },
    [breakpoints.up("xl")]: {
      width:'110px',
      height:'70px',
    
    },
     
  },

  Tear:{
    width:'25px',
    height:'20px',

    [breakpoints.up("xs")]: {
      width:'30px',
      height:'25px',
    
    },

    [breakpoints.up("sm")]: {
      width:'40px',
      height:'25px',
    
    },

    [breakpoints.up("md")]: {
      width:'60px',
      height:'40px',
    
    },

    [breakpoints.up("lg")]: {
      width:'60px',
      height:'40px',
    
    },
    [breakpoints.up("xl")]: {
      width:'110px',
      height:'70px',
    
    },
    
  },



  iconsNamesAdjust:{
  alignItems:'center',
  display:'flex',
  justifyContent:'center',
  marginTop:'10px',

  
    
  }
  

}));


export default function AboutUs() {
  const classes = useStyles();
  const heading1 = "OUR STORY";
  const heading2 = "JOB SEEKING";

  return (

    <div >
  
   <div className={classes.abovePage}>
    <MuiThemeProvider theme={theme}>
    <Typography className={classes.center} style={{whiteSpace:"nowrap",textAlign:"center"}} 
    variant="h1" display="inline" > Meet The Team </Typography> 
    </MuiThemeProvider>
    </div>


    <div className ={classes.marginFromTitle} />


{/* ////////////////////////////////////////////////////////////////////// */}
    
<Grid container component="main" className={classes.root}  >
   
   <Grid items xs={6} sm={6} md={6} lg={6}>
      <Avatar alt="Zhixin chen" src="/static/images/avatar/1.jpg" className={classes.large}  />
      <MuiThemeProvider theme={theme}>
     <Typography variant="body1" noWrap className={classes.iconsNamesAdjust}>Zhixin Chen</Typography>
      </MuiThemeProvider>
   



        <Grid className={classes.SocialMediaButtons}>

             <Button  color="inherit" href="https://github.com/nnnvuuu" target="_blank" >
                <GitHubIcon className={classes.ResizeIconButton} />  
             </Button>
       
             {/* style={{width:'100px',height:'100px'}} */}
          
             <Button href="https://www.linkedin.com/in/zhixin-chen-6a204b167/" target="_blank">
                <LinkedInIcon className={classes.ResizeIconButton}/> 
             </Button>
           

          </Grid>
     </Grid>


<Grid items xs={6} sm={6} md={6} lg={6}>
<Avatar alt="Abhidhar" src="/static/images/avatar/1.jpg" className={classes.large}  />
      <MuiThemeProvider theme={theme}>
      <Typography variant="body1" noWrap className={classes.iconsNamesAdjust}>Abhidhar</Typography>
      </MuiThemeProvider>


<Grid className={classes.SocialMediaButtons}>
             <Button href="https://github.com/kepler42" target="_blank" >
                <GitHubIcon className={classes.ResizeIconButton}/>         
             </Button>

             <Button href="" target="_blank">
                <LinkedInIcon className={classes.ResizeIconButton}/> 
             </Button>
           </Grid>
      </Grid>


      <Grid className = {classes.somePadding}/>


<Grid items  xs={6} sm={6} md={6} lg={6}>
<Avatar alt="Charles Wood" src="/static/images/avatar/1.jpg" className={classes.large}  />
      <MuiThemeProvider theme={theme}>
      <Typography variant="body1" noWrap className={classes.iconsNamesAdjust}>Charles Wood</Typography>
      </MuiThemeProvider>

<Grid className={classes.SocialMediaButtons}>
             <Button href="https://github.com/charlesw25" target="_blank" >
                <GitHubIcon className={classes.ResizeIconButton}/>         
             </Button>

             <Button href="" target="_blank">
                <LinkedInIcon className={classes.ResizeIconButton}/> 
             </Button>
           </Grid>
      </Grid>


<Grid items xs={6} sm={6} md={6} lg={6}>
<Avatar alt="Richard Wu" src="/static/images/avatar/1.jpg" className={classes.large}  />
      <MuiThemeProvider theme={theme}>
      <Typography variant="body1" noWrap className={classes.iconsNamesAdjust}>Richard Wu</Typography>
      </MuiThemeProvider>
<Grid className={classes.SocialMediaButtons}>
             <Button href="https://github.com/sushi-trash" target="_blank" >
                <GitHubIcon className={classes.ResizeIconButton}/>         
             </Button>

             <Button href="" target="_blank">
                <LinkedInIcon className={classes.ResizeIconButton}/> 
             </Button>
           </Grid>
      </Grid>

      <Grid items xs={3} sm={3} md={3} lg={3}/>

      <Grid items xs={6} sm={6} md={6} lg={6}>
<Avatar alt="Sebastian Malbec" src="/static/images/avatar/1.jpg" className={classes.large}  />
      <MuiThemeProvider theme={theme}>
      <Typography variant="body1" noWrap className={classes.iconsNamesAdjust}>Sebastian Malbec</Typography>
      </MuiThemeProvider>
<Grid className={classes.SocialMediaButtons}>
             <Button href="https://github.com/smalbec" target="_blank" >
                <GitHubIcon className={classes.ResizeIconButton}/>         
             </Button>

             <Button href="" target="_blank">
                <LinkedInIcon className={classes.ResizeIconButton}/> 
             </Button>
           </Grid>
      </Grid>

      <Grid items xs={3} sm={3} md={3} lg={3}/>


      </Grid>



<Grid className = {classes.IconsGrid}>

    </Grid>

{/* ////////////////////////////////////////////////////////////////////// */}



<Grid container component="main" className={classes.root}>

    <CssBaseline />
    <Grid item xs={false} sm={6} md={6} className={classes.PureGirlImage} />
  <Grid item xs={12} sm={6} md={6} component={Paper} elevation={6} square>
    
    <div className={classes.paper}>
    <MuiThemeProvider theme={theme}>
    {/* className={classes.subHeading} */}

   <Typography  variant="h2"> Our Story
      
              <Divider className={classes.subHeaderStyle1} />
        <Typography
          className={classes.dividerFullWidth}
          color="textSecondary"
          display="block"
          variant="caption"
          fontSize="50%"
          >

        </Typography>
       
      </Typography>
  

  
       <Typography variant = 'body1'>
        Do greatest at in learning steepest. Breakfast extremity suffering one who all otherwise suspected. He at no nothing forbade up moments. Wholly uneasy at missed be of pretty whence. John way sir high than law 
       </Typography>

       </MuiThemeProvider>
       
    </div>
  </Grid>
  
</Grid>



{/* ////////////////////////////////////////////////////////////////////// */}


 <Grid container component="main" className={classes.root}>
    <CssBaseline /> 

   
  <Grid item xs={12} sm={6} md={6} component={Paper} elevation={6} square  >
  

  
  <div className={classes.paper}>
  <MuiThemeProvider theme={theme}>
  <Typography  variant="h2" > Seeking Job
      
              <Divider className={classes.subHeaderStyle1} />
        <Typography
          className={classes.dividerFullWidth}
          color="textSecondary"
          display="block"
          variant="caption"
          fontSize="50%"
          >
          
        </Typography>
        
       </Typography> 
  
       <Typography variant='body1' >
        Do greatest at in learning steepest. Breakfast extremity suffering one who all otherwise suspected. He at no nothing forbade up moments. Wholly uneasy at missed be of pretty whence. John way sir high than law who week. Surrounded prosperous introduced it if is up dispatched.
       </Typography>
    </MuiThemeProvider>
  </div>


      </Grid>
      <Grid item xs={false} sm={6} md={6}   className ={classes.JobLessImage} />
    </Grid>

{/* ////////////////////////////////////////////////////////////////////// */}



{/* 

    
  <h3>这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是照这里是组员合照这照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照这里是组员合照</h3> */}

  
  <Divider   className={classes.dividerStyle} />
  

{/* ////////////////////////////////////////////////////////////////////// */}

  <div className={classes.footer}>
  <MuiThemeProvider theme={theme}> 
    <Typography variant = "h3">CopyRight 2020 by VISUAL-DESKTOP</Typography>
    <Typography variant = "h4">This project is built with <img src ={Heart} alt="HeartIcon" className={classes.Heart}/>
     , <img src ={Coffee} alt="CoffeeIcon" className={classes.Coffee}/> and <img src ={Tear} alt="TearIcon" className={classes.Tear}/> </Typography>
  </MuiThemeProvider>
    </div> 


    </div>


   
  
    );
  };