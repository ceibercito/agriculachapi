echo "Swithching to branch main"
git checkout main

echo "Obteniendo ultimos cambios"
git pull origin main

echo "BUilding app"
npm run build

echo "Deploying files to server"
rsync -avP build/ root@chapidigital.com.pe:/var/www/chapidigital.com.pe/
echo "Deployment complete"