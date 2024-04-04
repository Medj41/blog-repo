 import { Link } from "react-router-dom"

 export default function NotFound(){

    return(
<div className="not-found">
    <h1>Sorry</h1>
    <p>this page can not be foudn</p>
    <Link to="/"> Go back to the home page</Link>
</div>    )
 }