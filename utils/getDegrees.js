import moment from "moment";
import { getData } from "../functions/Storage";

const getDegrees = async (timePeriod = 'week') => {

    try {
        const moodData = await getData()
        if (!moodData || Object.keys(moodData)?.length < 1) return [3]

        if (timePeriod === 'month') {
            const degreeArray = Object.keys(moodData)
                                .map(key => moodData[key])
                                .filter(e => (moment(e.timestamp).date() > 0 && moment(e.timestamp).isoWeekday() <= moment(e.timestamp).daysInMonth()))
                                .sort((a, b) => { a.timestamp < b.timestamp })
                                .map(_ => _.degree)
            return degreeArray
        }
        
        const degreeArray = Object.keys(moodData)
                                .map(key => moodData[key])
                                .filter(e => (moment(e.timestamp).isoWeekday() > 0 && moment(e.timestamp).isoWeekday() <= 7))
                                .sort((a, b) => { a.timestamp < b.timestamp })
                                .map(_ => _.degree)
        return degreeArray
    } catch (err) {
        return [3]
    }

}

export default getDegrees