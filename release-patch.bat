call npm version patch
call yarn
call yarn run build:all
call git add package.json
echo **** Don't forget to update the `gh-pages` branch ****
