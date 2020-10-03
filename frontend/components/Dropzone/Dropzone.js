import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { FaArrowAltCircleUp, FaTrash } from 'react-icons/fa'
import PropTypes from 'prop-types'

import Dropzone from './DropzoneStyles'
import button from '../shared/Button'
import Icon from '../icons'

const DropzoneComponent = ({ setImgFile, loading }) => {
    const [imgPreview, setImgPreview] = useState(null)

    // create image preview
    const onDrop = useCallback(acceptedFiles => {
        const [file] = acceptedFiles.map(file => ({
            ...file,
            preview: URL.createObjectURL(file)
        }))

        setImgFile(acceptedFiles[0])
        setImgPreview(file.preview)
    }, [])

    const removePreview = () => setImgPreview(null)

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop
    })

    // show image preview if an image has been selected
    if (imgPreview) {
        return (
            <Dropzone loading={loading}>
                <Dropzone.ImgPreviewContainer>
                    <Dropzone.Img alt='Upload Preview' src={imgPreview} />
                    <Dropzone.Overlay>
                        <Dropzone.IconBtn onClick={removePreview}>
                            <Icon name='trash' />
                        </Dropzone.IconBtn>
                    </Dropzone.Overlay>
                </Dropzone.ImgPreviewContainer>
            </Dropzone>
        )
    }

    // otherwise just show dropzone
    return (
        <Dropzone loading={loading}>
            <Dropzone.DropWrap {...getRootProps()}>
                <input
                    {...getInputProps()}
                    disabled={loading}
                    name='image'
                    required
                />
                {isDragActive ? (
                    <Dropzone.DropArea>Drop the files here...</Dropzone.DropArea>
                ) : (
                    <Dropzone.DropArea>
                        <Icon name='upload-filled' />
                        <span>Drag and drop or click to upload</span>
                    </Dropzone.DropArea>
                )}
            </Dropzone.DropWrap>
        </Dropzone>
    )
}

DropzoneComponent.propTypes = {
    setImgFile: PropTypes.func,
    loading: PropTypes.bool
}

export default DropzoneComponent
