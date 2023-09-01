import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const PageNotFound = () => {
    const history = useHistory();

    return <div className="body">
        <div className="page-not-found">
            <div className="page-container">
                <div className="title">Sorry, we cant find your page.</div>
                <div className="seperate"></div>
                <div className="message">The page you're looking for is no longer available or has moved.
                    Please try our improved site search to find what you're looking for.
                </div>
                <Button variant="success" size="sm" onClick={() => history.push(window.history.go(-1))}
                 className="go-back-btn">GO BACK</Button>
            </div>
          </div>
    </div>
}

export default PageNotFound;