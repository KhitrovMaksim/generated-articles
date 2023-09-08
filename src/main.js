import { Telegraf } from 'telegraf';
import { message } from "telegraf/filters";
import { chatGPT } from "./chatgpt.js";
import { create } from "./notion.js";
import { Loader } from "./loader.js";
import 'dotenv/config';


const bot = new Telegraf(process.env.TELEGRAM_TOKEN, {
  handlerTimeout: Infinity,
});

bot.command('start', (ctx) =>
  ctx.reply(
    'Welcome. Please, send keywords.'
  )
)

bot.on(message('text'), async (ctx) => {
  try {
    const text = ctx.message.text

    if (!text.trim()) ctx.reply('Please, enter keywords')

    const loader = new Loader(ctx)

    loader.show()

    const response = await chatGPT(text)

    if (!response) return ctx.reply('API error', response)

    const notionResponse = await create(text, response.content)

    loader.hide()

    ctx.reply(`Your page: ${notionResponse.url}`)
  } catch (e) {
    console.log('Error while processing text: ', e.message)
  }
})

bot.launch().catch(error => console.log(error));


process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
