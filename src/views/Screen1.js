import 'bootstrap/dist/css/bootstrap.min.css';
import { Field, Form, Formik } from 'formik';
import React, { Component } from 'react';
import { Badge, Button, Col, Modal, Row } from 'react-bootstrap';
import '../style.css'
import { defaultData } from '../DefaultState';

class Screen1 extends Component {
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
            Open Modal 1
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
                  New Acquisition After
                  </h5>
                  </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <Formik
                    initialValues={defaultData}
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
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Klasifikasi :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" name="klasifikasi" className="form-control" id="FieldPassword" placeholder="Klasifikasi"/>
                        </div>
                    </div>
                    <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Nama Merchant :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" name="namaMerchant" className="form-control" id="FieldPassword" placeholder="Nama Merchant"/>
                        </div>
                    </div>
                    <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Aplc Seq No :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" nama="aplc" className="form-control" id="FieldPassword" placeholder="Aplc Seq No"/>
                        </div>
                    </div>
                    <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Nomor WR :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" name='nomorWR' className="form-control" id="FieldPassword" placeholder="Nomor WR"/>
                        </div>
                    </div>
                    <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Nomor Wo :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" name='nomorWO' className="form-control" id="FieldPassword" placeholder="Nomor Wo"/>
                        </div>
                    </div>
                    <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Member Bank :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" name="memberBank" className="form-control" id="FieldPassword" placeholder="Member Bank"/>
                        </div>
                    </div>
                    <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Status Pemasangan :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" name='status' className="form-control" id="FieldPassword" placeholder="Status Pemasangan"/>
                        </div>
                    </div>
                    <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">City :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" name="city" className="form-control" id="FieldPassword" placeholder="City"/>
                        </div>
                    </div>
                    <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Region :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" name="region" className="form-control" id="FieldPassword" placeholder="Region"/>
                        </div>
                    </div>
                    <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Vendor :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" className="form-control" name="vendor" id="FieldPassword" placeholder="Vendor"/>
                        </div>
                    </div>
                    <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Merchant Type :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" className="form-control" name="merchantType" id="FieldPassword" placeholder="Merchant Type"/>
                        </div>
                    </div>
                  </Col>
                  <Col md={6} sm={12}>
                  <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Status WR :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" className="form-control" id="FieldPassword" name="statusWR" placeholder="Status WR"/>
                        </div>
                    </div>
                  <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Status WO :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" className="form-control" id="FieldPassword" name="statusWO" placeholder="Status WO"/>
                        </div>
                    </div>
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
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Tanggal Visit :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" className="form-control" id="FieldPassword" name="tanggal" placeholder="Tanggal Visit"/>
                        </div>
                    </div>
                  <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Assignment Group :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" className="form-control" id="FieldPassword" name="assg" placeholder="Assignment Group"/>
                        </div>
                    </div>
                  <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Assigned To :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" className="form-control" id="FieldPassword" name="assgT" placeholder="Assigned To"/>
                        </div>
                    </div>
                  <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Aging :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" className="form-control" id="FieldPassword" name='aging' placeholder="Aging"/>
                        </div>
                    </div>
                  <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">NA SLA :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" className="form-control" name="naSLA" id="FieldPassword" placeholder="NA SLA"/>
                        </div>
                    </div>
                  <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Aom :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" className="form-control" id="FieldPassword" name="aom" placeholder="Aom"/>
                        </div>
                    </div>
                  <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">Alert :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" className="form-control" id="FieldPassword" name="alert" placeholder="Alert"/>
                        </div>
                    </div>
                  <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">SN EDC :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" className="form-control" id="FieldPassword" placeholder="SN EDC" name="snEDC"/>
                        </div>
                    </div>
                  <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">ADO :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" className="form-control" id="FieldPassword" placeholder="ADO" name="ado"/>
                        </div>
                    </div>
                  <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">PAKET :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" className="form-control" id="FieldPassword" placeholder="PAKET" name="paket"/>
                        </div>
                    </div>
                  <div className='form-group row mb-2'>
                      <label htmlFor="FieldPassword" className="col-sm-4 col-form-label text-end mt-1 p-0">PROVIDER :</label>
                      <div className="col-sm-8">
                        <Field readOnly={true} type="text" className="form-control" id="FieldPassword" placeholder="PROVIDER" name="provider"/>
                        </div>
                    </div>
                  </Col>
                  <Col md={12} xs={12}>
                      <div className='my-2'>
                        {/* <span className='mx-1'><Badge className='badge-success p-2' variant="success">Save</Badge></span> */}
                        <a href="" onClick={this.close}>
                        <span className='mx-1'><Badge className='badge-success p-2' bg="danger">Back</Badge></span>
                        </a>
                      </div>
                    {/* <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                      <Tab eventKey="home" title="Notes">
                        <p>Watch List</p>
                        <div className='my-2'>
                          <span className='mx-1'><Badge className='p-2' bg={"info"}>Gembok</Badge></span>
                          <span className='mx-1'><Badge className='p-2' bg={"info"}>User</Badge></span>
                        </div>
                        <div className='card'>
                          <p className='card-title px-4 pt-3'>Work Notes</p>
                          <div className='card-body d-flex'>
                            <textarea className='form-control' rows='2'></textarea>
                            <span><Badge bg='danger' className='mx-2 pl-2 pr-2'>-</Badge></span>
                          </div>
                        </div>
                      </Tab>
                      <Tab eventKey="profile" title="SLA Unit" disabled>
                        <p>2</p>
                      </Tab>
                      <Tab eventKey="contact" title="Activity" disabled>
                        <p>3</p>
                      </Tab>
                    </Tabs> */}
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

export default Screen1;
