// import glob from 'tiny-glob'
import type { SafeRpcConfiguration } from './opss-type';

// noinspection JSUnusedGlobalSymbols
export async function config(): Promise<SafeRpcConfiguration> {
  // const controllers = await glob('examples/nest/**/*controller.ts', {
  //   absolute: true,
  // })
  return {
    dependencyPaths: {
      'opss-api': 'src/api/shared/opss-api',
    },
    dependencyServices: {
      serviceNames: ['opss-api'],
      merge: false,
      exportPath: './src/api/openapi/yaml',
    },
    serviceGroups: [],
  };
}
