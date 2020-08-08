import React from 'react';
import { StatusBar } from 'expo-status-bar';

import Landing from './src/screens/Landing';

const App: React.FC = () => (
  <>
    <StatusBar style="auto" />
    <Landing />
  </>
);

export default App;
