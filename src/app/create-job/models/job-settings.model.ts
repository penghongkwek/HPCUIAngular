export class JobSettings {
    userid?: string;
    name: string;
    priority: string;
    configpath?: string;
    sites: string[];
    app: {
        name: string,
        settings: object[];
    };
    walltime: string;
    outputfile?: string;
    errorfile?: string;
    customscript?: string;
    workdirectory?: string;

    constructor(obj?: JobSettings) {
        this.userid = '';
        this.name = '';
        this.priority = '';
        this.configpath = '';
        this.sites = [];
        this.app = {name: '', settings: []};
        this.walltime = '';
        this.outputfile = '';
        this.errorfile = '';
        this.customscript = '';
        this.workdirectory = '';

        if (obj) {
            this.userid = obj.userid ? obj.userid : '';
            this.name = obj.name ? obj.name : '';
            this.priority = obj.priority ? obj.priority : '';
            this.configpath = obj.configpath ? obj.configpath : '';
            this.sites = obj.sites ? obj.sites : [];
            this.app = obj.app ? obj.app : {name: '', settings: []};
            this.walltime = obj.walltime ? obj.walltime : '';
            this.outputfile = obj.outputfile ? obj.outputfile : '';
            this.errorfile = obj.errorfile ? obj.errorfile : '';
            this.customscript = obj.customscript ? obj.customscript : '';
            this.workdirectory = obj.workdirectory ? obj.workdirectory : '';
        }
    }
}

export class BaseSettings {
    userid: string;
    name: string;
    priority: string;
    walltime: string;
    sites: string[];
    app: string;
}

export class QESettings {
    inputs: string[];
    pseudopath: string;
    outputpath: string;

    constructor(obj?: QESettings) {
        this.inputs = [];
        this.pseudopath = '';
        this.outputpath = '';

        if (obj) {
            this.inputs = obj.inputs ? obj.inputs : [];
            this.pseudopath = obj.pseudopath ? obj.pseudopath : '';
            this.outputpath = obj.outputpath ? obj.outputpath : '';
        }
    }
}

export class OFSettings {
    inputs: string[];

    constructor(obj?: OFSettings) {
        this.inputs = [];

        if (obj) {
            this.inputs = obj.inputs ? obj.inputs : [];
        }
    }
}

export class BaseLSSettings {
    software: string;

    constructor(obj?: BaseLSSettings) {
        this.software = APPLICATIONS.LIFESCIENCE.softwares.NONE;

        if (obj) {
            this.software = obj.software ? obj.software : APPLICATIONS.LIFESCIENCE.softwares.NONE;
        }
    }
}

export const APPLICATIONS = {
    QUANTUMEXPRESSO: {
        name: 'Quantum Expresso'
    },
    OPENFOAM: {
        name: 'OpenFOAM'
    },
    LIFESCIENCE: {
        name: 'Life Science',
        softwares: {
            NONE: 'None',
            BWA: 'BWA',
            GATK: 'GATK',
            Tablet: 'Tablet'
        }
    }
};

export const PANELS = {
    BASICSETTINGS: 'Basic Settings',
    APPSPECIFICSETTINGS: 'App-Specific Settings',
    ADDITIONALSETTINGS: 'Additional Settings'
};

export const JobSettingsLabels = {
    name: 'Job Name',
    priority: 'Priority',
    configpath: 'JSON Config',
    sites: 'Preferred Sites',
    app: 'Application',
    walltime: 'Wall Time',
    outputfile: 'Output File',
    errorfile: 'Error File',
    customscript: 'Custom Script'
};
