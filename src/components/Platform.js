import React from "react";
import { Col, Container, Row, Button, Card } from "reactstrap";
import avatar1 from "./Images/avarter image.png";
import avatar4 from "./Images/avarter image.png";
import avatar3 from "./Images/avarter image.png";
import avatar5 from "./Images/avarter image.png";
import avatar6 from "./Images/avarter image.png";

const Platform = () => {
    const gradientBackgroundStyle = {
        background: " #F4FCE1)",
        // Add any other styles you want
      };
  return (
    <React.Fragment>
      <section style={{background:'#F4FCE1'}} >
        <Container>
          <Row>
            <Col className="col-12">
              <div className="justify-content-between d-flex align-items-center mt-3 mb-4">
                <h5 className="mb-0 pb-1 text-decoration-underline">
                  
                </h5>
              </div>
              <Row className="row-cols-xxl-5 row-cols-lg-3 row-cols-1">
                <Col>
                  <Card className="card-body">
                    <div className="d-flex mb-4 align-items-center">
                      <div className="flex-shrink-0">
                        <img
                          src={avatar1}
                          alt=""
                          className="avatar-sm rounded-circle"
                        />
                      </div>
                      <div className="flex-grow-1 ms-2">
                        <h5 className="card-title mb-1">Oliver Phillips</h5>
                        <p className="text-muted mb-0">Digital Marketing</p>
                      </div>
                    </div>
                    <h6 className="mb-1">$15,548</h6>
                    <p className="card-text text-muted">Expense Account</p>
                  </Card>
                </Col>
                <Col>
                  <Card className="card-body">
                    <div className="d-flex mb-4 align-items-center">
                      <div className="flex-shrink-0">
                        <img
                          src={avatar4}
                          alt=""
                          className="avatar-sm rounded-circle"
                        />
                      </div>
                      <div className="flex-grow-1 ms-2">
                        <h5 className="card-title mb-1">Natasha Carey</h5>
                        <p className="text-muted mb-0">Manager</p>
                      </div>
                    </div>
                    <h6 className="mb-1">$8,785</h6>
                    <p className="card-text text-muted">Expense Account</p>
                  </Card>
                </Col>
                <Col>
                  <Card className="card-body">
                    <div className="d-flex mb-4 align-items-center">
                      <div className="flex-shrink-0">
                        <img
                          src={avatar3}
                          alt=""
                          className="avatar-sm rounded-circle"
                        />
                      </div>
                      <div className="flex-grow-1 ms-2">
                        <h5 className="card-title mb-1">Bethany Johnson</h5>
                        <p className="text-muted mb-0">Development</p>
                      </div>
                    </div>
                    <h6 className="mb-1">$1,542</h6>
                    <p className="card-text text-muted">Expense Account</p>
                  </Card>
                </Col>
                <Col>
                  <Card className="card-body">
                    <div className="d-flex mb-4 align-items-center">
                      <div className="flex-shrink-0">
                        <img
                          src={avatar5}
                          alt=""
                          className="avatar-sm rounded-circle"
                        />
                      </div>
                      <div className="flex-grow-1 ms-2">
                        <h5 className="card-title mb-1">Erica Kernan</h5>
                        <p className="text-muted mb-0">Fashion Designer</p>
                      </div>
                    </div>
                    <h6 className="mb-1">$798</h6>
                    <p className="card-text text-muted">Expense Account</p>
                  </Card>
                </Col>
                <Col>
                  <Card className="card-body">
                    <div className="d-flex mb-4 align-items-center">
                      <div className="flex-shrink-0">
                        <img
                          src={avatar6}
                          alt=""
                          className="avatar-sm rounded-circle"
                        />
                      </div>
                      <div className="flex-grow-1 ms-2">
                        <h5 className="card-title mb-1">Lewis Pratt</h5>
                        <p className="text-muted mb-0">Design</p>
                      </div>
                    </div>
                    <h6 className="mb-1">$2,856</h6>
                    <p className="card-text text-muted">Expense Account</p>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Platform;
