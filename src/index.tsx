import React from 'react';
import ReactDOM from 'react-dom';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';
import './assets/lib/fa/css/all.css';
import './assets/css/index.css';
import './assets/css/App.css';
// import App from './base/App';
import * as serviceWorker from './serviceWorker';

import Loadable from 'react-loadable';
import { LoadingComponent } from './components/Loader';

const AsyncBase = Loadable({loader: () => import("./base/App"), loading: LoadingComponent});


ReactDOM.render(<AsyncBase />, document.getElementById('root') as Element);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
