(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const C="O_mz-XJPx-FHWBF-u";let k=document.getElementById("hamburger_icon"),y=document.getElementById("sidebar"),S=document.getElementById("xmark");document.getElementById("submit_btn");let p=document.getElementById("email_success"),h=document.getElementById("email_failure"),P=document.getElementById("Home"),w=document.getElementById("AboutMe"),B=document.getElementById("Skills"),E=document.getElementById("Projects"),T=document.getElementById("Contact"),L=document.querySelectorAll("#navigation_items > li"),_=document.querySelectorAll("#sidebar_navigation > li"),c=document.getElementById("scroll_top_circle"),f={home_location:P.getBoundingClientRect().y,about_location:w.getBoundingClientRect().y,skills_location:B.getBoundingClientRect().y,projects_location:E.getBoundingClientRect().y,contact_location:T.getBoundingClientRect().y};k.onclick=()=>y.classList.toggle("-translate-x-56");S.onclick=()=>y.classList.toggle("-translate-x-56");emailjs.init({publicKey:C});window.onload=()=>{document.getElementById("contact_form").addEventListener("submit",i=>{i.preventDefault(),emailjs.sendForm("portfoliowebsite","contact_form",document.getElementById("contact_form")).then(()=>{setTimeout(()=>{p.classList.remove("-right-96"),p.classList.add("right-5")},1e3),setTimeout(()=>{p.classList.add("-right-96"),p.classList.remove("right-5")},4e3)},n=>{setTimeout(()=>{h.classList.remove("-right-96"),h.classList.add("right-5")},1e3),setTimeout(()=>{h.classList.add("-right-96"),h.classList.remove("right-5")},4e3)})})};L.forEach(i=>{i.onclick=()=>{window.scroll({top:f[`${i.id}_location`]-55,behavior:"smooth"})}});_.forEach(i=>{i.onclick=()=>{window.scroll({top:f[`${i.id}_location`]-55,behavior:"smooth"})}});window.onscroll=i=>{window.scrollY>100&&(c.classList.remove("-right-52"),c.classList.add("right-5")),window.scrollY<=100&&(c.classList.add("-right-52"),c.classList.remove("right-5"))};c.onclick=()=>{window.scroll({top:0,behavior:"smooth"})};function d(){return d=Object.assign?Object.assign.bind():function(i){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=t[s])}return i},d.apply(this,arguments)}var I={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(i){},onComplete:function(i){},preStringTyped:function(i,n){},onStringTyped:function(i,n){},onLastStringBackspaced:function(i){},onTypingPaused:function(i,n){},onTypingResumed:function(i,n){},onReset:function(i){},onStop:function(i,n){},onStart:function(i,n){},onDestroy:function(i){}},O=new(function(){function i(){}var n=i.prototype;return n.load=function(t,s,e){if(t.el=typeof e=="string"?document.querySelector(e):e,t.options=d({},I,s),t.isInput=t.el.tagName.toLowerCase()==="input",t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(l){return l.trim()}),t.stringsElement=typeof t.options.stringsElement=="string"?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var o=Array.prototype.slice.apply(t.stringsElement.children),r=o.length;if(r)for(var a=0;a<r;a+=1)t.strings.push(o[a].innerHTML.trim())}for(var u in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[u]=u;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},n.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:t.contentType==="html"?t.el.innerHTML:t.el.textContent},n.appendCursorAnimationCss=function(t){var s="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+s+"]")){var e=document.createElement("style");e.setAttribute(s,"true"),e.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(e)}},n.appendFadeOutAnimationCss=function(t){var s="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+s+"]")){var e=document.createElement("style");e.setAttribute(s,"true"),e.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(e)}},i}()),m=new(function(){function i(){}var n=i.prototype;return n.typeHtmlChars=function(t,s,e){if(e.contentType!=="html")return s;var o=t.substring(s).charAt(0);if(o==="<"||o==="&"){var r;for(r=o==="<"?">":";";t.substring(s+1).charAt(0)!==r&&!(1+ ++s>t.length););s++}return s},n.backSpaceHtmlChars=function(t,s,e){if(e.contentType!=="html")return s;var o=t.substring(s).charAt(0);if(o===">"||o===";"){var r;for(r=o===">"?"<":"&";t.substring(s-1).charAt(0)!==r&&!(--s<0););s--}return s},i}()),D=function(){function i(t,s){O.load(this,s,t),this.begin()}var n=i.prototype;return n.toggle=function(){this.pause.status?this.start():this.stop()},n.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},n.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},n.destroy=function(){this.reset(!1),this.options.onDestroy(this)},n.reset=function(t){t===void 0&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},n.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.strPos===0?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},n.typewrite=function(t,s){var e=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var o=this.humanizer(this.typeSpeed),r=1;this.pause.status!==!0?this.timeout=setTimeout(function(){s=m.typeHtmlChars(t,s,e);var a=0,u=t.substring(s);if(u.charAt(0)==="^"&&/^\^\d+/.test(u)){var l=1;l+=(u=/\d+/.exec(u)[0]).length,a=parseInt(u),e.temporaryPause=!0,e.options.onTypingPaused(e.arrayPos,e),t=t.substring(0,s)+t.substring(s+l),e.toggleBlinking(!0)}if(u.charAt(0)==="`"){for(;t.substring(s+r).charAt(0)!=="`"&&(r++,!(s+r>t.length)););var g=t.substring(0,s),b=t.substring(g.length+1,s+r),v=t.substring(s+r+1);t=g+b+v,r--}e.timeout=setTimeout(function(){e.toggleBlinking(!1),s>=t.length?e.doneTyping(t,s):e.keepTyping(t,s,r),e.temporaryPause&&(e.temporaryPause=!1,e.options.onTypingResumed(e.arrayPos,e))},a)},o):this.setPauseStatus(t,s,!0)},n.keepTyping=function(t,s,e){s===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var o=t.substring(0,s+=e);this.replaceText(o),this.typewrite(t,s)},n.doneTyping=function(t,s){var e=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){e.backspace(t,s)},this.backDelay))},n.backspace=function(t,s){var e=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var o=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){s=m.backSpaceHtmlChars(t,s,e);var r=t.substring(0,s);if(e.replaceText(r),e.smartBackspace){var a=e.strings[e.arrayPos+1];e.stopNum=a&&r===a.substring(0,s)?s:0}s>e.stopNum?(s--,e.backspace(t,s)):s<=e.stopNum&&(e.arrayPos++,e.arrayPos===e.strings.length?(e.arrayPos=0,e.options.onLastStringBackspaced(),e.shuffleStringsIfNeeded(),e.begin()):e.typewrite(e.strings[e.sequence[e.arrayPos]],s))},o)}else this.setPauseStatus(t,s,!1)},n.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},n.setPauseStatus=function(t,s,e){this.pause.typewrite=e,this.pause.curString=t,this.pause.curStrPos=s},n.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},n.humanizer=function(t){return Math.round(Math.random()*t/2)+t},n.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},n.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},n.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:this.contentType==="html"?this.el.innerHTML=t:this.el.textContent=t},n.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(s){t.stop()}),this.el.addEventListener("blur",function(s){t.el.value&&t.el.value.length!==0||t.start()}))},n.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},i}();new D(".typed_animation_span",{strings:["Student","Developer","Student","Developer","Student","Developer","Student","Developer","Student","Developer","Student","Developer","Student","Developer","Student","Developer","Student","Developer","Student","Developer"],typeSpeed:100,backDelay:500,loop:!0,backSpeed:30,cursorChar:"|"});
