import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import Squircle from 'react-native-squircle';

const styleSheetSize = (width: number, height: number) => {
  return {
    marginHorizontal: 12,
    width,
    height,
  };
};

const TextChild = () => {
  return (
    <View style={styles.containerText}>
      <Text style={styles.text}>Lorem ipsum dolor sit amet</Text>
    </View>
  );
};

const ReactChildrenSquircle = () => {
  return (
    <ScrollView horizontal contentContainerStyle={styles.container}>
      <View style={styleSheetSize(140, 140)}>
        <Squircle borderRadius={20} backgroundColor="#D0F5BE">
          <TextChild />
        </Squircle>
      </View>
      <View style={styleSheetSize(200, 90)}>
        <Squircle borderRadius={12} backgroundColor="#FF55BB">
          <View style={styles.secondExample}>
            <TextChild />
          </View>
        </Squircle>
      </View>
      <View style={styleSheetSize(200, 130)}>
        <Squircle borderRadius={45} backgroundColor="#FEFF86">
          <TextChild />
        </Squircle>
      </View>
      <View style={styleSheetSize(100, 90)}>
        <Squircle borderRadius={25} backgroundColor="#1B9C85">
          <TextChild />
        </Squircle>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  containerText: {
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
    marginHorizontal: 12,
  },
  secondExample: {
    justifyContent: 'center',
    margin: 12,
    backgroundColor: '#ADE4DB',
    borderRadius: 20,
  },
});

export default ReactChildrenSquircle;
