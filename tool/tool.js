#!/usr/bin/env node

const yargs = require('yargs');
const build = require('./build/build');
const buildRouting = require('./generate/routing');
const { deployFavicons, deployFiles, deployRobots } = require('./build/copy');
const { test } = require('./test/test');
const standalone = require('./build/standalone');
const { Configurator } = require('./classes/configurator/configurator');
const { Builder } = require('./classes/builder/builder');

/**
 * Build
 */
const buildBuilder = (yargs) => {
  return yargs
    .usage('Usage: $0 -p core accordion')
    .example(
      '$0 -p core accordion -jcm',
      'compile les fichiers scripts et styles des parts core et accordion en les minifiant'
    )
    .option('parts', {
      alias: 'p',
      describe: 'liste des id des parts à compiler. Si non renseigné, tous les parts sont compilés',
      type: 'array'
    })
    .option('scripts', {
      alias: '-j',
      describe: 'Filtre de compilation, inclue les scripts',
      type: 'boolean'
    })
    .option('styles', {
      alias: '-c',
      describe: 'Filtre de compilation, inclue les styles',
      type: 'boolean'
    })
    .option('examples', {
      alias: '-h',
      describe: 'Filtre de compilation, inclue les examples',
      type: 'boolean'
    })
    .option('minify', {
      alias: '-m',
      describe: 'Minifie les styles et les scripts',
      type: 'boolean'
    })
    .option('legacy', {
      alias: '-l',
      describe: 'Compilation des scripts supportant les systèmes antérieurs',
      type: 'boolean'
    })
    .option('sourcemap', {
      alias: '-s',
      describe: 'Compilation des scripts et styles avec sourcemaps',
      type: 'boolean'
    })
    .option('test', {
      alias: '-t',
      describe: 'Applique les tests de styles et d‘accessibilité',
      type: 'boolean'
    })
    .option('clean', {
      describe: 'Supprime le dossier public avant compilation pour repartir de zéro',
      type: 'boolean'
    })
    .option('config', {
      describe: 'génère la configuration',
      type: 'boolean'
    })
    .option('markdowns', {
      describe: 'Génère les fichiers readme',
      type: 'boolean'
    })
    .option('locale', {
      alias: 'loc',
      describe: 'Locale',
      type: 'string'
    });
};

const buildHandler = async (argv) => {
  const all = argv.scripts === undefined && argv.styles === undefined && argv.examples === undefined;

  const settings = {
    styles: argv.styles || all,
    scripts: argv.scripts || all,
    examples: argv.examples || all,
    parts: argv.parts || [],
    minify: argv.minify,
    legacy: argv.legacy,
    sourcemap: argv.sourcemap,
    clean: argv.clean,
    config: argv.config,
    test: argv.test,
    markdowns: argv.markdowns,
    locale: argv.locale
  };

  const conf = new Configurator();
  conf.build();

  const builder = new Builder();
  builder.build(settings);

  //await build(settings);
};

/**
 * Release
 */

const releaseBuilder = (yargs) => {
  return yargs
    .usage('Usage: $0')
    .example(
      '$0',
      ''
    )
    .option('locale', {
      alias: 'loc',
      describe: 'Locale',
      type: 'string'
    });
};

const releaseHandler = async (argv) => {
  await build({
    styles: true,
    scripts: true,
    examples: true,
    clean: true,
    test: true,
    minify: true,
    legacy: true,
    sourcemap: true,
    markdowns: true,
    locale: argv.locale
  });
};

/**
 * Deploy
 */
const deployBuilder = (yargs) => {
  return yargs
    .usage('Usage: $0')
    .example(
      '$0',
      ''
    ).option('locale', {
      alias: 'loc',
      describe: 'Locale',
      type: 'string'
    });
};

const deployHandler = async (argv) => {
  await build({
    styles: true,
    scripts: true,
    examples: true,
    clean: true,
    legacy: true,
    locale: argv.locale
  });
  await buildRouting();
  deployFavicons();
  deployFiles();
  deployRobots();
};

/**
 * Test
 */
const testBuilder = (yargs) => {
  return yargs
    .usage('Usage: $0 -p core accordion')
    .example(
      '$0 -p core accordion -jcm',
      'compile les fichiers scripts et styles des parts core et accordion en les minifiant'
    )
    .option('parts', {
      alias: 'p',
      describe: 'liste des id des parts à compiler. Si non renseigné, tous les parts sont compilés',
      type: 'array'
    });
};

const testHandler = async (argv) => {
  const settings = {
    parts: argv.parts || []
  };

  // await test(settings);

  const conf = new Configurator();
  conf.build();

  const builder = new Builder();
  builder.build(settings);
};

/**
 * Standalone
 */
const standaloneBuilder = (yargs) => {
  return yargs
    .usage('Usage: $0')
    .example(
      '$0 -p connect',
      'compile les fichiers scripts et styles des parts core et accordion en les minifiant'
    )
    .option('parts', {
      alias: 'p',
      describe: 'liste des id des parts à compiler. Si non renseigné, tous les parts sont compilés',
      type: 'array'
    })
    .option('scripts', {
      alias: '-j',
      describe: 'Filtre de compilation, inclue les scripts',
      type: 'boolean'
    })
    .option('styles', {
      alias: '-c',
      describe: 'Filtre de compilation, inclue les styles',
      type: 'boolean'
    })
    .option('examples', {
      alias: '-h',
      describe: 'Filtre de compilation, inclue les examples',
      type: 'boolean'
    })
    .option('minify', {
      alias: '-m',
      describe: 'Minifie les styles et les scripts',
      type: 'boolean'
    })
    .option('legacy', {
      alias: '-l',
      describe: 'Compilation des scripts supportant les systèmes antérieurs',
      type: 'boolean'
    })
    .option('sourcemap', {
      alias: '-s',
      describe: 'Compilation des scripts et styles avec sourcemaps',
      type: 'boolean'
    })
    .option('clean', {
      describe: 'Supprime le dossier public avant compilation pour repartir de zéro',
      type: 'boolean'
    })
    .option('config', {
      describe: 'génère la configuration',
      type: 'boolean'
    })
    .option('locale', {
      alias: 'loc',
      describe: 'Locale',
      type: 'string'
    });
};

const standaloneHandler = async (argv) => {
  const all = argv.styles === undefined && argv.examples === undefined;

  const settings = {
    styles: argv.styles || all,
    scripts: argv.scripts || all,
    examples: argv.examples || all,
    parts: argv.parts || [],
    minify: argv.minify,
    legacy: argv.legacy,
    sourcemap: argv.sourcemap,
    clean: argv.clean,
    config: argv.config,
    locale: argv.locale
  };

  await standalone(settings);
};

yargs
  .scriptName('tool')
  .command(
    'build',
    'compilation de part',
    buildBuilder,
    buildHandler
  )
  .command(
    'release',
    'compilation la plus complète pour livraison',
    releaseBuilder,
    releaseHandler
  )
  .command(
    'deploy',
    'compilation pour déploiement sur netlify',
    deployBuilder,
    deployHandler
  )
  .command(
    'test',
    'lint et test pa11y',
    testBuilder,
    testHandler
  )
  .command(
    'standalone',
    'compilation pour la version standalone de FranceConnect',
    standaloneBuilder,
    standaloneHandler
  )
  .help()
  .argv;
