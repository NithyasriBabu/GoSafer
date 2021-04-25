import React from 'react';
import CardItem from './CardItem';
import { Navbar, Nav } from 'react-bootstrap';

import { FcMoneyTransfer, FcComboChart } from "react-icons/fc";
import { FaUserGraduate } from "react-icons/fa";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

import logo from '../logo.svg';
import './HomePage.css';

import green from './Green.PNG';
import bronze from './Bronze.PNG';
import silver from './Silver.PNG';
import gold from './Gold.PNG';

import data from '../data/profile-data.json';

import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

function HomePage() {
    const item = data[Math.floor(Math.random()*data.length)];
    
    return (
        <div className="section">
            <Navbar className="navbar" variant="light">
                <Navbar.Brand href="/home">
                    <img src={logo} className="navbar-logo" alt="GoSafer"/>
                </Navbar.Brand>
                <Nav className="mx-auto">
                    <Nav.Link className="active" href="/home">Home</Nav.Link>
                    <Nav.Link href="/financialplanning">Financial Planning</Nav.Link>
                    <Nav.Link href="/budget">Budget</Nav.Link>
                    <Nav.Link href="https://www.moneyadviceservice.org.uk/en">Financial Education</Nav.Link>
                </Nav>
            </Navbar>
            <div id='home-page' className="section-body" style={{backgroundColor: "#84bb73"}}>
                <div className="section-div" style={{height: "25%", alignItems: "center"}}>
                    <div className="section-content-profile" style={{width: "20%"}}>
                        <h3>Income Earned: $ {item.income}</h3>
                        <p>Available to withdraw: {item.available}</p>
                    </div>
                    <div className="section-content-profile" style={{width: "20%"}}>
                        <h3>User Profile</h3>
                        <p style={{textDecoration: "underline"}}>
                            Name: {item.name} <br />
                            Age: {item.age} <br />
                            DOB: {item.dob} <br />
                            Job Tile: {item.jobTitle} <br />
                            Work Hours: {item.workStart} - {item.workEnd }<br />
                        </p>
                    </div>
                    <div className="section-content-todo" style={{width: "60%"}}>
                        <Nav.Link href="/financialplanning" className="row-todo">
                            <span><h3>Tasks Todo:</h3></span>
                        </Nav.Link>

                        <Nav.Link href="/budget" className="row-todo">
                            <span><h3>1. Build a Budget</h3></span>
                            <IoCheckmarkDoneCircleOutline color="green" className="ml-auto" size="30" />
                        </Nav.Link>

                        <Nav.Link href="https://www.moneyadviceservice.org.uk/en/articles/top-tips-for-choosing-savings-accounts" className="row-todo">
                            <span><h3>2. Create a Savings Account</h3></span>
                            <IoCheckmarkDoneCircleOutline className="ml-auto" size="30"/>
                        </Nav.Link>
                        
                    </div>
                </div>
                <div style={{
                    height: "25%",
                    width: "100%"
                }}>
                    <div className="mx-auto progressbar">
                        <ProgressBar
                            percent={80}
                            filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
                            height="50px"
                        >
                            <Step transition="scale">
                            {({ accomplished }) => (
                                <img
                                    style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                                    alt=""
                                />
                            )}
                            </Step>
                            <Step transition="scale">
                            {({ accomplished }) => (
                                <img
                                    style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                                    width="100"
                                    height="50"
                                    src={green}
                                    alt="green"
                                />
                            )}
                            </Step>
                            <Step transition="scale">
                            {({ accomplished }) => (
                                <img
                                    style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                                    width="100"
                                    height="50"
                                    src={bronze}
                                    alt="bronze"
                                />
                            )}
                            </Step>
                            <Step transition="scale">
                            {({ accomplished }) => (
                                <img
                                    style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                                    width="90"
                                    height="50"
                                    src={silver}
                                    alt="silver"
                                />
                            )}
                            </Step>
                            <Step transition="scale">
                            {({ accomplished }) => (
                                <img
                                    style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                                    width="80"
                                    height="50"
                                    src={gold}
                                    alt="gold"
                                />
                            )}
                            </Step>
                        </ProgressBar>
                    </div>
                </div>
                <div className="section-div" style={{
                    height: "50%",
                    alignSelf: "center", 
                    alignItems: "center", 
                    alignContent: "center", 
                    justifyContent: "center"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <CardItem title="Budget" icon={FcMoneyTransfer} link="/budget" />
                        <CardItem title="Financial Planning" icon={FcComboChart} link="/financialplanning" />
                    </div>
                    
                    <CardItem title="Financial Education" icon={FaUserGraduate} iconColor="black" link="https://www.moneyadviceservice.org.uk/en"/>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
