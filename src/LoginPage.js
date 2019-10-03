import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./LoginPage.css";

const LoginPage = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = event => {
    event.preventDefault();
    console.log(username);
    console.log(password);
  };

  return (
    <Form className="login align-items-end" onSubmit={login}>
      <Form.Group controlId="username">
        <Form.Control
          type="username"
          value={username}
          onChange={event => {
            setUsername(event.target.value);
          }}
          placeholder="Enter username"
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Control
          type="password"
          value={password}
          onChange={event => {
              setPassword(event.target.value);
          }}
          placeholder="Password"
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginPage;
