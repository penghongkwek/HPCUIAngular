import { Serializer } from '../../core/public_api';
import {
    BaseSettings,
    JobSettings,
    Recommendation,
    ResourceSettings,
    Job
} from '../models/index';

export class RecommendationRequestSerializer implements Serializer {
    fromJson(json: any): any {

        /**
         * Comments to be removed when backend is finally supporting the structure, the recommendations are from mocked currently
         */
        // const recommendation = new Recommendation();
        // Object.keys(json).map(key => {
        //     recommendation[key] = json[key];
        // });

        return json;
    }

    toJson(items: any): BaseSettings {
        return {
            userid: items.userid,
            name: items.name,
            priority: items.priority,
            walltime: items.walltime,
            sites: items.sites,
            app: items.app
        };
    }

}

export class JobSubmitSerializer implements Serializer {
    fromJson(json: any): string {
        return json.jobid;
    }
    toJson(items: any): Job {
        return {
            userid: items.userid,
            name: items.name,
            priority: items.priority,
            configpath: items.configpath,
            walltime: items.walltime,
            outputfile: items.outputfile,
            errorfile: items.errorfile,
            customscript: items.customscript,
            workdirectory: items.workdirectory,
            sites: items.sites,
            app: items.app,
            metaid: items.metaid,
            chunk: items.chunk,
            ncpu: items.ncpu,
            mem: items.mem,
            cluster: items.cluster,
            queuename: items.queuename
        };
    }
}
