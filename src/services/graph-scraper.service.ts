// import fetchMeta from "fetch-meta-tags";
const fetchOpengraph = require("fetch-opengraph");

export class GraphScrapService {
  public async scrapUrl(url: string) {
    return await fetchOpengraph.fetch(url);
  }
}
