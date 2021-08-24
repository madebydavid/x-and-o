import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Cell } from './components/Elements';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      game: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
      turn: "X",
      winner: null,
    };
  }

  handleCellPress(row, col) {

    let { game, turn } = this.state;

    if (game[row][col] !== null) {
      throw new Error('invalid move');
    }

    // TODO: some horrible immutable syntax
    game[row][col] = turn;

    // TODO: magic square algorithm
    const rowSame = (row) => game[row][0] !== null && game[row].every((v) => v == game[row][0]);
    const colSame = (col) => {
      const f = game[0][col];
      return f !== null && (game[1][col] == f) && (game[2][col] == f);
    }
    const diagDownSame = () => {
      const f = game[0][0];
      return f !== null && (game[1][1] == f) && (game[2][2] == f);
    };
    const diagUpSame = () => {
      const f = game[0][2];
      return f !== null && (game[1][1] == f) && (game[2][0] == f);
    };

    const winner = (
      (rowSame(0) || rowSame(1) || rowSame(2)) ||
      (colSame(0) || colSame(1) || colSame(2)) ||
      diagDownSame() ||
      diagUpSame()
    ) ? turn : null;

    this.setState({
      game,
      turn: turn == "X" ? "O" : "X",
      winner
    });

  }

  render() {
    const { game, turn, winner } = this.state;
    if (__DEV__) console.log(JSON.stringify(game));
    return (
      <View style={styles.container}>

        <Text
          style={{
            marginBottom: 20,
          }}
        >
          Current player: {turn}
        </Text>

        <View>
          {game.map((rowValues, row) => {
            return (
              <View key={`${row}`} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                {rowValues.map((cellValue, col) => {
                  return (
                    <Cell
                      key={`${row}-${col}`}
                      value={cellValue}
                      onPress={this.handleCellPress.bind(this, row, col)}
                    />
                  );
                })}
              </View>
            );
          })}

        </View>

        {winner && (
          <View>
            <Text>Winner is {winner}</Text>
          </View>
        )}

      </View>
    );
  }
}


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
