import React from 'react'
import { Text, ScrollView, StyleSheet, View } from 'react-native'
import { Icon } from 'expo'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  },
  aboutTitleContainer: {
    paddingHorizontal: 15,
    paddingBottom: 15,
    paddingLeft: 8,
    flexDirection: 'row'
  },
  aboutTitleIconContainer: {
    marginRight: 15,
    paddingTop: 2
  },
  aboutNameText: {
    fontSize: 18,
    fontWeight: '600'
  },
  aboutSlugText: {
    fontSize: 14,
    color: '#a39f9f',
    backgroundColor: 'transparent'
  },
  aboutDescriptionText: {
    marginTop: 4,
    fontSize: 13,
    color: '#4d4d4d'
  },
  aboutHeaderContainer: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: '#fbfbfb',
    borderWidth: 1,
    borderColor: '#ededed'
  },
  aboutHeaderText: {
    fontSize: 14
  },
  aboutContentContainer: {
    paddingTop: 8,
    paddingBottom: 12,
    paddingHorizontal: 15
  },
  aboutContentText: {
    color: '#808080',
    fontSize: 14
  }
})

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    title: 'About'
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.aboutTitleContainer}>
          <View style={styles.aboutTitleIconContainer}>
            <Icon.Ionicons
              name="ios-home"
              size={60}
            />
          </View>

          <View style={styles.aboutTitleTextContainer}>
            <Text style={styles.aboutNameText} numberOfLines={1}>
              react-native-app
            </Text>

            <Text style={styles.aboutSlugText} numberOfLines={1}>
              react-native-app
            </Text>

            <Text style={styles.aboutDescriptionText}>
              Your first cool Reactive Native app.
            </Text>
          </View>
        </View>

        <View>
          <View style={styles.aboutHeaderContainer}>
            <Text style={styles.aboutHeaderText}>
              App name
            </Text>
          </View>

          <View style={styles.aboutContentContainer}>
            <Text style={styles.aboutContentText}>
              react-native-app
            </Text>
          </View>
        </View>

        <View>
          <View style={styles.aboutHeaderContainer}>
            <Text style={styles.aboutHeaderText}>
              Author
            </Text>
          </View>

          <View style={styles.aboutContentContainer}>
            <Text style={styles.aboutContentText}>
              John Doe
            </Text>
          </View>
        </View>

        <View>
          <View style={styles.aboutHeaderContainer}>
            <Text style={styles.aboutHeaderText}>
              Version
            </Text>
          </View>

          <View style={styles.aboutContentContainer}>
            <Text style={styles.aboutContentText}>
              0.0.1
            </Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}
