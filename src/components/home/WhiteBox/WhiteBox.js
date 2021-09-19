import React from 'react';
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

import "./WhiteBox.css";

export default function WhiteBox() {
    return (
        <div className="white-box">
            <Link to="/game">English 2000 Words</Link>
        </div>
    )
}
