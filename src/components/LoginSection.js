import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { FormControl, TextField, InputAdornment, Button, Link } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';

import './LoginSection.css';

import logo from './LoginPage.PNG';

const useStyles = makeStyles({
    input: {
        height: '30px',
        border: 0,
        borderRadius: 5,
        marginBottom: '20px'
    },
    buttonLink: {
        backgroundColor: '#84bb73',
        border: 0,
        borderRadius: 5,
        marginBottom: '20px',
        height: '50px',
    },
    button: {
        color: 'white',
        height: '100%',
        width: '100%',
        justifyContent: "center",
        textDecoration: "none",
        fontFamily: 'Orelega One, cursive',
        '&:hover': {
            backgroundColor: '#d1e8cb',
            color: 'black',
        },
    },
    link: {
        alignSelf: "center",
        justifyContent: "center",
    }
});
  

function LoginSection() {
    const classes = useStyles();

    var myArray = [
        '"Financial security and independence are like a three-legged stool resting on savings, insurance and investments.” – Brian Tracy',
        '"Beware of little expenses; a small leak will sing a great ship." - Benjamin Franklin',
        '"I believe that through knowledge and dicipline, financial peace is possible for all of us." - Dave Ramsey'
    ];
    return (
        <div id='login-page' className="section section-head">
            <div className="section-partition">
                <img src={logo} className="logo" alt="logo"/>
            </div>
            <div className="section-partition" style={{
                alignSelf: "center", 
                alignItems: "center", 
                justifyContent: "center"
            }}>
                <div className="login-section">
                    <div className="login-section-header">
                        <h3>User Login</h3>
                    </div>
                    <div style={{
                        height: "100%",
                        width: "70%",
                        display: "flex", 
                        flexDirection: "column", 
                        alignContent: "center", 
                        justifyContent: "space-evenly" 
                    }}>
                        <FormControl>
                            <TextField
                                required
                                id="email-id"
                                placeholder="Email ID"
                                className={classes.input}
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <MailIcon />
                                    </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                required
                                id="password"
                                placeholder="Password"
                                className={classes.input}
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon />
                                    </InputAdornment>
                                    ),
                                }}
                            />
                            <Link href="/home" className={classes.buttonLink}>
                                <Button id="login-btn" className={classes.button}>Login</Button>
                            </Link>
                            <Link href="#" className={classes.link} color="#808080">{'Forgot Username/Password ?'}</Link>
                        </FormControl>
                    </div>
                </div>
                <div className="quote-section">
                    <p>{myArray[Math.floor(Math.random()*myArray.length)]}</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSection
