export class Confirmation {
    basic_settings: {
        name: string,
        configpath: string,
        walltime: string,
        app: string,
        priority: string,
        submittedcluster: string
    };
    app_specific_settings: object[];
    resource_settings: {
        chunk: string,
        ncpu: string,
        mem: string
    };
    additional_settings: {
        outputfile: string,
        errorfile: string,
        customscript: string
    };

    constructor() {
        this.basic_settings = {
            name: '',
            configpath: '',
            walltime: '',
            app: '',
            priority: '',
            submittedcluster: ''
        };
        this.app_specific_settings = [];
        this.resource_settings = {
            chunk: '',
            ncpu: '',
            mem: ''
        };
        this.additional_settings = {
            outputfile: '',
            errorfile: '',
            customscript: ''
        };
    }
}
