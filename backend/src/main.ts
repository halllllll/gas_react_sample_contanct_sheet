import global from './global'

const SS = SpreadsheetApp.getActiveSpreadsheet()

const getAllDataOfSheet = () => {
  console.log(`yes go `)
}

globalThis.outputThisSheetUrl = () => {
  console.log(SS.getUrl())
}

globalThis.getAllSheetName = () => {
  return JSON.parse(
    JSON.stringify({ sheets: SS.getSheets().map((sheet) => sheet.getName()) })
  )
}

global.doGet = () => {
  const title = 'react webapp on google apps script'
  getAllDataOfSheet()
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle(`${title}`)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
}
