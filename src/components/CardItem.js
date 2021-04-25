import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia }  from '@material-ui/core';

import { Nav } from 'react-bootstrap';

import { IoMdArrowRoundForward } from "react-icons/io";

const useStyles = makeStyles({
    card: {
      width: "300px",
      height: "200px",
      backgroundColor: "#84bb73",
      border: "4px solid white",
      borderRadius: "10px",
      padding: "10px",
      margin: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly",
      fontFamily: "Orelega One', cursive",
    },
    icon: {
        height: "60px",
        width: "60px"
    },
    title: {
        margin: "auto",
        fontSize: "30px",
        textAlign: "center",
        fontFamily: "Orelega One, cursive",
        color: "white"
    },
    media: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignContent: "center",
      alignSelf: "center",
      alignItems: "center",
    },
  });

function CardItem(props) {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.card}>
                <CardMedia className={classes.media}>
                    <props.icon className={classes.icon} style={{color: props.iconColor}}/>
                    <h4 className={classes.title}>{props.title}</h4>
                    <Nav.Link href={props.link}>
                        <IoMdArrowRoundForward className={classes.icon} style={{color: "white"}}/>
                    </Nav.Link>
                </CardMedia>
            </Card>
        </div>
    )
}

export default CardItem
