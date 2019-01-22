/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppRouter from './AppRouter.js';

AppRegistry.registerComponent(appName, () => AppRouter);
