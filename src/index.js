// import './promise-polyfill'

// import { h, render } from 'preact';
// import { Provider } from 'preact-redux';
// import { Router, Route } from 'preact-router';
// enable progressive web app support (with offline-plugin)


// Load offline plugin only on production
process.env.NODE_ENV === 'production' && require('./offline');

// import 'material-design-lite/material';
import { app } from './app';
// import App from './components/App';
// import About from './components/About';
// import ErrorPage from './components/404';

// import store from './store';

import './style/index.scss';

// render(
// 	<Provider store={store}>
// 		<Router>
// 			<App path='/' />
// 			<About path='/about' />
// 			<ErrorPage default />
// 		</Router>
// 	</Provider>, document.body);
app.$mount(document.body);

console.log('loaded');