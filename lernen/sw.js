// Alte Lern-Oase-Adresse: Service Worker räumt sich selbst auf.
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith("lernoase-")).map(k=>caches.delete(k)))).then(()=>self.registration.unregister()));});
