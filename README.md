# 🎨 Portfolio — Abdeljebbar Moumou

Portfolio professionnel **Full-Stack Developer** avec design éditorial moderne, dark/light mode, animations fluides et 100% responsive.

---

## 📋 Sections incluses

1. **Accueil (Hero)** — Nom, métier, **photo professionnelle**, location, disponibilité
2. **À propos** — Profil + formation (ISTA Safi, Bac SVT)
3. **Compétences** — Stack technique (Back-end, Front-end, Modélisation, Outils) + 5 certifications + 3 langues
4. **Expérience** — Timeline avec les 3 expériences (Œuf Rehamna, Oriental Group, DEVOSOFT)
5. **Projets** — **Bibliothèque**, LMS, Oriental Group, Système Œuf Rehamna
6. **Contact** — Email, téléphone, réseaux + formulaire

---

## 📸 Photo de profil

Ta photo est déjà incluse dans `public/profile.jpg`. Pour la remplacer plus tard :
- Place simplement une nouvelle photo dans `public/profile.jpg` (garde le même nom)
- Ou modifie le chemin dans `src/data/content.js` → `personal.photo`

---

## 🚀 Installation (5 commandes)

```bash
# 1. Décompresser le zip et entrer dans le dossier
cd portfolio-abdeljebbar

# 2. Installer les dépendances
npm install

# 3. (Si erreur) Installer les libs supplémentaires
npm install framer-motion react-icons @emailjs/browser
npm install -D tailwindcss @tailwindcss/vite

# 4. Lancer le projet
npm run dev
```

Ouvrir ensuite `http://localhost:5173` dans le navigateur.

---

## ✏️ Personnalisation

**Tout est centralisé dans `src/data/content.js`** — modifie ce seul fichier pour mettre à jour :

- Tes infos personnelles (nom, email, téléphone…)
- Tes expériences professionnelles
- Tes projets
- Tes compétences
- Tes certifications
- Tes langues
- Tes liens sociaux

---

## 🌐 Déploiement gratuit

### Option 1 : Vercel (recommandé)

```bash
npm install -g vercel
vercel
```

Suis les étapes, et ton portfolio sera en ligne en 2 minutes sur une URL `https://abdeljebbar.vercel.app`.

### Option 2 : Netlify

```bash
npm run build
```

Puis va sur [netlify.com](https://netlify.com) et glisse-dépose le dossier `dist/`.

### Option 3 : GitHub Pages

1. Push le projet sur GitHub
2. Connecte le repo à Vercel/Netlify directement (déploiement auto à chaque push)

---

## 💌 Formulaire de contact (EmailJS)

✅ **Le formulaire est déjà configuré et fonctionnel !**

Service ID, Template ID et Public Key sont déjà intégrés dans `src/components/Contact.jsx`. Quand quelqu'un envoie un message via le formulaire, tu le recevras directement sur ton email configuré dans EmailJS.

### Variables utilisées dans le template EmailJS
Le code envoie ces variables vers ton template — assure-toi qu'elles existent dans ton template EmailJS :
- `{{name}}` — Nom de la personne
- `{{email}}` — Email de la personne
- `{{message}}` — Le message
- `{{time}}` — Date et heure d'envoi (générée automatiquement)
- `{{reply_to}}` — Email pour répondre directement

### Si tu veux changer les IDs plus tard
Ouvre `src/components/Contact.jsx` et modifie ces 3 constantes en haut :
```js
const EMAILJS_SERVICE_ID = 'service_8ags8it';
const EMAILJS_TEMPLATE_ID = 'template_52c5gwr';
const EMAILJS_PUBLIC_KEY = 'IIuHOas8A_pPWcMqT';
```

---

## 🎨 Design

- **Typographie** : Fraunces (serif) + JetBrains Mono + Inter
- **Couleur d'accent** : Orange brûlé `#ff5b22`
- **Thème** : Dark mode par défaut (changeable depuis la navbar)
- **Animations** : Framer Motion (scroll-triggered + hover)

---

Bon courage Abdeljebbar 💪 — N'hésite pas à me demander des modifications !
