function outputThisSheetUrl() {}function getAllSheetName() {}var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $f362cb38b7956a00$export$2e2bcd8739ae039 = $parcel$global;


const $63dafec9a989d546$var$SS = SpreadsheetApp.getActiveSpreadsheet();
const $63dafec9a989d546$var$getAllDataOfSheet = ()=>{
    console.log(`yes go `);
};
globalThis.outputThisSheetUrl = ()=>{
    console.log($63dafec9a989d546$var$SS.getUrl());
};
globalThis.getAllSheetName = ()=>{
    return $63dafec9a989d546$var$SS.getSheets().map((sheet)=>sheet.getName());
};
(0, $f362cb38b7956a00$export$2e2bcd8739ae039).doGet = ()=>{
    const title = "react webapp on google apps script";
    $63dafec9a989d546$var$getAllDataOfSheet();
    return HtmlService.createTemplateFromFile("index").evaluate().setTitle(`${title}`).addMetaTag("viewport", "width=device-width, initial-scale=1");
};


