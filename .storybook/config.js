import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { addDecorator } from '@storybook/react';
import { initScreenshot, withScreenshot } from 'storybook-chrome-screenshot';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

setOptions({
  name: 'storybook-playground',
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: true,
  addonPanelInRight: true,
  sortStoriesByKind: true,
  sidebarAnimations: true,
});

const req = require.context('../src/components/', true, /stories\.jsx$/)

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(initScreenshot());
addDecorator(withScreenshot());

configure(loadStories, module);
