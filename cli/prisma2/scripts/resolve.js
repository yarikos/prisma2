#!/usr/bin/env node

const path = require('path')
const resolvePkg = require('resolve-pkg')

function resolve(pkg) {
  const resolvedPath = resolvePkg(pkg, { cwd: __dirname })
  if (resolvedPath) {
    return resolvedPath
  }
}

console.log(resolve(process.argv[2]))
