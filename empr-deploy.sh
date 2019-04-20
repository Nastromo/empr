#!/bin/bash

sudo npm run build
cp devempr.pem build
cd build
mkdir prod

cp -R static prod
cp asset-manifest.json prod
cp favicon.ico prod
cp index.html prod
cp manifest.json prod
cp precache-manifest.79f550c3be1fadd9b5ae283ffe18ef5b.js prod
cp manifest.json prod

tar czf app.tar.gz static/ asset-manifest.json favicon.ico index.html manifest.json precache-manifest.79f550c3be1fadd9b5ae283ffe18ef5b.js manifest.json

sftp -i "devempr.pem" ubuntu@192.168.20.211 << 'ENDSSH'
put app.tar.gz
exit
ENDSSH

rm app.tar.gz

ssh -i "devempr.pem" ubuntu@192.168.20.211 << 'ENDSSH'
rm -rf empr_front/* empr_front/.*
tar xf app.tar.gz -C empr_front
rm app.tar.gz
ENDSSH