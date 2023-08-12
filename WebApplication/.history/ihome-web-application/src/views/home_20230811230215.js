import axios from "axios";
import React, { Component } from "react";
import { render } from "react-dom";
// import SerialPort from "serialport";

var count = 0;
var status ;

class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isLightOn: true,
          count: 0,
          
        };
    }

    
    handlePostButtonClick = () => { 
        const { isLightOn, count } = this.state;
        const newStatus = !isLightOn;
        const newCount = count + 1;
        const status = newStatus ? 'ON' : 'OFF';

        this.setState({
            isLightOn: newStatus,
            count: newCount,
        });

      // Dữ liệu cần đưa lên Firebase
        const data = {
        id: '1',
        Gas: '20%',
        Temp : "1000",
        Hud : "500",
        Light: status,
        count : newCount
    };

      // Thực hiện yêu cầu POST lên Firebase sử dụng Axios
    axios.post('http://1192.168.0.121:1234/create', data)
    .then(response => {
        console.log('Dữ liệu đã được đưa lên Firebase:', response.data);
    })
    .catch(error => {
        console.error('Lỗi khi đưa dữ liệu lên Firebase:', error);
    });
}


  render() {
    const { data, loading, error } = this.state;

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
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
                        <img src="/img/tv.png" alt="TV_Photo" />
                      </div>
                      <div Class="col col-8">
                        <div Class="title-device">
                          <b>Ti Vi</b>
                        </div>
                        <div Class="center">
                          <div Class="status">
                            <div Class="radio-button">
                              <input
                                type="radio"
                                name="status-livingroom-tv"
                                id="status-on"
                                value="ON"
                              />
                              <label for="status-on">
                                <b>On</b>
                              </label>
                            </div>
                            <div Class="radio-button">
                              <input
                                type="radio"
                                name="status-livingroom-tv"
                                id="status-off"
                                value="OFF"
                                checked
                              />
                              <label Class="status-off" for="status-off">
                                <b>OFF</b>
                              </label>
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
                        <img src="/img/Light_OFF.png" alt="TV_Photo" />
                      </div>
                      <div Class="col col-8">
                        <div Class="title-device">
                          <b>Đèn phòng</b>
                        </div>
                        <div Class="center">
                            {data.map(item => (
                                <div Class="status">
                                    <div Class="radio-button">
                                        <input
                                            type="radio"
                                            name="status-livingroom-light"
                                            id="status-on"
                                            value="ON"
                                            onChange={this.handlePostButtonClick}
                                        />
                                        <label for="status-on">
                                            <b>On</b>
                                        </label>
                                    </div>
                                    <div Class="radio-button">
                                    <input
                                        type="radio"
                                        name="status-livingroom-light"
                                        id="status-off"
                                        value="OFF"
                                        onChange={this.handlePostButtonClick}
                                        checked
                                    />
                                    <label Class="status-off" for="status-off">
                                        <b>OFF</b>
                                    </label>
                                    </div>
                                </div>
                            ))}


                        </div>
                        <div Class="center">
                          <div Class="status">
                            <input
                              type="range"
                              Class="form-range"
                              min="1"
                              max="4"
                              step="0.5"
                              id="customRange3"
                            />
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
                        <img src="/img/Air_Conditioner.png" alt="TV_Photo" />
                      </div>
                      <div Class="col col-8">
                        <div Class="title-device">
                          <b>Máy lạnh</b>
                        </div>
                        <div Class="center">
                          <div Class="status">
                            <div Class="radio-button">
                              <input
                                type="radio"
                                name="status-livingroom-AC"
                                id="status-on"
                                value="ON"
                              />
                              <label for="status-on">
                                <b>On</b>
                              </label>
                            </div>
                            <div Class="radio-button">
                              <input
                                type="radio"
                                name="status-livingroom-AC"
                                id="status-off"
                                value="OFF"
                                checked
                              />
                              <label Class="status-off" for="status-off">
                                <b>OFF</b>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div Class="center">
                          <div Class="status">
                            <input
                              type="range"
                              Class="form-range"
                              min="17"
                              max="30"
                              step="0.5"
                              id="customRange3"
                            />
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
                        <img src="/img/CoolerFan.png" alt="TV_Photo" />
                      </div>
                      <div Class="col col-8">
                        <div Class="title-device">
                          <b>Quạt hơi nước</b>
                        </div>
                        <div Class="center">
                          <div Class="status">
                            <div Class="radio-button">
                              <input
                                type="radio"
                                name="status-livingroom-coolfan"
                                id="status-on"
                                value="ON"
                              />
                              <label for="status-on">
                                <b>On</b>
                              </label>
                            </div>
                            <div Class="radio-button">
                              <input
                                type="radio"
                                name="status-livingroom-coolfan"
                                id="status-off"
                                value="OFF"
                                checked
                              />
                              <label Class="status-off" for="status-off">
                                <b>OFF</b>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div Class="center">
                          <div Class="status">
                            <input
                              type="range"
                              Class="form-range"
                              min="1"
                              max="5"
                              step="0.5"
                              id="customRange3"
                            />
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
                        <img src="/img/CellingFan.png" alt="TV_Photo" />
                      </div>
                      <div Class="col col-8">
                        <div Class="title-device">
                          <b>Quạt trần</b>
                        </div>
                        <div Class="center">
                          <div Class="status">
                            <div Class="radio-button">
                              <input
                                type="radio"
                                name="status-livingroom-fan"
                                id="status-on"
                                value="ON"
                              />
                              <label for="status-on">
                                <b>On</b>
                              </label>
                            </div>
                            <div Class="radio-button">
                              <input
                                type="radio"
                                name="status-livingroom-fan"
                                id="status-off"
                                value="OFF"
                                checked
                              />
                              <label Class="status-off" for="status-off">
                                <b>OFF</b>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div Class="center">
                          <div Class="status">
                            <input
                              type="range"
                              Class="form-range"
                              min="0"
                              max="5"
                              step="0.5"
                              id="customRange3"
                            />
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
                        <img src="/img/hood.png" alt="TV_Photo" />
                      </div>
                      <div Class="col col-8">
                        <div Class="title-device">
                          <b>Hood</b>
                        </div>
                        <div Class="center">
                          <div Class="status">
                            <div Class="radio-button">
                              <input
                                type="radio"
                                name="status-kitchen-hood"
                                id="status-on"
                                value="ON"
                              />
                              <label for="status-on">
                                <b>On</b>
                              </label>
                            </div>
                            <div Class="radio-button">
                              <input
                                type="radio"
                                name="status-kitchen-hood"
                                id="status-off"
                                value="OFF"
                                checked
                              />
                              <label Class="status-off" for="status-off">
                                <b>OFF</b>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div Class="center">
                          <div Class="status">
                            <input
                              type="range"
                              Class="form-range"
                              min="1"
                              max="4"
                              step="0.5"
                              id="customRange3"
                            />
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
                        <img src="/img/Light_OFF.png" alt="TV_Photo" />
                      </div>
                      <div Class="col col-8">
                        <div Class="title-device">
                          <b>Đèn phòng</b>
                        </div>
                        <div Class="center">
                          <div Class="status">
                            <div Class="radio-button">
                              <input
                                type="radio"
                                name="status-kitchen-light"
                                id="status-on"
                                value="ON"
                              />
                              <label for="status-on">
                                <b>On</b>
                              </label>
                            </div>
                            <div Class="radio-button">
                              <input
                                type="radio"
                                name="status-kitchen-light"
                                id="status-off"
                                value="OFF"
                                checked
                              />
                              <label Class="status-off" for="status-off">
                                <b>OFF</b>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div Class="center">
                          <div Class="status">
                            <input
                              type="range"
                              Class="form-range"
                              min="1"
                              max="4"
                              step="0.5"
                              id="customRange3"
                            />
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
                        <img src="/img/Yellow_Light.png" alt="TV_Photo" />
                      </div>
                      <div Class="col col-8">
                        <div Class="title-device">
                          <b>Yellow light</b>
                        </div>
                        <div Class="center">
                          <div Class="status">
                            <div Class="radio-button">
                              <input
                                type="radio"
                                name="status-kitchen-yellowlight"
                                id="status-on"
                                value="ON"
                              />
                              <label for="status-on">
                                <b>On</b>
                              </label>
                            </div>
                            <div Class="radio-button">
                              <input
                                type="radio"
                                name="status-kitchen-yellowlight"
                                id="status-off"
                                value="OFF"
                                checked
                              />
                              <label Class="status-off" for="status-off">
                                <b>OFF</b>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div Class="center">
                          <div Class="status">
                            <input
                              type="range"
                              Class="form-range"
                              min="17"
                              max="30"
                              step="0.5"
                              id="customRange3"
                            />
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
                        <img src="/img/ExhaustFan.png" alt="TV_Photo" />
                      </div>
                      <div Class="col col-8">
                        <div Class="title-device">
                          <b>Quạt hút</b>
                        </div>
                        <div Class="center">
                          <div Class="status">
                            <div Class="radio-button">
                              <input
                                type="radio"
                                name="status-kitchen-exhaustfan"
                                id="status-on"
                                value="ON"
                              />
                              <label for="status-on">
                                <b>On</b>
                              </label>
                            </div>
                            <div Class="radio-button">
                              <input
                                type="radio"
                                name="status-kitchen-exhaustfan"
                                id="status-off"
                                value="OFF"
                                checked
                              />
                              <label Class="status-off" for="status-off">
                                <b>OFF</b>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div Class="center">
                          <div Class="status">
                            <input
                              type="range"
                              Class="form-range"
                              min="1"
                              max="5"
                              step="0.5"
                              id="customRange3"
                            />
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
                        <img src="/img/Led.png" alt="TV_Photo" />
                      </div>
                      <div Class="col col-8">
                        <div Class="title-device">
                          <b>Đèn led bếp</b>
                        </div>
                        <div Class="center">
                          <div Class="status">
                            <div Class="radio-button">
                              <input
                                type="radio"
                                name="status-kitchen-led"
                                id="status-on"
                                value="ON"
                              />
                              <label for="status-on">
                                <b>On</b>
                              </label>
                            </div>
                            <div Class="radio-button">
                              <input
                                type="radio"
                                name="status-kitchen-led"
                                id="status-off"
                                value="OFF"
                                checked
                              />
                              <label Class="status-off" for="status-off">
                                <b>OFF</b>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div Class="center">
                          <div Class="status">
                            <input
                              type="range"
                              Class="form-range"
                              min="0"
                              max="5"
                              step="0.5"
                              id="customRange3"
                            />
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
    );
  }
}

export default home;
