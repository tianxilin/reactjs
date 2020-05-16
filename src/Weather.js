import React from 'react';
//import ReactDOM from 'react-dom';
import './Weather.css';
import 'font-awesome/less/font-awesome.less';
//import 'react-fontawesome';

function Weather() {
    return (
      <div className="Card">
        <header>
            <div className="left">
                <div className="left-top">
                    <h1>12℃</h1>
                    <a>CLOUDY</a>
                </div>
                <div className="left-bottom">
                    <div className="left-l">
                        <a>HUMIDITY</a>
                        <a>64%</a>
                    </div>
                    <span>|</span>
                    <div className="left-r">
                        <a>WIND</a>
                        <a>12 K/M</a>
                    </div>
                </div>
            </div>
            
            <div className="right">
                <span>FRANCE</span>
                <span>__________</span>
            </div>
        </header>

        <body>
            <div className="body-l">
                <div className="body-l-t">
                    <i className="fa fa-twitter"></i>
                    <span>Twitter Feed</span>
                    <a href="#">#France</a>
                </div>
                <div className="body-l-b">
                <i class="fa fa-circle"></i>
                <a>asdwdad asd asd wd s asd awd as  waasddwd.</a>
                <br />
                <br />
                <i class="fa fa-circle"></i>
                <a>asdwdad asd asd wd s asd awd as  waasddwd.</a>
                </div>
            </div>

            <div className="body-r">
            <div className="MON">
                    <h1>MON</h1>
                    <h2>9℃</h2>
                    <a>RAINING</a>
                </div>
                <div className="MON">
                    <h1>TUE</h1>
                    <h2>15℃</h2>
                    <a>SUNNY</a>
                </div>
                <div className="MON">
                    <h1>WED</h1>
                    <h2>11℃</h2>
                    <a>CLOUDY</a>
                </div>
                <div className="MON">
                    <h1>THU</h1>
                    <h2>7℃</h2>
                    <a>STORM</a>
                </div>
                <div className="MON">
                    <h1>FRI</h1>
                    <h2>18℃</h2>
                    <a>SUNNY</a>
                </div>

            </div>
        </body>

        <footer>
            <span>Design by Joey!</span>
        </footer>
      </div>
    );
  }
  
  export default Weather;