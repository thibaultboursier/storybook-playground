import React from 'react';

import { storiesOf } from '@storybook/react';
import uuidv4 from 'uuid/v4';
import { withKnobs, object } from '@storybook/addon-knobs/react';

import { MessagesArea } from './MessagesArea';

const messages = [{ id: uuidv4(), content: 'Hello' }];

storiesOf('Chat', module)
    .addDecorator(withKnobs)
    .add('MessagesArea', () => (
        <MessagesArea messages={object('messages', messages)} />)
    );
