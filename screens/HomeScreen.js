import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { WebBrowser } from 'expo'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center'
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7'
  },
  welcomeText: {
    fontSize: 21,
    fontWeight: '700'
  }
})

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  renderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this.handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      )

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      )
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      )
    }
  }

  handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode')
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Welcome!</Text>
          </View>

          <View style={styles.getStartedContainer}>
            {this.renderDevelopmentModeWarning()}
          </View>
        </ScrollView>
      </View>
    )
  }
}
