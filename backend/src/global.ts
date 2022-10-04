declare global {
  function doGet(): GoogleAppsScript.HTML.HtmlOutput
  function getAllSheetName(): JSON
  function outputThisSheetUrl(): void
}
export default global
