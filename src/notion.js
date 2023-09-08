import { Client } from '@notionhq/client';
import 'dotenv/config';

const notion = new Client({
  auth: process.env.NOTION_SECRET,
});

export async function create(short, text) {
  const response = await notion.pages.create({
    parent: { database_id: process.env.NOTION_PAGE_ID },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: short,
            },
          },
        ],
      },
      Date: {
        date: {
          start: new Date().toISOString(),
        },
      },
    },
  })

  await notion.blocks.children.append({
    block_id: response.id,
    children: [
      {
        object: 'block',
        type: 'paragraph',
        paragraph: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: text,
              },
            },
          ],
        },
      },
    ],
  })

  return response
}
