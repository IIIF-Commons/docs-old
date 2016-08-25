# viewdir.github.io

built using https://github.com/GitbookIO/gitbook

install gitbook-cli

	npm install gitbook-cli -g
	
run 

	gulp build
	
to build to `_book`

commit the generated files to the default `book` branch then run:

	gulp deploy
	
to deploy the contents of `_book` to the remote `master` branch.

## Notes

### Structuring the book

Remember to update SUMMARY.md when altering the book structure:

https://github.com/GitbookIO/gitbook/blob/master/docs/SUMMARY.md

Run

	gitbook serve

to check on localhost:4000 before deploying.

### Errors

If you get an `Updates were rejected` error when running `gulp deploy`, delete the remote `master` branch and push again.

The `master` branch is purely for the deployed book files. Delete the local and remote `master` before running `gulp deploy` if you have problems.

To delete locally:

	git branch -d master

To delete remotely:

	git push origin :master