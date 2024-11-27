# Docker Setup AdoniaUpload

## Entwickeln

`cd app && npm install && npm run build`

dann

`cd .. && npm install && npm start`

oder statt `npm start` (z.B. "Der Befehl "NODE_ENV" ist entweder falsch geschrieben oder konnte nicht gefunden werden.")

`node app.js`

## Starten

Auf dem Server im Repo ausführen:

`$ docker compose up -d`

und (ggf.)

`$ chown -R 1000 $PWD/data`

## Aktualisieren

Zum neu Bauen (z.B. nach Updates via `git pull`):

`$ docker compose up -d --build`
