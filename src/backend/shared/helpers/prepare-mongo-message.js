/**
 * Парсинг ошибки при выполнении mongoose запросов используя коды ошибок сообщения
 * @param {string} message Mongoose messsage
 * @param {object} messages Replace message ({exists: 'Some field exists'})
 * @return {string} Возвращается обработанный текст ошибки. Если ошибка не найдена, то возаращается сообщение об ошибке сервера
 */
const prepareMongoMessage = (message = '', messages = {}) => {
  const codes = [
    {
      reg: 'E11000',
      title: 'exists',
      message: 'Entry already exists',
    },
  ]

  for (let i = 0; i < codes.length; i++) {
    if (message.search(codes[i].reg) !== -1) {
      if (typeof messages[codes[i].title] !== 'undefined') {
        return messages[codes[i].title]
      } else {
        return codes[i].message
      }
    }
  }

  console.log('Необработанная ошибка MongoDB', message)
  return 'Server error. Please, try later'
}

module.exports = prepareMongoMessage