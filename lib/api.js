// lib/api.js
export async function fetchPageData(slug) {
    const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
    const headers = { 'Authorization': `Bearer e8536eb7f6b1530ba936233ebd84e4e9c0f6cf72db0c1805d83075ecadd6bd225aae2816900dcb0590210ca49678fe7086cc6ae350fa32471cc02f512ccdb62b730e633027124e87f58d6b5e50cdebc66b34abf6e663ca619a1d6e17c4a67f600165f927bc68199d658e97e05364d6effea1b9ba7da8c3ac97dd8701cf400046` };
    const res = await fetch(`${STRAPI_URL}/api/pages`, { headers });
    const pagesData = await res.json();

    return pagesData?.data.find((p) => p.slug === slug);
  }
  