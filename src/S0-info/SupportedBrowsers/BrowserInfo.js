import "./BrowserInfo.css";
import React, { Component } from "react";
import chromeImage from "./../S1-images/Google.png";
import firefoxImage from "./../S1-images/firefox.png";
import chromiumImage from "./../S1-images/Chromium.png";
//import edgeImage from './../S1-images/edge.png';

class BrowserInfo extends Component {
    render() {
        return (
            <div className="supportedBrowsers flex-container">
              <div className="flex-item">
                <img src={ chromeImage } alt="Chrome" />
                <p>Google Chrome</p>
                <p className="browserSubText">
                  macOS, Windows
                  <br /> version 53 or newer
                </p>
              </div>
              <div className="flex-item">
                <img src={ firefoxImage } alt="Firefox" />
                <p>Mozilla Firefox</p>
                <p className="browserSubText">
                  macOS, Windows
                  <br /> version 53 or newer
                </p>
              </div>
              <div className="flex-item">
                <img src={ chromiumImage } alt="Chromium" />
                <p>Google Chromium</p>
                <p className="browserSubText">
                  Linux
                  <br /> version 53 or newer
                </p>
              </div>
            </div>
            );
    }
}

export default BrowserInfo;
