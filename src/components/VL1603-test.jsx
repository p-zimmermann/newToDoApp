 const VL1603 = ({children, onSmash}) => {
    const logOut = () => {
        alert ("Hallo")
    }
    return(
        //eventHandler
        <button onClick={onSmash}>
            {children}
        </button>
    )

 }

 export default VL1603;