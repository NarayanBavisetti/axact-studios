import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Card, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { db } from "../../firebase";

const Dashboard = () => {
  const [newsLength, setNewsLength] = useState();
  useEffect(() => {
    const fetchdata = async () => {
      db.collection("News")
        .get()
        .then(function (querySnapshot) {
          setNewsLength(querySnapshot.size);
        });
    };
    fetchdata();
  }, []);

  const [downloadsLength, setDownloadsLength] = useState();
  useEffect(() => {
    const fetchdata = async () => {
      db.collection("Documents")
        .get()
        .then(function (querySnapshot) {
          setDownloadsLength(querySnapshot.size);
        });
    };
    fetchdata();
  }, []);

  const [sliderLength, setSlidersLength] = useState();
  useEffect(() => {
    const fetchdata = async () => {
      db.collection("Slider")
        .get()
        .then(function (querySnapshot) {
          setSlidersLength(querySnapshot.size);
        });
    };
    fetchdata();
  }, []);

  const [messagesLength, setMessagesLength] = useState();
  useEffect(() => {
    const fetchdata = async () => {
      db.collection("contactus")
        .get()
        .then(function (querySnapshot) {
          setMessagesLength(querySnapshot.size);
        });
    };
    fetchdata();
  }, []);

  const [registrationsLength, setRegistrationsLength] = useState();
  useEffect(() => {
    const fetchdata = async () => {
      db.collection("team-registration")
        .get()
        .then(function (querySnapshot) {
          setRegistrationsLength(querySnapshot.size);
        });
    };
    fetchdata();
  }, []);
  return (
    <React.Fragment>
      <div className="dashboardContainer">
      <Row>
              <Col md={6} lg={3}>
                <div>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top"  />
                    <Card.Body>
                      <Card.Title>sdfd</Card.Title>
                      <Card.Text>sfd...</Card.Text>
                      <Card.Title>&#8377;dfs</Card.Title>
                      {/* <Link to={`/products/${item._id}`} >  <Button variant= "outline-primary">Buy Now</Button></Link> */}
                    </Card.Body>
                  </Card>
                </div>
              </Col>
      </Row>
        {/* </div> */}
        {/* <div className="section navigationSection">
          <h2 className="sectionTitle">
            Manage <span>Website</span>
          </h2>
          <div className="cardsGrid">
            <div className="singleCard">
              <h3 className="title">Uploaded Documents</h3>
              <h4 className="total">{downloadsLength} Documents</h4>
              <Link to="/admin/create-document" className="button">
                <i className="fas fa-upload"></i>&nbsp;&nbsp;Upload
              </Link>
              <Link to="/admin/documents" className="button">
                <i className="fas fa-wrench"></i>&nbsp;&nbsp;Manage
              </Link>
            </div>
            <div className="singleCard">
              <h3 className="title">Received Messages</h3>
              <h4 className="total">{messagesLength} Messages</h4>
              <Link to="/admin/messages" className="button">
                <i className="fas fa-eye"></i>&nbsp;&nbsp;View
              </Link>
            </div>
            <div className="singleCard">
              <h3 className="title">Created Sliders</h3>
              <h4 className="total">{sliderLength} Sliders</h4>
              <Link to="/admin/create-slider" className="button">
                <i className="fas fa-plus"></i>&nbsp;&nbsp;Create
              </Link>
              <Link to="/admin/sliders" className="button">
                <i className="fas fa-wrench"></i>&nbsp;&nbsp;Manage
              </Link>
            </div>
            <div className="singleCard">
              <h3 className="title">Uploaded News</h3>
              <h4 className="total">{newsLength} News</h4>
              <Link to="/admin/create-news" className="button">
                <i className="fas fa-plus"></i>&nbsp;&nbsp;Create
              </Link>
              <Link to="/admin/news" className="button">
                <i className="fas fa-wrench"></i>&nbsp;&nbsp;Manage
              </Link>
            </div>
            <div className="singleCard">
              <h3 className="title">Team Registrations</h3>
              <h4 className="total">{registrationsLength} Registrations</h4>
              <Link to="/admin/team-registrations" className="button">
                <i className="fas fa-eye"></i>&nbsp;&nbsp;View
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
