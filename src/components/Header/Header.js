import {
    Link
} from "react-router-dom";
import "./Header.css"
export default function Header(){
    return(
        <div className={"header"}>
                <ul>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/create">Create</Link>
                    </li>
                </ul>
        </div>

    )
}
