import React from 'react'
import  './Changepass.css'


const Changepass = () => {
    return (
        <div className="fa2">
        <div className="container2">
        <div className="title2">Change Password</div>
        <form action="#">
            <div className="user-details2">
                <div className="input-box2">
                    <span className="details2">Received Code</span>
                    <input type="number" placeholder="Enter your Code" />
                </div>

                <div className="input-box2">
                    <span className="details2">new Password</span>
                    <input type="password" placeholder="Enter your new Password" />
                </div>

                <div className="input-box2">
                    <span className="details2">Submit Password</span>
                    <input type="password" placeholder="Re-enter your new Password" />
                </div>
            </div>             
            <div className="button_containar2">
                <button className="yellow_buttons2" type="submit"   value="Change" >Sumbit Change</button>
            </div>       
        </form>

    </div>
    </div>
    )
}

export default Changepass
