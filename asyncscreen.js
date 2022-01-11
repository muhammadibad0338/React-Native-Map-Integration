import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';




function AsyncWork() {

    const [arr, setArr] = useState([
        {
            id: 1,
            title: 'abc'
        },
        {
            id: 2,
            title: 'efg'
        },
        {
            id: 3,
            title: 'hij'
        },
    ])
    const storeData = async (value) => {
        const data = JSON.stringify(arr)
        try {
            await AsyncStorage.setItem('@storage_Key', data)
        } catch (e) {
            console.log(e)
        }
    }

    const getData = async () => {
        try {
            let value = await AsyncStorage.getItem('@storage_Key')
            value = JSON.parse(value)
            console.log(value)

        } catch (e) {
            console.log(e)
        }
    }

    return <>

        <View>
            <Text>Async</Text>
            <Button title='Store Data' onPress={() => storeData('Basit Ahmed')} />
            <Button title='get Data' onPress={getData} />
        </View>
    </>
}
export default AsyncWork