#!/usr/bin/env bash

XXXX="country"
DROPLET_URL="marcge.dk"

echo "##############################"
echo "Building the frontend project"
echo "##############################"
npm run build

echo "##############################"
echo "Deploying Frontend project..."
echo "##############################"

scp -r ./build root@$DROPLET_URL:/var/www/$XXXX

