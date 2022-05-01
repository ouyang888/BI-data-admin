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