// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let includeTOC = `${data.toc}`
  let toc;
if (includeTOC === true) {
    return toc = `
    ## Table of contents
    [Installation](#installation)
    [Usage](#usage)
    [License](#license)
    [Contributing](#contributing)
    [Tests](#tests)
    [Questions](#questions)
    `
}
  
  return `# ${data.title}

    ## Description
    ${data.description}
    ${toc}
    ## Installation 
    ${data.install}
    ## Usage
    ${data.usage}
    ## License 
    ${data.license}
    ## Contributing 
    ${data.contribution}
    ## Tests
    ${data.test}
    ## Questions
    [Link to my GitHub] (https://github.com/${data.github}/)
    For any questions, you can reach me at my email: ${data.email}.
`
;
}

module.exports = generateMarkdown;
