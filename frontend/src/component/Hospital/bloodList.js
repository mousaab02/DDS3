import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './BloodHistoryList.css';  // Importing the CSS file
import Cookies from "js-cookie";
import AddBlood from "./addBlood";
import UpdateBlood from "./updateBlood";
import BloodHistory from "./bloodHistory";

const BloodList = () => {
  const [bloodList, setBloodList] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [bloodToUpdate, setBloodToUpdate] = useState({
    id: null,
    quantity_before: "",
  });

  // Fonction pour récupérer la liste de sang
  const fetchBloodList = async () => {
    try {
      const accessToken = Cookies.get("access_token");
      const response = await axios.get(
        "http://localhost:8000/hospitals/list_blood_stock/",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      setBloodList(response.data);
    } catch (error) {
      console.error("Error fetching blood list: ", error.message);
    }
  };

  // Appel de fetchBloodList une fois après le rendu initial
  useEffect(() => {
    fetchBloodList();
  }, []);

  const handleUpdateModalOpen = (blood) => {
    setShowUpdateModal(true);
    setBloodToUpdate({ id: blood.id, quantity_before: blood.quantity_ml });
  };

  const handleUpdateModalClose = () => {
    setShowUpdateModal(false);
    setBloodToUpdate({ id: null, quantity_before: "" });
  };

  return (
    <div className="all">
    <div className="container-fluid">
    <div className="row align-items-start">
      <div className="col-md-9">
        <div className="container mt-5">
          <div className="title">
          <h4 className="txt ">List of blood types</h4></div>
          <div className="butt">
          <Button
            className="btn btn-success mb-3"
            onClick={() => setShowAddModal(true)}
          >
            Add new category
          </Button>
          </div>
          {showAddModal && (
            <AddBlood
              show={showAddModal}
              onHide={() => setShowAddModal(false)}
              fetchBloodList={fetchBloodList}
            />
          )}
          {showUpdateModal && (
            <UpdateBlood
              show={showUpdateModal}
              onHide={handleUpdateModalClose}
              fetchBloodList={fetchBloodList}
              id={bloodToUpdate.id}
              quantity_before={bloodToUpdate.quantity_before}
            />
          )}
          <div className="table-container">
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Blood Type</th>
                  <th>Quantity (ml)</th>
                  <th>Update</th>
                </tr>
              </thead>
              <tbody>
                {bloodList.map((blood) => (
                  <tr key={blood.id}>
                    <td>{blood.blood_type}</td>
                    <td>{blood.quantity_ml}</td>
                    <td>
                      <Button onClick={() => handleUpdateModalOpen(blood)}>
                        Update
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="d-flex flex-column align-items-start">
          <BloodHistory />
        </div>
      </div>
    </div>
  </div>
  </div>
);
};

export default BloodList;