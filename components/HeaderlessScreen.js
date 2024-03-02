import React from 'react';
import {View, Text, Button} from 'react-native';

function HeaderlessScreen({navigation}) {
  return (
    <View>
      <Text>Header가 존재하지 않습니다</Text>
      <Button onPress={() => navigation.pop()} title="뒤로가기" />
    </View>
  );
}

export default HeaderlessScreen;