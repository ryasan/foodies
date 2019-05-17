import { useState } from 'react';
import TextareaAutosize from 'react-autosize-textarea';

import CreatePinStyles from './CreatePinStyles';
import Dropzone from '../Dropzone/Dropzone';
import Button from '../shared/Button';

const CreatePin = () => {
  const [fields, setFields] = useState({
    title: '',
    description: '',
    image: '',
    largeImage: '',
  });

  const saveFields = e => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // call the mutation
    // redirect user to pin details page
  };

  return (
    <CreatePinStyles onSubmit={handleSubmit}>
      <div className="column dropzone">
        <Dropzone fields={fields} setFields={setFields} />
      </div>
      <div className="column inputs">
        <div className="text-inputs">
          <TextareaAutosize
            name="title"
            className="title-input"
            type="text"
            rows={1}
            placeholder="Add your title"
            value={fields.title}
            onChange={saveFields}
          />
          <TextareaAutosize
            name="description"
            className="description-input"
            type="text"
            placeholder="Tell everyone what your Pin is about"
            value={fields.description}
            onChange={saveFields}
          />
        </div>
        <Button type="submit" color="primary">
          Save
        </Button>
      </div>
    </CreatePinStyles>
  );
};

export default CreatePin;
