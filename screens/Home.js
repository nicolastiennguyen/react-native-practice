import React from 'react';
import { Button, View, Text } from 'react-native';

function Home( {navigation} ) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to About" onPress={() => navigation.navigate('About')} />
      <Button title="Go to Testing" onPress={() => navigation.navigate('Testing')} />
    </View>
  );
}

export default Home;
