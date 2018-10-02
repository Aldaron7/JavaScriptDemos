import moment from "moment";

export const convertDateToString = val => moment(String(val)).format('dd DD.MM.YYYY');