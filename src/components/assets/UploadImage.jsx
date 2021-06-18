import { Form } from 'react-bootstrap'

const UploadImage = ({image}) => {
    return (
        <Form.Label htmlFor="file-input" className="d-flex pt-2 upload-image-label" title={image && image}>
            <i className="fas fa-image upload-image-icon"></i>Upload/Edit Image
        </Form.Label>
    )
}

export default UploadImage