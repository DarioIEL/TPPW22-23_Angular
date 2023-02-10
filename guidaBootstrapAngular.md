# Installare Bootstrap su progetto Angular
Nella cartella del progetto
```
npm install bootstrap@latest
npm install jquery
```

Dopo aver lanciato i comandi sopra verranno create due cartelle all'interno dei node_modules con i relativi file. Questi file andranno collegati all'interno del file angular json.

In **angular.json** dovranno essere inseriti i path dei relativi files (circa riga 27 del file angular.json)
```
"styles": [
    "./node_modules/bootstrap/dist/css/bootstrap.css",
    "src/styles.css"
],
"scripts": [
    "./node_modules/jquery/dist/jquery.js",
    "./node_modules/bootstrap/dist/js/bootstrap.js"
]
```