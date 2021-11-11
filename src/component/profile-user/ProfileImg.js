import './profile.css'
import React, { useEffect, useState } from 'react';


export default function Img() {
    const fileInputRef = React.createRef();
    const [preview, setPreview] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        if(image){
            const reader = new FileReader();
            reader.onloadend = () =>{
                setPreview(reader.result);
            }
            reader.readAsDataURL(image);

        } else{
            setPreview(null);
        }

    }, [image])

    return (
    <div className="img5" >
        { preview ? <img className="img5" src={preview} onClick={() =>{
            setImage(null);
        }}/> :
        <button onClick={(event) =>{ 
                event.preventDefault();
                fileInputRef.current.click();
                }}>Add Image</button>}
        <input type="file" 
               style={{display: "none"}} 
               accept="image/*"
               ref={fileInputRef }
               onChange={(event) =>{
                   const file = event.target.files[0];

                   if(file  && file.type.substring(0, 5) == "image"){
                       setImage(file);
                   }
                   else{
                       setImage(null);
                   }
           }}/> 
     </div>
    )
}