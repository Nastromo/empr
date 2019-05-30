#!/bin/bash

npm run build
cp devempr.pem build
cd build
mkdir prod

cp -R static prod
cp asset-manifest.json prod
cp favicon.ico prod
cp index.html prod
cp manifest.json prod
cp service-worker.js prod

tar czf app.tar.gz static/ asset-manifest.json favicon.ico index.html manifest.json service-worker.js

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