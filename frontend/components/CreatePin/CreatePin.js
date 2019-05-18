import { useState } from 'react';
import { Mutation } from 'react-apollo';
import TextareaAutosize from 'react-autosize-textarea';

import CreatePinStyles from './CreatePinStyles';
import Dropzone from '../Dropzone/Dropzone';
import Button from '../shared/Button';
import CREATE_PIN_MUTATION from '../../graphql/mutations/createPin';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

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

  const handleSubmit = async (e, createPin) => {
    e.preventDefault();
    // call the mutation
    const res = await createPin();
    // redirect user to pin details page
    console.log(res.data);
  };

  return (
    <Mutation
      mutation={CREATE_PIN_MUTATION}
      variables={{ createPinInput: fields }}>
      {(createPin, { loading, error }) => (
        <CreatePinStyles onSubmit={e => handleSubmit(e, createPin)}>
          <div className="column dropzone">
            <Dropzone fields={fields} loading={loading} setFields={setFields} />
          </div>
          <div className="column inputs">
            <fieldset disabled={loading}>
              <ErrorMessage error={error} />
              <div className="text-inputs">
                <TextareaAutosize
                  required
                  name="title"
                  className="title-input"
                  type="text"
                  rows={1}
                  placeholder="Add your title"
                  value={fields.title}
                  onChange={saveFields}
                />
                <TextareaAutosize
                  required
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
            </fieldset>
          </div>
        </CreatePinStyles>
      )}
    </Mutation>
  );
};

export default CreatePin;
