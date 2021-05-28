import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function MessageSender(props) {
  const text = useFormInput("");

  const sendMessage = () => {
    props.sendMessage(text.value);
    text.setValue("");
  };

  return (
    <Container fluid>
      <Row
        className="justify-content-center align-items-center"
        style={{ backgroundColor: "#e60000", height: "75px" }}
      >
        <Col xs="10" md="5">
          <Form.Control {...text} type="text" placeholder="Insert Text" />
        </Col>
        <Col xs="2" md="1">
          <Button variant="primary" onClick={sendMessage}>
            Send
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

function useFormInput(initialState) {
  const [value, setValue] = useState(initialState);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    setValue,
    onChange: handleChange,
  };
}
