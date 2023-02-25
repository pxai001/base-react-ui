import React, {AnchorHTMLAttributes, ButtonHTMLAttributes, FC} from "react";
import {handleUndefined} from "../js/StringUtils";

interface BaseComponentProps {
    children: React.ReactNode;
}

type NativeButtonProps = BaseComponentProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseComponentProps & AnchorHTMLAttributes<HTMLElement>
export type ComponentProps = Partial<NativeButtonProps & AnchorButtonProps>


export const SysMain: FC<ComponentProps> = (props) => {
    const {
        children,
    } = props;
    const className = handleUndefined(props.className, "main")
    return (
        <div>
            <div className={className}>
                {children}
            </div>
        </div>
    );
}
export default SysMain;