import { Fn, Stack } from 'aws-cdk-lib';

import {
  Role,
  IRole,
  ServicePrincipal,
  ManagedPolicy,
  PolicyStatement,
  Effect,
} from 'aws-cdk-lib/aws-iam';

export const createRatingsLambdaRole = (stack: Stack): IRole => {
  const ratingsLambdaRole = new Role(stack, 'ratings-lambda-role', {
    assumedBy: new ServicePrincipal('lambda.amazonaws.com'),
  });

  ratingsLambdaRole.addManagedPolicy(
    ManagedPolicy.fromAwsManagedPolicyName(
      'service-role/AWSLambdaBasicExecutionRole'
    )
  );

  ratingsLambdaRole.addToPolicy(
    new PolicyStatement({
      actions: [
        'dynamodb:Get*',
        'dynamodb:Query',
        'dynamodb:Scan*',
        'dynamodb:Put*',
        'dynamodb:Delete*',
      ],
      resources: [Fn.importValue('ratings-table-arn')],
      effect: Effect.ALLOW,
    })
  );

  return ratingsLambdaRole;
};

export const createCommentsLambdaRole = (stack: Stack): IRole => {
  const commentsLambdaRole = new Role(stack, 'comments-lambda-role', {
    assumedBy: new ServicePrincipal('lambda.amazonaws.com'),
  });

  commentsLambdaRole.addManagedPolicy(
    ManagedPolicy.fromAwsManagedPolicyName(
      'service-role/AWSLambdaBasicExecutionRole'
    )
  );

  commentsLambdaRole.addToPolicy(
    new PolicyStatement({
      actions: [
        'dynamodb:Get*',
        'dynamodb:Query',
        'dynamodb:Scan*',
        'dynamodb:Put*',
        'dynamodb:Delete*',
      ],
      resources: [Fn.importValue('comments-table-arn')],
      effect: Effect.ALLOW,
    })
  );

  return commentsLambdaRole;
};
