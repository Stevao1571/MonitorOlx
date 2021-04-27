require('dotenv').config()

let config = {};

config.urls = ['https://rj.olx.com.br/rio-de-janeiro-e-regiao/autos-e-pecas/carros-vans-e-utilitarios/gas-natural?q=gol%20g5&rs=22']

cconfig.telegramChatID = process.env.TELEGRAM_CHAT_ID
config.telegramToken = process.env.TELEGRAM_TOKEN
config.logPath = 'scrapper.log'
config.dbPath = 'ads.db'


module.exports = config;