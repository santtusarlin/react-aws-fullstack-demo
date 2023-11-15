import { Stack } from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

export const createApiResources = (api: apigateway.RestApi) => {
  const ratingsResource = api.root.addResource('ratings');
  const commentsResource = api.root.addResource('comments');

  return { ratingsResource, commentsResource };
};
