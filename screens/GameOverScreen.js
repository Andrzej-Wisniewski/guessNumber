import { View, Image, StyleSheet, Text, Dimensions } from 'react-native';
import Title from '../components/ui/Title';

import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.screen}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <Text style={styles.summaryText}>
        Twój telefon potrzebował{' '}
        <Text style={styles.highlight}>{roundsNumber}</Text> trafień aby zgadnąć
        liczbę <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={onStartNewGame}>Zagraj Ponownie</PrimaryButton>
      </View>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    marginVertical: deviceHeight < 400 ? 18 : 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: deviceHeight < 380 ? 16 : 24,
    textAlign: 'center',
    marginVertical: deviceHeight < 400 ? 12 : 24,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
  buttonContainer: {
    width: deviceWidth < 380 ? '60%' : '80%',
    marginTop: 12,
  },
});
