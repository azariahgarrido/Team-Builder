


const generateTeam = team => {

    const generateManager = manager => {
        return `
        <header>
            <div>Manager Name: ${manager.getName()} </div>
            <div>Manager Role: ${manager.getRole()} </div>
        </header>
        <div>
            <ul>
                <li>ID: ${manager.getId()}</li>
                <li>Email: ${manager.getEmail()}</li>
                <li>Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>`;
    };

    const generateEngineer = engineer => {
        return `
        <header>
            <div>Engineer Name: ${engineer.getName()}</div>
            <div>Engineer Role: ${engineer.getRole()}</div>
        </header>
        <div>
            <ul>
                <li>ID: ${engineer.getId()}</li>
                <li>Email: ${engineer.getEmail()}</li>
                <li>Github Link: ${engineer.getGithub()}</li>
            </ul>
        </div>`;
    };

    const generateIntern = intern => {
        return `
        <header>
            <div>Intern Name: ${intern.getName()}</div>
            <div>Intern Role: ${intern.getRole()}</div>
        </header>
        <div>
            <ul>
                <li>ID: ${intern.getId()}</li>
                <li>Email: ${intern.getEmail()}</li>
                <li>School Name: ${intern.getSchool()}</li>
            </ul>
        </div>`;
    };


    const html = [];


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
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div>
        <h1>My Team</h1>
    </div>
    <div>
        ${generateTeam(team)}
    </div>
</body>
</html>`;
};


