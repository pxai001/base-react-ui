import React, {AnchorHTMLAttributes, ButtonHTMLAttributes, FC} from "react";
import {handleUndefined} from "../js/StringUtils";

interface BaseComponentProps {
    children: React.ReactNode;
}

type NativeButtonProps = BaseComponentProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseComponentProps & AnchorHTMLAttributes<HTMLElement>
export type ComponentProps = Partial<NativeButtonProps & AnchorButtonProps>


export const SysFooter: FC<ComponentProps> = (props) => {
    const {
        children,
    } = props
    let show = handleUndefined(props.show, true);
    return (
        <div>
            <div className="footer"
                 style={{display: show ? "block" : "none"}}>
                {children}
            </div>
        </div>
    );
}
export default SysFooter;