import React from "react";
import { Col, Container, Row, Button } from "reactstrap";

import img2 from "./Images/banner1.png";

const Hero = () => {
  const gradientBackgroundStyle = {
    background: "linear-gradient(90deg, #0E0D13 0%, #1D2339 100%)",
    // Add any other styles you want
  };
  return (
    <React.Fragment>
      <section style={gradientBackgroundStyle}>
        <Container>
          <Row className="align-items-center gy-4">
            <Col lg={6} className="order-2 order-lg-1">
              <div className=" text-light mt-sm-3">
                <h4 className="" style={{color:'#DAFA7E'}}>#1 INVOICE SOLUTIONS</h4>
                <h1 className=" fs-30 mb-3 mt-4 mb-3 fw-bold w-75">
                  Streamline Your Invoicing challenges
                </h1>
                <p className="mb-4 mt-3 w-75 ff-secondary">
                  Automate your financial processes and get paid faster with
                  using our automated invoices generated.
                </p>

                <Row>
                  <Col sm={5}>
                    <div className="vstack gap-2">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-2">
                          <div className="avatar-xs icon-effect">
                            <div className="avatar-title bg-transparent text-success rounded-circle h2">
                              <i className="ri-check-fill"></i>
                            </div>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="fs-14 mb-0">Very Affordable</h5>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>

                <div className="mt-4 g-4">
                  <Button
                    to="/index"
                    className="btn btn-primary me-2"
                    style={{ backgroundColor: "#DAFA7E", color: "#0F322E" }}
                  >
                    Get Started
                    <i className="ri-arrow-right-line align-middle ms-1"></i>
                  </Button>
                  <Button to="/index" className="btn btn-primary">
                    How it works
                    <i className="ri-arrow-right-line align-middle ms-1"></i>
                  </Button>
                </div>
              </div>
            </Col>

            <Col lg={6} sm={7} className="col-10 ms-auto order-2 order-lg-2">
              <div style={{ height: "670px" }}>
                <img src={img2} alt="" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Hero;
