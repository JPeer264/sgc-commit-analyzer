# sgc-commit-analyzer

[![Build Status](https://travis-ci.org/JPeer264/sgc-commit-analyzer.svg?branch=master)](https://travis-ci.org/JPeer264/sgc-commit-analyzer)
[![Coverage Status](https://coveralls.io/repos/github/JPeer264/sgc-commit-analyzer/badge.svg)](https://coveralls.io/github/JPeer264/sgc-commit-analyzer)

> A plugin for [semantic-release analyzeCommits](https://github.com/semantic-release/semantic-release#analyzecommits)

## Installation

```sh
$ npm i -D sgc-commit-analyzer
```
or
```sh
$ yarn add -D sgc-commit-analyzer
```

## Usage

Add simply this in your package.json :

```json
{
  "release": {
    "analyzeCommits": "sgc-commit-analyzer"
  }
}
```

Now, [semantic-release](https://github.com/semantic-release/semantic-release) will detect changes
