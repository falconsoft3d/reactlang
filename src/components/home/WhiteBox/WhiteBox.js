import React from 'react';
import {
    Link,
  } from "react-router-dom";

import "./WhiteBox.css";

export default function WhiteBox() {
    return (
        <div className="white-box">
            <Link to="/game/2000">English 2000 Words</Link>
        </div>
    )
}
