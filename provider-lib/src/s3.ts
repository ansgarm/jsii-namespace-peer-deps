export namespace s3 {
  export interface S3BucketConfig {
    readonly acl?: string;
    readonly bucket: string;
  }
  export class S3Bucket {
    constructor(public config: S3BucketConfig) {}
  }
}
