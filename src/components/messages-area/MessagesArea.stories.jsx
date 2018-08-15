import React from 'react';

import { storiesOf } from '@storybook/react';
import uuidv4 from 'uuid/v4';

import { MessagesArea } from './MessagesArea';

const messages = [{ id: uuidv4(), content: 'Hello' }];

storiesOf('Chat', module)
    .add('MessagesArea', () => (
        <MessagesArea messages={messages} />)
    );
