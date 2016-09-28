
# Browserify Full Paths Bug

This repo is a minimal reproduction of a bug caused by the `fullPaths` option, when one of the bundled modules requires an exposed module using a path.  The exposed module is available under its alias, but not under its file path.  The bug is avoided when `fullPaths` is not used because both the file path and the alias are mapped to an index by deps-sort.

In a more realistic case, this bug would occur when someone bundles and exposes an npm package that has an internal reference to its main file (i.e. the one which will be aliased by `--require`).

### Run Reproduction

```sh
$ git clone https://github.com/niallwingham/browserify-full-paths-bug.git
$ cd browserify-full-paths-bug
$ npm install
$ npm run repro
```

Or, to see it working as expected by bundling without `fullPaths`:

```sh
$ npm run working
```

### Expected Result
demo.html displays "Hello World".

### Actual Result
demo.html displays "Error: Cannot find module '[...]/src/entry.js'"
