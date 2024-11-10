import Login_Signup from "./Login_Signup";
import WalkThrough from "./walkThrough";
import { desktopScreen } from "../helper/walkthroughPaths";

function DesktopLogin(props) {

    return (
        <>
            <div className="slider-wrapper">
                <WalkThrough imagesList={desktopScreen.images} slideHeadings={desktopScreen.slideHeadings} slideDesc={desktopScreen.sildeDesc} />
            </div>
            <div className="login-signup-wrapper">
                <Login_Signup />
            </div>
        </>
    )

}
export default DesktopLogin;