import {
  LambdaIntegration,
  PassthroughBehavior,
  Resource,
} from 'aws-cdk-lib/aws-apigateway';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';

export const createPutRatingMethod = (
  resource: Resource,
  lambdaFunction: NodejsFunction
) => {
  const putRatingLambdaIntegration = new LambdaIntegration(lambdaFunction, {
    passthroughBehavior: PassthroughBehavior.WHEN_NO_TEMPLATES,
    requestTemplates: {
      'application/json': JSON.stringify({
        body: "$input.json('$')",
      }),
    },
  });

  const putRatingApiMethod = resource.addMethod(
    'PUT',
    putRatingLambdaIntegration,
    {
      apiKeyRequired: true,
      methodResponses: [
        {
          statusCode: '200',
        },
      ],
    }
  );

  return putRatingApiMethod;
};

export const createGetRatingsMethod = (
  resource: Resource,
  lambdaFunction: NodejsFunction
) => {
  const getRatingsLambdaIntegration = new LambdaIntegration(lambdaFunction);

  const getRatingsMethod = resource.addMethod(
    'GET',
    getRatingsLambdaIntegration,
    {
      apiKeyRequired: true,
      methodResponses: [
        {
          statusCode: '200',
        },
      ],
    }
  );

  return getRatingsMethod;
};

export const createUpdateRatingMethod = (
  resource: Resource,
  lambdaFunction: NodejsFunction
) => {
  const updateRatingLambdaIntegration = new LambdaIntegration(lambdaFunction, {
    passthroughBehavior: PassthroughBehavior.WHEN_NO_TEMPLATES,
    requestTemplates: {
      'application/json': JSON.stringify({
        body: "$input.json('$')",
      }),
    },
  });

  const updateRatingApiMethod = resource.addMethod(
    'PATCH',
    updateRatingLambdaIntegration,
    {
      apiKeyRequired: true,
      methodResponses: [
        {
          statusCode: '200',
        },
      ],
    }
  );

  return updateRatingApiMethod;
};

export const createDeleteRatingMethod = (
  resource: Resource,
  lambdaFunction: NodejsFunction
) => {
  const deleteRatingLambdaIntegration = new LambdaIntegration(lambdaFunction);

  const deleteRatingApiMethod = resource.addMethod(
    'DELETE',
    deleteRatingLambdaIntegration,
    {
      apiKeyRequired: true,
      methodResponses: [
        {
          statusCode: '200',
        },
      ],
    }
  );

  return deleteRatingApiMethod;
};
