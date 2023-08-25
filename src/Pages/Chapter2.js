import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, setAuthor } from '../context/CounterProvider/counterSlice'

const Chapter2 = ({ navigation }) => {
    const count = useSelector(state => state.counter.count)
    const { name, surname } = useSelector(state => state.counter.author)
    const dispatch = useDispatch()

    const handleAuthor = () => {
        dispatch(setAuthor({ name: "murat", surname: "dalkılıç" }))
    }

    return (
        <View style={{ justifyContent: 'space-around', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Chapter2</Text>
            <Text>count: {count}</Text>
            <Text>name: {name} surname: {surname}</Text>
            <Button title="INCREMENT" onPress={() => dispatch(increment())} />
            <Button title="DECREMENT" onPress={() => dispatch(decrement())} />
            <Button title="SETAUTHOR" onPress={handleAuthor} />
            <Button title="go to chapter3 page" onPress={() => navigation.navigate("Chapter3")} />
            <Button title="go to chapter1 page" onPress={() => navigation.navigate("Chapter1")} />
        </View>
    )
}

export default Chapter2

const styles = StyleSheet.create({})