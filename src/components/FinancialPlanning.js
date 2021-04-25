import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../logo.svg';

function FinancialPlanning() {
    return (
        <div className="section"> 
            <Navbar className="navbar" variant="light">
                <Navbar.Brand href="/home">
                    <img src={logo} className="navbar-logo" alt="GoSafer"/>
                </Navbar.Brand>
                <Nav className="mx-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link className="active" href="/financialplanning">Financial Planning</Nav.Link>
                    <Nav.Link href="/budget">Budget</Nav.Link>
                    <Nav.Link href="https://www.moneyadviceservice.org.uk/en">Financial Education</Nav.Link>
                </Nav>
            </Navbar>
            <div id='finplanning-page' className="section-body" style={{backgroundColor: "#84bb73"}}>

            </div>
        </div>
    )
}

export default FinancialPlanning
