import { useHistory } from "react-router-dom";

function HomeButton(){
    let history = useHistory();

    function handleClick() {
        history.push("/homepage")
    }
    return(
        <button type="button" onClick={handleClick}>
            Homepage
        </button>
    );

}
export default HomeButton;