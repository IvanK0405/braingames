install:
	npm install

start:
	sudo npm run babel-node -- src/bin/brain-games.js

lint: 
	sudo npm run eslint.

even: 
	sudo npm run babel-node -- src/bin/brain-even.js

calc: 
	sudo npm run babel-node -- src/bin/brain-calc.js

pub: 
	npm publish
