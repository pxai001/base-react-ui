import {Route, Routes, useNavigate} from "react-router-dom";
import TodoCard from "../tool/todoCard/TodoCard";
import SysFooter from "../../component/SysFooter";
import SysMain from "../../component/SysMain";
import React, {useState} from "react";
import {AllApplication, Close} from '@icon-park/react';
function Home(props) {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();
    return (
        <div>
            <SysMain className="bottom-main">
                <Routes>
                    <Route path="/" element={<TodoCard/>}/>
                    <Route path="/todo" element={<TodoCard/>}/>
                </Routes>
            </SysMain>
            <SysFooter>
                <div onClick={() => showMenuList()} className="footer-btn">
                    <AllApplication/>
                </div>
            </SysFooter>
            <div className="sys-mask" style={{display: showMenu ? "block" : "none"}}>
                <div className="bottom-main">
                </div>
                <SysMain className="bottom-main">
                    <div className="sys-menu-btn" onClick={() => goPage("/todo")}>TODO</div>
                </SysMain>
                <SysFooter>
                    <div onClick={() => setShowMenu(false)} className="footer-btn">
                        <Close/>
                    </div>
                </SysFooter>
            </div>
        </div>
    );

    function showMenuList() {
        setShowMenu(true);
    }

    function goPage(page) {
        navigate(page);
        setShowMenu(false);
    }
}

export default Home;