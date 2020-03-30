#!/bin/bash

node ./tests/loginTest >> selenium-test-results.txt
node ./tests/addArtistTest >> selenium-test-results.txt
node ./tests/searchArtistTest >> selenium-test-results.txt
node ./tests/deleteArtistTest >> selenium-test-results.txt
node ./tests/logoutTest >> selenium-test-results.txt

cat selenium-test-results.txt