import React, { useState } from "react";
import style from "./Form.module.scss";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { postAdminThunk } from "../../../redux/reducers/adminSlice";
const ProductForm = () => {
  const dispatch = useDispatch();
  const postData = (data) => {
    dispatch(postAdminThunk(data));
  };

  const formik = useFormik({
    initialValues: {
      thumbnail: "",
      title: "",
      price: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      postData(values);
      formik.resetForm();
    },
  });

  return (
    <form className={style.form} onSubmit={formik.handleSubmit}>
      <label htmlFor="thumbnail">Thumbnail</label>
      <input
        id="thumbnail"
        name="thumbnail"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.thumbnail}
      />
      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
      />
      <label htmlFor="price">Price</label>
      <input
        id="price"
        name="price"
        type="price"
        onChange={formik.handleChange}
        value={formik.values.price}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;
