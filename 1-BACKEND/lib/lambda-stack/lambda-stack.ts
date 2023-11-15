import { Stack, StackProps } from 'aws-cdk-lib';

import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';

import {
  createCommentsLambdaRole,
  createRatingsLambdaRole,
} from './utils/iam.utils';
import { createPutRatingLambda } from './utils/ratings/create-put-rating-lambda';
import { createGetRatingsLambda } from './utils/ratings/create-get-ratings-lambda';
import { createUpdateRatingLambda } from './utils/ratings/create-update-rating-lambda';
import { createDeleteRatingLambda } from './utils/ratings/create-delete-rating-lambda';
import { createPutCommentLambda } from './utils/comments/create-put-comment-lambda';
import { createGetCommentsLambda } from './utils/comments/create-get-comments-lambda';
import { createUpdateCommentLambda } from './utils/comments/create-update-comment-lambda';
import { createDeleteCommentLambda } from './utils/comments/create-delete-comment-lambda';

export class LambdaStack extends Stack {
  public readonly putRatingLambda: NodejsFunction;
  public readonly getRatingsLambda: NodejsFunction;
  public readonly updateRatingLambda: NodejsFunction;
  public readonly deleteRatingLambda: NodejsFunction;

  public readonly putCommentLambda: NodejsFunction;
  public readonly getCommentsLambda: NodejsFunction;
  public readonly updateCommentLambda: NodejsFunction;
  public readonly deleteCommentLambda: NodejsFunction;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const ratingsLambdaRole = createRatingsLambdaRole(this);
    this.putRatingLambda = createPutRatingLambda(this, ratingsLambdaRole);
    this.getRatingsLambda = createGetRatingsLambda(this, ratingsLambdaRole);
    this.updateRatingLambda = createUpdateRatingLambda(this, ratingsLambdaRole);
    this.deleteRatingLambda = createDeleteRatingLambda(this, ratingsLambdaRole);

    const commentsLambdaRole = createCommentsLambdaRole(this);
    this.putCommentLambda = createPutCommentLambda(this, commentsLambdaRole);
    this.getCommentsLambda = createGetCommentsLambda(this, commentsLambdaRole);
    this.updateCommentLambda = createUpdateCommentLambda(
      this,
      commentsLambdaRole
    );
    this.deleteCommentLambda = createDeleteCommentLambda(
      this,
      commentsLambdaRole
    );
  }
}
