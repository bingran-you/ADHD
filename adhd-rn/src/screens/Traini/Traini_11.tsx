import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TrainiBottomNav from '../../components/traini/TrainiBottomNav';
import TrainiLogo from '../../components/traini/TrainiLogo';
import TrainiTopBar from '../../components/traini/TrainiTopBar';
import { trainiTheme } from '../../theme/traini';

export default function Traini_11() {
  return (
    <LinearGradient colors={['#ffa1aa', '#ff6f77']} style={styles.root}>
      <SafeAreaView style={styles.safe}>
        <TrainiTopBar
          left={<View style={styles.menuIcon}><View style={styles.menuLine} /><View style={styles.menuLine} /><View style={styles.menuLine} /></View>}
          center={<TrainiLogo color="#ffffff" />}
          right={<View style={styles.cart}><View style={styles.cartHandle} /></View>}
        />
        <View style={styles.content}>
          <View style={styles.collarWrap}>
            <View style={styles.collarBand} />
            <View style={styles.collarTag}>
              <View style={styles.tagMark} />
            </View>
          </View>
          <Text style={styles.overline}>INTRODUCING</Text>
          <Text style={styles.title}>Traini Collar</Text>
          <Text style={styles.subtitle}>Talk. Health. GPS Tracking.{"\n"}Made to understand your dog.</Text>
          <View style={styles.primaryButton}>
            <Text style={styles.primaryText}>Pre-Order Now</Text>
          </View>
          <Text style={styles.caption}>Limited Quantity Early Bird Discount</Text>
          <View style={styles.dots}>
            <View style={styles.dotActive} />
            <View style={styles.dot} />
          </View>
        </View>
        <TrainiBottomNav activeIndex={1} light />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  safe: {
    flex: 1,
  },
  menuIcon: {
    width: 24,
    height: 20,
    justifyContent: 'space-between',
  },
  menuLine: {
    height: 2,
    borderRadius: 2,
    backgroundColor: '#ffffff',
  },
  cart: {
    width: 24,
    height: 20,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 2,
  },
  cartHandle: {
    width: 10,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  collarWrap: {
    width: 170,
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  collarBand: {
    width: 150,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#f2f2f2',
    transform: [{ rotate: '-10deg' }],
  },
  collarTag: {
    position: 'absolute',
    width: 46,
    height: 30,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#f2d9d9',
  },
  tagMark: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: trainiTheme.colors.accent,
  },
  overline: {
    fontSize: 11,
    color: '#ffecee',
    letterSpacing: 2,
    fontWeight: '700',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#ffffff',
    marginTop: 6,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 12,
    color: '#ffecee',
    marginTop: 6,
    lineHeight: 16,
  },
  primaryButton: {
    marginTop: 18,
    backgroundColor: '#ffffff',
    borderRadius: 999,
    paddingHorizontal: 40,
    paddingVertical: 14,
  },
  primaryText: {
    color: trainiTheme.colors.accent,
    fontWeight: '700',
  },
  caption: {
    marginTop: 10,
    color: '#ffecee',
    fontSize: 11,
  },
  dots: {
    flexDirection: 'row',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ffd0d4',
    marginHorizontal: 4,
  },
  dotActive: {
    width: 20,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#ffffff',
    marginHorizontal: 4,
  },
});
