interface ChildProps {
    color: string;
}

export const Child = (props: ChildProps) => {
    return <div>{props.color}</div>;
};
