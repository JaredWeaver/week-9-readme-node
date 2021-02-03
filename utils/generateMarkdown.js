
const licenseBadges = [
  '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
  '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
];

const licenseLinks = [
  '[MIT](https://opensource.org/licenses/MIT)',
  '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)',
  '[BSD v3](https://opensource.org/licenses/BSD-3-Clause)',
  '[GPL v3](https://www.gnu.org/licenses/gpl-3.0)'
];

function renderLicense(type, license) {
  const licenseArray = license.split(" ");

  return license!= 'none' ?  type.find(element => element.includes(licenseArray[0])) :"";

}

function generateMarkdown(data) {
  return `
# ${data.title}

${data.description}

${renderLicense(licenseBadges, data.license)}

## Table of Contents

* [Installation](#installation)
* [Usage](#Usage)
* [Contributions](#Contributions)
* [Tests](#Tests)
* [License](#License)
* [Questions](#Questions)

## Installation

To install the proper dependencies, please use the following command:

\`\`\`
${data.installDependencies}
\`\`\`

## Usage

${data.usage}

## Contributions

${data.contributions}

## Tests

\`\`\`
${data.runTests}
\`\`\`

## License

This application is protected by the ${renderLicense(licenseLinks, data.license)} license. 

## Questions

For any questions relating to this application, please reach out to me at the following:

Email: ${data.email}

Github: [${data.username}](github.com/${data.username})

`;


}

module.exports = generateMarkdown;
