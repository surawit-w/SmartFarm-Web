import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { async } from "q";

const liff = window.liff;

export default class App extends Component {
  initialize() {
    console.log("Entering initialize state...");
    liff.init({ liffId: "1610155283-WqRpOKwB" }, async () => {
      let profile = await liff.getProfile();
      this.setState({
        line_id: profile.userId,
        line_pic: profile.pictureUrl
      });
      console.log("Get UID completed going to register page...");
      this.verifyUID();
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      line_id: "",
      // line_id: "U50240c7e4d230739b2a4343c4a1da542",
      line_pic: "",
      loading: false
    };
    this.initialize = this.initialize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("load", this.initialize);
    document.title = "Register";
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     userLineID: "",
  //     pictureUrl: ""
  //   };
  // }

  // getProfile() {
  //   liff.init(async () => {
  //     let getProfile = await liff.getProfile();
  //     this.setState({
  //       userLineID: getProfile.userId,
  //       pictureUrl: getProfile.pictureUrl
  //     });
  //   });
  // }

  // sendMessage() {
  //   liff
  //     .sendMessage([
  //       {
  //         type: "text",
  //         text: "Hi LIFF"
  //       }
  //     ])
  //     .then(() => {
  //       liff.closeWindow();
  //     });
  // }

  // clossLIFF() {
  //   liff.closeWindow();
  // }

  render() {
    const { line_id, loading, line_pic } = this.state;
    return (
      <div class="App font">
        <h1>ลงทะเบียนเกษตรกรใหม่</h1>
        <div>
          <img width="40%" src={line_pic}></img>
        </div>
        <input
          class="line-id"
          value={"Line ID: " + line_id}
          name={"Line ID: " + line_id}
          disabled
        />

        <p>ชื่อเกษตรกร</p>
        <input class="farmer-name" placeholder="ชื่อ-นามสกุล" type="text" />
        <p>เบอร์โทรศัพท์</p>
        <input class="farmer-phone" placeholder="0803205554" maxLength="10" />
        <button class="button">ลงทะเบียน</button>
      </div>
    );
  }
}
