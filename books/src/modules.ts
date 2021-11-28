import { glob } from 'glob'
import * as util from 'util'
import { Router } from 'express'
const globPromise = util.promisify(glob)
interface ModuleType{
  router: Router,
  path: string
}

function moduleRouters (matches: string[]): Array<ModuleType | false> {
  const moduleRouters: Array<ModuleType> = []

  for (const path of matches) {
    console.log(path)
    moduleRouters.push(require(path.replace('build/', './')))
  }
  return moduleRouters
}

async function getRoutes (): Promise<Array<ModuleType | false> | false> {
  try {
    const files = await globPromise('**/*.module.js')
    return moduleRouters(files)
  } catch (e) {
    console.error(e)
    return false
  }
}
export {
  getRoutes
}
