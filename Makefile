install: npm install

start:
	npx babel-node 'src/bin/brain-games.js' 10
publish:
	npm publish
build:
	rm -rf dist
	npm run build
lint:
	npx eslint