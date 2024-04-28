import {Link} from "react-router-dom";

export const Home = () => {
    return (
        <>
            <ul>
                <li><Link to={'/contact-form'}>Contact Form</Link>
                </li>
                <li><Link to={'/error-form'}>Error Form</Link>
                </li>
                <li><Link to={'/v6-error-form'}>V6 Error Form</Link>
                </li>
            </ul>
            <h1>contact form should be here</h1>
        </>
    )
}
