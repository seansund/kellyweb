#!/bin/bash

if which yarn 
then
	echo "yarn exists"
else
	echo "yarn does not exist"
	curl -o- -L https://yarnpkg.com/install.sh | bash
fi
