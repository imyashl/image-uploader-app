import React from 'react';
import logo from './../assets/img/image.svg';

export const UploadImage = (props) => {

    const { handleFileChange,  fileDrop } = props;

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    };

    const dragOver = (e) => {
        e.preventDefault();
    };

    return (
        <div className="container-upload_image">
            <div className="title">
                <h1>Upload your image</h1>
            </div>
            <div className="drag-drop-img"
                onDragOver={ dragOver }
                onDrop={ fileDrop }
            >
                <div className="img">
                    <img src={logo} alt=""/>
                </div>
                <div className="sentence-action">
                    <p>Drag & Drop your image here</p>
                </div>
            </div>
            <div className="choose-file">
                <p>Or</p>
                <input
                    id="fileSelector"
                    type="file"
                    name="file"
                    style={{display: 'none'}}
                    onChange={ handleFileChange }
                />
                <button
                    className="btn-upload-file"
                    onClick={ handlePictureClick }
                >
                    Choose a file
                </button>
            </div>
        </div>
    );

};
