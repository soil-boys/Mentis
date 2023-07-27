import { getData } from "../functions/Storage";

const getDegrees = async () => {

    try {
        const moodData = await getData()
        if (!moodData || Object.keys(moodData)?.length < 1) return [3]

        const degreeArray = Object.keys(moodData).map(key => moodData[key]).sort((a, b) => { a.timestamp < b.timestamp }).map(_ => _.degree)
        return degreeArray
    } catch (err) {
        return [3]
    }

}

export default getDegrees