import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaArrowAltCircleUp, FaTrash } from 'react-icons/fa';
import PropTypes from 'prop-types';

import DropzoneStyles from './DropzoneStyles';
import Button from '../shared/Button';

const Dropzone = ({ fields, setFields }) => {
  const onDrop = useCallback(async acceptedFiles => {
    const data = new FormData();
    data.append('file', acceptedFiles[0]);
    data.append('upload_preset', 'notpinterest');

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dbir6orpj/image/upload',
      { method: 'POST', body: data },
    );

    const file = await res.json();
    setFields({
      ...fields,
      image: file.secure_url,
      largeImage: file.eager[0].secure_url,
    });
  }, []);

  const removeImage = () => {
    setFields({ ...fields, image: '', largeImage: '' });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const renderDropzoneOrImagePreview = () => {
    if (fields.image) {
      return (
        <div className="image-preview-container">
          <img alt="Upload Preview" src={fields.image} />
          <div className="overlay">
            <Button className="icon-btn" onClick={removeImage}>
              <FaTrash />
            </Button>
          </div>
        </div>
      );
    }

    return (
      <div className="drop-wrap" {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <div className="drop-area">Drop the files here...</div>
        ) : (
          <div className="drop-area">
            <FaArrowAltCircleUp className="fa" />
            <p>Drag and drop or click to upload</p>
          </div>
        )}
      </div>
    );
  };

  return <DropzoneStyles>{renderDropzoneOrImagePreview()}</DropzoneStyles>;
};

Dropzone.propTypes = {
  fields: PropTypes.object,
  setFields: PropTypes.func,
};

export default Dropzone;
