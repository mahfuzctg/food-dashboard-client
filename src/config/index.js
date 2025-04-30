/* eslint-disable no-undef */

import dotenv from "dotenv";
dotenv.config();

export default {
  baseApi: process.env.REACT_APP_BACKEND_URL,
  cloudinary_upload_preset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
  cloudinary_url: process.env.REACT_APP_CLOUDINARY_URL,
};
