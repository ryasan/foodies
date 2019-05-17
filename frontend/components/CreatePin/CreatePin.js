import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaArrowAltCircleUp } from 'react-icons/fa';

import CreatePinStyles from './CreatePinStyles';

const CreatePin = () => {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <CreatePinStyles>
      <div className="column drop">
        <div className="dropzone" {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <div className="drop-area">Drop the files here ...</div>
          ) : (
            <div className="drop-area">
              <FaArrowAltCircleUp className="fa" />
              <p>Drag and drop or click to upload</p>
            </div>
          )}
        </div>
      </div>
      <div className="column text-inputs">text inputs</div>
    </CreatePinStyles>
  );
};

export default CreatePin;
