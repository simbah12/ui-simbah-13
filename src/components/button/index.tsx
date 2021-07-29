import React from "react";

export interface ButtonProps {
    size: 'sm' | 'lg' | 'xl',
    children: any,
    value?: any,
    classname?: any
}

export interface ButtonState {

}

class Button extends React.Component<ButtonProps, ButtonState> {
    constructor(props: ButtonProps) {
        super(props);
    }
    render() {
        const {children} = this.props
        return (
            <button>{children}</button>
        );
    }
}

export default Button;