import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as n}from"./assets/vendor-77e16229.js";const i=document.querySelector(".form");i.addEventListener("submit",m);const r=(e,s)=>new Promise((o,t)=>{setTimeout(()=>{s==="fulfilled"?o(e):t(e)},e)});function m(e){e.preventDefault();const s=parseInt(i.elements.delay.value,10),o=document.querySelector('input[name="state"]:checked').value;r(s,o).then(t=>{n.success({message:`✅ Fulfilled promise in ${t}ms`,position:"topRight"})}).catch(t=>{n.error({message:`❌ Rejected promise in ${t}ms`,position:"topRight"})}).finally(()=>{i.reset()})}
//# sourceMappingURL=commonHelpers2.js.map
