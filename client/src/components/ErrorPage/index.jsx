import React from 'react';

function ErrorPage() {
    return (
        <div className="error-container">
            <h1 className="error-title">Oops!</h1>
            <p className="error-message">The page you're looking for doesn't exist or an error occurred.</p>
            <a href="/" className="home-link">Go back to the homepage</a>
        </div>
    );
}

export default ErrorPage;
