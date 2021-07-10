import React from "react";
import { useState } from "react";
import { Alert } from "react-bootstrap";

const Message = ({ children }) => {
  return (
    <Alert variant="danger">
      {children}
    </Alert>
  );
};

export default Message;
