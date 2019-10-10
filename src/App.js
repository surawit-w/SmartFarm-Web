import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div class="App font">
        <h1>ลงทะเบียนเกษตรกรใหม่</h1>
        <input class="line-id" placeholder="Line-ID" disabled />
        <p>ชื่อเกษตรกร</p>
        <input class="farmer-name" placeholder="ชื่อ-นามสกุล" type="text" />
        <p>เบอร์โทรศัพท์</p>
        <input class="farmer-phone" placeholder="0803205554" maxLength="10" />
      </div>
    );
  }
}
