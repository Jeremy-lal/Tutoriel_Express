import log4js from 'log4js';

export class Log4jsService {

    configureLog4js() {
        log4js.configure({
            appenders: {
                debugLogs: { type: 'file', filname: 'debug.log', maxLogSize: 10485760, compress: true },
                errorLogs: { type: 'file', filname: 'error.log', maxLogSize: 10485760, compress: true },
                fatalLogs: { type: 'file', filname: 'fatal.log', maxLogSize: 10485760, compress: true },
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