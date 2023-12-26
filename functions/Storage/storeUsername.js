import AsyncStorage from '@react-native-async-storage/async-storage'

const storeUsername = async (value) => {

    if (!value || typeof value !== "string") throw Error

    try {
        
        const username = await AsyncStorage.getItem('username')
        if (!username) await AsyncStorage.setItem('username', value)

        AsyncStorage.setItem('username', value).then(() => console.log("successful")).catch(e => console.error(e))

    } catch (err) {
        console.error(err)
        throw err
    }

}

export default storeUsername