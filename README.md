# Demo Minimind Studio

- `index.html`: la demo generale (Maison Ardesia), online su saloonwebdemo.netlify.app.
  È anche il **modello**: tutti i dati stanno nel blocco `CONFIG` in cima allo script
  (tra `// === CONFIG INIZIO ===` e `// === CONFIG FINE ===`).
- `clienti/*.js`: una configurazione per ogni demo (solo il blocco `const CONFIG = {...};`).
- `demo/<nome>/index.html`: le demo create dal modello. Esempio barbiere:
  saloonwebdemo.netlify.app/demo/barbiere/

## Creare la demo di un cliente

1. Copiare `clienti/barbiere.js` in `clienti/nome-attivita.js`.
2. Cambiare `fantasia: false`, nome, città, tema, orari, servizi e prezzi (presi dal suo sito,
   da Google o da Treatwell), voto e numero reali di Google, link alla scheda Google, `aggiornato`.
   Togliere `esempi` e `distribuzione`: per un'attività reale non si inventano recensioni.
3. `python3 strumenti/nuova_demo.py clienti/nome-attivita.js`
4. Il file `demo/nome-attivita/index.html` si trascina in un nuovo sito Netlify
   (Add new project → Deploy manually) chiamato come l'attività.

Con `fantasia: false` la pagina mostra in alto "Anteprima non ufficiale preparata da Minimind Studio".

Temi: `ardesia` (lavagna e champagne), `bottega` (noce e ottone, per barbieri),
`salvia` (verde salvia, per centri estetici), `cipria` (rosa cipria, per unghie e beauty).
