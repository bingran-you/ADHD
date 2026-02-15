import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';

import { screenOrder, screenRegistry } from './src/screens/registry';

export default function App() {
  const [activeKey, setActiveKey] = useState<(typeof screenOrder)[number]>(screenOrder[0]);
  const ActiveScreen = screenRegistry[activeKey];

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.preview}>
        <ActiveScreen />
      </View>
      <View style={styles.toolbar}>
        <ScrollView
          horizontal
          contentContainerStyle={styles.toolbarContent}
          showsHorizontalScrollIndicator={false}
        >
          {screenOrder.map((key) => (
            <Pressable
              key={key}
              onPress={() => setActiveKey(key)}
              style={[styles.tab, activeKey === key && styles.tabActive]}
            >
              <Text style={[styles.tabText, activeKey === key && styles.tabTextActive]}>{key}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#000',
  },
  preview: {
    flex: 1,
  },
  toolbar: {
    borderTopWidth: 1,
    borderTopColor: '#1f1f1f',
    backgroundColor: '#0d0d0d',
    paddingVertical: 10,
  },
  toolbarContent: {
    paddingHorizontal: 12,
    gap: 8,
  },
  tab: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
    backgroundColor: '#1c1c1c',
  },
  tabActive: {
    backgroundColor: '#f06666',
  },
  tabText: {
    color: '#c7c7c7',
    fontSize: 12,
    letterSpacing: 0.3,
  },
  tabTextActive: {
    color: '#101010',
    fontWeight: '600',
  },
});
