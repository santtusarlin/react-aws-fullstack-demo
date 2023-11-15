import {
  LambdaIntegration,
  PassthroughBehavior,
  Resource,
} from 'aws-cdk-lib/aws-apigateway';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';

export const createPutCommentMethod = (
  resource: Resource,
  lambdaFunction: NodejsFunction
) => {
  const putCommentLambdaIntegration = new LambdaIntegration(lambdaFunction, {
    passthroughBehavior: PassthroughBehavior.WHEN_NO_TEMPLATES,
    requestTemplates: {
      'application/json': JSON.stringify({
        body: "$input.json('$')",
      }),
    },
  });

  const putCommentApiMethod = resource.addMethod(
    'PUT',
    putCommentLambdaIntegration,
    {
      apiKeyRequired: true,
      methodResponses: [
        {
          statusCode: '200',
        },
      ],
    }
  );

  return putCommentApiMethod;
};

export const createGetCommentsMethod = (
  resource: Resource,
  lambdaFunction: NodejsFunction
) => {
  const getCommentsLambdaIntegration = new LambdaIntegration(lambdaFunction);

  const getCommentsMethod = resource.addMethod(
    'GET',
    getCommentsLambdaIntegration,
    {
      apiKeyRequired: true,
      methodResponses: [
        {
          statusCode: '200',
        },
      ],
    }
  );

  return getCommentsMethod;
};

export const createUpdateCommentMethod = (
  resource: Resource,
  lambdaFunction: NodejsFunction
) => {
  const updateCommentLambdaIntegration = new LambdaIntegration(lambdaFunction, {
    passthroughBehavior: PassthroughBehavior.WHEN_NO_TEMPLATES,
    requestTemplates: {
      'application/json': JSON.stringify({
        body: "$input.json('$')",
      }),
    },
  });

  const updateCommentApiMethod = resource.addMethod(
    'PATCH',
    updateCommentLambdaIntegration,
    {
      apiKeyRequired: true,
      methodResponses: [
        {
          statusCode: '200',
        },
      ],
    }
  );

  return updateCommentApiMethod;
};

export const createDeleteCommentMethod = (
  resource: Resource,
  lambdaFunction: NodejsFunction
) => {
  const deleteCommentLambdaIntegration = new LambdaIntegration(lambdaFunction);

  const deleteCommentApiMethod = resource.addMethod(
    'DELETE',
    deleteCommentLambdaIntegration,
    {
      apiKeyRequired: true,
      methodResponses: [
        {
          statusCode: '200',
        },
      ],
    }
  );

  return deleteCommentApiMethod;
};
