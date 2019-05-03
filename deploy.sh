#!/bin/bash

sudo npm run build
tar czf app.tar.gz build/ package.json

scp app.tar.gz nastromo@46.101.192.113:~
rm app.tar.gz

ssh nastromo@46.101.192.113 << 'ENDSSH'
rm -rf empr/* empr/.*
tar xf app.tar.gz -C empr
rm app.tar.gz
cd empr
npm install
chcon -Rt httpd_sys_content_t ./build
ENDSSH