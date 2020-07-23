const {Command, flags} = require('@oclif/command')
const chalk = require('chalk')
const {Todo} = require('../db')

class ShowCommand extends Command {
  async run() {
    const res = await Todo.sortBy('id').value()
    res.forEach(({id, task, done}) => {
      this.log(
        `${chalk.magenta(id)} ${
          done ? chalk.green('DONE') : chalk.yellowBright('NOT DONE')
        } : ${task}`
      )
    })
  }
}

ShowCommand.description = `Shows exisitng tasks
...
Shows all tasks sorted by their ids
`

//ShowCommand.flags = {
  //name: flags.string({char: 'n', description: 'name to print'}),
//}

module.exports = ShowCommand
