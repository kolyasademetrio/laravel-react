import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ErrorPage extends Component {
    render(){
        const imageStyles = {
            width: '60%',
            maxWidth: '100%',
            height: 'auto',
            display: 'inline-block',
        };

        const boxStyles = {
            display: 'block',
            textAlign: 'center',
        };

        return (
            <Link className="error-page-link" to="/" style={boxStyles}>
                <img className="error-page-image"
                     src="/images/404.jpg"
                     alt="404 Page not found"
                     style={imageStyles}
                />
            </Link>
        );
    }
}

export default ErrorPage;