import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle, Text } from 'react-native';

interface UseCaseProps {
  title: string;
  subtitle: string;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

const UseCase = ({ children, title, style, subtitle }: UseCaseProps) => {
  return (
    <View style={style}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <View style={styles.containerShow}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerShow: {
    backgroundColor: '#EEEEEE',
    paddingVertical: 12,
  },
  title: {
    fontSize: 24,
    marginBottom: 12,
    marginLeft: 12,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 12,
    marginLeft: 12,
  },
});

export default UseCase;
