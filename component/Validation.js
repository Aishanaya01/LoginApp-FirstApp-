import React from "react";
import * as yup from "yup";
export const LoginSchema = yup.object().shape({
  Email: yup
    .string()
    .required("Required!")
    .email("Not a valid E-mail")
    .min(4)
    .trim(),
  Password: yup
    .string()
    .required("Required!")
    .min(6, "Minimum 6 charaters are required"),
});
export const EditProfileSchema = yup.object().shape({
  Name: yup.string().required(),
  Phone: yup.number().required(),
  Email: yup.string().required("Required!").email("Not a valid E-mail").min(4),
  Country: yup.string().required("Required!"),
});