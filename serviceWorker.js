const dkngall = "dkn-gallery-site-v1"
const assets = [
    "/",
    "/index.html",
    "/bio.html",
    "/contact.html",
    "/photos.html",
    "/fonts",
    "/css",
    "/js",
    "/scss",
    "/images/img_1.jpg",
    "/images/img_10.jpg",
    "/images/img_2.jpg",
    "/images/img_3.jpg",
    "/images/img_4.jpg",
    "/images/img_5.jpg",
    "/images/img_6.jpg",
    "/images/img_7.jpg",
    "/images/img_8.jpg",
    "/images/img_9.jpg",
    "/images/person_1.jpg",
    "/images/person_2.jpg",
    "/images/person_3.jpg",
    "/images/person_4.jpg",
    "/images/person_5.jpg",
    "/images/person_6.jpg",
    "/images/person_7.jpg",

]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(dkngall).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})