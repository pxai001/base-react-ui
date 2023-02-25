import React from "react";
import {handleUndefined} from "../js/StringUtils";

function SysButton(props) {
    let click = handleUndefined(props.click);
    let show = handleUndefined(props.show, true);
    let className = handleUndefined(props.className, "sys-btn");
    const btnHtml = <div className={className}
                         style={{display: show ? "block" : "none"}}
                         onClick={click}>{props.text}</div>;
    return (btnHtml);
}

export default SysButton;