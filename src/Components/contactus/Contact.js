import React from 'react';
import "./Contact.css";
import contact from "../assets/contact.png";
import form from "../assets/form.png";
import Contactform from "./Contactform";
import Contactaccordion from "./Contactaccordion";
// import Application from "./Application"

function Contact() {
  return (<>
    <section>
      <div className='container-fluid'>
        <div className='container contact-main-div' >
          <div className='row' >
            <div className='col-lg-6 col-md-6 col-sm-12' id='grid'>
              <p className='contact-heading'>Contact Us</p>
              <p className='contact-content'> For inquiries and support, contact us.<br></br>
                We typically respond within 24 hours.</p>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
              <div className='contact-grid-div'>
                <div className='sec-grid'>
                  <p className='contact-div-heading'>United States</p>
                  <p className='contact-div-content'>16192 Coastal Highway, Lewes, Delaware 19958,<br></br>
                    Sussex County, USA.<br></br>
                    Email: us[@]verseone.net</p>
                  <p className='contact-div-heading'>China</p>
                  <p className='contact-div-content'>Room 1516, Building D, Fangheng International,<br>
                  </br> No. 6, Futong East Street, Chaoyang, Beijing,<br></br>
                    China.<br></br>
                    Email: support[@]verseone.net</p>
                  <p className='contact-div-heading'>France</p>
                  <p className='contact-div-content'>Room 1516, Building D, Fangheng International,<br></br>
                    No. 6, Futong East Street, Chaoyang, Beijing<br></br>
                    Email: support[@]verseone.net</p>
                  < p className='contact-div-heading'>UK</p>
                  <p className='contact-div-content'>Room 1516, Building D, Fangheng International,<br></br>
                    No. 6, Futong East Street, Chaoyang, Beijing<br></br>
                    Email: support[@]verseone.net</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
      <div className='img_div'>
        <img src={contact} alt="" />
      </div>
      <div className='form-div'>
        <section className='container-fluid'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-12 col-sm-12 p-0'>
              <div><img style={{ width: "100%" }} src={form} alt="" /></div>
              
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12' style={{paddingTop:"50px"}} id="spacing">
              <div style={{height:"100%"}}><Contactform /></div>
              
            </div>
          </div>
        </section>

      </div>
      <div className='Faq-div' >
        <p className='faq-heading'>FAQ</p>
        <p className='faq-content'>Lacus, gravida nibh cras senectus egestas tempus purus. Sed velit ultrices faucibus sed risus. </p>
        <div className='container mt-5'> <Contactaccordion /></div>

      </div>
    </section>





  </>

  )
}

export default Contact
