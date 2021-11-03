# reproduction case for https://github.com/aws/jsii/issues/3095

## Steps

```bash
yarn
cd provider-lib && yarn && yarn compile && cd ..
cd consumer-lib && yarn && yarn compile
```

Should produce this error:
```
$ jsii --silence-warnings=reserved-word --no-fix-peer-dependencies
[2021-11-03T08:17:04.681] [ERROR] jsii/compiler - Type model errors prevented the JSII assembly from being created
error JSII3000: Exported APIs cannot use un-exported type "consumer-lib.s3.S3Bucket"
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```