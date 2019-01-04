var log4js = require('log4js')
log4js.configure({
    appenders: { cheese: { type: 'stdout' } },
    categories: { default: { appenders: ['cheese'], level: 'debug' } }
  });


var logger = log4js.getLogger('aaaa');
var logger1 = log4js.getLogger('bbbb');

// logger.level = 'fatal';
logger.debug("Some debug messages");
logger1.info("Some debug messages11111");

// logger.info("some info messsages");

// logger.trace('Entering cheese testing');
// logger.debug('Got cheese.');
// logger.info('Cheese is Comté.');
// logger.warn('Cheese is quite smelly.');
// logger.error('Cheese is too ripe!');
// logger.fatal('Cheese was breeding ground for listeria.');

// logger.info({ tags: ['my-tag-1', 'my-tag-2'] }, 'Some message');