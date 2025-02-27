import WalkThrough from "../walkThrough/walkThrough";
import Authentication from "./authentication";

function DesktopLogin(props) {

    return (
        <>
            <div className="col-span-2 w-full h-full"> 
                <WalkThrough />
            </div>
            <div className="border-l border-darkNavyBlue bg-darkNavyBlue flex h-full overflow-auto">
                <Authentication />
            </div>
        </>
    )

}
export default DesktopLogin;