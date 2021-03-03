all: 

clean:
	rm -rf build node_modules

deps:
	yarn

build: deps
	npm run build

deploy: deps build
	aws s3 sync ./build s3://mew-frontend-farms --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers --exclude '*.bat' --exclude '*.sh' --delete --profile mewFinance

test: deps
	yarn start
