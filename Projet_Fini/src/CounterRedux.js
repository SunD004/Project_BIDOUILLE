import React, { useState } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { addFunc, subFunc } from './redux/actions'

const CounterRedux = (props) => {
    const data = useSelector((state) => state)
    const { counter } = data
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
            <Button title='Add' onPress={() => dispatch(addFunc())} />
            <Text style={styles.text}>{counter}</Text>
            <Button title='Remove' onPress={() => dispatch(subFunc())}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        marginVertical: 20,
        fontSize: 20
    }
})

export default CounterRedux;