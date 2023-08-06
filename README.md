# package-fetcher
Designed to fetch information directly from the NPM registry for other NPM packages.
## Table of contents
+ **[Installation & Example](#installation)**
+ **[Properties](#properties)**
+ **[Limitations](#limitations)**
## Installation
```bash
npm install package-fetcher
```
### Example
```js
const package = require('package-fetcher');
const data = package.fetchInfo('express');
console.log(data.name)
console.log(data.description)
```
## Properties
+ **.name** - Returns the package name.
+ **.description** - Returns the package description.
+ **.author** - Returns the package author.
+ **.maintainers** - Returns the package maintainers.
+ **.version** - Returns the latest package version.
+ **.downloads** - Returns download counts _(for the last week, last month, and last year)_
  + _.lastWeek - Only returns the download count from the last 7 days._
  + _.lastMonth - Only returns the download count from the last month._
  + _.lastYear - Only returns the download count from the last year._
+ **.created** - Returns the time when package was created _(both ISO and timestamp)_
  + _.iso - Returns the ISO time when package was created_
  + _.timestamp - Returns the timestamp when package was created_
+ **.modified** - Returns the time when package was last modified _(both ISO and timestamp)_
  + _.iso - Returns the ISO time when package was last modified_
  + _.timestamp - Returns the timestamp when package was last modified_
  
## Limitations
+ **Synchronous Nature**: Using `sync-request` can lead to performance bottlenecks and application delays.

+ **Dependency on `sync-request`**: `sync-request` might not be compatible with all environments and could impact the overall performance of your project.

### Keep in mind that
Occasionally, the package may encounter failures when attempting to fetch package information from the NPM registry, this is a bug that i'll try to solve for future updates.