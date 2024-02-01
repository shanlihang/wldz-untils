```
时间与日期处理工具类
本工具库基于day.js 1.11.10
```

---

## 时间日期格式

##### 默认格式
1. 日期格式：YYYY-MM-DD
2. 时间格式：hh:mm:ss
3. 日期时间格式：YYYY-MM-DD hh:mm:ss

##### 修改默认格式
1. 修改日期格式：setDateSign(sign)
2. 修改时间格式：setTimeSign(sign)
3. 修改日期时间格式：setDateTimeSign(sign)
> 参数传入想要的格式字符串

--- 

## 时间日期操作

##### 格式化操作
1. 格式化日期：dateFormat(date)
2. 格式化时间：timeFormat(date)
3. 格式化日期时间：dateTimeFormat(date)
> 参数可以为日期，字符串，时间戳格式
> 不传入参数默认为对当前时间进行格式化

---

