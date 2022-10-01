import global from './global'

const getAllDataOfSheet = () => {
  console.log(`yes go `)
}

global.doGet = () => {
  const title = 'react webapp on google apps script'
  getAllDataOfSheet()
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle(`${title}`)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
}
