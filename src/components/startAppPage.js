import React from "react";
import LoadingScreen from './loadingScreen'
import DesktopLogin from './desktopLogin';
import MobileTabletLogin from "./mobileTabletLogin";
import WalkThrough from './walkThrough';
import '../css/startAppPage.css'

class StartAppPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            screenWidth: window.innerWidth
        }

        this.HideLoadingScreen = this.HideLoadingScreen.bind(this);

    }
    render() {
        // walkthrough data for mobile screens
        return (
            <div className="wrapper">
                {
                    this.state.loading ? <LoadingScreen HideLoadingScreen={this.HideLoadingScreen} />
                        : this.state.screenWidth > 1024 ? <DesktopLogin /> : <MobileTabletLogin />
                }

            </div>
        );
    }
    HideLoadingScreen() {
        this.setState({ loading: false });
    }
}

export default StartAppPage;