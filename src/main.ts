import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './style.css'

const BASE = import.meta.env.BASE_URL // '/hisui/'

// L'appli vit sous /hisui/. Si elle est ouverte ailleurs (ancienne version
// installée à la racine du site, servie par son cache hors ligne), on retire
// l'ancien service worker et on renvoie vers /hisui/ pour passer à la
// nouvelle version.
if (!window.location.pathname.startsWith(BASE)) {
  const goToBase = () =>
    window.location.replace(BASE + window.location.search + window.location.hash)
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .getRegistrations()
      .then((registrations) =>
        Promise.all(
          registrations
            .filter((r) => !new URL(r.scope).pathname.startsWith(BASE))
            .map((r) => r.unregister()),
        ),
      )
      .finally(goToBase)
  } else {
    goToBase()
  }
} else {
  const app = createApp(App)
  app.use(createPinia())
  app.mount('#app')
}
