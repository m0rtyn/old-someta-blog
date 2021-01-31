const NOTION_BASE_URL = 'https://www.notion.so';

export default (url, width, slug) => {
  let rUrl;

  if (url.startsWith('https://s3')) {
    const [parsedOriginUrl] = url.split('?');

    rUrl = `${NOTION_BASE_URL}/image/${encodeURIComponent(
      parsedOriginUrl
    ).replace('s3.us-west', 's3-us-west')}`;
  } else if (url.startsWith('/image')) {
    rUrl = `${NOTION_BASE_URL}${url}`;
  } else {
    rUrl = url;
  }

  const rSlug = `${slug.slice(0, 8)}-${slug.slice(
    8,
    12
  )}-${slug.slice(12, 16)}-${slug.slice(16, 20)}-${slug.slice(
    20,
    32
  )}`;

  if (width) {
    return `${rUrl}?width=${width}&table=block&id=${rSlug}`;
  }

  return rUrl;
};
