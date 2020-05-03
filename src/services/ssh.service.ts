import node_ssh from 'node-ssh';

export class SshService {

    ssh = new node_ssh();
    login = {
        host: 'localhost',
        username: 'user',
        privateKey: require('fs').readFileSync('C:\\Users\\jeremy\\.ssh\\id_rsa', 'utf8'),
    }

    getLsResult() {
        return new Promise(resolve => {
            this.ssh.connect(this.login).then(() => {
                this.ssh.execCommand('ls', { cwd: '~/' }).then((result: any) => {
                    resolve(result.stdout);
                })
            })
        });
    }

}