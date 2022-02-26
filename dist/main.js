(()=>{"use strict";class e{constructor(e,t,n,o,s,l,i,c,a,r,u,d,h,p){this.title=e,this.selectID=t,this.parent=document.querySelector(s),this.selectedValue=n,this.selectedValueTitle=o,this.value1=l,this.value2=i,this.value3=c,this.titleValue1=a,this.titleValue2=r,this.titleValue3=u,this.titleValue4=d,this.titleValue5=h,this.titleValue6=p}render(){const e=document.createElement("div");e.innerHTML=`\n               <div class="container show">\n            <div class="content">\n                <p>${this.title}</p>\n            </div>\n            <div class="content">\n                <select class="select" id="${this.selectID}">\n                    <option selected value="${this.selectedValue}">${this.selectedValueTitle}</option>\n                    <option value="${this.value1}">${this.titleValue1}</option>\n                    <option value="${this.value2}">${this.titleValue2}</option>\n                    <option value="${this.value3}">${this.titleValue3}</option>\n                    <option value="${this.value3}">${this.titleValue4}</option>\n                    <option value="${this.value3}">${this.titleValue5}</option>\n                    <option value="${this.value3}">${this.titleValue6}</option>\n                </select>\n            </div>\n        </div>\n       `,this.parent.after(e)}}function t(e,t,n){const o=document.querySelector(e),s=document.querySelectorAll(t);o.addEventListener("click",(e=>{const t=e.target;(t.classList.contains(n)||t.classList.contains("title")||t.parentElement.classList.contains("title")||t.parentElement.classList.contains(n))&&s.forEach((e=>{e.classList.contains("hide")?(e.classList.remove("hide"),e.classList.add("show"),e.style.cssText="height: 150px"):(e.classList.remove("show"),e.classList.add("hide"),e.style.cssText="height: 50px")}))}))}new e("Выберите уровнемер","selectLevel","Выберите уровнемер","Выберите уровнемер",".level .title","1","2","3","5900S","5900C","REX","PRO","5300","5400").render(),new e("Выберите датчик","selectTemp","Выберите датчик","Выберите датчик",".temperature .title","0.5","0.25","2240S","NLI/WLS").render();const n=document.querySelector(".level span"),o=document.querySelector(".temperature span"),s=document.querySelector(".pressure span"),l=document.querySelector(".resultAutoDensity span"),i=document.querySelector(".densityAcc span"),c=document.querySelector(".absDensityAcc span"),a=document.querySelector(".volume span"),r=document.querySelector(".currentWeight span");let u,d,h,p,x,v,m,C,y,_,L,S,q,w,f,F,V;function g(){"Выберите уровнемер"!==d?("1"===d&&(n.textContent=(100/u).toFixed(4)),"2"===d&&(n.textContent=(200/u).toFixed(4)),"3"===d&&(n.textContent=(300/u).toFixed(4)),u?(F=n.textContent,w=n.textContent,E()):n.textContent="Значение уровня не введено!"):n.textContent="Уровнемер не выбран"}function $(){"Выберите датчик"!==p?("0.5"===p&&(o.textContent=(50/h).toFixed(4)),"0.25"===p&&(o.textContent=(25/h).toFixed(4)),h?f=o.textContent:o.textContent="Значение температуры не введено!"):o.textContent="Датчик не выбран"}function T(){"0"!==x?("UFF"===x&&!1===C&&(s.textContent=Math.sqrt(Math.pow(v/v,2)*Math.pow(.04,2))),"UFF"===x&&!0===C&&(s.textContent=Math.sqrt(Math.pow(v/v,2)*Math.pow(.17,2))),"U"===x&&(s.textContent=(2.5/v).toFixed(4)),"C"===x&&(s.textContent=(.035*100/v).toFixed(4)),v?(V=s.textContent,E()):s.textContent="Давление не введено!"):s.textContent="Датчик давления не выбран"}function b(){u?v?(l.textContent=(1.21+v/(u-m)*9.81*10).toFixed(4),y=l.textContent,A()):l.textContent="Давление не введено!":l.textContent="Уровень не введен!"}function k(){y?L?(r.textContent=(L*y/1e3).toFixed(4),q=r.textContent):r.textContent="Объем не введен":r.textContent="Плотность неизвестна"}function E(){v?"Выберите уровнемер"!==d?u?(i.textContent=(+F+ +V).toFixed(4),_=i.textContent,A()):i.textContent="Уровень не введен":i.textContent="Уровнемер не выбран":i.textContent="Давление не введено"}function A(){c.textContent=(y/100*_).toFixed(4)}function M(){"Выберите значение"!==S?("0.05"===S&&(a.textContent=(.05*L).toFixed(4)),"0.1"===S&&(a.textContent=(.1*L).toFixed(4)),"0.2"===S&&(a.textContent=(.2*L).toFixed(4)),L||(a.textContent="Объем не введен")):a.textContent="Погрешность таблицы не выбрана"}function P(e){const t=document.querySelector(e);m=t.value,t.addEventListener("input",(()=>{switch(t.getAttribute("id")){case"currentLevel":u=+t.value,g(),E(),b(),A();break;case"currentTemp":h=+t.value,$();break;case"currentPressure":v=t.value,T(),b(),E(),A();break;case"currentVolume":L=+t.value,M(),k();break;case"heightPressureTransmitter":m=+t.value,T(),b(),E()}}))}function D(e){const t=document.querySelector(e);t.addEventListener("change",(()=>{switch(t.getAttribute("id")){case"selectLevel":d=t.value,g();break;case"selectTemp":p=t.value,$();break;case"selectPressure":x=t.value,T();break;case"selectTableAcc":S=t.value}}))}document.querySelector(".weightAcc span"),g(),$(),T(),k(),M(),function(){let e=document.querySelector(".tempCorrection"),t=document.querySelector("#tempCorrection");!1===t.checked&&(C=!1),e.addEventListener("change",(()=>{C=!!t.checked,T()}))}(),function(){const e=document.querySelector(".form");let t=document.getElementsByName("dens"),n=document.querySelector(".wrapper__auto__dens"),o=document.querySelector(".wrapper__handle__dens");e.addEventListener("change",(()=>{t.forEach((e=>{e.checked&&"handle"===e.value&&(n.style.display="none",o.style.display="inline-flex"),e.checked&&"auto"===e.value&&(n.style.display="inline-flex",o.style.display="none")}))}))}(),P("#currentLevel"),P("#currentTemp"),P("#currentVolume"),P("#currentPressure"),P("#heightPressureTransmitter"),D("#selectLevel"),D("#selectTemp"),D("#selectPressure"),D("#selectTableAcc"),t(".level",".level .container","level"),t(".temperature",".temperature .container","temperature"),t(".chose__density_type",".chose__density_type .container","chose__density_type"),t(".wrapper__auto__dens",".wrapper__auto__dens .container","wrapper__auto__dens"),t(".volume",".volume .container","volume"),t(".weight",".weight .container","weight")})();