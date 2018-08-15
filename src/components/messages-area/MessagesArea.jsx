import React from 'react';

export const MessagesArea = (props) => {
    return (
        <ul className="list-group">
            {
                props.messages.map(message => {
                    return (
                        <li
                            className="list-group-item bg-dark text-white"
                            key={message.id}
                        >
                            {message.content}
                        </li>
                    )
                })
            }
        </ul>
    );
};
