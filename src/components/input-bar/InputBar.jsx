import React from 'react';
import uuidv4 from 'uuid/v4';

export class InputBar extends React.Component {
    state = {
        message: {
            id: uuidv4(),
            content: ''
        },
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="input-group">
                <input
                    className="form-control"
                    onChange={this.onMessageChanged}
                    onKeyPress={this.onKeyPressed}
                    placeholder="Your message"
                    type="text"
                    value={this.state.message.content}
                />
                <div className="input-group-append">
                    <button
                        className="btn btn-primary"
                        disabled={!this.state.message.content}
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

        this.setState(state => ({
            message: {
                ...state.message,
                content: '',
            },
        }));
    };

    onKeyPressed = (event) => {
        if (event.key === 'Enter') {
            this.onButtonClicked();
        }
    };

    onMessageChanged = (event) => {
        const content = event.target.value;

        this.setState(state => ({
            message: {
                ...state.message,
                content,
            },
        }));
    };
};
