/**
 * contact.js — AJAX odesílání formuláře na Formspree (statický web na GitHub Pages)
 * UPRAV: nahraď FORMSPREE_ID svým ID ve tvaru `f/XXXXYYYY`.
 */
const FORMSPREE_ID = "YOUR_FORM_ID"; // např. "f/abcd1234"
const FORM_SUBMIT_ENDPOINT = `https://formspree.io/${FORMSPREE_ID}`;

(function(){
  const form = document.getElementById("contactForm");
  const statusBox = document.getElementById("formStatus") || (function(){ const d=document.createElement('div'); d.id='formStatus'; form.after(d); return d; })();
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!FORMSPREE_ID || FORMSPREE_ID.includes("YOUR_FORM_ID")) {
      alert("Doplň formulářové ID (Formspree) v assets/js/contact.js – FORMSPREE_ID.");
      return;
    }
    const btn = form.querySelector('button[type="submit"]');
    const data = new FormData(form);
    btn.disabled = true; const t = btn.textContent; btn.textContent = "Odesílám…";
    statusBox.textContent = "";

    try {
      const r = await fetch(FORM_SUBMIT_ENDPOINT, { method:"POST", headers:{ "Accept":"application/json" }, body:data });
      if (r.ok) {
        form.reset();
        statusBox.style.color = "#0a7a6f";
        statusBox.textContent = "Díky! Zpráva byla odeslána.";
      } else {
        const j = await r.json().catch(()=>({}));
        throw new Error((j.errors && j.errors[0] && j.errors[0].message) || "Odeslání se nezdařilo.");
      }
    } catch(err){
      statusBox.style.color = "#b00020";
      statusBox.textContent = "Chyba odeslání: " + err.message;
    } finally {
      btn.disabled = false; btn.textContent = t;
    }
  });
})();
