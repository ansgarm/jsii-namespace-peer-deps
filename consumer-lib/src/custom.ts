import { s3 } from "provider-lib";

export class CustomConstruct {
  constructor(public bucket: s3.S3Bucket) {}
}
