import React from 'react';
import {
    Link,
  } from "react-router-dom";

import "./WhiteBox.css";

export default function WhiteBox() {
    return (
        <>
        <div className="white-box">
            <Link className="green" to="/game/1000">English 1000 Words</Link>
        </div>
        <div>
            <img  src="/qr.png" />
        </div>
        </> 
    )
}
