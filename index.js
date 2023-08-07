const req = require('axios');

async function fetchInfo(name) {
  try {
    const r = await req.get(`https://registry.npmjs.com/${name}`);
    const data = r.data;
    const thisWeek = await req.get(`https://api.npmjs.org/downloads/point/last-week/${name}`);
    const thisMonth = await req.get(`https://api.npmjs.org/downloads/point/last-month/${name}`);
    const thisYear = await req.get(`https://api.npmjs.org/downloads/point/last-year/${name}`);

    data.version = data['dist-tags'].latest;
    data.name = data.name;
    data.author = data.author.name;
    data.maintainers = data.maintainers.map(user => user.name);
    data.keywords = data.keywords
    data.description = data.description;
    data.downloadsLastWeek = thisWeek.data.downloads;
    data.downloadsLastMonth = thisMonth.data.downloads;
    data.downloadsLastYear = thisYear.data.downloads;
    data.createdAt = data.time.created;
    data.modifiedAt = data.time.modified;
    data.createdAtTimestamp = Math.trunc(Date.parse(data.time.created) / 1000);
    data.modifiedAtTimestamp = Math.trunc(Date.parse(data.time.modified) / 1000);

    return {
      name: data.name,
      author: data.author,
      maintainers: data.maintainers,
      description: data.description,
      version: data.version,
      keywords: data.keywords,
      downloads: {lastWeek: data.downloadsLastWeek, lastMonth: data.downloadsLastMonth, lastYear: data.downloadsLastYear},
      created: {iso: data.createdAt, timestamp: data.createdAtTimestamp},
      modified: {iso: data.modifiedAt, timestamp: data.modifiedAtTimestamp}
    };
  } catch (error) {
    throw new Error(`An error ocurred when fetching package "${name}" info: ${error.message}`);
  }
}

module.exports = { fetchInfo };
