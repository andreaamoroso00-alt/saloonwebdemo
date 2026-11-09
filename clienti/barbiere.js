const CONFIG = {
  tipo: "barbiere",
  fantasia: true,
  nome: "Bottega Ferro",
  citta: "Torino",
  tema: "bottega",
  colori: {},

  hero: {
    occhiello: "Barberia · San Salvario",
    titolo: "Taglio e barba, <em>senza aspettare il turno.</em>",
    testo: "Sfumature, barba con panno caldo e rasatura tradizionale. Scegli l'orario dal calendario o chiedi a Leo, l'assistente della bottega: risponde anche quando siamo chiusi."
  },

  indirizzo: "Zona San Salvario, Torino.",
  comeArrivare: "A 5 minuti a piedi dalla stazione di Porta Nuova.",
  notaOrari: "Il sabato apriamo alle 8:30, per chi vuole sistemarsi prima del weekend.",

  orari: {
    lunedi: "chiuso",
    martedi: "9-13, 14:30-19:30",
    mercoledi: "9-13, 14:30-19:30",
    giovedi: "9-13, 14:30-19:30",
    venerdi: "9-13, 14:30-19:30",
    sabato: "8:30-18",
    domenica: "chiuso"
  },

  prezziDa: false,
  servizi: {
    "Taglio": [
      {n:"Taglio classico", d:30, p:22, t:"Forbice e macchinetta, sfumatura su misura."},
      {n:"Taglio e shampoo", d:40, p:26, t:"Con lavaggio e styling finale."},
      {n:"Taglio bambino", d:30, p:15, t:"Fino a 12 anni."}
    ],
    "Barba": [
      {n:"Regolazione barba", d:20, p:12, t:"Contorni e lunghezza, a macchinetta e rasoio."},
      {n:"Barba con panno caldo", d:30, p:18, t:"Panno caldo, rasoio e balsamo dopobarba."},
      {n:"Rasatura tradizionale", d:30, p:20, t:"Rasatura completa a mano libera."}
    ],
    "Combo": [
      {n:"Taglio e barba", d:50, p:32, t:"Il servizio più richiesto."},
      {n:"Taglio, barba e trattamento viso", d:70, p:45, t:"Con maschera e massaggio al viso."}
    ]
  },
  inEvidenza: ["Taglio e barba","Taglio classico","Barba con panno caldo","Taglio bambino"],

  cartellaColori: false,

  recensioni: {
    voto: 4.8,
    numero: 186,
    link: "",
    aggiornato: "",
    distribuzione: [160,19,4,2,1],
    esempi: [
      {n:"Marco T.", q:"Prenotato la sera prima dal telefono, arrivato e seduto subito. Sfumatura perfetta.", s:"Taglio classico", t:"1 settimana fa", c:"#d8b98a"},
      {n:"Luca P.", q:"La barba con il panno caldo vale da sola il viaggio. Ambiente tranquillo, si chiacchiera bene.", s:"Barba con panno caldo", t:"3 settimane fa", c:"#c9a092"},
      {n:"Simone G.", q:"Porto anche mio figlio: veloci e pazienti. Il promemoria via mail mi salva ogni volta.", s:"Taglio bambino", t:"1 mese fa", c:"#b9b3a6"},
      {n:"Matteo R.", q:"Taglio e barba in cinquanta minuti precisi, prezzo chiaro prima di iniziare.", s:"Taglio e barba", t:"2 mesi fa", c:"#d5c4ab"}
    ]
  },

  assistente: {
    nome: "Leo",
    parcheggio: "In zona ci sono strisce blu; il sabato mattina si trova posto facilmente.",
    annullamento: "Puoi spostare o annullare gratis fino a 3 ore prima: rispondi alla mail di conferma oppure scrivimi qui.",
    sinonimi: { "barba":"Barba con panno caldo", "capell":"Taglio classico", "sfumat":"Taglio classico", "combo":"Taglio e barba", "bambin":"Taglio bambino", "figli":"Taglio bambino", "rasat":"Rasatura tradizionale" }
  },

  contatto: "studiominimind@gmail.com"
};
