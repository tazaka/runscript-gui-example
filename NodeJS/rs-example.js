/**
 * NAME: JS script example
 * SYNOPSIS: Example JS script for RunScript GUI with commander library usage
 * TAGS: Example
 */

const { program, Option } = require("commander");

program
  .option("-j, --javascript <string>", "SubScript JS {id:rs-js-subscript-example}")
  .option("-pwsh, --powershell [string]", "SubScript PS {id:rs-muj-test-ps}")
  .option("-p, --python [string]", "SubScript Python {id:rs-muj-test-python}")
  .option("-b, --bash [string]", "SubScript Bash {id:rs-muj-test-bash}")
  .option("-x")
  .addOption(new Option("-d, --drink <size>", "drink size {id:rs-muj-test-bash}"));

program.parse(process.argv);

const options = program.opts();

console.log(options);
