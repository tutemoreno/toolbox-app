import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

export default function MessageList(props) {
  return (
    <div
      style={{
        padding: "40px",
      }}
    >
      <Container style={containerStyle}>
        <Row>
          <Col style={{ fontSize: "30px" }}>Results:</Col>
        </Row>
        <Row className="justify-content-center align-items-center">
          <Col xs="10">
            {props.messages.map((json) => (
              <Row
                key={json._id}
                className="d-flex align-items-center"
                style={listItemStyle}
              >
                <Form.Label xs="12" lg="9" column>
                  {json.text}
                </Form.Label>
                <Col xs="12" lg="3" className="d-flex align-items-center">
                  <Form.Label className="mr-2">isPalidrome</Form.Label>
                  <Form.Check checked={json.isPalidrome} />
                </Col>
              </Row>

              //
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const containerStyle = {
  backgroundColor: "#fff",
  width: "70%",
  padding: "20px",
};

const listItemStyle = {
  borderRadius: "3px",
  border: "solid 1px",
  margin: "10px",
};
