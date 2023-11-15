import { Duration, Fn, Stack } from 'aws-cdk-lib';
import { IRole } from 'aws-cdk-lib/aws-iam';
import { Runtime, Tracing } from 'aws-cdk-lib/aws-lambda';
import { LogLevel, NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { COMMENTS_LAMBDA_PATH } from '../../../env';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';

export const createGetCommentsLambda = (
  stack: Stack,
  role: IRole
): NodejsFunction => {
  return new NodejsFunction(stack, 'get-comments-lambda', {
    entry: `${COMMENTS_LAMBDA_PATH}/get-comments.lambda.ts`,
    runtime: Runtime.NODEJS_18_X,
    handler: 'handler',
    role: role,
    tracing: Tracing.ACTIVE,
    timeout: Duration.minutes(1),
    logRetention: RetentionDays.ONE_DAY,
    bundling: {
      externalModules: ['aws-sdk'],
      target: 'es2020',
      keepNames: true,
      logLevel: LogLevel.INFO,
      sourceMap: true,
      minify: true,
    },
    environment: {
      ratingsTableName: Fn.importValue('comments-table-name'),
      NODE_OPTIONS: '--enable-source-maps',
    },
  });
};
