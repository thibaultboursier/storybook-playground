import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

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

configure(loadStories, module);
