import { useState } from 'react'
import { Mutation } from 'react-apollo'
import { FaPlus, FaTrash } from 'react-icons/fa'
import Router from 'next/router'

import CREATE_RECIPE_MUTATION from '../../graphql/mutations/createRecipe'
import ALL_RECIPES_QUERY from '../../graphql/queries/recipes'
import CreateRecipe from './CreateRecipeStyles'
import Dropzone from '../Dropzone/Dropzone'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

const CreateRecipeComponent = () => {
    const [lists, setLists] = useState({ ingredients: [], directions: [] })
    const [textFields, setTextFields] = useState({
        title: '',
        ingredients: '',
        directions: ''
    })
    const [imgFields, setImgFields] = useState({
        image: '',
        largeImage: '',
        imgPublicId: ''
    })

    const [imgFile, setImgFile] = useState(null)

    const saveFields = e => {
        const { name, value } = e.currentTarget
        setTextFields(prev => ({ ...prev, [name]: value }))
    }

    const hostImg = async () => {
        const data = new FormData()
        data.append('file', imgFile)
        data.append('upload_preset', 'notpinterest')

        const res = await fetch(
            'https://api.cloudinary.com/v1_1/dbir6orpj/image/upload',
            { method: 'POST', body: data }
        )

        const file = await res.json()
        setImgFields({
            imgPublicId: file.public_id,
            image: file.secure_url,
            largeImage: file.eager[0].secure_url
        })
    }

    const handleSubmit = async (e, createRecipe) => {
        e.preventDefault()
        await hostImg()
        const res = await createRecipe()

        Router.push({
            pathname: '/recipe-details',
            query: { id: res.data.createRecipe._id }
        })
    }

    const handleAddListItem = e => {
        const { name } = e.currentTarget
        if (textFields[name]) {
            setLists(prev => ({
                ...prev,
                [name]: [...prev[name], textFields[name]]
            }))
            setTextFields(prev => ({ ...prev, [name]: '' }))
        }
    }

    const handleRemoveListItem = e => {
        const idx = +e.currentTarget.getAttribute('data-idx')
        const name = e.currentTarget.getAttribute('name')

        setLists(prev => ({
            ...prev,
            [name]: prev[name].filter((_, i) => i !== idx)
        }))
    }

    return (
        <Mutation
            mutation={CREATE_RECIPE_MUTATION}
            variables={{
                createRecipeInput: { ...textFields, ...imgFields, ...lists }
            }}
            refetchQueries={[{ query: ALL_RECIPES_QUERY }]}>
            {(createRecipe, { loading, error }) => (
                <CreateRecipe onSubmit={e => handleSubmit(e, createRecipe)}>
                    <CreateRecipe.Dropzone>
                        <Dropzone
                            imgFields={imgFields}
                            loading={loading}
                            setImgFile={setImgFile}
                        />
                    </CreateRecipe.Dropzone>
                    <CreateRecipe.Inputs>
                        <CreateRecipe.Fieldset disabled={loading}>
                            <ErrorMessage error={error} />
                            <CreateRecipe.TextInputs>
                                <CreateRecipe.Field className='TextField'>
                                    <CreateRecipe.TextArea
                                        required
                                        name='title'
                                        type='text'
                                        rows={1}
                                        placeholder='Add Recipe Name'
                                        value={textFields.title}
                                        onChange={saveFields}
                                    />
                                </CreateRecipe.Field>
                                <CreateRecipe.Field>
                                    <CreateRecipe.TextArea
                                        name='ingredients'
                                        type='text'
                                        rows={1}
                                        placeholder='Add Ingredient'
                                        value={textFields.ingredients}
                                        onChange={saveFields}
                                    />
                                    <CreateRecipe.AddBtn
                                        type='button'
                                        name='ingredients'
                                        onClick={handleAddListItem}>
                                        <FaPlus />
                                    </CreateRecipe.AddBtn>
                                </CreateRecipe.Field>
                                <CreateRecipe.Field>
                                    <CreateRecipe.TextArea
                                        name='directions'
                                        type='text'
                                        rows={1}
                                        placeholder='Add Directions'
                                        value={textFields.directions}
                                        onChange={saveFields}
                                    />
                                    <CreateRecipe.AddBtn
                                        type='button'
                                        name='directions'
                                        onClick={handleAddListItem}>
                                        <FaPlus />
                                    </CreateRecipe.AddBtn>
                                </CreateRecipe.Field>
                            </CreateRecipe.TextInputs>
                            <CreateRecipe.SubmitBtn type='submit'>
                                Save
                            </CreateRecipe.SubmitBtn>
                        </CreateRecipe.Fieldset>
                    </CreateRecipe.Inputs>
                    <CreateRecipe.List>
                        <CreateRecipe.Title>Ingredients:</CreateRecipe.Title>
                        {lists.ingredients.map((text, i) => (
                            <CreateRecipe.Item
                                key={i}
                                data-idx={i}
                                onClick={handleRemoveListItem}
                                listStyleType='circle'
                                name='ingredients'>
                                <span>{text}</span>
                                <FaTrash />
                            </CreateRecipe.Item>
                        ))}
                    </CreateRecipe.List>
                    <CreateRecipe.List>
                        <CreateRecipe.Title>Directions:</CreateRecipe.Title>
                        {lists.directions.map((text, i) => (
                            <CreateRecipe.Item
                                key={i}
                                data-idx={i}
                                onClick={handleRemoveListItem}
                                listStyleType='decimal'
                                name='directions'>
                                <span>{text}</span>
                                <FaTrash />
                            </CreateRecipe.Item>
                        ))}
                    </CreateRecipe.List>
                </CreateRecipe>
            )}
        </Mutation>
    )
}

export default CreateRecipeComponent
