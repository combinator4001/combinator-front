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
                    <input type="number" placeholder="Enter your Code" required/>
                </div>

                <div className="input-box2">
                    <span className="details">new Password</span>
                    <input type="password" placeholder="Enter your new Password" required/>
                </div>

                <div className="input-box2">
                    <span className="details2">Submit Password</span>
                    <input type="password" placeholder="Re-enter your new Password" required/>
                </div>

            </div>
            <div class="Verify2">
                <div class="Code2">                    
                    <a href="#">Resend Verification Code</a>
                </div>
            </div>            
            <div class="button2">
                <input type="submit" value="Submit Changes"/>
            </div>
        </form>

    </div>
    </div>
    )
}

export default Changepass
