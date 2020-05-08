#!/usr/bin/env node
/*  
    sarah/npxcard
    for becode
*/

const chalk = require("chalk");
const boxen = require("boxen");

// text plus definitions chalk, ce qu'on verra dans la console

const data = {
  name: chalk.greenBright("             Sarah Guillaume"),
  handle: chalk.white("Tonton"),
  work: chalk.white("En formation chez Becode"),
  twitter: chalk.red("sorry , I haven't twitter"),
  npm: chalk.green("https://www.npmjs.com/") + chalk.blueBright("~sarahg4000"),
  github: chalk.green("https://github.com/") + chalk.blueBright("SarahG4000"),
  linkedin:
    chalk.green("https://linkedin.com/in/") +
    chalk.blueBright("sarah-guillaume-06993219a/"),
  web: chalk.red("Sorry I don't have a website yet, but soon."),
  labelWork: chalk.white.bold("       Work:"),
  labelTwitter: chalk.white.bold("    Twitter:"),
  labelNpm: chalk.white.bold("        npm:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelWeb: chalk.white.bold("        Web:"),
  //labelCard: chalk.white.bold("       Card:"),
};

const NEWLINE = "\n";
const EMPTYLINE = "";

console.log(
  chalk.yellow(
    boxen(
      [
        `${data.name} / ${data.handle}`,
        EMPTYLINE,
        `${data.labelWork} ${data.work}`,
        EMPTYLINE,
        `${data.labelTwitter} ${data.twitter}`,
        `${data.labelNpm} ${data.npm}`,
        `${data.labelGitHub} ${data.github}`,
        `${data.labelLinkedIn} ${data.linkedin}`,
        `${data.labelWeb} ${data.web}`,
      ].join(NEWLINE),
      {
        padding: 2,
        margin: 3,
        borderStyle: "round",
      }
    )
  )
);
