import { getData } from "../functions/Storage";

const getFluctuations = async () => {

    let fluctuations = 0
    const moodData = await getData()

    if (!moodData || moodData === {}) return fluctuations
    if (Object.keys(moodData).length === 1) return fluctuations

    const arr = Object.keys(moodData).map(key => moodData[key]).sort()

    for (let i = 0; i < arr.length; i++) {
        if (Math.abs(arr[i].degree - arr[i - 1].degree) >= 3) fluctuations += 1
        else return
    }

    return fluctuations

}

export default getFluctuations