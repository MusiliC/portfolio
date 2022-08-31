import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { BsGithub } from "react-icons/bs";

// import { BsLinkedin } from "react-icons/bs";
import "./home.css";

export default function Home() {
  return (
    <div className="">
      {/* introduction page */}

      <section className="home-page">
        <div className="container-lg my-5">
          <div className="row justify-content-center ">
            <div className="col-lg-5 ">
              <div className="display-4 text-start">
                Hey, I'm <br />
                <div className="text-warning fw-bold my-2" id="name">
                  Brian Musili
                </div>
              </div>
              <div className="text-start lead my-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis voluptatum ex hic quam nobis voluptate.
                </p>
              </div>
              <div className="my-5 text-start d-flex flex-row justify-content-around">
                <Button
                  variant="warning"
                  size="lg"
                  id="hire"
                  className="me-3 fw-bold"
                >
                  Hire Me
                </Button>
                <Button
                  variant="warning"
                  size="lg"
                  id="hire"
                  className="me-3 fw-bold"
                >
                  <BsGithub /> Github
                </Button>
                {/* <Button variant="warning" size="lg" id="hire" className="me-3">
              <BsLinkedin /> Linkedln
            </Button> */}
              </div>
            </div>
            <div className="col-lg-6  " id="background">
              <div id="picture">
                <img
                  src="/pics/musili.jpg"
                  alt=""
                  className="img-fluid"
                  id="dp"
                />
              </div>
              {/* <img src="/pics/app.png" alt="" className="img-fluid" id="app" /> */}
            </div>
          </div>
        </div>
      </section>

      {/* skills page */}

      <section className="skills-page">
        <div className="container-lg">
          <div className="text-center display-5  " id="skills-header">
            Skills..
          </div>
          <div className="underline"></div>
          <div className="row justify-content-around mt-5">
            <div className="col-lg-3  mb-3 ">
              <Card id="projects-card" className="my-3">
                <Card.Img variant="top" src="/pics/projects.jpg" />
                <div className="card-header" id="cardHeader">
                  <h5 className="fw-bold  text-center ">Projects</h5>
                </div>
                <ListGroup variant="flush" className="">
                  <ListGroup.Item>
                    KUSA System <br /> - Kenya Universities Sports System
                  </ListGroup.Item>
                  <ListGroup.Item>Parcel Delivery System</ListGroup.Item>
                  <ListGroup.Item>E - commerce System</ListGroup.Item>
                  <ListGroup.Item> Chatting App</ListGroup.Item>
                </ListGroup>
              </Card>
            </div>

            <div className="col-lg-3  mb-3 my-3" id="language-code">
              <div className="text-center">
                <div className="lead fw-bold " id="cardHeader">
                  Tools
                </div>
                <p className="text-center fs-6 fw-bold fst-italic">
                  Programming languages and tools
                </p>
                <div className="d-flex flex-row flex-wrap justify-content-around ">
                  <div id="pic-one">
                    <img
                      src="/pics/react.png"
                      alt=""
                      className="image-fluid my-2 mx-1"
                      id="react-pic"
                    />
                    <h6>React JS</h6>
                  </div>
                  <div id="pic-one">
                    <img
                      src="/pics/js.png"
                      alt=""
                      className="image-fluid my-2 mx-1"
                      id="react-pic"
                    />
                    <h6>Node JS</h6>
                  </div>
                  <div id="pic-one">
                    <img
                      src="/pics/download.png"
                      alt=""
                      className="image-fluid my-2 mx-1"
                      id="react-pic"
                    />
                    <h6>Bootstrap 5</h6>
                  </div>
                  <div id="pic-one">
                    <img
                      src="/pics/mongo.png"
                      alt=""
                      className="image-fluid my-2 mx-1"
                      id="react-pic"
                    />
                    <h6>Mongo DB</h6>
                  </div>
                  <div id="pic-one">
                    <img
                      src="/pics/sql.png"
                      alt=""
                      className="image-fluid my-2 mx-1"
                      id="react-pic"
                    />
                    <h6>MySQL</h6>
                  </div>
                  <div id="pic-one">
                    <img
                      src="/pics/git.png"
                      alt=""
                      className="image-fluid my-2 mx-1"
                      id="react-pic"
                    />
                    <h6>Git</h6>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3  px-3 my-3 d-flex align-items-center"
              id="cv-card"
            >
              <div className="">
                <div className="display-4 text-center mt-3" id="cv">
                  My awesome <br />
                  <span id="name" className="text-warning fw-bold my-1 ">
                    Services
                  </span>
                </div>
                <div className="lead text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing .
                </div>
                <div className=" mt-4 d-flex justify-content-center">
                  <Button
                    variant="warning"
                    size="lg"
                    id="hire"
                    className=" fw-bold "
                  >
                    Download CV
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about-page">
        <div className="container-lg mt-3">
          <div className="text-center display-6 mt-3" id="skills-header">
            About Me
          </div>
          <div className="underline"></div>
          <div className="row justify-content-center">
            <div className="col-lg-6 mt-4 mb-2">
              <div>
                <img
                  src="/pics/about.png"
                  className="img-fluid"
                  alt=""
                  id="about-me"
                />
              </div>
            </div>
            <div className="col-lg-5 my-2">
              <div
                id="about-text"
                className="d-flex justify-content-center align-items-center flex-column "
              >
                <div>
                  <p className="fs-5">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Harum, cum et, adipisci ut debitis atque alias rerum a
                    totam, omnis accusantium. Dolore voluptatem numquam
                    reprehenderit perspiciatis blanditiis reiciendis voluptas
                    error.
                  </p>
                </div>
                <div className="my-2">
                  <Button variant="warning" size="lg" id="hire">
                    Contact Me
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="page-footer" className="mt-5">
        <footer class="footer mt-auto py-3 bg-light">
          <div class="container">
            <span class="text-muted">
              This website has been designed and developed by me from scratch <br />
              Copyright @ Brian Musili 2022
            </span>
          </div>
        </footer>
      </section>
    </div>
  );
}
