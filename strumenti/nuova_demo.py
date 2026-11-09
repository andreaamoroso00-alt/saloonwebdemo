#!/usr/bin/env python3
"""Crea una demo cliente partendo da index.html (il modello) e da un file di configurazione.

Uso:
    python3 strumenti/nuova_demo.py clienti/nome-attivita.js

Il file di configurazione contiene solo il blocco `const CONFIG = { ... };`
(stessa struttura di quello in cima a index.html).
Il risultato viene scritto in demo/nome-attivita/index.html: è un file unico,
pronto da trascinare in un nuovo sito Netlify.
"""
import pathlib
import re
import sys

INIZIO = "// === CONFIG INIZIO ==="
FINE = "// === CONFIG FINE ==="

radice = pathlib.Path(__file__).resolve().parent.parent


def crea(config_path: pathlib.Path) -> pathlib.Path:
    modello = (radice / "index.html").read_text(encoding="utf-8")
    config = config_path.read_text(encoding="utf-8").strip()
    if "const CONFIG" not in config:
        sys.exit(f"{config_path}: manca 'const CONFIG = {{ ... }};'")
    a, b = modello.index(INIZIO), modello.index(FINE)
    pagina = modello[: a + len(INIZIO)] + "\n" + config + "\n" + modello[b:]
    nome = config_path.stem
    uscita = radice / "demo" / nome / "index.html"
    uscita.parent.mkdir(parents=True, exist_ok=True)
    uscita.write_text(pagina, encoding="utf-8")
    return uscita


if __name__ == "__main__":
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    for arg in sys.argv[1:]:
        print("Creata:", crea(pathlib.Path(arg)).relative_to(radice))
