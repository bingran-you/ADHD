import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { coachTheme } from '../theme';
import CoachButton from './CoachButton';

type ErrorBoundaryProps = {
  children: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error?: Error;
};

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error) {
    console.warn('[ErrorBoundary] Unhandled error', error);
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>页面出错了</Text>
        <Text style={styles.subtitle}>请尝试重新进入，或稍后再试。</Text>
        <CoachButton label="重试" onPress={this.handleRetry} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: coachTheme.spacing.lg,
    gap: coachTheme.spacing.md,
    backgroundColor: coachTheme.colors.backgroundTop,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: coachTheme.colors.textPrimary,
    fontFamily: coachTheme.fonts.heading,
  },
  subtitle: {
    fontSize: 14,
    color: coachTheme.colors.textMuted,
    textAlign: 'center',
    fontFamily: coachTheme.fonts.body,
    lineHeight: 20,
  },
});
