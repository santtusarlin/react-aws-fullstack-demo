import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { createRestApi } from './utils/create-rest-api';
import { createApiResources } from './utils/create-api-resources';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import {
  createDeleteRatingMethod,
  createGetRatingsMethod,
  createPutRatingMethod,
  createUpdateRatingMethod,
} from './utils/ratings/create-ratings-api-methods';
import {
  createDeleteCommentMethod,
  createGetCommentsMethod,
  createPutCommentMethod,
  createUpdateCommentMethod,
} from './utils/comments/create-comments-api-methods';
import { createApiUsagePlan } from './utils/create-api-usage-plan';
import { createApiStage } from './utils/create-api-stage';

interface ImportedStackProps extends StackProps {
  putRatingLambda: NodejsFunction;
  getRatingsLambda: NodejsFunction;
  updateRatingLambda: NodejsFunction;
  deleteRatingLambda: NodejsFunction;
  putCommentLambda: NodejsFunction;
  getCommentsLambda: NodejsFunction;
  updateCommentLambda: NodejsFunction;
  deleteCommentLambda: NodejsFunction;
}

export class ApigatewayStack extends Stack {
  constructor(scope: Construct, id: string, props?: ImportedStackProps) {
    super(scope, id, props);

    const api = createRestApi(this);
    const { ratingsResource, commentsResource } = createApiResources(api);

    // Ratings API CRUD methods
    createPutRatingMethod(ratingsResource, props!.putRatingLambda);
    createGetRatingsMethod(ratingsResource, props!.getRatingsLambda);
    createUpdateRatingMethod(ratingsResource, props!.updateRatingLambda);
    createDeleteRatingMethod(ratingsResource, props!.deleteRatingLambda);

    // Comments API CRUD methods
    createPutCommentMethod(commentsResource, props!.putCommentLambda);
    createGetCommentsMethod(commentsResource, props!.getCommentsLambda);
    createUpdateCommentMethod(commentsResource, props!.updateCommentLambda);
    createDeleteCommentMethod(commentsResource, props!.deleteCommentLambda);

    const usagePlan = createApiUsagePlan(api);
    createApiStage(api, usagePlan);
  }
}
