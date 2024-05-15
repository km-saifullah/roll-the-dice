import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import type {PropsWithChildren} from 'react';
import React, {useState} from 'react';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import DiceOne from '../assets/dice1.png';
import DiceTwo from '../assets/dice2.png';
import DiceThree from '../assets/dice3.png';
import DiceFour from '../assets/dice4.png';
import DiceFive from '../assets/dice5.png';
import DiceSix from '../assets/dice6.png';

type Diceprops = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({imageUrl}: Diceprops): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImg} source={imageUrl} />
    </View>
  );
};

const App = (): JSX.Element => {
  const [diceImg, setDiceImg] = useState<ImageSourcePropType>(DiceOne);

  const rollDiceonTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setDiceImg(DiceOne);
        break;
      case 2:
        setDiceImg(DiceTwo);
        break;
      case 3:
        setDiceImg(DiceThree);
        break;
      case 4:
        setDiceImg(DiceFour);
        break;
      case 5:
        setDiceImg(DiceFive);
        break;
      case 6:
        setDiceImg(DiceSix);
        break;
      default:
        setDiceImg(DiceOne);
        break;
    }
    ReactNativeHapticFeedback.trigger('impactLight', options);
  };

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImg} />
      <Pressable onPress={rollDiceonTap}>
        <Text style={styles.pressBtn}>Roll The Dice</Text>
      </Pressable>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  diceImg: {
    height: 128,
    width: 128,
  },
  pressBtn: {
    backgroundColor: '#ddd',
    color: '#181818',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 3,
  },
});
