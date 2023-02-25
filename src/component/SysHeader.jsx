import {handleUndefined, isUndefined} from "../js/StringUtils";
import React from "react";

function SysHeader(props) {
    if (isUndefined(props.option)) {
        props.option = {
            left: "",
            mid: "",
            right: ""
        }
    }
    let left = handleUndefined(props.option.left, "");
    let leftClick = handleUndefined(props.option.leftClick, undefined);
    let mid = handleUndefined(props.option.mid, "");
    let right = handleUndefined(props.option.right, "");
    let rightClick = handleUndefined(props.option.rightClick, undefined);
    let show = handleUndefined(props.show, true);
    return (
        <div style={{display: show ? "block" : "none"}}>
            <div className="header">
                <div className="header-nav-left" onClick={() => leftClick()}>{left}</div>
                <div className="header-nav-mid">{mid}</div>
                <div className="header-nav-right" onClick={() => rightClick()}>{right}</div>
            </div>
        </div>
    )
}

export default SysHeader;