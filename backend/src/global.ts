declare global {
  function doGet(): GoogleAppsScript.HTML.HtmlOutput
  function getAllSheetName(): Array<string>;
  function outputThisSheetUrl(): void
}
export default global
