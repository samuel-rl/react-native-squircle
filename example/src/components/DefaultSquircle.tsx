import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Squircle from 'react-native-squircle';

const styleSheetSize = (width: number, height: number) => {
  return {
    marginHorizontal: 12,
    width,
    height,
  };
};

const DefaultSquircle = () => {
  return (
    <ScrollView horizontal contentContainerStyle={styles.container}>
      <View style={styleSheetSize(140, 140)}>
        <Squircle borderRadius={20} backgroundColor="#B70404" />
      </View>
      <View style={styleSheetSize(130, 100)}>
        <Squircle borderRadius={29} backgroundColor="#F79327" />
      </View>
      <View style={styleSheetSize(140, 130)}>
        <Squircle borderRadius={12} backgroundColor="#B799FF" />
      </View>
      <View style={styleSheetSize(200, 130)}>
        <Squircle borderRadius={45} backgroundColor="#47A992" />
      </View>
      <View style={styleSheetSize(200, 90)}>
        <Squircle borderRadius={25} backgroundColor="#DB005B" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default DefaultSquircle;
