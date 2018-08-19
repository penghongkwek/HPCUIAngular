export class Job {
    jobid?: string;
    metaid: string;
    userid?: string;
    name: string;
    priority: string;
    configpath?: string;
    sites: string[];
    app: {
        name: string,
        settings: Object[];
    };
    chunk?: string;
    ncpu?: string;
    mem?: string;
    walltime: string;
    queuename?: string;
    outputfile?: string;
    errorfile?: string;
    workdirectory?: string;
    customscript?: string;
    cluster: string;

    constructor(obj?: Job) {
        if (obj) {
            this.jobid = obj.jobid || '';
            this.metaid = obj.metaid || '';
            this.userid = obj.userid || '';
            this.name = obj.name || '';
            this.priority = obj.priority || '';
            this.configpath = obj.configpath || '';
            this.sites = obj.sites || [];
            this.app = obj.app || {name: '', settings: [{}]};
            this.chunk = obj.chunk || '';
            this.ncpu = obj.ncpu || '';
            this.mem = obj.mem || '';
            this.walltime = obj.walltime || '';
            this.queuename = obj.queuename || '';
            this.outputfile = obj.outputfile || '';
            this.errorfile = obj.errorfile || '';
            this.workdirectory = obj.workdirectory || '';
            this.customscript = obj.customscript || '';
            this.cluster = obj.cluster || '';
        }
    }
}
