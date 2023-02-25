import SysHeader from "../../component/SysHeader";
import SysMain from "../../component/SysMain";
import SysFooter from "../../component/SysFooter";
import SysButton from "../../component/SysButton";

function Home(props) {
    const headerOption = {
        left: "菜单",
        mid: "主页",
        right: "更多"
    }
    return (
        <div>
            <SysHeader option={headerOption}></SysHeader>
            <SysMain>
                <SysButton text="保存"/>
            </SysMain>
            <SysFooter></SysFooter>
        </div>
    );
}

export default Home;