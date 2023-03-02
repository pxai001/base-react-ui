import {Route, Routes, useNavigate} from "react-router-dom";
import TodoCard from "../tool/todoCard/TodoCard";
import SysFooter from "../../component/SysFooter";
import SysMain from "../../component/SysMain";
import React, {useState} from "react";
import {ApplicationMenu, Close} from '@icon-park/react';
import SysHeader from "../../component/SysHeader";

function Home() {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();
    const headerOption = {
        left: "Nature Tool",
        mid: "",
        right: <ApplicationMenu/>,
        rightClick: () => setShowMenu(true)
    };

    return (
        <div>
            <SysHeader option={headerOption}/>
            <SysMain className="top-main">
                <Routes>
                    <Route path="/" element={<TodoCard/>}/>
                    <Route path="/todo" element={<TodoCard/>}/>
                </Routes>
            </SysMain>
            <div className="sys-mask" style={{display: showMenu ? "block" : "none"}}>
                <div className="bottom-main">
                </div>
                <SysMain className="bottom-main">
                    <div className="sys-menu-btn" onClick={(e) => goPage("/todo", e)}>TODO</div>
                </SysMain>
                <SysFooter>
                    <div onClick={() => setShowMenu(false)} className="footer-btn">
                        <Close/>
                    </div>
                </SysFooter>
            </div>
        </div>
    );

    function goPage(page, e) {
        navigate(page);
        setShowMenu(false);
        e.stopPropagation();
    }
}

export default Home;