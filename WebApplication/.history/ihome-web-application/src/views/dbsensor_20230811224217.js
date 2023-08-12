import { Routes, Route, Link } from 'react-router-dom';
import CreateRoomPage from './addroom';
import UpdateRoomPage from './updateroom';
import React, { Component } from "react";
import axios from "axios"; 

class dbsensor extends React.Component {
    constructor() {
        super();
        this.state = {
        items: [],
        };
    }

    componentDidMount() {
        axios.get("http://192.168.0.121:1234/").then((response) => {
            console.log(response.data);
            const data = response.data;
            this.setState({ items: data });
        });
    }

    render() {
        // Xử lý nhiệt độ và định dạng dữ liệu
        function formatTemperature(temp) {
            const roundedTemp = parseFloat(temp).toFixed(1);
            return `${roundedTemp}`;
        }

        return(
            <section class="part">
                <div class="title">
                    <h2>Data sensor</h2>
                </div>
                <div class="center">
                    <form>
                    <button className='btn-create'><Link to="/createnewroom"><i class="fa-solid fa-plus"></i>Create new room</Link></button>
                        <table class="table table-light">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th class="width-title-table">Room</th>
                                    <th class="width-title-table">Temperature</th>
                                    <th class="width-title-table">Humidity</th>
                                    <th class="width-title-table">Gas</th>
                                    <th class="width-title-table">Status</th>
                                </tr>
                            </thead>
                            {this.state.items.map((item) => (
                                <tbody>
                                    <tr>
                                    <td style={{ textAlign: 'center' }}>1</td>
                                    <td style={{ textAlign: 'center' }}>Living room</td>
                                    <td style={{ textAlign: 'center' }}>{formatTemperature(item.Temp)}<sup>o</sup>C</td>
                                    <td style={{ textAlign: 'center' }}>{formatTemperature(item.Hud)}<sup>o</sup>F</td>
                                    <td style={{ textAlign: 'center' }}>{(item.Gas)}%</td>
                                    <td>
                                        <div class="spc-between">
                                            <button><Link to="/updateroom"><i class="fa-solid fa-pen-to-square"></i></Link></button>
                                            <button><i class="fa-solid fa-trash"></i></button>
                                        </div>
                                    </td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </form>
                </div>
    
                <Routes>
                    <Route path="/createnewroom" element={<CreateRoomPage /> }/>
                    <Route path="/updateroom" element={<UpdateRoomPage /> }/>
                </Routes>
            </section>
        )
    }
}

export default dbsensor