"use client";

import { useState } from "react";
import {
  BookOpen, Bookmark, Search, LibraryBig, Users, Star, Moon, Sun,
  ChevronRight, Plus, Headphones, Quote, TrendingUp, Menu, Globe2
} from "lucide-react";

const books = [
  { title: "Дом между мирами", author: "Элли Моррис", genre: "Фэнтези", color: "cover-wine", mark: "ВЫБОР ЧИТАТЕЛЕЙ" },
  { title: "Тихая сторона ночи", author: "Мира Лейн", genre: "Романтика", color: "cover-green", mark: "НОВИНКА" },
  { title: "Последний август", author: "Анна Риверс", genre: "Драма", color: "cover-black", mark: "ПОПУЛЯРНОЕ" },
  { title: "Сад забытых писем", author: "Луиза Грей", genre: "Современная проза", color: "cover-cream", mark: "РЕКОМЕНДУЕМ" }
];

export default function Home() {
  const [dark, setDark] = useState(true);
  const [lang, setLang] = useState<"ru" | "en">("ru");
  const [active, setActive] = useState("home");
  const [query, setQuery] = useState("");

  const t = lang === "ru"
    ? { home: "Главная", library: "Моя библиотека", catalog: "Каталог", community: "Сообщество", welcome: "Ваше пространство для историй", sub: "Собирайте любимые книги, создавайте полки и делитесь впечатлениями с читателями.", discover: "Открыть каталог", continue: "Продолжить чтение", shelves: "Книжные полки", all: "Смотреть всё", popular: "Книги, которые выбирают", recent: "Недавно в сообществе", quote: "Книга — это возможность прожить тысячу жизней, оставаясь собой.", start: "Создайте свою библиотеку", startSub: "Сохраняйте книги, отмечайте прогресс и собирайте личную коллекцию.", create: "Создать библиотеку" }
    : { home: "Home", library: "My library", catalog: "Catalog", community: "Community", welcome: "Your space for stories", sub: "Collect your favorite books, create shelves and share impressions with readers.", discover: "Explore catalog", continue: "Continue reading", shelves: "Bookshelves", all: "View all", popular: "Reader favorites", recent: "Recently in community", quote: "A book is a chance to live a thousand lives while remaining yourself.", start: "Build your own library", startSub: "Save books, track your progress and curate a personal collection.", create: "Create library" };

  const nav = [
    { id: "home", label: t.home, icon: LibraryBig },
    { id: "library", label: t.library, icon: BookOpen },
    { id: "catalog", label: t.catalog, icon: Search },
    { id: "community", label: t.community, icon: Users }
  ];

  return (
    <main className={dark ? "app dark" : "app light"}>
      <aside className="sidebar">
        <a className="brand" href="#"><span className="brand-mark"><BookOpen size={22}/></span><span>readerly<span className="brand-dot">.</span></span></a>
        <div className="side-label">{lang === "ru" ? "МЕНЮ" : "MENU"}</div>
        <nav>{nav.map(item => {
          const Icon = item.icon;
          return <button key={item.id} className={`nav-item ${active === item.id ? "active" : ""}`} onClick={() => setActive(item.id)}><Icon size={18}/>{item.label}</button>;
        })}</nav>
        <div className="sidebar-bottom">
          <div className="mini-card"><div className="mini-icon"><Bookmark size={17}/></div><strong>{lang === "ru" ? "Ваша история начинается здесь" : "Your story starts here"}</strong><p>{lang === "ru" ? "Создайте первую книжную полку." : "Create your first bookshelf."}</p></div>
          <div className="profile-row"><div className="avatar">R</div><div><strong>{lang === "ru" ? "Гость" : "Guest"}</strong><span>{lang === "ru" ? "Демо-профиль" : "Demo profile"}</span></div><span className="online-dot"/></div>
        </div>
      </aside>

      <section className="main-area">
        <header className="topbar">
          <button className="mobile-brand"><Menu size={20}/><span>readerly.</span></button>
          <div className="breadcrumb">{active === "home" ? t.home : nav.find(n => n.id === active)?.label}</div>
          <div className="top-actions">
            <label className="search-box"><Search size={17}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder={lang === "ru" ? "Найти книгу или автора..." : "Find a book or author..."}/><kbd>⌘ K</kbd></label>
            <button className="icon-button" title="Language" onClick={() => setLang(lang === "ru" ? "en" : "ru")}><Globe2 size={18}/><span>{lang.toUpperCase()}</span></button>
            <button className="icon-button theme-toggle" title="Theme" onClick={() => setDark(!dark)}>{dark ? <Sun size={18}/> : <Moon size={18}/>}</button>
            <button className="sign-in">{lang === "ru" ? "Войти" : "Sign in"}</button>
          </div>
        </header>

        <div className="content">
          <section className="hero">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-line"/> THE ART OF READING</div>
              <h1>{t.welcome}<span>.</span></h1>
              <p>{t.sub}</p>
              <div className="hero-buttons"><button className="primary-button" onClick={() => setActive("catalog")}>{t.discover}<ChevronRight size={17}/></button><button className="secondary-button" onClick={() => setActive("library")}>{t.continue}</button></div>
              <div className="hero-note"><span className="tiny-stars">✦ ✦ ✦</span><span>{lang === "ru" ? "Место, где каждая история находит свой дом" : "A place where every story finds its home"}</span></div>
            </div>
            <div className="hero-art" aria-label="Декоративная композиция из книг">
              <div className="orb orb-one"/><div className="orb orb-two"/>
              <div className="book-stack"><div className="hero-book book-a"><span>THE<br/>SILENT<br/>GARDEN</span><i>✦</i></div><div className="hero-book book-b"><span>ПАМЯТЬ<br/>О МОРЕ</span><i>✧</i></div><div className="hero-book book-c"><span>WILD<br/>HEART</span><i>✦</i></div></div>
              <div className="art-caption">VOL. 01 <span>—</span> STORIES TO KEEP</div>
            </div>
          </section>

          <section className="stats-strip">
            <div><span className="stat-icon"><BookOpen size={17}/></span><strong>∞</strong><span>{lang === "ru" ? "историй для открытия" : "stories to discover"}</span></div>
            <div><span className="stat-icon"><Users size={17}/></span><strong>01</strong><span>{lang === "ru" ? "сообщество читателей" : "reader community"}</span></div>
            <div><span className="stat-icon"><Star size={17}/></span><strong>100%</strong><span>{lang === "ru" ? "пространство для вас" : "space for you"}</span></div>
          </section>

          <section className="section-block">
            <div className="section-heading"><div><span className="section-kicker">CURATED FOR YOU</span><h2>{t.shelves}</h2></div><button className="text-link" onClick={() => setActive("library")}>{t.all}<ChevronRight size={16}/></button></div>
            <div className="shelf-panel">
              <div className="shelf-top"><div><span className="shelf-label">{lang === "ru" ? "ВАША БУДУЩАЯ КОЛЛЕКЦИЯ" : "YOUR FUTURE COLLECTION"}</span><h3>{lang === "ru" ? "Полка для любимых историй" : "A shelf for beloved stories"}</h3></div><button className="round-add" onClick={() => setActive("library")}><Plus size={19}/></button></div>
              <div className="shelf-books">{books.slice(0,3).map((book, i) => <div className={`shelf-book ${book.color}`} key={book.title}><span>{book.title}</span><i>{["✦","❧","✧"][i]}</i></div>)}</div>
              <div className="shelf-wood"/>
              <div className="shelf-foot"><span>{lang === "ru" ? "Личная библиотека" : "Personal library"}</span><span>0 / ∞ {lang === "ru" ? "книг" : "books"}</span></div>
            </div>
          </section>

          <section className="section-block">
            <div className="section-heading"><div><span className="section-kicker">COMMUNITY PICKS</span><h2>{t.popular}</h2></div><button className="text-link" onClick={() => setActive("catalog")}>{t.all}<ChevronRight size={16}/></button></div>
            <div className="book-grid">{books.filter(b => (b.title + b.author).toLowerCase().includes(query.toLowerCase())).map(book => <article className="book-card" key={book.title}><div className={`book-cover ${book.color}`}><span className="cover-mark">{book.mark}</span><div className="cover-decoration">✧</div><strong>{book.title}</strong><small>{book.author}</small></div><div className="book-meta"><div><h3>{book.title}</h3><p>{book.author}</p></div><button className="save-button" aria-label="Save book"><Bookmark size={17}/></button></div><div className="book-tags"><span>{book.genre}</span><span><Star size={12}/> —</span></div></article>)}</div>
            {books.filter(b => (b.title + b.author).toLowerCase().includes(query.toLowerCase())).length === 0 && <p className="empty-state">{lang === "ru" ? "Ничего не найдено. Попробуйте другой запрос." : "Nothing found. Try another search."}</p>}
          </section>

          <section className="community-banner">
            <div className="quote-mark"><Quote size={23}/></div><div><span className="section-kicker">A LITTLE INSPIRATION</span><p>“{t.quote}”</p></div><div className="banner-flower">✳</div>
          </section>

          <section className="join-panel"><div className="join-icon"><Headphones size={22}/></div><div><h2>{t.start}</h2><p>{t.startSub}</p></div><button className="primary-button">{t.create}<ChevronRight size={17}/></button></section>
          <footer><span>readerly<span className="brand-dot">.</span> © 2026</span><span>{lang === "ru" ? "Создано для тех, кто любит читать" : "Made for those who love to read"}</span><span><TrendingUp size={14}/> {lang === "ru" ? "Истории объединяют" : "Stories bring us together"}</span></footer>
        </div>
      </section>
    </main>
  );
}
