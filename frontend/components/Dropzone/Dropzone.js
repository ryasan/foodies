import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaArrowAltCircleUp, FaTrash } from 'react-icons/fa';
import PropTypes from 'prop-types';

import DropzoneStyles from './DropzoneStyles';
import button from '../shared/button';

const Dropzone = ({ setImgFile, loading }) => {
  const [imgPreview, setImgPreview] = useState(null);

  // create image preview
  const onDrop = useCallback(acceptedFiles => {
    const [file] = acceptedFiles.map(file => ({
      ...file,
      preview: URL.createObjectURL(file),
    }));

    setImgFile(acceptedFiles[0]);
    setImgPreview(file.preview);
  }, []);

  const removePreview = () => setImgPreview(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // show image preview if an image has been selected
  if (imgPreview) {
    return (
      <DropzoneStyles loading={loading}>
        <div className="image-preview-container">
          <img alt="Upload Preview" src={imgPreview} />
          <div className="overlay">
            <button className="icon-btn" onClick={removePreview}>
              <FaTrash />
            </button>
          </div>
        </div>
      </DropzoneStyles>
    );
  }

  // otherwise just show dropzone
  return (
    <DropzoneStyles loading={loading}>
      <div className="drop-wrap" {...getRootProps()}>
        <input {...getInputProps()} disabled={loading} name="image" required />
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
  setImgFile: PropTypes.func,
  loading: PropTypes.bool,
};

export default Dropzone;
