echo "Swithching to branch main"
git checkout main

echo "BUilding app"
npm run build

echo "Deploying files to server"
rsync -avP build/ root@chapidigital.com.pe:/var/example.com/
echo "Deployment complete"