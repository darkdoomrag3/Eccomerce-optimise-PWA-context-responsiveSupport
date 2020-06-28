import React from 'react';


class ErrorBundry extends React.Component {
    constructor() {
        super()

        this.state = {
            hasErroed: false
        }
    }

    static getDrivedStateFromerro(error) {
        return { hasErroed: true };


    }
    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {
        if (this.state.hasErroed) {
            return <div>something wrong</div>
        }
        return this.props.children

    }


}

export default ErrorBundry;