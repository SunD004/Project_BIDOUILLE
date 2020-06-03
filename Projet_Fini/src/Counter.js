import React, { useState } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

const Counter = (props) => {
    const [counter, setCounter] = useState(0)

    return (
        <View style={styles.container}>
            <Button title='Add' onPress={() => setCounter(counter + 1)} />
            <Text style={styles.text}>{counter}</Text>
            <Button title='Remove' onPress={() => setCounter(counter - 1)}/>
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

export default Counter;