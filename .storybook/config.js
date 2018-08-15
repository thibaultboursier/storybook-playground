import { configure } from '@storybook/react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const req = require.context('../src/components/', true, /stories\.jsx$/)

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
