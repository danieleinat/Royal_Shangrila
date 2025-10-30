@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Heebo', sans-serif;
  background-color: #f7f3ef;
  color: #3b2f2f;
  direction: rtl;
}

/* HERO */
.hero {
  background: url("Images/129 NL-4.jpg") center/cover no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.overlay {
  background: rgba(0, 0, 0, 0.45);
  padding: 50px;
  border-radius: 15px;
  text-align: center;
  color: #fff;
  max-width: 700px;
}

.overlay h1 {
  font-size: 2.8rem;
  margin-bottom: 15px;
}

.overlay p {
  font-size: 1.2rem;
  margin-bottom: 25px;
}

.book-btn {
  background: linear-gradient(45deg, #eab308, #f59e0b);
  color: #1f2937;
  padding: 12px 32px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.3s;
}

.book-btn:hover {
  transform: scale(1.05);
}

/* NAV */
.nav-bar {
  display: flex;
  justify-content: center;
  gap: 40px;
  background-color: #d1a16a;
  padding: 15px;
}

.nav-bar a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
}

.nav-bar a:hover {
  color: #1f2937;
}

/* ABOUT */
.about {
  padding: 80px 20px;
  background-color: #fdfaf6;
  text-align: center;
}

.about h2 {
  font-size: 2rem;
  color: #a15c38;
  margin-bottom: 20px;
}

.about p {
  max-width: 800px;
  margin: 0 auto 40px;
  color: #5b4636;
  font-size: 1.1rem;
}

.details-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px;
}

.details-grid ul {
  list-style: none;
  text-align: right;
  color: #3b2f2f;
  font-weight: 500;
  line-height: 1.8;
}

/* GALLERY */
.gallery {
  background: #e9dfd1;
  text-align: center;
  padding: 80px 20px;
}

.gallery h2 {
  color: #7a4e2d;
  margin-bottom: 30px;
  font-size: 1.8rem;
}

.gallery-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.gallery-grid img {
  width: 100%;
  max-width: 320px;
  height: 230px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.gallery-grid img:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

/* CONTACT */
.contact {
  background: #fdfaf6;
  text-align: center;
  padding: 100px 20px;
}

.contact h2 {
  color: #a15c38;
  margin-bottom: 20px;
}

.contact-btn {
  background-color: #d48b2a;
  color: #fff;
  text-decoration: none;
  padding: 12px 28px;
  border-radius: 30px;
  font-weight: 600;
}

.airbnb-link {
  color: #a15c38;
  text-decoration: underline;
  font-weight: 500;
}

/* FOOTER */
footer {
  background: #3b2f2f;
  color: #f7f3ef;
  text-align: center;
  padding: 20px;
  font-size: 0.9rem;
}

/* LIGHTBOX */
.lightbox {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.lightbox img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
}

.lightbox.active {
  display: flex;
}

/* MOBILE */
@media (max-width: 768px) {
  .overlay h1 {
    font-size: 1.8rem;
  }
  .gallery-grid img {
    max-width: 90%;
  }
}
