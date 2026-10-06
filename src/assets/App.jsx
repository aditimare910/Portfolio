import { useEffect, useState } from "react";

const EMAIL = "aditimare951@gmail.com";
const NAV = ["Home", "About", "Skills", "Projects", "Contact"];

const SKILLS = [
  ["HTML5", "Semantic HTML, Forms, Tables"],
  ["CSS3", "Flexbox, Grid, Responsive Design"],
  ["JavaScript", "DOM, Events, ES6 Basics"],
  ["React", "Components, Hooks, Routing"],
  ["Node.js", "Learning Backend Development"],
  ["Bootsrap", "Navbar,Cards,etc"],
  ["Express.js", "REST API Basics"],
  ["Git & GitHub", "Version Control"],
];

// Fill in live / github links to show their buttons. Leave "" to hide.
const PROJECTS = [
  {
    title: "Movie Search", img: "/images/moviesearch.jpg", tech: ["React", "Vite", "TMDB API","plain CSS"],
    desc: "A React app to search movies, open details pages and save favorites.", 
    demo: "moviesearch-demo.mp4", 
    live: "",
     github: ""
  },
  {
    title: "TrendCart", img: "/images/trendcart.jpg", tech: ["HTML", "CSS", "JavaScript"],
    desc: "A responsive e-commerce website with a working cart and product search.", 
    demo: "trendcart-demo.mp4", 
    live: "", 
    github: ""
  },
  {
    title: "Spotify Clone", img: "/images/spotifyclone.jpg", tech: ["HTML", "CSS"],
    desc: "A responsive music player interface inspired by Spotify.",
     demo: "spotify-demo.mp4", 
     live: "https://aditimare910.github.io/Spotify-Interface-Clone/",
      github: "https://github.com/aditimare910/Spotify-Interface-Clone.git"
  },
  {
    title: "Jewellery Website", img: "/images/jwellery.jpg", tech: ["HTML", "CSS", "JavaScript"],
    desc: "An elegant jewellery website with a product showcase and smooth navigation.", 
    demo: "jewellery-demo.mp4", 
    live: "https://aditimare910.github.io/Jewellery-website/",
     github: "https://github.com/aditimare910/Jewellery-website.git"
  },
  {
    title: "Pizza Website", img: "/images/pizza.jpg", tech: ["HTML", "CSS", "JavaScript"],
    desc: "A responsive restaurant website with a menu, food gallery and interactive UI.", 
    demo: "pizza-demo.mp4", 
    live: "https://aditimare910.github.io/Pizza-selling-website/", 
    github: "https://github.com/aditimare910/Pizza-selling-website.git"
  },
];

const Title = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
    {children}
    <span className="block w-16 h-1 bg-violet-500 rounded mx-auto mt-3" />
  </h2>
);

const card = "bg-white/5 border border-white/10 rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-violet-500/60";
const link = "px-4 py-2 rounded-lg text-sm font-medium border border-violet-500/60 text-violet-300 hover:bg-violet-600 hover:text-white transition";

export default function App() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [top, setTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setTop(scrollY > 300);
      let c = "home";
      NAV.forEach((n) => {
        const el = document.getElementById(n.toLowerCase());
        if (el && scrollY >= el.offsetTop - 120) c = n.toLowerCase();
      });
      setActive(c);
    };
    onScroll();
    addEventListener("scroll", onScroll);
    return () => removeEventListener("scroll", onScroll);
  }, []);

  const send = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Portfolio message from " + f.get("name"))}&body=${encodeURIComponent(f.get("message") + "\n\nReply to: " + f.get("email"))}`;
  };

  const input = "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-violet-500";

  return (
    <div>
      <header className="fixed top-0 inset-x-0 z-50 bg-slate-950/80 backdrop-blur border-b border-white/10">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="text-xl font-bold text-violet-400">Aditi Mare</a>
          <button className="md:hidden text-2xl" aria-label="Menu" onClick={() => setOpen(!open)}>☰</button>
          <ul className={`${open ? "flex" : "hidden"} md:flex absolute md:static top-16 inset-x-0 flex-col md:flex-row gap-1 bg-slate-950 md:bg-transparent p-4 md:p-0 border-b md:border-0 border-white/10`}>
            {NAV.map((n) => (
              <li key={n}>
                <a href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)}
                  className={`block px-4 py-2 rounded-lg text-sm font-medium transition ${active === n.toLowerCase() ? "bg-violet-600 text-white" : "text-slate-300 hover:text-violet-300"}`}>
                  {n}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section id="home" className="relative overflow-hidden min-h-screen flex items-center pt-24 pb-12">
        <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative">
          <div className="order-2 md:order-1 text-center md:text-left">
            <p className="text-violet-400 font-medium">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold mt-2">Aditi Mare</h1>
            <h2 className="text-xl md:text-2xl text-slate-300 mt-3">Web Development Student</h2>
            <p className="text-slate-400 leading-relaxed mt-5 max-w-xl mx-auto md:mx-0">
              I enjoy building responsive and user-friendly websites using HTML, CSS, JavaScript and React.
              I'm currently learning full-stack development and love creating real-world projects.
            </p>
            <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
              <a href="#projects" className="px-7 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 font-medium transition">View Projects</a>
              <a href="#contact" className="px-7 py-3 rounded-lg border border-violet-500/60 text-violet-300 hover:bg-violet-600/20 font-medium transition">Contact Me</a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="p-1 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500">
              <img src="/images/profile.jpg" alt="Aditi Mare" className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover bg-slate-900" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-4xl mx-auto px-6 py-20">
        <Title>About Me</Title>
        <div className="text-slate-300 leading-relaxed space-y-4 text-center">
          <p>Hello! I'm <strong className="text-white">Aditi Mare</strong>, a Web Development student who enjoys designing clean and responsive websites using HTML, CSS, and JavaScript.</p>
          <p>I am currently learning React, Node.js and Express.js to become a Full Stack Web Developer. I enjoy solving problems, learning new technologies, and building projects that improve my skills.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 mt-10">
          {[["🎓", "Course", "BCA"], ["📍", "Location", "Maharashtra, India"], ["💻", "Interest", "Web Development"]].map(([i, k, v]) => (
            <div key={k} className={`${card} p-5 text-center`}>
              <div className="text-2xl">{i}</div>
              <p className="text-sm text-slate-400 mt-1">{k}</p>
              <p className="font-semibold">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
        <Title>My Skills</Title>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map(([n, d]) => (
            <div key={n} className={`${card} p-6`}>
              <h3 className="text-lg font-semibold text-violet-300">{n}</h3>
              <p className="text-slate-400 text-sm mt-1">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <Title>My Projects</Title>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <article key={p.title} className={`${card} overflow-hidden flex flex-col`}>
              <div className="h-44 bg-gradient-to-br from-violet-900/50 to-slate-900">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" onError={(e) => (e.currentTarget.style.display = "none")} />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-slate-400 text-sm mt-2 flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tech.map((t) => <span key={t} className="text-xs px-3 py-1 rounded-full bg-violet-500/15 text-violet-300">{t}</span>)}
                </div>
                <div className="flex flex-wrap gap-3 mt-5">
                  {p.live && <a className={link} href={p.live} target="_blank" rel="noreferrer">Live</a>}
                  {p.demo && <a className={link} href={encodeURI(p.demo)} target="_blank" rel="noreferrer">Watch Demo</a>}
                  {p.github && <a className={link} href={p.github} target="_blank" rel="noreferrer">GitHub</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
        <Title>Contact Me</Title>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold">Let's Connect</h3>
            <p className="text-slate-400 mt-3">Have a project, an internship or a question? Send me a message.</p>
            <p className="mt-6">📧 <a className="text-violet-300 hover:underline" href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
            <p className="mt-2">📍 Maharashtra, India</p>
          </div>
          <form onSubmit={send} className="space-y-4">
            <input className={input} name="name" placeholder="Your Name" required />
            <input className={input} name="email" type="email" placeholder="Your Email" required />
            <textarea className={input} name="message" rows="5" placeholder="Your Message" required />
            <button className="w-full py-3 rounded-lg bg-violet-600 hover:bg-violet-500 font-medium transition">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 py-6 text-center text-sm text-slate-400">
        © 2026 Aditi Mare. All Rights Reserved.
      </footer>

      {top && (
        <button aria-label="Back to top" onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 w-11 h-11 rounded-full bg-violet-600 hover:bg-violet-500 text-xl shadow-lg transition">↑</button>
      )}
    </div>
  );
}
