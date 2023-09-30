import { toast } from "react-hot-toast";

// Upload image to the imgbb and get image url
export const imageUpload = async (image) => {
  if (image) {
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb_API_key}`;

    return await fetch(url, {
      method: "POST",
      body: formData,
    }).then((res) => res.json());
  }
};
