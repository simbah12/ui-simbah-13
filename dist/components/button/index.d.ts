import React from "react";
export interface ButtonProps {
    size: 'sm' | 'lg' | 'xl';
    children: any;
    value?: any;
    classname?: any;
}
export interface ButtonState {
}
declare class Button extends React.Component<ButtonProps, ButtonState> {
    constructor(props: ButtonProps);
    render(): JSX.Element;
}
export default Button;
