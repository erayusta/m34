// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-page-js": preferDefault(require("/private/var/www/erulog/src/templates/page.js")),
  "component---src-templates-post-js": preferDefault(require("/private/var/www/erulog/src/templates/post.js")),
  "component---src-pages-index-js": preferDefault(require("/private/var/www/erulog/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/private/var/www/erulog/.cache/json/layout-index.json"),
  "hakkinda.json": require("/private/var/www/erulog/.cache/json/hakkinda.json"),
  "layout-index.json": require("/private/var/www/erulog/.cache/json/layout-index.json"),
  "iletisim.json": require("/private/var/www/erulog/.cache/json/iletisim.json"),
  "layout-index.json": require("/private/var/www/erulog/.cache/json/layout-index.json"),
  "anasayfa-burasi-bro.json": require("/private/var/www/erulog/.cache/json/anasayfa-burasi-bro.json"),
  "layout-index.json": require("/private/var/www/erulog/.cache/json/layout-index.json"),
  "post-deneme-icerik.json": require("/private/var/www/erulog/.cache/json/post-deneme-icerik.json"),
  "layout-index.json": require("/private/var/www/erulog/.cache/json/layout-index.json"),
  "post-ilk-blog-gonderisi.json": require("/private/var/www/erulog/.cache/json/post-ilk-blog-gonderisi.json"),
  "layout-index.json": require("/private/var/www/erulog/.cache/json/layout-index.json"),
  "index.json": require("/private/var/www/erulog/.cache/json/index.json")
}

exports.layouts = {
  "component---src-layouts-index-js": preferDefault(require("/private/var/www/erulog/.cache/layouts/index.js"))
}