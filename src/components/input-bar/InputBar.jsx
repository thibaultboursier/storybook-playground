import React from 'react';

export class InputBar extends React.Component {
    state = {
        message: '',
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input 
                    onChange={this.onMessageChanged} value={this.state.message}
                    placeholder="Your message" 
                    type="text" 
                />
                <button
                    className="btn btn-primary btn-sm"
                    disabled={!this.state.message}
                    onClick={this.onButtonClicked}
                    type="button"
                >
                    send
                </button>
            </div>
        );
    }

    onButtonClicked = () => {
        this.props.onMessageSent(this.state.message);

        this.setState({
            message: ''
        });

    };

    onMessageChanged = (event) => {
        this.setState({
            message: event.target.value,
        });
    };
};
