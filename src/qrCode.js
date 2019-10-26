import React, { Component } from "react";

const liff = window.liff;

function scanCode() {
  liff.scanCode().then(result => {
    const stringifiedResult = JSON.stringify(result);
    alert(stringifiedResult);
    document.getElementById("scanCode").textContent = stringifiedResult;
  });
}

export default class qrCode extends Component {
  render() {
    return scanCode;
  }
}
