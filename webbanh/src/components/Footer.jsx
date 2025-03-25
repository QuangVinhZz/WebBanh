import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          {/* Cột 1 - About */}
          <Col md={3}>
            <h5>🔸 About</h5>
            <p>
              Student name:
              <br />
              Student ID:
            </p>
          </Col>

          {/* Cột 2 - Midterm Exam */}
          <Col md={3}>
            <h5>🔸 Midterm Exam</h5>
            <p>Application Interface Development</p>
            <p>Date: 25/3/2025</p>
          </Col>

          {/* Cột 3 - Class */}
          <Col md={3}>
            <h5>🔸 Class</h5>
            <p>Class name: D21THMIT</p>
            <p>Class ID: 423009543820</p>
          </Col>

          {/* Cột 4 - Contact */}
          <Col md={3}>
            <h5>🔸 Contact</h5>
            <p>Email:</p>
            <p>Phone:</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
