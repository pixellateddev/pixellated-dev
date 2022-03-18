import moment from 'moment'

export const toDate = (date: string) => {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a')
}