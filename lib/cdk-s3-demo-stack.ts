import {App, Stack, StackProps } from "@aws-cdk/core";

import * as s3 from "@aws-cdk/aws-s3" ;
import { BlockPublicAccess } from "@aws-cdk/aws-s3";
import { RemovalPolicy } from "aws-cdk-lib";
import { CloudFormationDeleteStackAction } from "aws-cdk-lib/aws-codepipeline-actions";
import { CfnHookDefaultVersion } from "aws-cdk-lib/aws-cloudformation";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkS3DemoStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

   const b1= new s3.Bucket(this,"CDK-s3",{
    bucketName:"cdk-s3-bucket-sk",
    blockPublicAccess:s3.BlockPublicAccess.BLOCK_ALL,
    removalPolicy:RemovalPolicy.DESTROY,
    autoDeleteObjects:true,

    });
   const b2 = new s3.Bucket(this, "CDK-s3-b2", {
    bucketName:"cdk-s3-bucket-b2-sk"
   });
   const b3= new s3.Bucket(this, "CDK-s3-b3", {
    bucketName:"cdk-s3-bucket-b3-sk"
   });

  }
}

   const app = new App();
   new CdkS3DemoStack(app, "CdkS3DemoStack");
