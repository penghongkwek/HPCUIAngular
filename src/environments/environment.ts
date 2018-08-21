// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const host = '';
const port = '';

export const environment = {
  production: false,
  baseUrl: 'http://10.60.1.89:8100',
  apiJobPrefix: '/ms/api/v1/job/request'
};

export enum jobEndpoints {
  getJobsByUser = '/listing',
  getJobDetail = '/info',
  getStatus = '/status',
  getRecommendations = '/recommend',
  submitJob = '/submit',
  terminateJob = '/terminate'
}
