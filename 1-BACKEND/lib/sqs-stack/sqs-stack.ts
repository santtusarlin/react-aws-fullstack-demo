import { CfnOutput, Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Queue, QueueEncryption } from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';

export class SqsStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const thumbnailProcessorDeadLetterQueue = new Queue(
      this,
      'thumbnail-processor-queue',
      {
        queueName: 'thumbnail-processing-queue',
        encryption: QueueEncryption.KMS_MANAGED,
        retentionPeriod: Duration.days(1),
      }
    );

    const thumbnailProcessorQueue = new Queue(
      this,
      'thumbnail-processor-queue',
      {
        queueName: 'thumbnail-processing-queue',
        visibilityTimeout: Duration.seconds(60),
        receiveMessageWaitTime: Duration.seconds(30),
        encryption: QueueEncryption.KMS_MANAGED,
        deadLetterQueue: {
          maxReceiveCount: 2,
          queue: thumbnailProcessorDeadLetterQueue,
        },
      }
    );

    new CfnOutput(this, 'thumbnail-processor-queue-arn', {
      value: thumbnailProcessorQueue.queueArn,
    });
  }
}
