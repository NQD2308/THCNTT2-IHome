import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";

function addroom() {
    return(
        <section>
            <div class="title">
                <h2></h2>
            </div>
            <div class="center">
                <form action="" class="create-table">
                    <h4>Create New Room</h4>
                    <table>
                        <tbody>
                            <tr>
                                <td>Room name</td>
                                <td><input type="text"/></td>
                            </tr>
                            <tr>
                                <td>Gas</td>
                                <td><input type="text" placeholder="Enter ID gas sensor"/></td>
                            </tr>
                            <tr>
                                <td>Temperature</td>
                                <td><input type="text" placeholder="Enter ID temperature sensor"/></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><button>Create</button></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </section>
    )
}

export default addroom