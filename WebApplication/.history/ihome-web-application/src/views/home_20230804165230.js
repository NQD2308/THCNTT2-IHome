// import axios from "axios";
// import React, { Component } from "react";
// import { Routes, Route, Link } from "react-router-dom";

function home() {
    return(
        <div>
            <section class="part">
                <div class="title">
                    <h4>Living room</h4>
                </div>
                <div class="rooms">
                    <div class="container">
                        <div class="row">
                            <div class="col col-md-4">
                                <div class="box">
                                    <div class="row">
                                        <div class="col col-4">
                                            <img src="/img/tv.png" alt="TV_Photo"/>
                                        </div>
                                        <div class="col col-8">
                                            <div class="title-device">
                                                <b>Ti Vi</b>
                                            </div>
                                            <div class="center">
                                                <div class="status">
                                                    <div class="radio-button">
                                                        <input type="radio" name="status-livingroom-tv" id="status-on" value="ON"/>
                                                        <label for="status-on"><b>On</b></label>
                                                    </div>
                                                    <div class="radio-button">
                                                        <input type="radio" name="status-livingroom-tv" id="status-off" value="OFF" checked/>
                                                        <label
                                                        class="status-off" for="status-off"><b>OFF</b></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col col-md-4">
                                <div class="box">
                                    <div class="row">
                                        <div class="col col-4">
                                            <img src="/img/Light_OFF.png" alt="TV_Photo"/>
                                        </div>
                                        <div class="col col-8">
                                            <div class="title-device">
                                                <b>Đèn phòng</b>
                                            </div>
                                            <div class="center">
                                                <div class="status">
                                                    <div class="radio-button">
                                                        <input type="radio" name="status-livingroom-light" id="status-on" value="ON"/>
                                                        <label for="status-on"><b>On</b></label>
                                                    </div>
                                                    <div class="radio-button">
                                                        <input type="radio" name="status-livingroom-light" id="status-off" value="OFF" checked/>
                                                        <label
                                                        class="status-off" for="status-off"><b>OFF</b></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="center">
                                                <div class="status">
                                                    <input type="range" class="form-range" min="1" max="4" step="0.5" id="customRange3"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col col-md-4">
                                <div class="box">
                                    <div class="row">
                                        <div class="col col-4">
                                            <img src="/img/Air_Conditioner.png" alt="TV_Photo"/>
                                        </div>
                                        <div class="col col-8">
                                            <div class="title-device">
                                                <b>Máy lạnh</b>
                                            </div>
                                            <div class="center">
                                                <div class="status">
                                                    <div class="radio-button">
                                                        <input type="radio" name="status-livingroom-AC" id="status-on" value="ON"/>
                                                        <label for="status-on"><b>On</b></label>
                                                    </div>
                                                    <div class="radio-button">
                                                        <input type="radio" name="status-livingroom-AC" id="status-off" value="OFF" checked/>
                                                        <label 
                                                        class="status-off" for="status-off"><b>OFF</b></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="center">
                                                <div class="status">
                                                    <input type="range" class="form-range" min="17" max="30" step="0.5" id="customRange3"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col col-md-4">
                                <div class="box">
                                    <div class="row">
                                        <div class="col col-4">
                                            <img src="/img/CoolerFan.png" alt="TV_Photo"/>
                                        </div>
                                        <div class="col col-8">
                                            <div class="title-device">
                                                <b>Quạt hơi nước</b>
                                            </div>
                                            <div class="center">
                                                <div class="status">
                                                    <div class="radio-button">
                                                        <input type="radio" name="status-livingroom-coolfan" id="status-on" value="ON"/>
                                                        <label for="status-on"><b>On</b></label>
                                                    </div>
                                                    <div class="radio-button">
                                                        <input type="radio" name="status-livingroom-coolfan" id="status-off" value="OFF" checked/>
                                                        <label
                                                        class="status-off" for="status-off"><b>OFF</b></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="center">
                                                <div class="status">
                                                    <input type="range" class="form-range" min="1" max="5" step="0.5" id="customRange3"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col col-md-4">
                                <div class="box">
                                    <div class="row">
                                        <div class="col col-4">
                                            <img src="/img/CellingFan.png" alt="TV_Photo"/>
                                        </div>
                                        <div class="col col-8">
                                            <div class="title-device">
                                                <b>Quạt trần</b>
                                            </div>
                                            <div class="center">
                                                <div class="status">
                                                    <div class="radio-button">
                                                        <input type="radio" name="status-livingroom-fan" id="status-on" value="ON"/>
                                                        <label for="status-on"><b>On</b></label>
                                                    </div>
                                                    <div class="radio-button">
                                                        <input type="radio" name="status-livingroom-fan" id="status-off" value="OFF" checked/>
                                                        <label
                                                        class="status-off" for="status-off"><b>OFF</b></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="center">
                                                <div class="status">
                                                    <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3"/>
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

            <section class="part">
                <div class="title">
                    <h4>Kitchen</h4>
                </div>
                <div class="rooms">
                    <div class="container">
                        <div class="row">
                            <div class="col col-md-4">
                                <div class="box">
                                    <div class="row">
                                        <div class="col col-4">
                                            <img src="/img/hood.png" alt="TV_Photo"/>
                                        </div>
                                        <div class="col col-8">
                                            <div class="title-device">
                                                <b>Hood</b>
                                            </div>
                                            <div class="center">
                                                <div class="status">
                                                    <div class="radio-button">
                                                        <input type="radio" name="status-kitchen-hood" id="status-on" value="ON"/>
                                                        <label for="status-on"><b>On</b></label>
                                                    </div>
                                                    <div class="radio-button">
                                                        <input type="radio" name="status-kitchen-hood" id="status-off" value="OFF" checked/>
                                                        <label
                                                        class="status-off" for="status-off"><b>OFF</b></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="center">
                                                <div class="status">
                                                    <input type="range" class="form-range" min="1" max="4" step="0.5" id="customRange3"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col col-md-4">
                                <div class="box">
                                    <div class="row">
                                        <div class="col col-4">
                                            <img src="/img/Light_OFF.png" alt="TV_Photo"/>
                                        </div>
                                        <div class="col col-8">
                                            <div class="title-device">
                                                <b>Đèn phòng</b>
                                            </div>
                                            <div class="center">
                                                <div class="status">
                                                    <div class="radio-button">
                                                        <input type="radio" name="status-kitchen-light" id="status-on" value="ON"/>
                                                        <label for="status-on"><b>On</b></label>
                                                    </div>
                                                    <div class="radio-button">
                                                        <input type="radio" name="status-kitchen-light" id="status-off" value="OFF" checked/>
                                                        <label
                                                        class="status-off" for="status-off"><b>OFF</b></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="center">
                                                <div class="status">
                                                    <input type="range" class="form-range" min="1" max="4" step="0.5" id="customRange3"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col col-md-4">
                                <div class="box">
                                    <div class="row">
                                        <div class="col col-4">
                                            <img src="/img/Yellow_Light.png" alt="TV_Photo"/>
                                        </div>
                                        <div class="col col-8">
                                            <div class="title-device">
                                                <b>Yellow light</b>
                                            </div>
                                            <div class="center">
                                                <div class="status">
                                                    <div class="radio-button">
                                                        <input type="radio" name="status-kitchen-yellowlight" id="status-on" value="ON"/>
                                                        <label for="status-on"><b>On</b></label>
                                                    </div>
                                                    <div class="radio-button">
                                                        <input type="radio" name="status-kitchen-yellowlight" id="status-off" value="OFF" checked/>
                                                        <label 
                                                        class="status-off" for="status-off"><b>OFF</b></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="center">
                                                <div class="status">
                                                    <input type="range" class="form-range" min="17" max="30" step="0.5" id="customRange3"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col col-md-4">
                                <div class="box">
                                    <div class="row">
                                        <div class="col col-4">
                                            <img src="/img/ExhaustFan.png" alt="TV_Photo"/>
                                        </div>
                                        <div class="col col-8">
                                            <div class="title-device">
                                                <b>Quạt hút</b>
                                            </div>
                                            <div class="center">
                                                <div class="status">
                                                    <div class="radio-button">
                                                        <input type="radio" name="status-kitchen-exhaustfan" id="status-on" value="ON"/>
                                                        <label for="status-on"><b>On</b></label>
                                                    </div>
                                                    <div class="radio-button">
                                                        <input type="radio" name="status-kitchen-exhaustfan" id="status-off" value="OFF" checked/>
                                                        <label
                                                        class="status-off" for="status-off"><b>OFF</b></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="center">
                                                <div class="status">
                                                    <input type="range" class="form-range" min="1" max="5" step="0.5" id="customRange3"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col col-md-4">
                                <div class="box">
                                    <div class="row">
                                        <div class="col col-4">
                                            <img src="/img/Led.png" alt="TV_Photo"/>
                                        </div>
                                        <div class="col col-8">
                                            <div class="title-device">
                                                <b>Đèn led bếp</b>
                                            </div>
                                            <div class="center">
                                                <div class="status">
                                                    <div class="radio-button">
                                                        <input type="radio" name="status-kitchen-led" id="status-on" value="ON"/>
                                                        <label for="status-on"><b>On</b></label>
                                                    </div>
                                                    <div class="radio-button">
                                                        <input type="radio" name="status-kitchen-led" id="status-off" value="OFF" checked/>
                                                        <label
                                                        class="status-off" for="status-off"><b>OFF</b></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="center">
                                                <div class="status">
                                                    <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3"/>
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

            <section class="part">
                <div class="title">
                    <h4>Master room</h4>
                </div>
                <div class="rooms">
                    <div class="container">
                        <div class="row">
                            <div class="col col-md-4">
                                <div class="box">
                                    <div class="row">
                                        <div class="col col-4">
                                            <img src="/img/hood.png" alt="TV_Photo"/>
                                        </div>
                                        <div class="col col-8">
                                            <div class="title-device">
                                                <b>Hood</b>
                                            </div>
                                            <div class="center">
                                                <div class="status">
                                                    <div class="radio-button">
                                                        <input type="radio" name="status-kitchen-hood" id="status-on" value="ON"/>
                                                        <label for="status-on"><b>On</b></label>
                                                    </div>
                                                    <div class="radio-button">
                                                        <input type="radio" name="status-kitchen-hood" id="status-off" value="OFF" checked/>
                                                        <label
                                                        class="status-off" for="status-off"><b>OFF</b></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="center">
                                                <div class="status">
                                                    <input type="range" class="form-range" min="1" max="4" step="0.5" id="customRange3"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col col-md-4">
                                <div class="box">
                                    <div class="row">
                                        <div class="col col-4">
                                            <img src="/img/Light_OFF.png" alt="TV_Photo"/>
                                        </div>
                                        <div class="col col-8">
                                            <div class="title-device">
                                                <b>Đèn phòng</b>
                                            </div>
                                            <div class="center">
                                                <div class="status">
                                                    <div class="radio-button">
                                                        <input type="radio" name="status-kitchen-light" id="status-on" value="ON"/>
                                                        <label for="status-on"><b>On</b></label>
                                                    </div>
                                                    <div class="radio-button">
                                                        <input type="radio" name="status-kitchen-light" id="status-off" value="OFF" checked/>
                                                        <label
                                                        class="status-off" for="status-off"><b>OFF</b></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="center">
                                                <div class="status">
                                                    <input type="range" class="form-range" min="1" max="4" step="0.5" id="customRange3"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col col-md-4">
                                <div class="box">
                                    <div class="row">
                                        <div class="col col-4">
                                            <img src="/img/Yellow_Light.png" alt="TV_Photo"/>
                                        </div>
                                        <div class="col col-8">
                                            <div class="title-device">
                                                <b>Yellow light</b>
                                            </div>
                                            <div class="center">
                                                <div class="status">
                                                    <div class="radio-button">
                                                        <input type="radio" name="status-kitchen-yellowlight" id="status-on" value="ON"/>
                                                        <label for="status-on"><b>On</b></label>
                                                    </div>
                                                    <div class="radio-button">
                                                        <input type="radio" name="status-kitchen-yellowlight" id="status-off" value="OFF" checked/>
                                                        <label 
                                                        class="status-off" for="status-off"><b>OFF</b></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="center">
                                                <div class="status">
                                                    <input type="range" class="form-range" min="17" max="30" step="0.5" id="customRange3"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col col-md-4">
                                <div class="box">
                                    <div class="row">
                                        <div class="col col-4">
                                            <img src="/img/ExhaustFan.png" alt="TV_Photo"/>
                                        </div>
                                        <div class="col col-8">
                                            <div class="title-device">
                                                <b>Quạt hút</b>
                                            </div>
                                            <div class="center">
                                                <div class="status">
                                                    <div class="radio-button">
                                                        <input type="radio" name="status-kitchen-exhaustfan" id="status-on" value="ON"/>
                                                        <label for="status-on"><b>On</b></label>
                                                    </div>
                                                    <div class="radio-button">
                                                        <input type="radio" name="status-kitchen-exhaustfan" id="status-off" value="OFF" checked/>
                                                        <label
                                                        class="status-off" for="status-off"><b>OFF</b></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="center">
                                                <div class="status">
                                                    <input type="range" class="form-range" min="1" max="5" step="0.5" id="customRange3"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col col-md-4">
                                <div class="box">
                                    <div class="row">
                                        <div class="col col-4">
                                            <img src="/img/Led.png" alt="TV_Photo"/>
                                        </div>
                                        <div class="col col-8">
                                            <div class="title-device">
                                                <b>Đèn led bếp</b>
                                            </div>
                                            <div class="center">
                                                <div class="status">
                                                    <div class="radio-button">
                                                        <input type="radio" name="status-kitchen-led" id="status-on" value="ON"/>
                                                        <label for="status-on"><b>On</b></label>
                                                    </div>
                                                    <div class="radio-button">
                                                        <input type="radio" name="status-kitchen-led" id="status-off" value="OFF" checked/>
                                                        <label
                                                        class="status-off" for="status-off"><b>OFF</b></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="center">
                                                <div class="status">
                                                    <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3"/>
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