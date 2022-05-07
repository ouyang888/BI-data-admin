export const mutation = {
  pageGo(state, payload) {   //选择页面
    state.menuName = payload.name
  },
  setPath(state,payload) {
    state.currentPath = payload.path
  },
  setItemName(state, payload){  //选择细分类目
    state.itemName = payload.name
  },
  setSalePageData(state, payload) {  
    state.salePageData = payload
  },
  upDateCurrentPath(state,payload){
    state.currentPath = payload
  },
  setTableList(state,payload){
    state.tableList = payload
  },
  setPanel(state,payload){  //设置仪表盘数据
    state.panel = payload
    state.salePageData.panel = payload
  },
  setPanelSab(state,payload){ //设置仪表盘SAB数据
    state.panelSab = payload
    state.salePageData.panelSab = payload
  },
  setChartData(state,data){
    state.chart = data
    state.salePageData.chart = data
  },
  setCardData(state,data){
    state.cardData = data
    state.salePageData.cardData = data
  },
  setOuterDirect(state,data){
    state.outerDirect = data
    state.salePageData.outerDirect = data
  },
  setInnerDirect(state,data){
    state.innerDirect = data
    state.salePageData.innerDirect = data
    // state.domestic = data[0].info
    // state.domesticList = data[0].list
    // state.domestic2 = data[0].info
    // state.domesticList2 = data[0].list
  },
  setTableOneHeading(state,payload){
    state.tableOneHeading = payload;
  },
  setTableTwoHeading(state,payload){
    state.tableTwoHeading = payload;
  },
  setCardList(state,payload){
    state.cardList = payload;
  },
  setTrueOrFalse(state,payload){
    state.tableTrue = payload;
  },
  rowSpanNumber1Fn(state,payload){
    state.rowSpanNumber = payload
  },
  rowSpanNumber2Fn(state,payload){
    state.rowSpanNumber2 = payload
  },
  SetSAB(state,payload){
    state.SAB = payload
  },
  setCurrentTitle(state,payload){
    state.currentTitle = payload
  },
  setCurrentModel(state,payload){ //设置金额或数量模式
    state.currentModel = payload
  },
  setProSAB(state,payload){
    state.proSAB = payload
  },
  getInnerDirectOnline(state,payload){
    state.getInnerDirectOnline = payload
  },
  getInnerDirectLineDown(state,payload){
    state.getInnerDirectLineDown = payload
  },
  getGeneral(state,payload){
    state.getGeneral = payload
  },
  getForExport(state,payload){
    state.getForExport = payload
  },
  getDirectTotalInnerChart(state,payload){
    state.getDirectTotalInnerChart = payload
  },
}