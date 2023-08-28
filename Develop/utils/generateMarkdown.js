//const licenseEl = data.license

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "GNU v3.0") {
    return "[![License: GPL v3][![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "Apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === 'BSD 2-Clause "Simplified"') {
    return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
  } else if (license === 'BSD 3-Clause "Revised') {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license === "Boost Software 1.0") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  } else if (license === "Creative Commons Zero v1.0 Universal") {
    return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
  } else license === "None";
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "GNU v3.0") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  } else if (license === "Apache 2.0") {
    return "https://www.apache.org/licenses/LICENSE-2.0";
  } else if (license === 'BSD 2-Clause "Simplified"') {
    return "https://opensource.org/license/bsd-2-clause/";
  } else if (license === 'BSD 3-Clause "Revised') {
    return "https://opensource.org/license/bsd-3-clause/";
  } else if (license === "Boost Software 1.0") {
    return "https://www.boost.org/LICENSE_1_0.txt";
  } else if (license === "Creative Commons Zero v1.0 Universal") {
    return "https://creativecommons.org/publicdomain/zero/1.0/";
  } else license === "None";
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);

  return `
## License

${licenseBadge}

This project is licensed under the terms of the [${data.license}](${licenseLink}) license.
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseMarkdown(data);
  return `${licenseSection}
    
  #${data.title} 

  -----

  ## Description 

    ${data.description}
    
  -----

  ## Installation 
    ${data.installation}

  -----

  ## Usage
    ${data.usage}

  -----

  ## Contributing
    ${data.contributions}

  -----

  ## Tests
    ${data.tests}

  -----

  ## Questions 
    Github
   Github: [${data.github}](https://github.com/${data.github})


    Email
    Email:[${data.email}](suvorov13@yahoo.com)
    
    `;
}

module.exports = generateMarkdown;
