const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')
const Manager = require('./lib/Manager.js')
const generateHtml = require('./util/generateHtml.js')
const inquirer = require('inquirer')
const fs = require('fs')

const team = []

const start = async () => {
    const manResp = await managerQs()
    const manager = new Manager(manResp.teamManName, manResp.manEmpID, manResp.manEmail, manResp.manOfficeNum)
    team.push(manager)
    console.log(team)
    addmembers()

}
async function addmembers() {
    const newMemberChoice = await enginOrInt()
    console.log(newMemberChoice)
    if (newMemberChoice === 'Intern') {
        const newMem = await internQs()
        const intern = new Intern(newMem.internName, newMem.internID, newMem.internEmail, newMem.internSchool)
        team.push(intern)
        console.log(team)
        
    } else if (newMemberChoice === 'Engineer') {
        const newMem = await engineerQs()
        const engineer = new Engineer(newMem.enginName, newMem.enginID, newMem.enginEmail, newMem.enginGitHub)
        team.push(engineer)
        console.log(team)

    } else {
        console.log('Bye!')
        return
    }

    addNewOrHTML()



}

async function managerQs() {
    const manQs = await inquirer.prompt(
        [{ //questions
            type: 'input',
            name: 'teamManName',
            message: 'Enter Team Manager name',

        },
        {
            type: 'number',
            name: 'manEmpID',
            message: 'Enter Team Manager employee id',

        },
        {
            type: 'input',
            name: 'manEmail',
            message: 'Enter Team Manager email address',

        },
        {
            type: 'input',
            name: 'manOfficeNum',
            message: 'Enter Team Manager Office Number',
        }]
    )
    return manQs
}
async function enginOrInt() {
    const enginInt = await inquirer.prompt(
        [{
            type: 'list',
            name: 'memChoice',
            message: 'Add an engineer or intern',
            choices: ['Intern', 'Engineer', 'Quit']
        }]
    )
    return enginInt.memChoice
}

async function engineerQs() {
    const enginResp = await inquirer.prompt(
        [
            { //questions
                type: 'input',
                name: 'enginName',
                message: 'Enter Engineer name',

            },
            {
                type: 'number',
                name: 'enginID',
                message: 'Enter Engineer employee id',

            },
            {
                type: 'input',
                name: 'enginEmail',
                message: 'Enter Engineer email address',

            },
            {
                type: 'input',
                name: 'enginGitHub',
                message: 'Enter Engineer GitHub',

            },
        ]
    )
    return enginResp
}
async function internQs() {
    const internResp = await inquirer.prompt(
        [
            { //questions
                type: 'input',
                name: 'internName',
                message: 'Enter intern name',

            },
            {
                type: 'number',
                name: 'internID',
                message: 'Enter intern employee id',

            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'Enter intern email address',

            },
            {
                type: 'input',
                name: 'internSchool',
                message: 'Enter intern School',

            },
        ]
    )
    return internResp
}

async function addNewOrHTML() {
    const newOrHTML = await inquirer.prompt(
        [{
            type: 'list',
            name: 'addOrMakeHTML',
            message: 'Add Members or Make HTML',
            choices: ['Add', 'Make HTML']
        }]
    )
    if (newOrHTML.addOrMakeHTML === 'Add') {
        addmembers()
    } else if (newOrHTML.addOrMakeHTML === 'Make HTML') {
        const html = generateHtml(team)

        fs.writeFile('./dist/index.html', html, err => {
            if (err) { console.log(err) }
        })
    }
}

start()
