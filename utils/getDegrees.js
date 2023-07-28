import moment from "moment";
import { getData } from "../functions/Storage";

const getDegrees = async (timePeriod = 'week') => {

    try {
        const moodData = await getData()
        if (!moodData || Object.keys(moodData)?.length < 1) return [3]

        if (timePeriod === 'month') {
            const degreeArray = Object.keys(moodData)
                                .map(key => moodData[key])
                                .filter(e => moment().month() === moment(e.timestamp).month())
                                .sort((a, b) => { a.timestamp < b.timestamp })
                                .map(_ => _.degree)
            return degreeArray
        }
        
        const degreeArray = Object.keys(moodData)
                                .map(key => moodData[key])
                                .filter(e => moment().isoWeek() === moment(e.timestamp).isoWeek())
                                .sort((a, b) => { a.timestamp < b.timestamp })
                                .map(_ => _.degree)
        return degreeArray
    } catch (err) {
        return [3]
    }

}

export default getDegrees