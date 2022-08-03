/** @module metadata */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 */
export function listEnvironments() {
  return gateway.request(listEnvironmentsOperation)
}

/**
 */
export function version() {
  return gateway.request(versionOperation)
}

const listEnvironmentsOperation = {
  path: '/listEnvironments',
  method: 'get',
  security: [
    {
      id: 'key'
    }
  ]
}

const versionOperation = {
  path: '/version',
  method: 'get'
}