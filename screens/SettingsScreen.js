import React from 'react'
import { ScrollView, StyleSheet, Switch, Text, View } from 'react-native'

import Colors from '../constants/Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  },
  switchContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingHorizontal: 15
  },
  switchLabel: {
    flex: 0
  }
})

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings'
  }

  state = {
    isOptionOneEnabled: false,
    isOptionTwoEnabled: false,
    isOptionThreeEnabled: false,
    isOptionFourEnabled: false
  }

  handleSwitch = (option) => {
    this.setState({
      [option]: !this.state[option]
    })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>
            Option 1
          </Text>

          <Switch trackColor={{true: Colors.tintColor}} onValueChange={() => this.handleSwitch('isOptionOneEnabled')} value={this.state.isOptionOneEnabled} />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>
            Option 2
          </Text>

          <Switch trackColor={{true: Colors.tintColor}} onValueChange={() => this.handleSwitch('isOptionTwoEnabled')} value={this.state.isOptionTwoEnabled} />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>
            Option 3
          </Text>

          <Switch trackColor={{true: Colors.tintColor}} onValueChange={() => this.handleSwitch('isOptionThreeEnabled')} value={this.state.isOptionThreeEnabled} />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>
            Option 4
          </Text>

          <Switch trackColor={{true: Colors.tintColor}} onValueChange={() => this.handleSwitch('isOptionFourEnabled')} value={this.state.isOptionFourEnabled} />
        </View>
      </ScrollView>
    )
  }
}
