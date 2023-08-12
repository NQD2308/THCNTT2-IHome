import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";

class addroom extends React.Component{
    constructor() {
        super();
        this.state = {
            items: [],
        };
    }
    
    componentDidMount() {
        axios.get("http://localhost:1311/get").then((response) => {
            console.log(response.data);
            const data = response.data;
            this.setState({ items: data });
        });
    }
    render() {
        return(
            <h1>Add Room</h1>
        )
    }
}

export default addroom