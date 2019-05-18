import { useState } from 'react';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import TextareaAutosize from 'react-autosize-textarea';

import CREATE_PIN_MUTATION from '../../graphql/mutations/createPin';
import ALL_PINS_QUERY from '../../graphql/queries/pins';
import CreatePinStyles from './CreatePinStyles';
import Dropzone from '../Dropzone/Dropzone';
import Button from '../shared/Button';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const CreatePin = () => {
  const [textFields, setTextFields] = useState({ title: '', description: '' });
  const [imgFields, setImgFields] = useState({ image: '', largeImage: '' });

  const saveFields = e => {
    setTextFields({ ...textFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e, createPin) => {
    e.preventDefault();
    // call the mutation
    const res = await createPin();
    // redirect user to pin details page
    Router.push({
      pathname: '/pin-details',
      query: { id: res.data.createPin._id },
    });
  };

  return (
    <Mutation
      mutation={CREATE_PIN_MUTATION}
      variables={{ createPinInput: { ...textFields, ...imgFields } }}
      refetchQueries={[{ query: ALL_PINS_QUERY }]}>
      {(createPin, { loading, error }) => (
        <CreatePinStyles onSubmit={e => handleSubmit(e, createPin)}>
          <div className="column dropzone">
            <Dropzone
              imgFields={imgFields}
              loading={loading}
              setImgFields={setImgFields}
            />
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
                  value={textFields.title}
                  onChange={saveFields}
                />
                <TextareaAutosize
                  required
                  name="description"
                  className="description-input"
                  type="text"
                  placeholder="Tell everyone what your Pin is about"
                  value={textFields.description}
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
