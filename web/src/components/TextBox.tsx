import type {ChangeEvent} from "react";

type TextBoxProps = {
    changeState: (state: string) => void,
    label?: string,
    id?: string
}

function TextBox(props: TextBoxProps) {

    function onChangeText(e: ChangeEvent<HTMLInputElement>) {
        props.changeState(e.currentTarget.value);
    }


    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <input id={props.id} onChange={onChangeText} />
        </>
    );
}

export default TextBox;
