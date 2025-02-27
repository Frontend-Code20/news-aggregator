import { useState } from "react";

import WalkThrough from "../walkThrough/walkThrough";
import Login_Signup from "../auth/authentication";

function MobileTabletLogin(props){

    const [walkThrough, setWalkThrough] = useState(true);

    return(
        <>
            {walkThrough ? <WalkThrough setWalkThrough={setWalkThrough} /> : <Login_Signup />}
        </>
    )

}

export default MobileTabletLogin;