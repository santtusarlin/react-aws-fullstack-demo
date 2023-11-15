import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

import { Bucket } from 'aws-cdk-lib/aws-s3';
import { CloudFrontWebDistribution } from 'aws-cdk-lib/aws-cloudfront';

interface ImportedStackProps extends StackProps {
  applicationDeploymentBucket: Bucket;
}

export class CloudfrontStack extends Stack {
  constructor(scope: Construct, id: string, props?: ImportedStackProps) {
    super(scope, id, props);

    const distribution = new CloudFrontWebDistribution(
      this,
      'app-deployment-distribution',
      {
        originConfigs: [
          {
            s3OriginSource: {
              s3BucketSource: props!.applicationDeploymentBucket,
            },
            behaviors: [{ isDefaultBehavior: true }],
          },
        ],
      }
    );

    new CfnOutput(this, 'WebsiteURL', {
      value: props!.applicationDeploymentBucket.bucketWebsiteUrl,
      description: 'URL of the website',
    });

    new CfnOutput(this, 'CloudFrontDistributionDomainName', {
      value: distribution.distributionDomainName,
      description: 'CloudFront Distribution Domain Name',
    });
  }
}
