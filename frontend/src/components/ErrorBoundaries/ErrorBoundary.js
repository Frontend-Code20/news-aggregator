import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        }

    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.error({ error, info })
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="w-full h-full flex justify-center items-center text-white">
                    <div className="flex flex-col gap-2 justify-center">
                        <p>Something went wrong. Please try again later.</p>
                        <button className="px-5 py-2 bg-cyan-500 rounded-lg">Try Again</button>
                    </div>
                </div>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;