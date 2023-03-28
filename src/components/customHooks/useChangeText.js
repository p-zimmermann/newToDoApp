import { FormControlUnstyledContext } from "@mui/base";
import { useState, useEffect } from "react";

export default function(iniText) {
    const [text, setText] = useState (iniText)

    const handleText = (e) => {
        setText(e.target.value)
    }
    useEffect(() => {

    }, [text ])
    return [text, handleText]
}