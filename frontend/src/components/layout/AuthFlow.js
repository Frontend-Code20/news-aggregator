import React from "react";
import DesktopLogin from '../auth/desktopLogin';
import MobileTabletLogin from "./mobileTabletLogin";

function AuthFlow({ }) {

    // walkthrough data for mobile screens
    return (
        <div className="grid grid-cols-1 xl:grid-cols-3 w-full h-full relative ">
            {window.innerWidth > 1024 ? <DesktopLogin /> : <MobileTabletLogin />}
        </div>
    );
}

export default AuthFlow;