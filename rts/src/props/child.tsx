import { Component } from "react";

interface ChildProps {
    color: string;
    onClick: () => void;
}

export const Child = (props: ChildProps) => {
    return <div>{props.color}
        <button onClick={props.onClick}>Click Me</button>
    </div>;
};

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
    return <div>{color}
        <button onClick={onClick}>Click Me</button>
    </div>
};
