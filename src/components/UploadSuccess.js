import React, { useRef } from 'react';
import checkCircle from './../assets/img/check_circle.svg';

export const UploadSuccess = ({ url }) => {

    const refInput = useRef('');

    const handleCopyLink = () => {
        // console.log(refInput.current.valueOf().value);
        refInput.current.select();
        document.execCommand("copy");
    };

    return (

        <div className="upload-success">
            <div className="success-icono">
                <img src={ checkCircle } alt="checkCircle"/>
            </div>
            <div className="success-title">
                <p>Upload Successfully!</p>
            </div>
            <div className="success-img">
                <img className="upload-image" src={ url } alt="uploaded"/>
            </div>
            <div className="success-link">
                <form action="">
                    <input 
                        type="text"
                        defaultValue={ url }
                        name="url"
                        ref={ refInput }
                    />
                    <button className="link-btn" type="button" onClick={ handleCopyLink }>
                        Copy Link
                    </button>
                </form>
            </div>
        </div>
        
    );
    
};
