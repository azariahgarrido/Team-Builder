
// these are nested functions in order to generate the html

const generateTeam = team => {

    const generateManager = manager => {
        return `
        <div class = "bigDiv">
            <header class = "headerOne">
                <div>Manager Name: ${manager.getName()} </div>
                <div>Manager Role: ${manager.getRole()} </div>
            </header>
            <div>
                <ul>
                    <li>ID: ${manager.getId()}</li>
                    <li>Email: <a href="mailto:">${manager.getEmail()}</a></li>
                    <li>Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>`;
    };

    const generateEngineer = engineer => {
        return `
        <div class = "bigDiv">
            <header class = "headerOne">
                <div>Engineer Name: ${engineer.getName()}</div>
                <div>Engineer Role: ${engineer.getRole()}</div>
            </header>
            <div>
                <ul>
                    <li>ID: ${engineer.getId()}</li>
                    <li>Email: <a href="mailto:">${engineer.getEmail()}</a></li>
                    <a href = "https://github.com/${engineer.getGithub()}" target = "_blank">Github: ${engineer.getGithub()}</a>
                </ul>
            </div>
        </div>`;
    };

    const generateIntern = intern => {
        return `
        <div class = "bigDiv">
            <header class = "headerOne">
                <div>Intern Name: ${intern.getName()}</div>
                <div>Intern Role: ${intern.getRole()}</div>
            </header>
            <div>
                <ul>
                    <li>ID: ${intern.getId()}</li>
                    <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li>School Name: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>`;
    };


    const html = [];

    // here we add the team to the html array

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");
};


module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <title>My Team</title>
    <link rel="stylesheet" href="./Public/style.css">
    </head>
    <body>
        <div>
            <h1 class = "teamHead">My Team</h1>
        </div>
        <div class = "flexDiv">
            ${generateTeam(team)}
        </div>
    </body>
    </html>`;
};


