import { Stack } from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

export const createRestApi = (stack: Stack) => {
  const api = new apigateway.RestApi(stack, 'ratings-api', {
    cloudWatchRole: true,
    description: 'Api Gateway for Ratings App',
    deployOptions: {
      stageName: 'dev',
      dataTraceEnabled: false,
      tracingEnabled: false,
    },
    // Enable CORS
    defaultCorsPreflightOptions: {
      allowHeaders: [
        'Content-Type',
        'X-Amz-Date',
        'Authorization',
        'X-Api-Key',
      ],
      allowMethods: ['OPTIONS', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
      allowCredentials: true,
      allowOrigins: ['http://localhost:3000', 'http://localhost:4200'],
    },
  });

  return api;
};
