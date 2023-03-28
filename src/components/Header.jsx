import {useState} from 'react';
import useChangeText from './customHooks/useChangeText';

const Header = ({title, newClass}) => {
    const [headerTxt, setHeaderText] = useState("Todo App");
    const [text, handleText] = useChangeText("TODO")
    const [quoteText, handleQuoteText] = useChangeText("quota")
    return (
        <>
        <input value={text} onChange= {handleText}></input>
        <h1 className = {newClass}>{text}</h1>
    
        </>
    )
}

export default Header;