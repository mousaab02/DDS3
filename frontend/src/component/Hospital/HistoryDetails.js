import React from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const BloodHistoryDetails = ({ show, onHide, detail }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {detail ? (
          <div>
            <p>
              <strong>Blood type:</strong> {detail.blood_type}
            </p>
            <p>
              <strong>Action:</strong> {detail.action}
            </p>
            <p>
              <strong>Quantity changed (ml):</strong> {detail.quantity_change}
            </p>
            <p>
              <strong>Date and Time:</strong> {new Date(detail.timestamp).toLocaleString()}
            </p>
          </div>
        ) : (
          <p>No details available</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BloodHistoryDetails;
