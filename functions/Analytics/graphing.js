import moment from "moment";
import getDegrees from "../../utils/getDegrees";

const graphing = async (timePeriod = 'week') => {

    try {

        const degreeData = await getDegrees(timePeriod)
        return degreeData

    } catch (err) {
        console.log(err)
        return []
    }

}

export default graphing