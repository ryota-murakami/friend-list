/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  future: {
    v2_dev: true,
    v2_normalizeFormMethod: true,
  },
  ignoredRouteFiles: ['**/.*'],
  serverModuleFormat: 'cjs',
}
