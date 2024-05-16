# Docker Setup AdoniaUpload

## Bauen

Add `config.production.js`

`$ docker build -t adoniaupload .`

## Tarfile

Docker Image als Tarfile speichern:

`$ docker save -o adoniaupload.tar adoniaupload`

## Copy to server

Tarfile hochladen auf Server:

`$ scp adoniaupload.tar adonia.de:/home/adonia`

## Load Image

Image aus Tarfile auf Server in Dockerumgebung laden:

`$ docker load -i <path to image tar file>`

## Beenden

ggf. muss der laufende Container zuerst beendet werden.

Um den Namen des Containers herauszufinden:

`$ docker ps`

Um laufende Container zu stoppen und zu löschen:

`$ docker stop <containername>`

`$ docker rm <containername>`

## Starten

`$ docker run --name="adoniaupload" -d -p 127.0.0.1:3500:80 -e PSITRANSFER_PORT=80 --env-file .env --restart=on-failure:5 -v $PWD/data:/data adoniaupload`

und (ggf.)

`$ chown -R 1000 $PWD/data`
