// const program = require('commander');

// program
//  .option('-d, --debug', 'output extra debugging')
//  .option('-s, --small', 'small pizza size')
//  .option('-p, --pizza-type <type>', 'flavour of pizza');

// program.parse(process.argv);


// console.log('program.debug',program.opts());

// if (program.debug) console.log(program.opts());
// console.log('pizza details:');
// if (program.small) console.log('- small pizza size');
// if (program.pizzaType) console.log(`- ${program.pizzaType}`);

const program = require('commander');

program
  .command('clone <source> [destination...]')
  .description('clone a repository into a newly created directory')
  .action((source, destination) => {
    console.log('source',source,destination);
  });
program.parse(process.argv);