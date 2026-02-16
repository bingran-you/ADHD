import React from 'react';
import { StatusBar } from 'react-native';
import CoachApp from './src/coach/CoachApp';
import ErrorBoundary from './src/coach/components/ErrorBoundary';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ErrorBoundary>
        <CoachApp />
      </ErrorBoundary>
    </>
  );
}
