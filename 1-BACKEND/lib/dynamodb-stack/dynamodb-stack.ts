import { CfnOutput, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { AttributeType, BillingMode, Table } from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';

export class DynamodbStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const ratingsTable = new Table(this, 'ratings-table', {
      tableName: 'ratings',
      partitionKey: { name: 'id', type: AttributeType.STRING },
      sortKey: { name: 'userId', type: AttributeType.STRING },
      billingMode: BillingMode.PAY_PER_REQUEST,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    new CfnOutput(this, 'ratings-table-arn', {
      value: ratingsTable.tableArn,
      exportName: 'ratings-table-arn',
    });
    new CfnOutput(this, 'ratings-table-name', {
      value: ratingsTable.tableName,
      exportName: 'ratings-table-name',
    });

    const commentsTable = new Table(this, 'comments-table', {
      tableName: 'ratings',
      partitionKey: { name: 'id', type: AttributeType.STRING },
      sortKey: { name: 'userId', type: AttributeType.STRING },
      billingMode: BillingMode.PAY_PER_REQUEST,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    new CfnOutput(this, 'comments-table-arn', {
      value: commentsTable.tableArn,
      exportName: 'comments-table-arn',
    });
    new CfnOutput(this, 'comments-table-name', {
      value: commentsTable.tableName,
      exportName: 'comments-table-name',
    });
  }
}
