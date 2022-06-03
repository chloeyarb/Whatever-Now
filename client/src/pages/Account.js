import React from "react";
import Button from "react-bootstrap/Button";




// need to render the page with and acoounts settings with change PFP, change password, and add birthday
const Account = () => {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <h1 className="mb-3">
                    Account settings
                </h1>
            </div>

            <Button
                variant="dark"
                type="submit"
                className="w-25 fs-5 fw-bold mt-3 mb-5 button-color"
            >
                Change Profile Picture 
            </Button>

            <Button
                variant="dark"
                type="submit"
                className="w-25 fs-5 fw-bold mt-3 mb-5 button-color"
            >
                Change Password
            </Button>

        </div>
    );
}


export default Account