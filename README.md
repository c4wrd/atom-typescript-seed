Atom text editor TypeScript Package Seed
========================================

This is a project seed for TypeScript Atom packages. TypeScript is revolutionary as far as JavaScript development is concerned, and is extremely helpful when building Atom packages. Unfortunately, TypeScript is not directly supported by Atom when generating packages, and therefore requires quite a bit of extra work to get a project set up. This will work as a seed for developing your own packages in TypeScript.

### Build layout

The package.json located in the root of the folder is NOT a Node package.json. It is used by Atom for managing the package and should not be touched unless you are aware of what is being done. In the 'src' directory is a Node package, which when installed will create the necessary Gulp workflow for your package.

### Debugging

View > Developer > Toggle Developer Tools in Atom.
