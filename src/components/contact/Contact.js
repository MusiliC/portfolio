import React from "react";
import "./contact.css";
import { BsGeoAltFill, BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function Contact() {
  return (
    <>
      <section className="contact-page">
        <div className="container-lg">
          <div className="fs-2 text-center my-1 mt-3" id="heading">
            Get in Touch..
          </div>
          <div className="lead text-center">
            I'd love to help, Feel free to say hello
          </div>

          <div className="row justify-content-around p-3">
            <div className="col-lg-5 mb-3" id="right">
              <form action="">
                <div className="form-label my-2">Name:</div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name here.."
                />
                <div className="form-label my-2">Email:</div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email here.."
                />
                <div className="form-label my-2">Message:</div>
                <textarea
                  type="text"
                  className="form-control"
                  rows={4}
                  placeholder="Enter your message here.."
                />
              </form>
              <center>
                <button className="btn btn-warning mt-3 mb-1" id="send-btn">
                  Send Message
                </button>
              </center>
            </div>
            <div className="col-lg-5 " id="phone">
              <div id="location" className="my-1 mt-2 p-2 pb-4">
                <div className="fs-5">
                  <p>
                    Email:
                    <span className="mx-3 ">
                      <b> musilibrian07@gmail.com </b>
                    </span>
                  </p>
                </div>
                <div className="fs-5">
                  <p>
                    Phone:
                    <span className="mx-2">
                      <b>+254768687334 </b>
                    </span>
                  </p>
                </div>
                <div className="fs-5">
                  <span id="nai" className="mx-2">
                    <BsGeoAltFill className="fs-5" />
                  </span>
                  <span>Nairobi, Kenya </span>
                </div>
              </div>
              <div id="social-media" className="mt-2">
                <div className="mx-3">
                  <BsLinkedin className="fs-4" />
                </div>
                <div className="mx-3">
                  <BsWhatsapp className="fs-4" />
                </div>
                <div className="mx-3">
                  <BsFacebook className="fs-4" />
                </div>
                <div className="mx-3">
                  <BsInstagram className="fs-4" />
                </div>
              </div>
              <div>
                <div className="lead text-center mt-4">
                  Lets discuss an idea, project or any opportunity, Thank you
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="page-footer" className="mt-5">
        <footer class="footer mt-auto py-2 bg-light">
          <div class="container">
            <span class="text-muted">
              This website has been designed and developed by me from scratch{" "}
              <br />
              Copyright @ Brian Musili 2022
            </span>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Contact;
