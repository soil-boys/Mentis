import { getData } from "../functions/Storage";
import getDegrees from "./getDegrees";

const getFluctuations = async () => {

    let fluctuations = 0
    const degreeData = await getDegrees()
    // const moodData = await getData()

    if (!degreeData || degreeData?.length < 2) return fluctuations
    // if (Object.keys(moodData).length === 1) return fluctuations

    // const arr = Object.keys(moodData).map(key => moodData[key]).sort((a, b) => a.timestamp < b.timestamp)

    for (let i = 1; i < degreeData.length; i++) {
        if (Math.abs(degreeData[i] - degreeData[i - 1]) >= 3) fluctuations += 1
        else fluctuations += 0
    }
    // console.log(fluctuations)
    return fluctuations

}

export default getFluctuations