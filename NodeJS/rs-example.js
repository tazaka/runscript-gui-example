/**
 * NAME: JS script example
 * SYNOPSIS: Example JS script for RunScript GUI with commander library usage
 * TAGS: Example "RunScript Team"
 */

// Import 'program' and 'Option' from 'commander'. This library enables
// defining command-line options and parameters. For more details, see
// 'commander' documentation: https://github.com/tj/commander.js/
const { program, Option } = require("commander");

program
  .option("-dp, --danger-param <type>", "Set the danger level parameter{danger}", "default")
  .option("-wp, --warning-param <type>", "Set the warning level parameter{warning}")
  .option("-lp, --long-param <description>", "Set a parameter with an extended description")
  .option("-js, --javascript-script <identifier>", "Specify a JavaScript snippet with its ID{id:rs-js-subscript-example}")
  .option("-ps, --powershell-script <identifier>", "Specify a PowerShell script with its ID{id:rs-ps-subscript-example}")
  .option("-py, --python-script [identifier]", "Specify a Python script with its ID, optional{id:rs-python-subscript-example}")
  .option("-bs, --bash-script [identifier]", "Specify a Bash script with its ID, optional{id:rs-bash-subscript-example}")
  .option("-bx, --boolean-flag", "Set a boolean flag for additional processing")
  .addOption(new Option('-tm, --timeout <seconds>', 'Set the timeout duration in seconds').default(60, '60 seconds'))
  .addOption(new Option('-ds, --drink-size <size>', 'Specify the drink size').choices(['small', 'medium', 'large']))
  .addOption(new Option('-dm, --drink-multiple <sizes...>', 'Specify multiple drink sizes').choices(['small', 'medium', 'large']));
  
program.parse(process.argv);

const options = program.opts();

console.log(options);
