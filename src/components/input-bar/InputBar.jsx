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
            <div className="input-group">
                <input 
                    className="form-control"
                    onChange={this.onMessageChanged} value={this.state.message}
                    placeholder="Your message" 
                    type="text" 
                />
                <div className="input-group-append">
                    <button
                        className="btn btn-primary"
                        disabled={!this.state.message}
                        onClick={this.onButtonClicked}
                        type="button"
                    >
                        send
                    </button>
                </div>
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
