import AsyncStorage from '@react-native-async-storage/async-storage'

const getData = async (key) => {
    try {
        const mood = await AsyncStorage.getItem('mood_data')
        
        if (!mood) {
            await AsyncStorage.setItem('mood_data', JSON.stringify({}))
            return {}
        } else if (!key) return JSON.parse(mood)
        else {
            const obj = JSON.parse(mood)[key]
            // console.log(obj)
            if (!obj) return {}
            else return obj
        }
    } catch (err) {
        console.log(err)
        return {}
    }
}

export default getData