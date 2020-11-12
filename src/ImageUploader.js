import React, { useState } from 'react';
import { UploadImage } from './components/UploadImage';
import { Uploading } from './components/Uploading';
import { UploadSuccess } from './components/UploadSuccess';
import { fileUpload } from './helpers/fileUpload';
import Swal from 'sweetalert2';

export const ImageUploader = () => {

    const [uploading, setUploading] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [url, setUrl] = useState('');

    const handleFileChange = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        uploadingFile(file);

    };

    const fileDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        uploadingFile(file);
    };

    const uploadingFile = async(file) => {

        if(file) {

            const fileUrl = await fileUpload(file);

            if(fileUrl) {
                setUploading(true);
                setUrl(fileUrl);
                setTimeout(() => {
                    setUploading(false);
                }, 1000);
                setTimeout(() => {
                    setUploadSuccess(true);
                }, 1000);
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Image could not be uploaded!'
                  })
            }

        }

    };

    return (
        <div className="container">
            { !uploading && !uploadSuccess && (<UploadImage handleFileChange={ handleFileChange } fileDrop={ fileDrop }/>) }
            { uploading && <Uploading /> }
            { uploadSuccess && <UploadSuccess url={ url } /> }
        </div>
    );

};
