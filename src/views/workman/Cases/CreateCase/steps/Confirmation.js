// **
import "@styles/react/libs/flatpickr/flatpickr.scss";

// ** Reactstrap Imports
import {
  ListGroup,
  ListGroupItem,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  Label,
  Row,
  Col,
  Form,
  Input,
  Button,
} from "reactstrap";

import { Fragment, useState } from "react";
import { FileText, X, DownloadCloud, ArrowLeft } from "react-feather";
import { useDropzone } from "react-dropzone";

// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";

const Confirmation = ({ stepper, type }) => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFiles([...files, ...acceptedFiles.map((file) => Object.assign(file))]);
    },
  });

  const renderFilePreview = (file) => {
    if (file.type.startsWith("image")) {
      return (
        <img
          className="rounded"
          alt={file.name}
          src={URL.createObjectURL(file)}
          height="28"
          width="28"
        />
      );
    } else {
      return <FileText size="28" />;
    }
  };

  const handleRemoveFile = (file) => {
    const uploadedFiles = files;
    const filtered = uploadedFiles.filter((i) => i.name !== file.name);
    setFiles([...filtered]);
  };

  const renderFileSize = (size) => {
    if (Math.round(size / 100) / 10 > 1000) {
      return `${(Math.round(size / 100) / 10000).toFixed(1)} mb`;
    } else {
      return `${(Math.round(size / 100) / 10).toFixed(1)} kb`;
    }
  };

  const fileList = files.map((file, index) => (
    <ListGroupItem
      key={`${file.name}-${index}`}
      className="d-flex align-items-center justify-content-between"
    >
      <div className="file-details d-flex align-items-center">
        <div className="file-preview me-1">{renderFilePreview(file)}</div>
        <div>
          <p className="file-name mb-0">{file.name}</p>
          <p className="file-size mb-0">{renderFileSize(file.size)}</p>
        </div>
      </div>
      <Button
        color="danger"
        outline
        size="sm"
        className="btn-icon"
        onClick={() => handleRemoveFile(file)}
      >
        <X size={14} />
      </Button>
    </ListGroupItem>
  ));

  const handleRemoveAllFiles = () => {
    setFiles([]);
  };
  return (
    <Fragment>
      {/* <div className="content-header">
        <h5 className="mb-0">Upload Documents</h5>
        <small>Upload Your Documents Below.</small>
      </div>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Row>
          <Col md="12" className="mb-1">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">
                  Upload Images and other case related files if any.
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div {...getRootProps({ className: "dropzone" })}>
                  <input {...getInputProps()} />
                  <div className="d-flex align-items-center justify-content-center flex-column">
                    <DownloadCloud size={64} />
                    <h5>Drop Files here or click to upload</h5>
                    <p className="text-secondary">
                      Drop files here or click{" "}
                      <a href="/" onClick={(e) => e.preventDefault()}>
                        browse
                      </a>{" "}
                      thorough your machine
                    </p>
                  </div>
                </div>
                {files.length ? (
                  <Fragment>
                    <ListGroup className="my-2">{fileList}</ListGroup>
                    <div className="d-flex justify-content-end">
                      <Button
                        className="me-1"
                        color="danger"
                        outline
                        onClick={handleRemoveAllFiles}
                      >
                        Remove All
                      </Button>
                      <Button color="primary">Upload Files</Button>
                    </div>
                  </Fragment>
                ) : null}
              </CardBody>
            </Card>
          </Col>
        </Row>
        <div className="d-flex justify-content-between">
          <Button
            color="primary"
            className="btn-prev"
            onClick={() => stepper.previous()}
          >
            <ArrowLeft
              size={14}
              className="align-middle me-sm-25 me-0"
            ></ArrowLeft>
            <span className="align-middle d-sm-inline-block d-none">
              Previous
            </span>
          </Button>
          <Button
            color="success"
            className="btn-submit"
            onClick={() => alert("submitted")}
          >
            Submit
          </Button>
        </div>
      </Form> */}
    </Fragment>
  );
};

export default Confirmation;
