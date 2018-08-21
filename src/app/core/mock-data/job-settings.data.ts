import { JobSettings } from '../../create-job/public_api';

export const OFSettingsData: JobSettings = {
    name: 'Open Foam Analysis',
    priority: 'Priority 1',
    configpath: '',
    sites: ['Singapore', 'Japan'],
    app: {
        name: 'OpenFOAM',
        settings: [{
            inputs: ['/folder1/openfoamcase']
        }]
    },
    walltime: '72:00:00',
    outputfile: 'output.out',
    errorfile: 'error.out',
    customscript: 'this is a custom script\nlet it run'
};

export const QESettingsData: JobSettings = {
    name: 'Quantum Expresso Analysis',
    priority: 'Priority 2',
    configpath: '',
    sites: ['Singapore'],
    app: {
        name: 'Quantum Expresso',
        settings: [{
            inputs: ['/folder1/qe/input.txt'],
            pseudopath: '/folder1/qe/inputs',
            outputpath: '/folder1/qe/output'
        }]
    },
    walltime: '72:00:00',
    outputfile: 'output.out',
    errorfile: 'error.out',
    customscript: 'this is a custom script\nlet it run'
};
