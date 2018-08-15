import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { InputBar } from './InputBar';

storiesOf('Chat', module)
    .add('InputBar', () => (
        <InputBar onMessageSent={action('onMessageSent')} />)
    );
