import WalkThrough from "./walkThrough";
import Login_Signup from "./Login_Signup";
import { useState } from "react";
import { TabletScreen } from "../helper/walkthroughPaths";
import { PhoneScreen } from "../helper/walkthroughPaths";

function MobileTabletLogin(props){

    const [walkThrough, setWalkThrough] = useState(true);

    const paths = window.innerWidth > 769 ? TabletScreen : PhoneScreen;

    return(
        <>
            {walkThrough ? <WalkThrough imagesList={paths.images} slideHeadings={paths.slideHeadings} slideDesc={paths.sildeDesc} setWalkThrough={setWalkThrough} /> : <Login_Signup />}
        </>
    )

}

export default MobileTabletLogin;