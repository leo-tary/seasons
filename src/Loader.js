import React from 'react';

const Loader = (props) => {

    return (

            <div className="ui active dimmer">
                <div className="ui massive text loader">{props.loaderText}</div>
            </div>            

    );

}

Loader.defaultProps = {
    loaderText: 'Loading!!...'
}

export default Loader;