# Docker Setup AdoniaUpload

## Bauen

Add `config.production.js`
`$ docker build -t adoniaupload .`

## Starten

`$ docker run --name="adoniaupload" -d -p 127.0.0.1:3500:80 -e PSITRANSFER_PORT=80 --env-file .env -v $PWD/data:/data adoniaupload`
und
`$ chown -R 1000 $PWD/data`

## Tarfile

`$ docker save -o adoniaupload.tar adoniaupload`

## Copy to server

`$ scp adoniaupload.tar dev-shop:/home/adonia`

## Load Image

`$ docker load -i <path to image tar file>`
