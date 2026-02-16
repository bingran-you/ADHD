import React from 'react';
import { StatusBar } from 'react-native';
import CoachApp from './src/coach/CoachApp';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <CoachApp />
    </>
  );
}
