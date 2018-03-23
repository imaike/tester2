import React, { Component } from "react";
import Platform from "react-platform-js";
import "./BrowserCheck.css";

class BrowserCheck extends Component {
  render() {
    const version = Platform.BrowserVersion;
    console.log("version " + JSON.stringify(version));

    let shortVersion = Number.parseInt(version.slice(0, 2), 10);
    console.log("short version " + JSON.stringify(shortVersion));

    const opSystem = Platform.OS;
    console.log("opsystem " + JSON.stringify(opSystem));

    const userAgent = Platform.UA;
    console.log("useragent " + JSON.stringify(userAgent));

    let browser = Platform.Browser;
    console.log("browser " + JSON.stringify(browser));

    // testing
    // browser = "Edge";
    // shortVersion = 44;

    // check for supported browsers
    if (
      browser === "Chrome" ||
      browser === "Firefox" ||
      browser === "Chromium"
    ) {
      // supported browsers
      // check version is up to date
      if (+shortVersion < 53) {
        console.log(
          JSON.stringify("out of date browser version " + shortVersion)
        );
        // out of date browser
        return (
          <div className="shouldUpdate">
            <p>
              Your browser:
              {" " + browser + " " + shortVersion}
              <br />Please update your browser before using Ken-Q Analysis
            </p>
          </div>
        );
      } else {
        // up to date browser
        console.log(JSON.stringify(browser + " " + version));
        return (
          <div className="goodToGo">
            <p>
              Your browser:
              {" " + browser + " " + shortVersion}
              <br />Ready for analysis
            </p>
          </div>
        );
      }
    } else {
      // unsupported browsers
      console.log(JSON.stringify("outdated browser"));
      return (
        <div className="shouldUpdate">
          <p>
            You seem to be using
            {" " + browser + " " + shortVersion}
            <br />Please use one of the supported browsers.
          </p>
        </div>
      );
    }
  }
}

export default BrowserCheck;
