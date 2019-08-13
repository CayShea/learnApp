//Code refactored from useState to useReducer
// https://reactjs.org/docs/hooks-reference.html#usereducer

import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return {...state, count: state.count + 1} 
        case 'decrement':
            return {...state, count: state.count - 1}
        default:
            return state;
    }
   
}

const CounterScreen = () => {
    const [ state, dispatch ] = useReducer(reducer, {count: 0});

    return (
        <View>
            <Text>Current Count: {state.count}</Text>
            <Button title="Increase" onPress={() => {dispatch({ type: 'increment' })}}/>
            <Button title="Decrease" onPress={() => {dispatch({ type: 'decrement' })}}/>
            
        </View>
    )
};

//***** */ PRIOR CODE with 'useState' hook: ***********
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';

// const CounterScreen = () => {
//     const [ count, setCount ] = useState(0);

//     return (
//         <View>
//             <Text>Current Count: {count}</Text>
//             <Button title="Increase" onPress={() => setCount(count + 1)}/>
//             <Button title="Decrease" onPress={() => setCount(count - 1)}/>
            
//         </View>
//     )
// };

const styles = StyleSheet.create({});

export default CounterScreen;