import './profile.css'
import React, { useEffect, useState } from 'react';
import useLocation from "react-router-dom";



export default function Img() {
    const location = useLocation();
    const fileInputRef = React.createRef();
    const [preview, setPreview] = useState("");
    const [image, setImage] = useState("");
    const [openingPage,SetopeningPage]=useState(true);



        //console.warn(item);
        if(openingPage){
            fetch(url + "/me",{
                crossDomain:true,
                method:'GET',
                mode: 'cors',
                headers: {'Content-Type' : 'application/json' ,
                    "Authorization" : `Bearer ${location.access_token}`},
                //body:JSON.stringify(item)
            })
                .then(async response => {
                    if(response.status === 200){
                        response=await response.json();
                        //toast.success(response.message,{
                            //position:"top-right",
                            //closeOnClick:true
                        //});
                        if(response.role==="PERSON")
                        {
                            //setfirstname(response.firstName);
                            //console.log(response.access_token);
                            //console.log(response.email);
                            SetopeningPage(false);
                            setImage(response.imageUrl);
    
                        }
    
                    }
                    else{
                        toast.error("Failed to load your image", {
                            position: "top-right",
                            closeOnClick: true
                        });
                        throw new Error('Failed to load your image.\n' + response.statusText);
                    }
                })
                .then(response => {
                    //console.log(response);
                })
                .catch( err => console.log(err));
    
        }
    
    
    





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



    fetch()



    const submitimage = () => {

		const formData = new FormData();


		formData.append('File', image);


		fetch(

			url + "/image",

			{

				method: 'PUT',

				body: formData,

                headers: {'Content-Type' : 'application/json' ,
                "Authorization" : `Bearer ${location.access_token}`},

			}

		)

            .then( async (response) => {
                if(response.status === 200){
                    response = await response.json();
                    console.log(response);
                    toast.success(response.message, {
                        position: "top-right",
                        closeOnClick: true
                    });
                }else if(response.status === 400){
                    response = await response.json();
                    toast.error(response.message[0], {
                        position: "top-right",
                        closeOnClick: true
                    });
                }else if(response.status === 413){
                    response = await response.json();
                    toast.error(response.message, {
                        position: "top-right",
                        closeOnClick: true
                    });
                }
                else{
                    toast.error("not done!!", {
                        position: "top-right",
                        closeOnClick: true
                    });
                }

            })
            .catch( err => console.log(err));

	};



    return (
    <div className="img5" >
        { preview ? <img className="img5" src={preview} onClick={() =>{
            setImage(null);
        }}/> :

        <button className="btn7" onClick={(event) =>{ 
                event.preventDefault();
                fileInputRef.current.click();
                }}>Add Image</button>}
        <input type="file" 
               style={{display: "none" }}
               accept="image/*"
               ref={fileInputRef }
               onChange={(event) =>{
                   const file = event.target.files[0];

                   if(file  && file.type.substring(0, 5) === "image"){
                       setImage(file);
                       submitimage();
                   }
                   else{
                       setImage(null);
                   }

           }}/> 
     </div>
    )
}