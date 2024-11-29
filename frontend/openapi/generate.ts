import fs from 'node:fs';
import openapiTS, { astToString } from 'openapi-typescript';
import * as path from 'node:path';

const github = path.join(process.cwd(), 'openapi/api.github.com.2022-11-28.yaml');
async function main() {
  const ast = await openapiTS(github);
  const contents = astToString(ast);
  const obj = JSON.parse(contents);
  const paths = obj.paths;
  /**
   * 只保留一下路径
   */

  console.log(contents);
  fs.writeFileSync('./my-schema.ts', contents);
}
