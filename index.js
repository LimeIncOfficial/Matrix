#!/usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';
import filessystem from 'fs';
import { exec } from 'child_process';
import process from 'process';
import openTerminal from 'open-terminal';
import child_process from 'child_process';

let playerName;
let directory

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.glitch(
    'Jacking in \n'
  );

  await sleep();
  rainbowTitle.stop();

  console.log(`%c
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
▀█▄░▄█░░░█▄▄▐▀█▀▌▐▀█░▀█░▀█▄░▐▀░ 
░█▐█▀▐░░▐▄██░░▌░░▐▄▌░░▌░░░██▀░░ 
░█░▌░▐░░▌▀██░░▌░░▐▀▄░░▌░▐▀░▀█▄░
▄▌░░░▀░▀░░▀▀░▀▀▀░▀░▀▀░▀░▀░░░░▀▀
░░░░░░░░░░▄▄▄▄▄▄░░░░░░░░░░░░░░░
░░░░░░░░████▀▀███░░░░░░░░░░░░░░
░░░░░░░███░░░░░▀██░░░░░░░░░░░░░
░░░░░░░███▄░▄▄▄▄██░░░░░░░░░░░░░
░░░░░░░████▀▀████▀░░░░░░░░░░░░░
░░░░░░░██▄█▄▄░░░░░░░░░░░░░░░░░░
░░░░░░░░████▄▄░░░░░░░░░░░░░░░░░
░░░░░░░░░██▀░░▄█▄░░░░░░░░░░░░░░
░░░░░░░░░████████▄░░░░░░░░░░░░░
░░░░░░░░░█████████▄▄▄▄░░░░░░░░░
░░░░░░░░▄████████████████▄▄░░░░
░░░░░░▄████████████████████░░░░
░░░▄████████████████████████░░░
░░██████████████████████████▄░░
░████████████████████████████░░
░████████████████████████████░░
░█████████████████████████████░
░█████████████████████████████░
██████████████████████████████░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
`, `font-family: monospace`);
}

async function askName() {
  const answers = await inquirer.prompt({
    name: 'player_name',
    type: 'input',
    message: 'What is Your Project Name?',
    default() {
      return 'Project';
    },
  });

  playerName = answers.player_name;
}

async function askDir() {
  const answers = await inquirer.prompt({
    name: 'directory',
    type: 'input',
    message: 'Where should we keep it?',
    default() {
      return '/tmp/';
    },
  });

  directory = answers.directory;
}


async function launchTool() {
  var str1 = directory;
  var str2 = playerName;
  var dir = str1.concat(str2);
  console.log(dir)

  if (!filessystem.existsSync(dir))
  {
      filessystem.mkdirSync (dir);
  }
  else
  {
      console.log("Directory already exist");
  }
}
async function changeDirectory(){
  var str1 = directory;
  var str2 = playerName;
  var dir = str1.concat(str2);
  try {
  // Change the directory
process.chdir(dir);
console.log("directory has successfully been changed");
} catch (err) {
    
// Printing error if occurs
console.error("error while changing directory");

}
}
async function launchInteractive() {
var editor = process.env.EDITOR || 'sh';
var child = child_process.spawn(editor, ['/Users/purple/Documents/Matrix/Matrix/stmux.sh'], {
  stdio: 'inherit'
});

child.on('exit', function (e, code) {
  console.log("finished");
});
  
}

// Run it with top-level await
console.clear();
await welcome();
await askName();
await askDir();
await launchTool();
await changeDirectory();
await launchInteractive();