import { Recommendation } from '../../create-job/public_api';

export const RecommendationsData: Recommendation[] = [
    {
        id: '1',
        title: 'Minimum',
        subtitle: '',
        waitingtime: '02:00:00',
        walltime: '12:00:00',
        price: '$1000',
        chunk: '1',
        ncpu: '32',
        mem: '8gb',
        gpu: '0',
        clockspeed: '2.3ghz',
        cluster: 'A Cluster, Japan'
    },
    {
        id: '2',
        title: 'Best Value',
        subtitle: '',
        waitingtime: '00:45:00',
        walltime: '08:00:00',
        price: '$1500',
        chunk: '2',
        ncpu: '16',
        mem: '64gb',
        gpu: '0',
        clockspeed: '2.3ghz',
        cluster: 'NSCC, Singapore'
    },
    {
        id: '3',
        title: 'Optimum',
        subtitle: 'Recommended',
        waitingtime: '01:00:00',
        walltime: '18:00:00',
        price: '$2500',
        chunk: '1',
        ncpu: '16',
        mem: '8gb',
        gpu: '0',
        clockspeed: '2.3ghz',
        cluster: 'ACRC, Singapore'
    }
];
