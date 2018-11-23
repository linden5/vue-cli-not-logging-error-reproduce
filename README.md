# vue-cli-not-logging-error-reproduce

This problem is actually caused by [friendly-errors-webpack-plugin](https://github.com/geowarin/friendly-errors-webpack-plugin/issues/79), but I think vue-cli should log error details to help users locating problems quickly. 

After having a glance of vue-cli-service source code, this problem may be related to error handling of async functions such as service#run.

## Steps to reproduce

1. run yarn install
2. run yarn serve

and the console would log 'Failed to compile with 1 errors' without error details
