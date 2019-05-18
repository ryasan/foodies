import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaArrowAltCircleUp, FaTrash } from 'react-icons/fa';
import PropTypes from 'prop-types';

import DropzoneStyles from './DropzoneStyles';
import Button from '../shared/Button';

const Dropzone = ({ imgFields, setImgFields, loading }) => {
  // upload file to hosting service
  const onDrop = useCallback(async acceptedFiles => {
    const data = new FormData();
    data.append('file', acceptedFiles[0]);
    data.append('upload_preset', 'notpinterest');
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dbir6orpj/image/upload',
      { method: 'POST', body: data },
    );

    const file = await res.json();
    // get image urls and save them to state
    setImgFields({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url,
    });
  }, []);

  // unselect image
  const removeImage = () => {
    setImgFields({ image: '', largeImage: '' });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // show image preview if an image has been selected
  if (imgFields.image) {
    return (
      <DropzoneStyles loading={loading}>
        <div className="image-preview-container">
          <img alt="Upload Preview" src={imgFields.image} />
          <div className="overlay">
            <Button className="icon-btn" onClick={removeImage}>
              <FaTrash />
            </Button>
          </div>
        </div>
      </DropzoneStyles>
    );
  }

  // otherwise just show dropzone
  return (
    <DropzoneStyles loading={loading}>
      <div className="drop-wrap" {...getRootProps()}>
        <input {...getInputProps()} name="image" disabled={loading} required />
        {isDragActive ? (
          <div className="drop-area">Drop the files here...</div>
        ) : (
          <div className="drop-area">
            <FaArrowAltCircleUp className="fa" />
            <p>Drag and drop or click to upload</p>
          </div>
        )}
      </div>
    </DropzoneStyles>
  );
};

Dropzone.propTypes = {
  imgFields: PropTypes.object,
  setImgFields: PropTypes.func,
  loading: PropTypes.bool,
};

export default Dropzone;
