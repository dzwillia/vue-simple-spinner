call npm version patch
call yarn
call yarn run build
call git add package.json
echo **** Don't forget to update the `gh-pages` branch and run `npm publish` ****
