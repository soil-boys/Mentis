import axios from "axios"
import getDegrees from "./getDegrees"

const getMood = async () => {

    // temp
    // return 'Good'

    const degreeData = await getDegrees()
    if (!degreeData || !degreeData?.length || degreeData?.length === 0) return 'Okay'

    const options = {
        method: 'POST',
        url: 'https://mentis-ai.onrender.com/ai/mood',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            moodData: degreeData
        }
    }

    const avg = (arr) => {
        let sum
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        const averageValue = Math.round(sum / arr.length)
        return averageValue
    }

    try {
        const res = await axios.request(options)
        console.log('Coming from AI:', res.data)
        return res.data
    } catch (err) {
        console.log(err)
        let arr = degreeData
        let mood = avg(arr) === 1 ? 'Bad' : avg(arr) === 2 ? 'Sad' : avg(arr) === 3 ? 'Okay' : (avg(arr) === 4 || avg(arr) === 5 ) ? 'Good' : 'Okay'
        return mood
    }

}

export default getMood