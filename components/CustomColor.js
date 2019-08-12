import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

const CustomColorPiece = ({ color, onIncrease, onDecrease }) => {


    return (
        <View>
           <Text>{ color }</Text>
                <Button title= {`Increase ${color}`} onPress={onIncrease}/>
                <Button title={`Decrease ${color}`} onPress={onDecrease} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default CustomColorPiece;