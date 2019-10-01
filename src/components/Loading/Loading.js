import React from 'react';
import {
    Spinner
} from 'reactstrap';

const style = {
    height: '5rem',
    width: '5rem'
}

const Loading = () => (
    <div className="d-flex flex-column justify-content-center">
        <div className="my-2 mx-2">
            <Spinner
                color="secondary"
                style={style}
            />
        </div>
        Loading... Please, wait!
    </div>
);

export default Loading;