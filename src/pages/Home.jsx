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
                <li><Link to={'/search-chinese'}>Search Chinese</Link>
                </li>
                <li><Link to={'/retaining-state'}>Retaining State</Link>
                </li>
                <li><Link to={'/keys-order'}>Keys Order</Link>
                </li>
                <li><Link to={'/no-index'}>No index as key</Link>
                </li>
                <li><Link to={'/react-reducer'}>React reducer</Link>
                </li>
                <li><Link to={'/advanced-state'}>Advanced state</Link>
                </li>
            </ul>
        </>
    )
}
