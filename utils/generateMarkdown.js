// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const mitBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  const apacheBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  const bsd3Badge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  const gplBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  const none = ' ';

    if (license.includes('MIT')) {
      return mitBadge;
    }

    if (license.includes('Apache 2.0')) {
      return apacheBadge;
    }

    if (license.includes('BSD 3')) {
      return bsd3Badge;
    }

    if (license.includes('GPL 3.0')) {
      return gplBadge;
    }

    if (license.includes('none')) {
      return none;
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const mitLink = '[MIT](https://opensource.org/licenses/MIT)';
  const apacheLink = '[Apache 2.0]](https://opensource.org/licenses/Apache-2.0)';
  const bsd3Link = '[BSD v3](https://opensource.org/licenses/BSD-3-Clause)';
  const gplLink = '[GPL v3](https://www.gnu.org/licenses/gpl-3.0)';
  const noneLink = ' ';

  if (license.includes('MIT')) {
    return mitLink;
  }

  if (license.includes('Apache 2.0')) {
    return apacheLink;
  }

  if (license.includes('BSD 3')) {
    return bsd3Link;
  }

  if (license.includes('GPL 3.0')) {
    return gplLink;
  }

  if (license.includes('none')) {
    return noneLink;
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${data.description}

${renderLicenseBadge(data.license)}

## Table of Contents

* [Installation](#installation)
* [Usage](#Usage)
* [Contributions](#Contributions)
* [Tests](#Tests)
* [License](#License)
* [Questions](#Questions)

## Installation

To install the proper dependencies, please use the following command:

${data.runTests}

## Usage

${data.usage}

## Contributions

${data.contributions}

## Tests

${data.runTests}

## License

This application is protected by the ${renderLicenseLink(data.license)}. 

## Questions

For any questions relating to this application, please reach out to me at the following:

Email: ${data.email}

Github: [${data.username}](github.com/${data.username})

`;


}

module.exports = generateMarkdown;
