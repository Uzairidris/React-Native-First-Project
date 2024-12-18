import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  useColorScheme,
} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'light';
  const Heading =
    "This is the first app, I know it ain't much but it's honest work!";
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.headingWhite : styles.headingDark}>
          {Heading}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingWhite: {
    marginTop: 10,
    fontSize: 50,
    color: '#fff',
    textAlign: 'center',
  },
  headingDark: {
    marginTop: 10,
    fontSize: 50,
    fontWeight: '800',
    color: '#000',
    textAlign: 'center',
  },
});

export default AppPro;
