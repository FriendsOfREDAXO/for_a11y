!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";const e="3.0.6",t=e=>{const t=`Sa11yLang${e.charAt(0).toUpperCase()+e.slice(1)}`;Sa11y.Lang.addI18n(window[t].strings),new Sa11y.Sa11y({autoDetectShadowComponents:!0,customChecks:!1,exportResultsPlugin:!0,detectSPArouting:!0})};"object"==typeof Sa11y?window.location.pathname.includes("sa11y")?alert('Přetáhněte tlačítko "Sa11y" do panelu záložek. Poté klikněte na záložku na libovolné webové stránce.'):alert("Sa11y je již na této stránce načten. Počkejte prosím, nebo stránku načtěte znovu a zkuste to znovu."):function(n){const s=document.createElement("link"),o=document.getElementsByTagName("head")[0];s.rel="stylesheet",s.href=`https://cdn.jsdelivr.net/gh/ryersondmp/sa11y@${e}/dist/css/sa11y.min.css`,s.type="text/css",o.appendChild(s);const a=document.createElement("script");a.src=`https://cdn.jsdelivr.net/combine/gh/ryersondmp/sa11y@${e}/dist/js/lang/${n}.umd.min.js,gh/ryersondmp/sa11y@${e}/dist/js/sa11y.umd.min.js`,document.body.appendChild(a),a.onload=()=>t(n),a.onreadystatechange=()=>t(n)}("cs")}));
