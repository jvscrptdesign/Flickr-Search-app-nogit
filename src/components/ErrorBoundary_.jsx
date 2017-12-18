import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: '',
            info: ''
        };
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({
            hasError: true,
            error: error,
            info: info
        });
        // You can also log the error to an error reporting service
        //console.log(`error: ${error}, info: ${JSON.stringify(info, null, 2)}`);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div>
                    <h3>Error boundary</h3>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
