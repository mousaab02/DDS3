import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal, Table } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Importation de Bootstrap
import './BloodHistoryList.css';  // Importing the CSS file
import Cookies from "js-cookie";

const BloodHistory = ({ show, onHide }) => {
    const [bloodHistory, setBloodHistory] = useState([]);

    // Fonction pour récupérer l'historique des modifications
    const fetchBloodHistory = async () => {
        try {
            const accessToken = Cookies.get("access_token");
            const response = await axios.get("http://localhost:8000/hospitals/list_blood_history/", {
                headers: { Authorization: `Bearer ${accessToken}` },
            });
            setBloodHistory(response.data);
        } catch (error) {
            console.error("Error fetching blood history: ", error.message);
        }
    };

    // Fonction pour effacer l'historique
    const clearHistory = async () => {
        try {
            const accessToken = Cookies.get("access_token");
            await axios.delete("http://localhost:8000/hospitals/clear_blood_history/", {
                headers: { Authorization: `Bearer ${accessToken}` },
            });
            setBloodHistory([]); // Efface l'historique côté frontend après suppression réussie
        } catch (error) {
            console.error("Error clearing blood history: ", error.message);
        }
    };

    // Appel de fetchBloodHistory une fois après le rendu initial
    useEffect(() => {
        fetchBloodHistory();
    }, []);


 return (
<div>
<div >
    <div className="row align-items-start">
      <div>
        <div className="container mt-5">
      <div className="title2">
          <h4 className="text ml-5 ">History</h4></div>
    <div className="timeline-container">
        <ul className="timeline">
            {bloodHistory.map((entry) => (
                <li className="timeline-item" key={entry.id}>
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <div className="content">
                            <h2>{entry.action}</h2>
                            <p>
                                {entry.blood_type}
                            </p>
                            <p>
                                {entry.quantity_change}
                            </p>
                            <p>
                                
                                {new Date(entry.timestamp).toLocaleString()}
                            </p>
                        </div>
                    </div>
                    <div className="timeline-line"></div>
                </li>
            ))}
        </ul>
        <div className="pad">

        
        <div className="button-container">
          
            <Button className="btn btn-danger" onClick={clearHistory}>
                Clear History
            </Button>
        </div>
        </div>
    </div>
    </div></div></div></div></div>
);
};

export default BloodHistory;


