import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Timeline = ({ bloodHistory }) => {
  return (
    <div className="timeline-container">
      <h4 className="text-center mb-4">Blood Change History</h4>
      {bloodHistory.length > 0 ? (
        <ListGroup>
          {bloodHistory.map((entry, index) => (
            <ListGroup.Item key={index} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Text>
                    <strong>Blood type:</strong> {entry.blood_type}
                  </Card.Text>
                  <Card.Text>
                    <strong>Action:</strong> {entry.action}
                  </Card.Text>
                  <Card.Text>
                    <strong>Quantity changed (ml):</strong> {entry.quantity_change}
                  </Card.Text>
                  <Card.Text>
                    <strong>Date and Time:</strong> {new Date(entry.timestamp).toLocaleString()}
                  </Card.Text>
                </Card.Body>
              </Card>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <p>No history available</p>
      )}
    </div>
  );
};

export default Timeline;
