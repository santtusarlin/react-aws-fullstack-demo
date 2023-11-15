import { Period, RestApi } from 'aws-cdk-lib/aws-apigateway';

export const createApiUsagePlan = (api: RestApi) => {
  const usagePlan = api.addUsagePlan('usage-plan', {
    name: 'Ratings App Usage Plan',
    description: 'Usage Plan for Ratings App',
    throttle: {
      rateLimit: 20,
      burstLimit: 4,
    },
    quota: {
      limit: 100,
      period: Period.DAY,
    },
  });

  const normalUserKey = api.addApiKey('ApiKey', {
    apiKeyName: 'ratings-app-api-key',
  });
  usagePlan.addApiKey(normalUserKey);
  return usagePlan;
};
