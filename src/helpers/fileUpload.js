export const fileUpload = async(file) => {

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dufendybq/image/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'yash25');
    formData.append('file', file);

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        // if (!resp.ok) throw await resp.json();
        if (!resp.ok) return null;

        const cloudResp = await resp.json();
        return cloudResp.secure_url;

    } catch (error) {
        throw error;
    }

};
