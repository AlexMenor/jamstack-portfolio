// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require("axios");
const remark = require("remark");
const html = require("remark-html");

module.exports = function(api) {
  api.loadSource(async ({ addCollection }) => {
    const collection = addCollection("Post");
    const { data } = await axios.get("https://dev.to/api/articles/me", {
      headers: {
        "api-key": process.env.DEV_TO_API_KEY,
      },
    });

    for (const item of data) {
      const {
        id,
        title,
        description,
        published_timestamp: createdAt,
        cover_image: picture,
        tag_list: tags,
        body_markdown: content,
        slug,
      } = item;
      collection.addNode({
        id,
        title,
        description,
        createdAt,
        picture,
        tags,
        content: await markdownToHtml(content),
        slug,
      });
    }
  });
};

function markdownToHtml(markdown) {
  return new Promise((resolve, reject) => {
    remark()
      .use(html)
      .process(markdown, (err, file) => {
        if (err) reject(err);
        resolve(String(file));
      });
  });
}
