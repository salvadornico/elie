import * as moment from "moment"

export const timeSince = (date: Date) => moment(date).fromNow()
