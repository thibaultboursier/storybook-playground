import React from 'react';
import { MessagesArea } from '../messages-area/MessagesArea';
import { InputBar } from '../input-bar/InputBar';

export class Chat extends React.Component {
    state = {
        messages: [],
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="p-3 bg-light">
                <MessagesArea messages={this.state.messages}/>
                <InputBar onMessageSent={this.onMessageSent} />
            </div>
        );
    }

    onMessageSent = (message) => {
        this.setState(state => ({
            messages: [...state.messages, message]
        }));
    };
};
