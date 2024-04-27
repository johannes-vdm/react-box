import {Link} from "react-router-dom";

export const Home = () => {
    return (
        <>
            <ul>
                <li><Link to={'/contact-form'}>Contact Form</Link>
                </li>
            </ul>
            <h1>contact form should be here</h1>
        </>
    )
}
