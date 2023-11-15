import { RestApi, UsagePlan } from 'aws-cdk-lib/aws-apigateway';

export const createApiStage = (api: RestApi, usagePlan: UsagePlan) => {
  usagePlan.addApiStage({
    stage: api.deploymentStage,
  });
};
