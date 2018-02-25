import * as moment from "moment"

export const timeSince = (date: Date) => moment(date).fromNow()

export const formatDate = (date: Date) => moment(date).format("D MMM YYYY")
