import React from "react";
import "./App.css";

import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import EmployeeList from "./components/employee/EmployeeList";
import RegisterEmployee from "./components/employee/RegisterEmployee";
import Footer from "./components/Footer";

const App = () => {
    window.onbeforeunload = (event) => {
        const e = event || window.event;
        e.preventDefault();
        if (e) {
            e.returnValue = "";
        }
        return "";
    };

    return ( <Router >
        <NavigationBar / >
        <Container >
        <Row >
        <Col lg = { 12 }
        className = { "margin-top" } >
        <Switch >
        <Route path = "/"exact component = { EmployeeList }
        /> <Route path = "/users"
        exact component = { EmployeeList }
        /> <Route path = "/register"
        exact component = { RegisterEmployee }
        /> </Switch > </Col> </Row > </Container> <Footer / >
        </Router>
    );
};

export default App;