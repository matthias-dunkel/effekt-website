(self.webpackJsonp=self.webpackJsonp||[]).push([[3],{"./src/editor.ts":function(e,o,n){"use strict";n.r(o),n.d(o,"create",(function(){return s}));var t=n("./node_modules/monaco-editor/esm/vs/editor/editor.api.js"),r=n("./src/highlight-effekt.js"),i=(n("./node_modules/monaco-editor/esm/vs/editor/browser/controller/coreCommands.js"),n("./node_modules/monaco-editor/esm/vs/editor/contrib/hover/hover.js"),n("./node_modules/monaco-editor/esm/vs/editor/contrib/wordHighlighter/wordHighlighter.js"),{keywords:["module","import","def","val","var","effect","type","match","case","record","extern","include","resume","with","if","try","else","do","handle","while","fun","region","in","new","interface"],definitionKeywords:["def","type","effect"],literals:["true","false"],operators:["=",">","<","!","~","?",":","==","<=",">=","!=","&&","||","++","--","+","-","*","/","&","|","^","%","<<",">>",">>>","+=","-=","*=","/=","&=","|=","^=","%=","<<=",">>=",">>>="],symbols:/[=><!~?:&|+\-*\/\^%]+/,tokenizer:{root:[[/[a-z_$][\w$]*/,{cases:{"@keywords":{cases:{"@definitionKeywords":{token:"keyword",next:"@definition"},"@default":"keyword"}},"@literals":"literal","@default":"identifier"}}],[/[A-Z][\w\$]*/,"type.identifier"],{include:"@whitespace"},[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,{cases:{"@operators":"operator","@default":""}}],[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/0[xX][0-9a-fA-F]+/,"number.hex"],[/\d+/,"number"],[/[;,.]/,"delimiter"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/"/,{token:"string.quote",bracket:"@open",next:"@string"}],[/'[^\\']'/,"string"],[/'/,"string.invalid"]],definition:[{include:"@whitespace"},[/[a-zA-Z_$][\w$]*/,"definition"],[new RegExp(""),"","@pop"]],comment:[[/[^\/*]+/,"comment"]],string:[[/[^\\"]+/,"string"],[/\\./,"string.escape.invalid"],[/"/,{token:"string.quote",bracket:"@close",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,"white"],[/\/\*/,"comment","@comment"],[/\/\/.*$/,"comment"]]}}),d=n("./src/ide.ts");function s(e,o,n,i,s,f){var l=document.body.classList.contains("docs")?"effekt-docs-theme":"effekt-page-theme",c=t.d.create(e,{model:f,language:"effekt",theme:l,fontSize:13,fontFamily:"'Fira Mono', monospace",minimap:{enabled:!1},lineNumbers:"off",automaticLayout:!1,scrollBeyondLastLine:!1,folding:!1,contextmenu:!1,matchBrackets:"never",overviewRulerBorder:!1,cursorStyle:"line",renderFinalNewline:!1,renderLineHighlight:"none",fixedOverflowWidgets:!0,lightbulb:{enabled:!1},quickSuggestions:!1,scrollbar:{handleMouseWheel:!1,alwaysConsumeMouseWheel:!1,horizontal:"hidden",useShadows:!1,vertical:"hidden"}});return function(e){e.onDidChangeModelContent((function(){n()}));var o=0;function n(){var n,r=e.getDomNode();if(r){var i=e.getOption(t.d.EditorOption.lineHeight),d=(null===(n=e.getModel())||void 0===n?void 0:n.getLineCount())||1,s=e.getTopForLineNumber(d+1)+i;o!==s&&(o=s,r.style.height=s+"px",e.layout())}}n()}(c),function(e){var o;e.onDidChangeModelContent((function(n){o&&clearTimeout(o);var t=e.getModel();o=setTimeout((function(){return d.typecheck(t)}),150)}))}(c),function(e,o,n){var t;function i(e){if(o){var t=d.showCore(e);o.innerText=t,r.highlightBlock(o)}if(n){var i=d.showLiftedCore(e);n.innerText=i,r.highlightBlock(n)}}var s=e.getModel();e.onDidChangeModelContent((function(e){t&&clearTimeout(t),t=setTimeout((function(){return i(s)}),150)})),i(s)}(c,i,s),d.typecheck(f),c._standaloneKeybindingService.addDynamicKeybinding("-expandLineSelection"),function(e,o,n){function r(e){var o=console.log;return n.innerHTML="",window.setTimeout((function(){try{console.log=function(e){var o=document.createElement("li");o.innerText=e,n.appendChild(o)},d.evaluate(e.getModel().getFullText()),n.classList.remove("cleared")}catch(e){console.log(e)}finally{console.log=o,n.classList.remove("cleared")}}),150),!1}o&&(o.onclick=function(){return r(e)},e.addAction({id:"effekt-run",label:"Run code",keybindings:[t.a.Enter],precondition:null,keybindingContext:null,contextMenuGroupId:"navigation",contextMenuOrder:1.5,run:r}),r(e))}(c,o,n),c}self.MonacoEnvironment={getWorkerUrl:function(e,o){return"/effekt-website/dist/editor.worker.bundle.js"}},t.e.register({id:"effekt"}),t.e.setMonarchTokensProvider("effekt",i),t.d.defineTheme("effekt-docs-theme",{base:"vs",inherit:!1,colors:{"editor.background":"#f8f8f7"},rules:[{token:"",foreground:"333333",background:"f8f8f7"},{token:"keyword",foreground:"333333",fontStyle:"bold"},{token:"identifier",foreground:"333333"},{token:"type.identifier",foreground:"d73a49"},{token:"definition",foreground:"735080"},{token:"custom-info",foreground:"808080"},{token:"string",foreground:"25995f"},{token:"number",foreground:"005cc5"},{token:"comment",foreground:"969896"},{token:"literal",foreground:"0086b3"}]}),t.d.defineTheme("effekt-page-theme",{base:"vs",inherit:!1,colors:{"editor.background":"#ffffff"},rules:[{token:"",foreground:"333333",background:"f8f8f7"},{token:"keyword",foreground:"333333",fontStyle:"bold"},{token:"identifier",foreground:"333333"},{token:"type.identifier",foreground:"d73a49"},{token:"definition",foreground:"735080"},{token:"custom-info",foreground:"808080"},{token:"string",foreground:"25995f"},{token:"number",foreground:"005cc5"},{token:"comment",foreground:"969896"},{token:"literal",foreground:"0086b3"}]}),t.e.registerHoverProvider("effekt",d.hoverProvider)}}]);