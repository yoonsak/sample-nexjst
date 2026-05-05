# install node
```
wget "https://nodejs.org/dist/v24.15.0/node-v24.15.0-linux-x64.tar.xz"
tar jxvf node-v24.15.0-linux-x64.tar.xz -C /opt
ln -s node-v24.15.0-linux-x64 /opt/node
export PATH=/opt/node/bin:$PATH
node -v
npm -v
npx -v
```

# manual build & run
output at ./.next/standalone
```
rm -rf .next
npm run build
mkdir -pv ./.next/standalone/.next
cp -vR ./.next/static ./.next/standalone/.next/static
APPNAME=TestApp node ./.next/standalone/server.js
```

# build container image and run
```
docker buildx build --progress=plain -t lab .
docker run --rm -p 3000:3000 -e APPNAME="Test" lab
```
