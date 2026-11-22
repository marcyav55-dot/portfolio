const SOURCES = [
  { name: "TechCabal", url: "https://techcabal.com/feed/", country: "Africa" },
  { name: "Techpoint Africa", url: "https://techpoint.africa/feed/", country: "Africa" }
];

const strip = (s = "") => s
  .replace(/<![CDATA[([sS]*?)]]>/g, "$1")
  .replace(/<[^>]+>/g, " ")
  .replace(/&nbsp;/gi, " ")
  .replace(/&amp;/gi, "&")
  .replace(/&quot;/gi, '"')
  .replace(/&#39;/gi, "'")
  .replace(/&#x27;/gi, "'")
  .replace(/\s+/g, " ")
  .trim();

function tag(xml, name) {
  const m = xml.match(new RegExp("<" + name + "[^>]*>([\\s\\S]*?)</" + name + ">", "i"));
  return m ? strip(m[1]) : "";
}

function items(xml) {
  return xml.match(/<item[\s\S]*?<\/item>/gi) || [];
}

function image(item) {
  const media = item.match(/<(?:media:content|media:thumbnail)[^>]+url=["']([^"']+)["']/i);
  if (media) return media[1];
  const enclosure = item.match(/<enclosure[^>]+url=["']([^"']+)["']/i);
  if (enclosure) return enclosure[1];
  const html = item.match(/<img[^>]+src=["']([^"']+)["']/i);
  return html ? html[1] : "";
}

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const results = await Promise.all(SOURCES.map(async source => {
    try {
      const response = await fetch(source.url, {
        headers: { "User-Agent": "TYM-Africa-TechFeed/1.0" },
        signal: AbortSignal.timeout(8000)
      });
      if (!response.ok) throw new Error("RSS " + response.status);
      const xml = await response.text();
      return items(xml).slice(0, 12).map(item => ({
        id: tag(item, "guid") || tag(item, "link"),
        title: tag(item, "title"),
        description: tag(item, "description"),
        url: tag(item, "link"),
        publishedAt: tag(item, "pubDate"),
        image: image(item),
        source: source.name,
        region: source.country
      })).filter(x => x.id && x.title && x.url);
    } catch (error) {
      return [];
    }
  }));

  const seen = new Set();
  const articles = results.flat().filter(article => {
    if (seen.has(article.id)) return false;
    seen.add(article.id);
    return true;
  }).sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)).slice(0, 10);

  res.setHeader("Cache-Control", "s-maxage=900, stale-while-revalidate=3600");
  return res.status(200).json({
    updatedAt: new Date().toISOString(),
    region: "Africa",
    sources: SOURCES.map(s => s.name),
    articles
  });
}
