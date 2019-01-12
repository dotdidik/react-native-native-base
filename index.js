/** @format */

import {AppRegistry} from 'react-native';
import AppRouter from './AppRouter';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppRouter);
