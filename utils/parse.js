const commander = require('commander')

const parseNumber = (value, _dummyPrevious) => {
  const parsedValue = Number(value)
  if (isNaN(parsedValue)) {
    throw new commander.InvalidArgumentError('Not a number.')
  }
  return parsedValue
}

const parseProtocol = (value, _dummyPrevious) => {
  if (!['mqtt', 'mqtts', 'ws', 'wss'].includes(value)) {
    throw new commander.InvalidArgumentError('Not mqtt, mqtts, ws or wss.')
  }
  return value
}

exports.parseNumber = parseNumber
exports.parseProtocol = parseProtocol
