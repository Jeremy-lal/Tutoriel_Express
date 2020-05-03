import log4js from 'log4js';

export class Log4jsService {

    configureLog4js() {
        log4js.configure({
            appenders: {
                debugLogs: { type: 'file', filename: './logs/debug.log', maxLogSize: 10485760, compress: true },
                errorLogs: { type: 'file', filename: './logs/error.log', maxLogSize: 10485760, compress: true },
                fatalLogs: { type: 'file', filename: './logs/fatal.log', maxLogSize: 10485760, compress: true },
            },
            categories: {
                debug: { appenders: ['debugLogs'], level: 'debug' },
                error: { appenders: ['errorLogs'], level: 'error' },
                fatal: { appenders: ['fatalLogs'], level: 'fatal' },
                default: { appenders: ['debugLogs', 'errorLogs', 'fatalLogs'], level: 'fatal' },
            }
        });
        return log4js;
    }
}

