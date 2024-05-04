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
                <li><Link to={'/v7-error-form'}>V7 Error Form</Link>
                </li>
                <li><Link to={'/speed-of-react'}>Speed of React</Link>
                </li>
                <li><Link to={'/packing-list'}>Packing list</Link>
                </li>
            </ul>
        </>
    )
}
