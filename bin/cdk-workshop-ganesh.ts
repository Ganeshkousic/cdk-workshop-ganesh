#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkWorkshopGaneshStack } from '../lib/cdk-workshop-ganesh-stack';

const app = new cdk.App();
new CdkWorkshopGaneshStack(app, 'CdkWorkshopGaneshStack');
