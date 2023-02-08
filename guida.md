# Angular
Guida comandi Base
### Prerequisiti
- Node.js
- Npm (installato con Node)

## Installazione Angular CLI
```
npm install -g @angular/cli
```

## Nuova App
```
ng new mia-app
```
## Run App
Nella cartella principale dell'applicazione (dentro mia-app)
```
ng serve --open
```
Questo comando genera un server su localhost:4200
Live-Reload attivo

## New Component
Nella cartella principale dell'applicazione (dentro mia-app)
```
ng generate component nome-component
```
Viene generato un component all'interno della cartella app (mia-app/app)

oppure
```
ng g c nome-component
```

## Progetti scaricati da GitHub
Dopo aver scaricato il progetto, nella cartella mia-app lanciare il comando
```
npm install
```
Verranno reinstallati i node-modules, ovviamente non presenti su GitHub perché troppi e troppo pesanti.