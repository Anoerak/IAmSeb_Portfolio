/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

import { registerReactControllerComponents } from '@symfony/ux-react';
import { registerVueControllerComponents } from '@symfony/ux-vue';

// Registers React controller components to allow loading them from Twig
//
// React controller components are components that are meant to be rendered
// from Twig. These component then rely on other components that won't be called
// directly from Twig.
//
// By putting only controller components in `react/controllers`, you ensure that
// internal components won't be automatically included in your JS built file if
// they are not necessary.
registerReactControllerComponents(require.context('./react/controllers', true, /\.(j|t)sx?$/));

registerVueControllerComponents(require.context('./vue/controllers', true, /\.vue$/));

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';
// import '../templates/pages/home/home.css';
// import '../templates/pages/projects/projects.css';
// import '../templates/pages/about/about.css';
// import '../templates/pages/contact/contact.css';
// import '../templates/components/header/header.css';
// import '../templates/components/footer/footer.css';

// start the Stimulus application
import './bootstrap';

// JS files required from templates
import('../templates/components/header/header.js');
import('../templates/components/footer/footer.js');

// FontAwesome required
require('@fortawesome/fontawesome-free/css/all.min.css');
require('@fortawesome/fontawesome-free/js/all.js');

// Global JS goes here
