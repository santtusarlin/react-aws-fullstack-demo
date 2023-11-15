import { Resource } from 'aws-cdk-lib/aws-apigateway';

export interface ApiResources {
  ratingsResource: Resource;
  commentsResource: Resource;
}
