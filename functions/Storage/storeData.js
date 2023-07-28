import AsyncStorage from '@react-native-async-storage/async-storage'

const storeData = async (key, value, degree, timestamp) => {

    if (!key || !degree || !value || !timestamp) throw Error

    const newObj = {}
    newObj[key] = {
        degree: degree,
        value: value,
        timestamp: timestamp
    }

    try {
        
        const moodData = await AsyncStorage.getItem('mood_data')
        if (!moodData) await AsyncStorage.setItem('mood_data', JSON.stringify(newObj))


        let _ = JSON.parse(moodData)
        _[key] = {
            degree: degree,
            value: value,
            timestamp: timestamp
        }

        AsyncStorage.setItem('mood_data', JSON.stringify(_)).then(() => console.log("successful")).catch(e => console.error(e))

    } catch (err) {
        console.error(err)
        throw err
    }

}

export default storeData