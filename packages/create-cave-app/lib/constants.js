const { resolvePath, dirsOf } = require('./util')

const MONOREPO_ROOT = resolvePath(__dirname, './../../..')
const MONOREPO_EXAMPLES_DIR = resolvePath(MONOREPO_ROOT, 'examples')
const MONOREPO_EXAMPLE_DIRNAMES = dirsOf(MONOREPO_EXAMPLES_DIR)
const MONOREPO_LIBS_DIR = resolvePath(MONOREPO_ROOT, 'packages')

const PACKAGE_ROOT = resolvePath(MONOREPO_ROOT, 'packages', 'create-cave-app')
const PACKAGE_LIBS_DIR = resolvePath(PACKAGE_ROOT, 'packages')
const PACKAGE_TEMPLATES_DIR = resolvePath(PACKAGE_ROOT, 'templates')


const DEFAULT_TEMPLATE_DIRNAME = 'base'
const DEFAULT_LIBS_DIRNAMES = [
  'core',
  'data',
  'map',
  'model',
  'pads',
  'route',
  'scenario',
  'session',
  'ui',
  'util'
]
const VERSION = require(resolvePath(PACKAGE_ROOT,"package.json")).version

module.exports = {
  MONOREPO_ROOT,
  MONOREPO_EXAMPLES_DIR,
  MONOREPO_EXAMPLE_DIRNAMES,
  MONOREPO_LIBS_DIR,
  PACKAGE_ROOT,
  PACKAGE_LIBS_DIR,
  PACKAGE_TEMPLATES_DIR,
  DEFAULT_LIBS_DIRNAMES,
  DEFAULT_TEMPLATE_DIRNAME,
  VERSION,

  templateArgToTemplateDirname: Object.assign({}, {
    'default': DEFAULT_TEMPLATE_DIRNAME
  }, MONOREPO_EXAMPLE_DIRNAMES.reduce((a, name) => {
    a[name] = name
    return a
  }, {})),

  TARGET_PROJECT_LIB_FOLDER_NAME: 'mit-cave'
}