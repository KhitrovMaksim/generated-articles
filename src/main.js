import { Telegraf } from 'telegraf';
import { message } from "telegraf/filters";
import 'dotenv/config'


const bot = new Telegraf(process.env.TELEGRAM_TOKEN, {
  handlerTimeout: Infinity,
});

bot.command('start', (ctx) =>
  ctx.reply(
    'Welcome. Please, send keywords.'
  )
)

bot.on(message('text'), ctx => {
  ctx.reply('Hello!')
})

bot.launch().catch(error => console.log(error));


process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
