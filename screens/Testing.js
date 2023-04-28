import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

function TestingScreen() {
  const [titleText, setTitleText] = useState('Press here!');

  const onPressTitle = () => {
    titleText === 'Press here!' ? setTitleText('Pressed!') : setTitleText('Press here!')
  }

  const [count, setCount] = useState(0);

  const onPressButton = () => {
    setCount(count + 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText} onPress={onPressTitle}>{titleText}</Text>
      <Text>Open up App.js to start working
        <Text style={styles.innerText}> on your app!!!!</Text>
      </Text>
      <Image style={styles.tinyLogo} source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}/>
      <Button title='increase count' onPress={onPressButton}/>
      <Text>Current count: {count}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  innerText: {
    color: 'blue',
    fontWeight: 'bold'
  },
  tinyLogo: {
    width: 50,
    height: 50
  }
});


export default TestingScreen;
