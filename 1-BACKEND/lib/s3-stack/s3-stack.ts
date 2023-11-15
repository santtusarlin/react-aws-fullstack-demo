import { RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { BlockPublicAccess, Bucket } from 'aws-cdk-lib/aws-s3';
import { CloudFrontWebDistribution } from 'aws-cdk-lib/aws-cloudfront';

import { Construct } from 'constructs';

export class S3Stack extends Stack {
  public readonly applicationDeploymentBucket: Bucket;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    this.applicationDeploymentBucket = new Bucket(this, 'ratings-app-bucket', {
      bucketName: 'ratings-app',
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'index.html',
      publicReadAccess: true,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    const ratingsFilesBucket = new Bucket(this, 'ratings-files-bucket', {
      bucketName: 'ratings-files',
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      removalPolicy: RemovalPolicy.DESTROY,
    });
  }
}
