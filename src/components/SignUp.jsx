import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import authService from "../appwrite/auth";

const SignUp = () => {

    
    
    
  // Formik initialization
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .max(20, "Name cannot exceed 20 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
        try {
          // Calling the createAccount method from AuthService
          const response = await authService.createAccount(values);
          if(response){
            console.log(response);
            
          


              
          }
  
          // Optionally, reset the form after successful submission
          resetForm();
          alert("Account created successfully!");
        } catch (error) {
          console.error("Error creating account:", error.message);
          alert("Failed to create account. Please try again.");
        } finally {
          setSubmitting(false);
        }
      },
    });

  return (
    <div className=" mt-7 max-w-md mx-auto p-4 border rounded-md shadow-md">
      <h1 className="text-xl font-bold mb-4">Signup Form</h1>
      <form onSubmit={formik.handleSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 font-medium">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
              autoComplete="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className={`w-full px-3 py-2 border ${formik.touched.name && formik.errors.name ? "border-red-500" : "border-gray-300"} rounded`}
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-medium">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
              autoComplete="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`w-full px-3 py-2 border ${formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-300"} rounded`}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1 font-medium">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
              autoComplete="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={`w-full px-3 py-2 border ${formik.touched.password && formik.errors.password ? "border-red-500" : "border-gray-300"} rounded`}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
