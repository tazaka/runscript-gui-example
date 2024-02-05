/**
 * NAME: JS script example
 * SYNOPSIS: Example JS script for RunScript GUI with commander library usage
 * TAGS: Example "RunScript Team"
 */

const { program, Option } = require("commander");

program
  .option("-j, --javascript <string>", "SubScript Javascript {id:rs-js-subscript-example}")
  .option("-ps, --powershell <string>", "SubScript Powershell {id:rs-muj-test-ps}")
  .option("-p, --python [string]", "SubScript Python {id:rs-python-subscript-example}")
  .option("-b, --bash [string]", "SubScript Bash {id:rs-bash-subscript-example}")
  .option("-x","Boolean value");


program.parse(process.argv);

const options = program.opts();

console.log(options);


// .addOption(new Option("-d, --drink <size>", "drink size {id:rs-muj-test-bash}"));