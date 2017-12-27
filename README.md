README - React DEV Environment Setup

- Install node.js
    - Node Proxy Setting
		- npm config set strict-ssl false
		- npm config set proxy http://epsvc%5Cweiw:password@proxy.police.edmonton.ab.ca:8080
		- npm config set https-proxy http://epsvc%5Cweiw:password@proxy.police.edmonton.ab.ca:8080
- npm install -g yarn
- npm install -g live-server
- npm install -g babel-cli
- yarn init
- yarn add babel-preset-react babel-preset-env
- babel src/app.js --out-file=public/scripts/app.js --presets=react,env --watch
- live-server public