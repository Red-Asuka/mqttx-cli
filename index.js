#!/usr/bin/env node

const program = require('commander')
const parse = require('./utils/parse')

const version = require('./package.json').version

program.name('mqttx').description('An MQTT client for the command line').version(version)

program
  .command('sub')
  .description('Subscribes a client.')
  .option('-h, --hostname <HOST>', 'the broker host', 'localhost')
  .option('-p, --port <PORT>', 'the broker port', parse.parseNumber)
  .option('-i, --client-id <ID>', 'the client id')
  .option('-q, --qos <0/1/2>', 'the QoS of the message', parse.parseNumber, 0)
  .option('--clean', 'discard any pending message for the given id', true)
  .requiredOption('-t, --topic <TOPIC>', 'the message topic')
  .option('-k, --keepalive <SEC>', 'send a ping every SEC seconds', parse.parseNumber, 30)
  .option('-u, --username <USER>', 'the username')
  .option('-P, --password <PASS>', 'the password')
  .option('-l, --protocol <PROTO>', 'the protocol to use, mqtt, mqtts, ws or wss', parse.parseProtocol)
  .option('--key <PATH>', 'path to the key file')
  .option('--cert <PATH>', 'path to the cert file')
  .option('--ca <PATH>', 'path to the ca certificate')
  .option('--insecure', 'do not verify the server certificate')
  .option('--will-topic <TOPIC>', 'the will topic')
  .option('--will-message <BODY>', 'the will message')
  .option('--will-qos <0/1/2>', 'the will qos', parse.parseNumber)
  .option('--will-retain', 'send a will retained message', false)
  .option('-v, --verbose', 'print the topic before the message')
  .action(require('./bin/sub'))

program.parse()
