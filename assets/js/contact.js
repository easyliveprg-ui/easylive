const FORMSPREE_ID = "YOUR_FORM_ID"; // ← nahraď např. "f/abcd1234"
const ENDPOINT = `https://formspree.io/${FORMSPREE_ID}`;
(function(){
  const form = document.getElementById("contactForm");
  const box  = document.getElementById("formStatus");
  if(!form) return;
  form.addEventListener("submit", async (e)=>{
    e.preventDefault();
    if(!FORMSPREE_ID || FORMSPREE_ID.includes("YOUR_FORM_ID")){
      alert("Doplň své Formspree ID v assets/js/contact.js (FORMSPREE_ID).");
      return;
    }
    const btn=form.querySelector('button[type="submit"]');
    const data=new FormData(form);
    const txt=btn.textContent; btn.disabled=true; btn.textContent="Odesílám…"; box.textContent="";
    try{
      const r = await fetch(ENDPOINT,{method:"POST",headers:{Accept:"application/json"},body:data});
      if(r.ok){ form.reset(); box.style.color="#0a7a6f"; box.textContent="Díky! Zpráva byla odeslána."; }
      else{
        const j = await r.json().catch(()=>({}));
        throw new Error((j.errors && j.errors[0] && j.errors[0].message) || "Odeslání se nezdařilo.");
      }
    }catch(err){ box.style.color="#b00020"; box.textContent="Chyba odeslání: " + err.message; }
    finally{ btn.disabled=false; btn.textContent=txt; }
  });
})();
