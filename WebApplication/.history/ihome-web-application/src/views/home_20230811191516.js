import axios from "axios";
import React, { Component } from "react";
import { render } from "react-dom";
import { database } from '../config'
class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLightOn: false,
        };
      }

    componentDidMount() {
        const lightRef = database.ref('light');
        lightRef.on('value', snapshot => {
        this.setState({ isLightOn: snapshot.val() });
        });
    }

    handleLightToggle = async () => {
        try {
            const newLightState = !this.state.isLightOn;
            await axios.put('http://192.168.1.10:1234/create', newLightState);
        } catch (error) {
            console.error('Error communicating with Firebase:', error);
        }
    };

    render() {
        const { isLightOn } = this.state;

        return(
            <div className="home">
                <section Class="part">
                    <div Class="title">
                        <h4>Living room</h4>
                    </div>
                    <div Class="rooms">
                        <div Class="container">
                            <div Class="row">
                                <div Class="col col-md-4">
                                    <div Class="box">
                                        <div Class="row">
                                            <div Class="col col-4">
                                                <img src="/img/tv.png" alt="TV_Photo"/>
                                            </div>
                                            <div Class="col col-8">
                                                <div Class="title-device">
                                                    <b>Ti Vi</b>
                                                </div>
                                                <div Class="center">
                                                    <div Class="status">
                                                        <div Class="radio-button">
                                                            <input type="radio" name="status-livingroom-tv" id="status-on" value="ON"/>
                                                            <label for="status-on"><b>On</b></label>
                                                        </div>
                                                        <div Class="radio-button">
                                                            <input type="radio" name="status-livingroom-tv" id="status-off" value="OFF" checked/>
                                                            <label
                                                            Class="status-off" for="status-off"><b>OFF</b></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div Class="col col-md-4">
                                    <div Class="box">
                                        <div Class="row">
                                            <div Class="col col-4">
                                                <img src="/img/Light_OFF.png" alt="TV_Photo"/>
                                            </div>
                                            <div Class="col col-8">
                                                <div Class="title-device">
                                                    <b>Đèn phòng</b>
                                                </div>
                                                <div Class="center">
                                                    <div Class="status">
                                                        <div Class="radio-button">
                                                            <input type="radio" name="status-livingroom-light" id="status-on"  value="on" checked={isLightOn} onChange={() => this.handleLightChange(true)}/>
                                                            <label for="status-on"><b>On</b></label>
                                                        </div>
                                                        <div Class="radio-button">
                                                            <input type="radio" name="status-livingroom-light" id="status-off" value="off" checked={!isLightOn} onChange={() => this.handleLightChange(false)} checked/>
                                                            <label
                                                            Class="status-off" for="status-off"><b>OFF</b></label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div Class="center">
                                                    <div Class="status">
                                                        <input type="range" Class="form-range" min="1" max="4" step="0.5" id="customRange3"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div Class="col col-md-4">
                                    <div Class="box">
                                        <div Class="row">
                                            <div Class="col col-4">
                                                <img src="/img/Air_Conditioner.png" alt="TV_Photo"/>
                                            </div>
                                            <div Class="col col-8">
                                                <div Class="title-device">
                                                    <b>Máy lạnh</b>
                                                </div>
                                                <div Class="center">
                                                    <div Class="status">
                                                        <div Class="radio-button">
                                                            <input type="radio" name="status-livingroom-AC" id="status-on" value="ON"/>
                                                            <label for="status-on"><b>On</b></label>
                                                        </div>
                                                        <div Class="radio-button">
                                                            <input type="radio" name="status-livingroom-AC" id="status-off" value="OFF" checked/>
                                                            <label 
                                                            Class="status-off" for="status-off"><b>OFF</b></label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div Class="center">
                                                    <div Class="status">
                                                        <input type="range" Class="form-range" min="17" max="30" step="0.5" id="customRange3"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div Class="col col-md-4">
                                    <div Class="box">
                                        <div Class="row">
                                            <div Class="col col-4">
                                                <img src="/img/CoolerFan.png" alt="TV_Photo"/>
                                            </div>
                                            <div Class="col col-8">
                                                <div Class="title-device">
                                                    <b>Quạt hơi nước</b>
                                                </div>
                                                <div Class="center">
                                                    <div Class="status">
                                                        <div Class="radio-button">
                                                            <input type="radio" name="status-livingroom-coolfan" id="status-on" value="ON"/>
                                                            <label for="status-on"><b>On</b></label>
                                                        </div>
                                                        <div Class="radio-button">
                                                            <input type="radio" name="status-livingroom-coolfan" id="status-off" value="OFF" checked/>
                                                            <label
                                                            Class="status-off" for="status-off"><b>OFF</b></label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div Class="center">
                                                    <div Class="status">
                                                        <input type="range" Class="form-range" min="1" max="5" step="0.5" id="customRange3"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div Class="col col-md-4">
                                    <div Class="box">
                                        <div Class="row">
                                            <div Class="col col-4">
                                                <img src="/img/CellingFan.png" alt="TV_Photo"/>
                                            </div>
                                            <div Class="col col-8">
                                                <div Class="title-device">
                                                    <b>Quạt trần</b>
                                                </div>
                                                <div Class="center">
                                                    <div Class="status">
                                                        <div Class="radio-button">
                                                            <input type="radio" name="status-livingroom-fan" id="status-on" value="ON"/>
                                                            <label for="status-on"><b>On</b></label>
                                                        </div>
                                                        <div Class="radio-button">
                                                            <input type="radio" name="status-livingroom-fan" id="status-off" value="OFF" checked/>
                                                            <label
                                                            Class="status-off" for="status-off"><b>OFF</b></label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div Class="center">
                                                    <div Class="status">
                                                        <input type="range" Class="form-range" min="0" max="5" step="0.5" id="customRange3"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    
                <section Class="part">
                    <div Class="title">
                        <h4>Kitchen</h4>
                    </div>
                    <div Class="rooms">
                        <div Class="container">
                            <div Class="row">
                                <div Class="col col-md-4">
                                    <div Class="box">
                                        <div Class="row">
                                            <div Class="col col-4">
                                                <img src="/img/hood.png" alt="TV_Photo"/>
                                            </div>
                                            <div Class="col col-8">
                                                <div Class="title-device">
                                                    <b>Hood</b>
                                                </div>
                                                <div Class="center">
                                                    <div Class="status">
                                                        <div Class="radio-button">
                                                            <input type="radio" name="status-kitchen-hood" id="status-on" value="ON"/>
                                                            <label for="status-on"><b>On</b></label>
                                                        </div>
                                                        <div Class="radio-button">
                                                            <input type="radio" name="status-kitchen-hood" id="status-off" value="OFF" checked/>
                                                            <label
                                                            Class="status-off" for="status-off"><b>OFF</b></label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div Class="center">
                                                    <div Class="status">
                                                        <input type="range" Class="form-range" min="1" max="4" step="0.5" id="customRange3"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div Class="col col-md-4">
                                    <div Class="box">
                                        <div Class="row">
                                            <div Class="col col-4">
                                                <img src="/img/Light_OFF.png" alt="TV_Photo"/>
                                            </div>
                                            <div Class="col col-8">
                                                <div Class="title-device">
                                                    <b>Đèn phòng</b>
                                                </div>
                                                <div Class="center">
                                                    <div Class="status">
                                                        <div Class="radio-button">
                                                            <input type="radio" name="status-kitchen-light" id="status-on" value="ON"/>
                                                            <label for="status-on"><b>On</b></label>
                                                        </div>
                                                        <div Class="radio-button">
                                                            <input type="radio" name="status-kitchen-light" id="status-off" value="OFF" checked/>
                                                            <label
                                                            Class="status-off" for="status-off"><b>OFF</b></label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div Class="center">
                                                    <div Class="status">
                                                        <input type="range" Class="form-range" min="1" max="4" step="0.5" id="customRange3"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div Class="col col-md-4">
                                    <div Class="box">
                                        <div Class="row">
                                            <div Class="col col-4">
                                                <img src="/img/Yellow_Light.png" alt="TV_Photo"/>
                                            </div>
                                            <div Class="col col-8">
                                                <div Class="title-device">
                                                    <b>Yellow light</b>
                                                </div>
                                                <div Class="center">
                                                    <div Class="status">
                                                        <div Class="radio-button">
                                                            <input type="radio" name="status-kitchen-yellowlight" id="status-on" value="ON"/>
                                                            <label for="status-on"><b>On</b></label>
                                                        </div>
                                                        <div Class="radio-button">
                                                            <input type="radio" name="status-kitchen-yellowlight" id="status-off" value="OFF" checked/>
                                                            <label 
                                                            Class="status-off" for="status-off"><b>OFF</b></label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div Class="center">
                                                    <div Class="status">
                                                        <input type="range" Class="form-range" min="17" max="30" step="0.5" id="customRange3"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div Class="col col-md-4">
                                    <div Class="box">
                                        <div Class="row">
                                            <div Class="col col-4">
                                                <img src="/img/ExhaustFan.png" alt="TV_Photo"/>
                                            </div>
                                            <div Class="col col-8">
                                                <div Class="title-device">
                                                    <b>Quạt hút</b>
                                                </div>
                                                <div Class="center">
                                                    <div Class="status">
                                                        <div Class="radio-button">
                                                            <input type="radio" name="status-kitchen-exhaustfan" id="status-on" value="ON"/>
                                                            <label for="status-on"><b>On</b></label>
                                                        </div>
                                                        <div Class="radio-button">
                                                            <input type="radio" name="status-kitchen-exhaustfan" id="status-off" value="OFF" checked/>
                                                            <label
                                                            Class="status-off" for="status-off"><b>OFF</b></label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div Class="center">
                                                    <div Class="status">
                                                        <input type="range" Class="form-range" min="1" max="5" step="0.5" id="customRange3"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div Class="col col-md-4">
                                    <div Class="box">
                                        <div Class="row">
                                            <div Class="col col-4">
                                                <img src="/img/Led.png" alt="TV_Photo"/>
                                            </div>
                                            <div Class="col col-8">
                                                <div Class="title-device">
                                                    <b>Đèn led bếp</b>
                                                </div>
                                                <div Class="center">
                                                    <div Class="status">
                                                        <div Class="radio-button">
                                                            <input type="radio" name="status-kitchen-led" id="status-on" value="ON"/>
                                                            <label for="status-on"><b>On</b></label>
                                                        </div>
                                                        <div Class="radio-button">
                                                            <input type="radio" name="status-kitchen-led" id="status-off" value="OFF" checked/>
                                                            <label
                                                            Class="status-off" for="status-off"><b>OFF</b></label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div Class="center">
                                                    <div Class="status">
                                                        <input type="range" Class="form-range" min="0" max="5" step="0.5" id="customRange3"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}




export default home