# Generated Articles

Allows to generate article using:
- Telegram Bot to enter keywords
- ChatGPT to generate articles
- Notion to save the result
- Docker that makes everything work

## Quick start

1. Get Telegram bot API token (https://t.me/BotFather)
2. Get ChatGPT API key (https://platform.openai.com/account/api-keys)
3. Get Notion secret (https://www.notion.so/my-integrations)
4. In the Notion: create database 'My Articles', add connection, and get id of the notion page (https://www.notion.so/help/add-and-manage-connections-with-the-api)
5. Run command: ```git clone https://github.com/KhitrovMaksim/generated-articles.git```
6. Run command: ```cd generated-articles```
7. Create .env file in the 'generated-articles' directory:
```dotenv
TELEGRAM_TOKEN=65860836...
OPENAI_API_KEY=sk-Oq1xz...
NOTION_SECRET=secret_zs...
NOTION_PAGE_ID=89565...
```
8. Run command: ```npm i```
9. To run dev: ```npm run dev```
10. To run prod: ```docker compose up```

## Technologies
- ChatGPT API (OpenAI)
- Telegram API (Telegraf)
- Notion API
- Docker

## Bot
Bot: https://t.me/ArticlesGeneratorBot (The bot has been stopped!)
