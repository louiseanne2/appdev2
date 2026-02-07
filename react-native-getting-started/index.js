// index.js
import { registerRootComponent } from 'expo';

import HelloWorldDemo from './HelloWorldDemo';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// and ensures the app works in both Expo Go and native builds
registerRootComponent(HelloWorldDemo);
