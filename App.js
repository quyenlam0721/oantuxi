import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {GameStatus,ButtonGroup,PLayerCard,RoundCount} from './index';
import { CHOICES, getRoundOutcome } from './Components/constain';

const randomComputerChoice = () =>
  CHOICES[Math.floor(Math.random() * CHOICES.length)];
let total = 0;
let win = 0;
let lose = 0;
let tie = 0;
let percentWin = 0;
let percentLose = 0;
let percentTie = 0;


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerChoice: {},
      computerChoice: {},
    };
  }
  onPressButton = (data) => {
    const found = CHOICES.find(choice => choice.name === data)
    const randomForComputer = randomComputerChoice();
    total += 1;
    const result = getRoundOutcome(found, randomForComputer);
    this.setState({
      playerChoice: found,
      computerChoice: randomForComputer,
      result: result,
    });
    if (result == 'Victory!') {
      win += 1;
    }
    else if (result == 'Defeat!') {
      lose += 1; 
    }
    else {
      tie += 1;     
    }
    percentWin = (win / total) * 100;
    percentTie = (tie/total)*100;
    percentLose = (lose / total) * 100;
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.GameStatusWrapper}>
          <GameStatus
            result={this.state.result}
          />
        </View>
        <View style={styles.Roundgroup}>
          <RoundCount
            winRound={win}
            loseRound={lose}
            tieRound={tie}
            totalRound={total}
            percentLose = {percentLose.toFixed(2)}
            percentTie = {percentTie.toFixed(2)}
            percentWin = {percentWin.toFixed(2)}
          />
        </View>
        <View style={styles.GamePlayWarpper}>
          <PLayerCard playerName="Player" choices={this.state.playerChoice} />
          <PLayerCard playerName="Computer" choices={this.state.computerChoice} />
        </View>
        <View style={styles.ButtonGroupWrapper}>
          <ButtonGroup onPressButton={this.onPressButton} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  GameStatusWrapper: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: 'center',
  },
  Roundgroup: {
    flex: 0.15,
  },
  GamePlayWarpper: {
    flex: 0.4,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
  },
  ButtonGroupWrapper: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: 'center',
  },
});
