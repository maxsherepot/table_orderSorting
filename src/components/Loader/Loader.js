import React from 'react';
import "./style.css"




function Loader() {
    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="lds-ellipsis"><div></div><div></div><div></div>
            </div>
        </div>
    )
}



export default Loader;