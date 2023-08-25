import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect } from 'react'
import { increment, decrement, incrementByAmount } from '../context/CounterProvider/counterSlice'
import { useSelector, useDispatch } from 'react-redux'
import { getCountry } from '../context/Country/countrySlice'

const Chapter1 = ({ navigation }) => {
    const count = useSelector(state => state.counter.count)
    const { name, surname } = useSelector(state => state.counter.author)
    const { country, loading } = useSelector(state => state.countries)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getCountry())
        console.log("count-", country)
    }, [])



    const handleIncrement = () => {
        dispatch(increment())
    }
    const handleDecrement = () => {
        dispatch(decrement())
    }
    const handleIncrementByAmount = (value) => {
        dispatch(incrementByAmount(value))
    }

    if (loading) {
        return <Text>Loading...</Text>
    }
    return (
        <View style={{ justifyContent: 'space-around', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Chapter1</Text>
            <Text>count: {count}</Text>
            <Text>name: {name} surname: {surname}</Text>
            <Button title="INCREMENT" onPress={handleIncrement} />
            <Button title="DECREMENT" onPress={handleDecrement} />
            <Button title="INCREMENT + 5" onPress={() => handleIncrementByAmount(5)} />
            <Button title="go to chapter2 page" onPress={() => navigation.navigate("Chapter2")} />
            <Button title="go to chapter3 page" onPress={() => navigation.navigate("Chapter3")} />

        </View>
    )
}

export default Chapter1

const styles = StyleSheet.create({})