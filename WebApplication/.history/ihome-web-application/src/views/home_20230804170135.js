// import axios from "axios";
// import React, { Component } from "react";
// import { Routes, Route, Link } from "react-router-dom";


function home() {
    return(
        <div>
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
                                                        <input type="radio" name="status-livingroom-light" id="status-on" value="ON"/>
                                                        <label for="status-on"><b>On</b></label>
                                                    </div>
                                                    <div Class="radio-button">
                                                        <input type="radio" name="status-livingroom-light" id="status-off" value="OFF" checked/>
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
        </div>
    )
}

export default home