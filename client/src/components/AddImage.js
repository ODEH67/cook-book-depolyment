import { useEffect, useState } from "react";
import noimage from "../img/uploadimg.jpg";
import axios from "axios";


export default function ImageCom({setImage,image,user}) {


    const handleImageChange = (e) => {
    console.log("the file is", e.currentTarget.files[0]);

    if (!e.currentTarget.files[0]) return;

    if (e.currentTarget.files[0].size > 10000000) {
        alert("This file is bigger than 100kB");
        return;
    }
    setImage({
        url: URL.createObjectURL(e.currentTarget.files[0]),
        file: e.currentTarget.files[0],
    });
    };

    // const handleSaveImg = async () => {
    // const formdata = new FormData();

    // formdata.set("id", user);
    // formdata.set("image", image.file, "filename");

    // for (let pair of formdata.entries()) {
    //     console.log(pair[0] + ": " + pair[1]);
    // }

    // const response = await axios.put("/recipes/image", formdata, {
    //     Headers: {
    //     "Content-type": "multipart/form-data; charset=UTF-8",
    //     },
    // });
    // console.log("🚀 ~ response:", response);
    // };



    return (
        <>            
<div className="form-labelAndInput-container">
    <label className="Add-Recipe-label">Add Image:
        <input 
        className="Add-Recipe-des"
        id="file"
        type="file"
        name="image"
        
        onChange={handleImageChange}
        accept="image/png, image/jpeg"
        style={{display: "hidden"}}
        />
    </label>
</div>
<div className="img-upload">
    <img
    src={image.url || noimage}
    alt=""
    />
</div>
    </>
);
}