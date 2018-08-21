export const QEFormModel = {
    inputs: {
        label: 'Input File',
        value: [''],
        type: 'inputBrowse'
    },
    pseudopath: {
        label: 'Pseudo Dir',
        value: '',
        type: 'inputBrowse'
    },
    outputpath: {
        label: 'Output Dir',
        value: '',
        type: 'inputBrowse'
    }
};

export const OFFormModel = {
    inputs: {
        label: 'Input Dir',
        value: [''],
        type: 'inputBrowse'
    }
};

export const NoneFormModel = {
    software: {
        label: 'Software',
        value: 'None',
        type: 'selector',
        options: [
            {label: 'None', value: 'None'},
            {label: 'BWA', value: 'BWA'},
            {label: 'GATK', value: 'GATK'},
            {label: 'Tablet', value: 'Tablet'}
        ]
    }
};

export const BWAFormModel = {
    software: {
        label: 'Software',
        value: 'BWA',
        type: 'Selector',
        options: [
            {label: 'None', value: 'None'},
            {label: 'BWA', value: 'BWA'},
            {label: 'GATK', value: 'GATK'},
            {label: 'Tablet', value: 'Tablet'}
        ]
    },
    inputs: {
        label: 'Input File(s)',
        value: [''],
        type: 'inputBrowse'
    },
    outputpath: {
        label: 'Output Dir',
        value: '',
        type: 'inputBrowse'
    },
    functions: {
        label: 'Functions',
        value: [''],
        type: 'textArea'
    },
    parameter: {
        label: 'Parameter',
        value: '',
        type: 'text'
    }
};

export const GATKFormModel = {
    software: {
        label: 'Software',
        value: 'GATK',
        type: 'Selector',
        options: [
            {label: 'None', value: 'None'},
            {label: 'BWA', value: 'BWA'},
            {label: 'GATK', value: 'GATK'},
            {label: 'Tablet', value: 'Tablet'}
        ]
    },
    inputs: {
        label: 'Input File',
        value: [''],
        type: 'inputBrowse'
    },
    outputpath: {
        label: 'Output Dir',
        value: '',
        type: 'inputBrowse'
    },
    functions: {
        label: 'Functions',
        value: [''],
        type: 'textArea'
    },
    parameter: {
        label: 'Parameter',
        value: '',
        type: 'text'
    }
};

export const TabletFormModel = {
    software: {
        label: 'Software',
        value: 'Tablet',
        type: 'Selector',
        options: [
            {label: 'None', value: 'None'},
            {label: 'BWA', value: 'BWA'},
            {label: 'GATK', value: 'GATK'},
            {label: 'Tablet', value: 'Tablet'}
        ]
    },
    inputs: {
        label: 'Input File',
        value: [''],
        type: 'inputBrowse'
    }
};
