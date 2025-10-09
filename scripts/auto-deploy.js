const { exec } = require('child_process');

function runCommand(command) {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(stdout);
        });
    });
}

async function autoDeploy() {
    try {
        console.log('Iniciando deploy automatico...');
        
        const status = await runCommand('git status --porcelain');
        if (!status.trim()) {
            console.log('No hay cambios para commitear');
            return;
        }

        console.log('Agregando archivos...');
        await runCommand('git add .');

        const timestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');
        const commitMessage = `Auto-deploy: ${timestamp}`;
        await runCommand(`git commit -m "${commitMessage}"`);

        console.log('Subiendo a GitHub...');
        await runCommand('git push origin master');

        console.log('Deploy completado!');

    } catch (error) {
        console.error('Error:', error.message);
    }
}

autoDeploy();