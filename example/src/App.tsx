import * as React from 'react';

import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import UseCase from './components/UseCase';
import DefaultSquircle from './components/DefaultSquircle';
import ReactChildrenSquircle from './components/ReactChildrenSquircle';
import SkiaMaskChildrenSquircle from './components/SkiaMaskChildrenSquircle';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <UseCase
          style={styles.containerUsecase}
          title="Default"
          subtitle="Fit parent size"
        >
          <DefaultSquircle />
        </UseCase>
        <UseCase
          style={styles.containerUsecase}
          title="Children"
          subtitle="With React children inside"
        >
          <ReactChildrenSquircle />
        </UseCase>
        <UseCase title="Mask Children" subtitle="With Skia Children">
          <SkiaMaskChildrenSquircle />
        </UseCase>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerUsecase: {
    marginBottom: 12,
  },
});
