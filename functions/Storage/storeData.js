import AsyncStorage from '@react-native-async-storage/async-storage'

const storeData = async (obj) => {
    if (typeof obj !== 'object') throw Error
    if (!obj) throw Error

    const newObj = {}
    newObj[obj.key] = {
        degree: obj.degree,
        value: obj.value,
        timestamp: obj.timestamp
    }

    try {
        
        const moodData = await AsyncStorage.getItem('mood_data')
        if (!moodData) await AsyncStorage.setItem('mood_data', JSON.stringify(newObj))

        let _ = JSON.parse(moodData)
        _[obj.key] = {
            degree: obj.degree,
            value: obj.value,
            timestamp: obj.timestamp
        }

        await AsyncStorage.setItem('mood_data', JSON.stringify(newObj))

    } catch (err) {
        console.log(err)
        throw err
    }

}

export default storeData