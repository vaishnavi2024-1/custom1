import { PERMISSIONS, entryPointUriPath } from './src/constants';

/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptionsForCustomApplication}
 */
const config = {
  name: 'Mycustom',
  entryPointUriPath,
  cloudIdentifier: 'gcp-us',
  env: {
    development: {
      initialProjectKey: 'customtest',
    },
    production: {
      applicationId: 'clrq5dnzq000d1427ch90awps',
      url: 'https://customvaish02.vercel.app',
    },
  },
  oAuthScopes: {
    view: ['view_products', 'view_shopping_lists'],
    manage: ['manage_products', 'manage_shopping_lists' ],
  },
  icon: '${path:@commercetools-frontend/assets/application-icons/rocket.svg}',
  mainMenuLink: {
    defaultLabel: 'Template starter',
    labelAllLocales: [],
    permissions: [PERMISSIONS.View],
  },
  submenuLinks: [
    {
      uriPath: 'channels',
      defaultLabel: 'Channels',
      labelAllLocales: [],
      permissions: [PERMISSIONS.View],
    },
    {
      uriPath: 'shopping-lists',
      defaultLabel: 'Shopping Lists',
      labelAllLocales: [],
      permissions: [PERMISSIONS.View],
    },
  ],
};

export default config;
