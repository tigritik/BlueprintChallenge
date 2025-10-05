import type {ChangeEvent} from "react";

type TextBoxProps = {
    changeState: (state: string) => void
}

function TextBox(props: TextBoxProps) {

    function onChangeText(e: ChangeEvent<HTMLInputElement>) {
        props.changeState(e.currentTarget.value)
    }


    return <input onChange={onChangeText} />;
}

export default TextBox;
