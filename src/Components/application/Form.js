import React, { useState } from "react";
import { useFormik } from "formik";
import "./Application.css";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
import { LoginSchema } from "./LoginSchema";
import { Button } from "react-bootstrap";
import fimg from "../assets/fimg.png";
import { IoMdArrowDropdown } from "react-icons/io"

const initialValues = {
    fname: "",
    lname: "",
    username: "",
};

function Form() {
    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: LoginSchema,
        onSubmit: (values, action) => {
            console.log("values", values);

            let formData = new FormData();
            formData.append("username", values.username);
            formData.append("password", values.password);
        },
    });

    return (
        <>
            <div className="d-flex justify-content-center">
                <form onSubmit={handleSubmit}>
                    <label className="form-label">Name</label>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "30px",
                            flexWrap: "wrap",
                        }}
                    >
                        <input
                            className="input-bar"
                            id="inputs"
                            placeholder="First Name"
                            name="fname"
                            type="text"
                            value={values.username}
                            onChange={handleChange}
                        />
                        <input
                            className="input-bar"
                            id="inputs"
                            placeholder="Last Name"
                            name="lname"
                            type="text"
                        //   value={values.username}
                        //   onChange={handleChange}
                        />
                    </div>
                    <label className="form-label">Phone Number</label>
                    <br></br>
                    <div className="d-flex">
                        <img src={fimg} alt="" style={{ position: "absolute", marginLeft: "10px", paddingTop: "5px" }} />
                        <input
                            className="input-bars"
                            name="username"
                            type="email"
                            style={{ paddingLeft: "50px" }}
                        //   value={values.username}
                        //   onChange={handleChange}
                        // style={{ position: "relative" }}
                        />

                    </div>

                    <br></br>

                    <label className="form-label">Primary Email Adress</label>
                    <br></br>

                    <input
                        className="input-bars"
                        placeholder="Please supply your preferred email address"
                        type="email"
                        name="email"

                    />
                    <br></br>

                    <label className="form-label">Address</label>
                    <br></br>

                    <input
                        className="input-bars"
                        placeholder="Street"
                        type="text"
                        name="text"

                    />
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "30px",
                            marginTop: "20px",
                            flexWrap: "wrap",
                        }}
                    >
                        <input
                            className="input-bar"
                            id="inputs"
                            placeholder="City"
                            name="fname"
                            type="text"

                        />
                        <input
                            className="input-bar"
                            id="inputs"
                            placeholder="State/Region/Province"
                            name="lname"
                            type="text"

                        />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "30px",
                            marginTop: "20px",
                            flexWrap: "wrap",
                        }}
                    >
                        <input
                            className="input-bar"
                            id="inputs"
                            placeholder="Postal/Zip Code"
                            name="fname"
                            type="text"

                        />
                        {/* <select placeholder="Country" className="input-bar" id="input">
                            <option>Country</option>
                        </select> */}
                        <div className="d-flex form_position">

                            <input class="form-control" className='input-datalist input-bar' name='market' list="datalistOptions" id="exampleDataList" placeholder="Select Market"
                                style={{ position: "relative" }} />
                            <datalist id="datalistOptions">
                                <option value="San Francisco" />
                                <option value="New York" />
                                <option value="Seattle" />
                                <option value="Los Angeles" />
                                <option value="Chicago" />
                            </datalist>
                            <IoMdArrowDropdown className="svg_icon" />


                        </div>
                    </div>
                    <label className="form-label">Primary Genre</label>
                    <br></br>
                    {/* <select placeholder="" className="input-bars">
            <option>Select Genre</option>
          </select> */}
                    <div className="d-flex form_position">

                        <input class="form-control" className='input-datalist' name='market' list="datalistOptions" id="exampleDataList" placeholder="Select Market"
                            style={{ position: "relative" }} />
                        <datalist id="datalistOptions">
                            {/* <option value="San Francisco" />
                            <option value="New York" />
                            <option value="Seattle" />
                            <option value="Los Angeles" />
                            <option value="Chicago" /> */}
                        </datalist>
                        <IoMdArrowDropdown className="svg_icon" />

                    </div>

                    <div className="btn-div">
                        <p className="btn-line">1/3</p>
                        <Button className="login">Next Step</Button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Form;
