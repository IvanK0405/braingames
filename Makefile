install:
	npm install

start:
	npm run babel-node -- src/bin/brain-games.js

lint: 
	npm run eslint

even: 
	npm run babel-node -- src/bin/brain-even.js

calc: 
	npm run babel-node -- src/bin/brain-calc.js

gcd:
	npm run babel-node -- src/bin/brain-gcd.js

balance:
	npm run babel-node -- src/bin/brain-balance.js

progress:
	npm run babel-node -- src/bin/brain-progress.js

pub: 
	npm publish
