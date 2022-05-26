/** object转为url参数（？后面的参数）
 *
 * */
export const objectToParamString = (paramObj) => {
    if (!paramObj) {
        return ''
    }
    const paramList = []
    Object.keys(paramObj) && Object.keys(paramObj).forEach(key => {
        const val = paramObj[key]
        if (val.constructor === Array) {
            val.forEach(_val => {
                paramList.push(key + '=' + _val)
            })
        } else {
            paramList.push(key + '=' + val)
        }
    })
    return paramList.join('&')
}
export const clearObj = (obj)=>{ /*处理仪表盘清空数据*/

    for(var i in obj){
        if(Number(obj[i]).toString()!='NaN' && typeof(obj[i])!='object'){ /*处理obj下的值*/
          obj[i] = 0;
        }else if(typeof(obj[i])=='object'){  /*处理obj下对象里的值*/
            for(var s in obj[i]){
              obj[i][s] = 0;
            }
        }
      }
}