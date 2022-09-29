import React, { useState } from "react";
import { useFormik } from "formik";
import "./Contact.css";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
import { LoginSchema } from "../application/LoginSchema";
import { Button } from "react-bootstrap";



;


const initialValues = {
    fname: "",
    lname: "",
    username: ""
};

function Form() {


    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: LoginSchema,
        onSubmit: (values, action) => {
            console.log("values", values);



            let formData = new FormData();
            formData.append("username", values.username)
            formData.append("password", values.password);

        }
    })

    return (<>
        <div className="d-flex justify-content-center">
            <div className="form-main">
                <form onSubmit={handleSubmit}>
                    <p className="contact-form">Contact Form</p>
                    <div style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>
                        <input
                            className="inputbar"
                            style={{ color: "#EE0979" }}
                            id="inputs"
                            placeholder="Name"
                            name="name"
                            type="text"
                            value={values.name}
                            onChange={handleChange}
                        />
                        <input
                            className="inputbar"
                            style={{ color: "#EE0979" }}
                            id="inputs"
                            placeholder="Email"
                            name="lname"
                            type="Email"
                            value={values.Email}
                            onChange={handleChange}
                        />

                    </div>

                    <input
                        className="inputbars"
                        style={{ color: "#EE0979" }}
                        placeholder="Subject"
                        name="subject"
                        type="text"
                        value={values.subject}
                        onChange={handleChange}
                    /><br></br>
                    <input
                        style={{ paddingBottom: "150px", color: "#EE0979" }}
                        className="inputbars pt-3"
                        placeholder="How can we help you?"
                        type="text"
                        name="help"
                        value={values.help}
                        onChange={handleChange}
                    />
                    <div className="contact-btn-div">
                        <button className=" btn contatc_button">Let’s Start</button>
                    </div>

                </form>
            </div>
        </div>






    </>

    )
}

export default Form