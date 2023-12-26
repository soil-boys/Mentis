import AsyncStorage from '@react-native-async-storage/async-storage'

const getUsername = async () => {
    try {

        const username = await AsyncStorage.getItem('username')

        if (!username) return  undefined
        else return username

    } catch (err) {
        console.log(err)
        return undefined
    }
}

export default getUsername