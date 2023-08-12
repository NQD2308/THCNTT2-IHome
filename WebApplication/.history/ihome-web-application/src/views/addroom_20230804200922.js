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
        axios.get("http://localhost:2308/get").then((response) => {
            console.log(response.data);
            const data = response.data;
            this.setState({ items: data });
        });
    }

    post(id) {
        if (id !== undefined) {
            axios.post('http://localhost:2308/post/' + id)
                .then(response => {
                    var name;
                    console.log(response);
                    // Show an alert message
                    alert(`UID ${id} post successfully!`);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }


    render() {
        return(
            <h1>Add Room</h1>
        )
    }
}

export default addroom