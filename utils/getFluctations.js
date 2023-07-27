import { getData } from "../functions/Storage";

const getFluctuations = async () => {

    let fluctuations = 0
    const moodData = await getData()

    if (!moodData || Object.keys(moodData)?.length < 1) return fluctuations
    if (Object.keys(moodData).length === 1) return fluctuations

    const arr = Object.keys(moodData).map(key => moodData[key]).sort((a, b) => a.timestamp < b.timestamp)

    for (let i = 1; i < arr.length; i++) {
        if (Math.abs(arr[i].degree - arr[i - 1].degree) >= 3) fluctuations += 1
        else return
    }

    return fluctuations

}

export default getFluctuations