import * as dayjs from 'dayjs'

// 默认格式化字符串
export let date_sign:string = 'YYYY-MM-DD'
export let time_sign:string = 'hh:mm:ss'
export let date_time_sign:string = 'YYYY-MM-DD hh:mm:ss'

// 设置日期格式
export const setDateSign = (sign:string) => {
    date_sign = sign
}
// 设置时间格式
export const setTimeSign = (sign:string) => {
    time_sign = sign
}
// 设置时间日期格式
export const setDateTimeSign = (sign:string) => {
    date_time_sign = sign
}

// 格式化日期
export const dateFormat = (date:number | string | Date = new Date()) => {
    return dayjs(date).format(date_sign);
}

// 格式化时间
export const timeFormat = (date:number | string | Date = new Date()) => {
    return dayjs(date).format(time_sign);
}

// 格式化日期时间
export const dateTimeFormat = (date:number | string | Date = new Date()) => {
    return dayjs(date).format(date_time_sign);
}

//获取多久之前的时间
export const getDataTimeBefore = (num:number,type:string,sign:string) => {
    return dayjs().subtract(num, type).format(sign)
}