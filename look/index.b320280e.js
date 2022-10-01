var $parcel$global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
var $f362cb38b7956a00$export$2e2bcd8739ae039 = $parcel$global;
const $63dafec9a989d546$var$getAllDataOfSheet = ()=>{
    console.log(`yes go `);
};
$f362cb38b7956a00$export$2e2bcd8739ae039.doGet = ()=>{
    const title = "react webapp on google apps script";
    $63dafec9a989d546$var$getAllDataOfSheet();
    return HtmlService.createTemplateFromFile("index").evaluate().setTitle(`${title}`).addMetaTag("viewport", "width=device-width, initial-scale=1");
};

//# sourceMappingURL=index.b320280e.js.map
