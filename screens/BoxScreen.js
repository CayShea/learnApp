import React from 'react';
import { View, StyleSheet, Text, ScrollView, Button } from 'react-native';
import { ExpoLinksView } from '@expo/samples';


export default class BoxScreen extends React.Component {
  render(){
  return (
    <ScrollView>
        <View style={styles.sectionBlock}>
          <Button title='Rules' onPress={() => this.props.navigation.navigate('StylingRules')}/>
        </View>
        <View style={styles.sectionBlock}>
            <Text style={styles.headerText}>Box Object Model</Text>
            <Text>Use this to affect the height, width and spacing of a single element- padding, border, margin</Text>
              <View style={styles.viewStyleBox}>
                <Text style={styles.textStyleBox}>Box Screen</Text>
              </View>
        </View>
        <View style={styles.sectionBlock}>
            <Text style={styles.headerText}>Flex Box</Text>
            <Text>Now adding in Flex Box:. Use this to affect how siblings get laid out inside a parent. Top features: </Text>
            <Text>PARENT: alignItems, justifyContent and flexDirection</Text>
              <View style={styles.viewStyleFlexAlign}>
                <Text>Align Items:</Text>
                <Text style={styles.textStyleFlex}>Child #1</Text>
                <Text style={styles.textStyleFlex}>Child #2</Text>
                <Text style={styles.textStyleFlex}>Child #3</Text>
              </View>
              <View style={styles.viewStyleFlexDirection}>
                <Text>FlexDirection / JustifyContent:</Text>
                <Text style={styles.textStyleFlex}>Child #1</Text>
                <Text style={styles.textStyleFlex}>Child #2</Text>
                <Text style={styles.textStyleFlex}>Child #3</Text>
              </View>
            <Text>CHILD: flex and alignSelf (not shown)</Text>
              <View style={styles.viewStyleFlexDirection}>
                <Text>Flex in Child</Text>
                <Text style={styles.textOneStyle}>Child #1</Text>
                <Text style={styles.textTwoStyle}>Child #2</Text>
                <Text style={styles.textThreeStyle}>Child #3</Text>
              </View>
          </View>
          < View style={styles.sectionBlock}>
            <Text style={styles.headerText}>Position</Text>
            <Text>Position sets the element free from all sibling styling. It still has some parent styling.</Text>
            <Text>Features: absolute, relative, top/bottom/right/left, '...StyleSheet.absoluteFillObject'</Text>
            <Text>Absolute: child 2 is free</Text>
              <View style={styles.viewStyleBox}>
                <Text style={styles.textOneStyle}>Child #1</Text>
                <Text style={styles.textTwoStylePosition}>Child #2</Text>
                <Text style={styles.textThreeStyle}>Child #3</Text>
              </View>
        </View>
    </ScrollView>
  );
}}

BoxScreen.navigationOptions = {
  title: 'Styling Screen Layout',
};

const styles = StyleSheet.create({
  viewStyleBox: {
    borderWidth: 3,
    borderColor: 'black'
  },
  sectionBlock: {
    margin: 20
  },
  headerText: {
    fontSize: 25
  },
  textStyleBox: {
    borderWidth: 1,
    borderColor: 'red',
    margin: 20
  },
  textStyleFlex: {
    borderWidth: 1,
    borderColor: 'red'
  },
  viewStyleFlexAlign: {
    borderWidth: 3,
    borderColor: 'black',
    alignItems: 'center'
  },
  viewStyleFlexDirection: {
    borderWidth: 3,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  textOneStyle: {
    borderWidth: 1,
    borderColor: 'red'
  },
  textTwoStyle: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 1
  },
  textTwoStylePosition: {
    borderWidth: 1,
    borderColor: 'red',
    position: 'absolute'
  },
  textThreeStyle: {
    borderWidth: 1,
    borderColor: 'red'
  }
});
