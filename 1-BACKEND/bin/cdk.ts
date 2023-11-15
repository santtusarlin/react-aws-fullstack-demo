#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';

// import { SqsStack } from '../lib/sqs-stack/sqs-stack';
import { ApigatewayStack } from '../lib/api-gateway-stack/api-gateway-stack';
import { S3Stack } from '../lib/s3-stack/s3-stack';
import { LambdaStack } from '../lib/lambda-stack/lambda-stack';
import { DynamodbStack } from '../lib/dynamodb-stack/dynamodb-stack';
import { CloudfrontStack } from '../lib/cloudfront-stack/cloudfront-stack';

const app = new cdk.App();

// new SqsStack(app, 'SqsStack');
const s3Stack = new S3Stack(app, 'S3Stack');
const cloudfrontStack = new CloudfrontStack(app, 'CloudfrontStack', {
  applicationDeploymentBucket: s3Stack.applicationDeploymentBucket,
});
cloudfrontStack.addDependency(s3Stack, 'Cloudfront requires S3 source bucket');

const dynamodbStack = new DynamodbStack(app, 'DynamodbStack');
const lambdaStack = new LambdaStack(app, 'LambdaStack');

const apigatewayStack = new ApigatewayStack(app, 'ApiGatewayStack', {
  putRatingLambda: lambdaStack.putRatingLambda,
  getRatingsLambda: lambdaStack.getRatingsLambda,
  updateRatingLambda: lambdaStack.updateRatingLambda,
  deleteRatingLambda: lambdaStack.deleteRatingLambda,
  putCommentLambda: lambdaStack.putCommentLambda,
  getCommentsLambda: lambdaStack.getCommentsLambda,
  updateCommentLambda: lambdaStack.updateCommentLambda,
  deleteCommentLambda: lambdaStack.deleteCommentLambda,
});
apigatewayStack.addDependency(
  lambdaStack,
  'ApiGateway methods require lambda functions'
);
