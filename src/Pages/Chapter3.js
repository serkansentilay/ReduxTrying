import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../context/CounterProvider/counterSlice'

const Chapter3 = ({ navigation }) => {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()
    return (
        <View style={{ justifyContent: 'space-around', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Chapter3 </Text>
            <Text>count: {count}</Text>
            <Button title="INCREMENT" onPress={() => dispatch(increment())} />
            <Button title="DECREMENT" onPress={() => dispatch(decrement())} />
            <Button title="go to chapter1 page" onPress={() => navigation.navigate("Chapter1")} />
            <Button title="go to chapter2 page" onPress={() => navigation.navigate("Chapter1")} />
        </View>

    )
}

export default Chapter3

const styles = StyleSheet.create({})