import 'bootstrap/dist/css/bootstrap.min.css';
import { Field, Form, Formik } from 'formik';
import React, { Component } from 'react';
import { Badge, Button, Col, Modal, Row } from 'react-bootstrap';
import '../style.css'
import { defaultStatev2 } from '../DefaultState';

class Screen2 extends Component {
  state = {
    modal: false,
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  close = () => {
    this.setState({
      modal: false
    })
  }
  render() {
    return (
      <>
      <div className='container'>
        <div className="row">
          <Col xs={12} md={12}>
          <Button variant="primary" className='m-4' onClick={this.toggle}>
            Open Modal 2
          </Button>
          </Col>
        </div>
      </div>
        <Row>
          <Col>
            <Modal 
            // fullscreen={'lg-down'}
            show={this.state.modal}
            onHide={this.close}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title">

              <Modal.Header closeButton className='bg-primary'>
                <Modal.Title id="example-custom-modal-styling-title">
                  <h5 className='text-light'>
                  Case ID
                  </h5>
                  </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <Formik
                    initialValues={defaultStatev2}
                    onSubmit={(values, { setSubmitting }) => {
                      setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                      }, 400);
                    }}
                    >
                  <Form>
                <Row className='justify-content-center'>
                  <Col md={6} sm={12}>
                    <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Case ID :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" name="caseid" className="form-control"/>
                        </div>
                    </div>
                    <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Channel :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" name="channel" className="form-control" id="FieldPassword" placeholder="channel"/>
                        </div>
                    </div>
                    <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Accept Date :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" name="accDate" className="form-control" id="FieldPassword" placeholder="Accept Date"/>
                        </div>
                    </div>
                    <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Accept Time :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" name="accTime" className="form-control"/>
                        </div>
                    </div>
                    <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Case Category :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" name="caseCategory" className="form-control"/>
                        </div>
                    </div>
                    <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Sub Case Category :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" name="subcaseCategory" className="form-control"/>
                        </div>
                    </div>
                    <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Case Type :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" name="caseType" className="form-control"/>
                        </div>
                    </div>
                    <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Member Bank :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" name="memberBank" className="form-control"/>
                        </div>
                    </div>
                    <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Tanggal Visit :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" name="tanggal" className="form-control"/>
                        </div>
                    </div>
                    <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Case ID SLA :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" name="caseIDSla" className="form-control"/>
                        </div>
                    </div>
                    <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Data Chng Dttm :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" name="dataChng" className="form-control"/>
                        </div>
                    </div>
                    <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Status Replace :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" name="statusReplace" className="form-control"/>
                        </div>
                    </div>
                  </Col>
                  <Col md={6} sm={12}>
                  <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">MID :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" className="form-control" id="FieldPassword" name="MID" placeholder="MID"/>
                        </div>
                    </div>
                  <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">TID :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" className="form-control" id="FieldPassword" name="TID" placeholder="TID"/>
                        </div>
                    </div>
                  <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Status :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" className="form-control" id="FieldPassword" name="status"/>
                        </div>
                    </div>
                  <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Klasifikasi :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" className="form-control" name="klasifikasi"/>
                        </div>
                    </div>
                  <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Actual Date :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" className="form-control" id="FieldPassword" name="acctualDate"/>
                        </div>
                    </div>
                    <div className='form-group row mb-2'>
                        <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Segment :</label>
                        <div className="col-sm-8">
                        <Field readOnly={true} type="text" className="form-control" name="segment" />
                        </div>
                    </div>
                    <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Merchant Type :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" className="form-control" name="merchantType" id="FieldPassword" placeholder="Merchant Type"/>
                        </div>
                    </div>
                    <div className='form-group row mb-2'>
                        <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Vendor :</label>
                        <div className="col-sm-8">
                        <Field readOnly={true} type="text" className="form-control" name="vendor" id="FieldPassword" placeholder="Vendor"/>
                        </div>
                    </div>
                  <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Aging :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" className="form-control" id="FieldPassword" name='aging' placeholder="Aging"/>
                        </div>
                    </div>
                  <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Assignment Group :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" className="form-control" name="assG" />
                        </div>
                    </div>
                  <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Assignment To :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" className="form-control" name="assT" />
                        </div>
                    </div>
                  <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Aom :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" className="form-control" id="FieldPassword" name="aom" />
                        </div>
                    </div>
                  <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Alert :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" className="form-control" id="FieldPassword" name="alert" />
                        </div>
                    </div>
                  <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">ADO :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" className="form-control" id="FieldPassword"  name="ado"/>
                        </div>
                    </div>
                  </Col>
                  <Col md={12} xs={12}>
                  <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-2 col-form-label text-end mt-1 p-0">Merchant Name :</label>
                      <div className="col-sm-10">
                        <Field readOnly={true} type="text" className="form-control" id="FieldPassword" name="merchantName"/>
                        </div>
                    </div>
                  <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-2 col-form-label text-end mt-1 p-0">City :</label>
                      <div className="col-sm-10">
                        <Field readOnly={true} type="text" className="form-control" id="FieldPassword" name="city"/>
                        </div>
                    </div>
                  <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-2 col-form-label text-end mt-1 p-0">Address :</label>
                      <div className="col-sm-10">
                        <Field readOnly={true} type="text" className="form-control" id="FieldPassword" name="address"/>
                        </div>
                    </div>
                  <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-2 col-form-label text-end mt-1 p-0">Region :</label>
                      <div className="col-sm-10">
                        <Field readOnly={true} type="text" className="form-control" id="FieldPassword" name="region"/>
                        </div>
                    </div>
                  <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-2 col-form-label text-end my-3 p-0">VOC :</label>
                      <div className="col-sm-10">
                        <Field readOnly={true} type="text" className="form-control" as={'textarea'} name="voc"/>
                        </div>
                    </div>
                  <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-2 col-form-label text-end my-3 p-0">Comments :</label>
                      <div className="col-sm-10">
                        <Field readOnly={true} type="text" className="form-control" as={'textarea'} name="comment"/>
                        </div>
                    </div>
                      <div className='my-2'>
                        <a href="" onClick={this.close}>
                        <span className='mx-1'><Badge className='badge-success p-2' bg="danger">Back</Badge></span>
                        </a>
                      </div>
                    </Col>
                </Row>
                </Form>
                </Formik>
              </Modal.Body>
              {/* <Modal.Footer>
                <Button variant="secondary" onClick={this.close}>
                  Close
                </Button>
                <Button variant="primary" onClick={this.close}>
                  Save Changes
                </Button>
              </Modal.Footer> */}
            </Modal>
        </Col>
      </Row>
      </>
    );
  }
}

export default Screen2;
