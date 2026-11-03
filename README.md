# Anuj Chourasiya | Portfolio

Personal portfolio of **Anuj Chourasiya**, a backend and DevOps engineer working with Java, Spring Boot, microservices, and Docker.

**Live site:** https://anuj-code-ai.github.io/

---

## About

This site presents my projects, skills, and learning path. It is a single static page with no build step, no framework, and no JavaScript dependencies, so it loads fast and is easy to host anywhere.

## Sections

| Section | Contents |
|---|---|
| Hero | Role summary and key numbers from my resume |
| Projects | CampusHive, Microservices Architecture, Multi-Tenant RAG-as-a-Service, Hotel Management System |
| RAG case study | Problem, solution, architecture, API workflows, design goals, and stack for the platform I am currently building |
| Skills | Grouped into backend engineering and DevOps |
| Journey | Timeline of how my projects progressed |
| Contact | Email, GitHub, LinkedIn, resume download |

## Featured projects

| Project | Summary | Links |
|---|---|---|
| **CampusHive** | Multi-university event platform with 70+ secured REST endpoints and 9 Dockerized services | [Live](https://campushive.online) |
| **Microservices Architecture** | Fault-tolerant distributed job scheduler with retries, a dead-letter queue, and circuit breakers | [Repo](https://github.com/Anuj-code-AI/Microservices-Architecture) |
| **Multi-Tenant RAG-as-a-Service** | API-first AI platform with tenant-isolated retrieval. *Under construction.* | [Repo](https://github.com/Anuj-code-AI/Multi-Tenant-Rag-System) |
| **Hotel Management System** | Java, JDBC, and MySQL console application for bookings and billing | n/a |

## Tech

- HTML5 and CSS3 (custom properties, grid, flexbox), no framework
- Fonts: Inter and IBM Plex Mono via Google Fonts
- Fully responsive, keyboard-focusable, semantic markup
- Hosted on GitHub Pages

## Project structure

```
.
├── index.html        # the entire site (markup and styles)
├── Resume_1.pdf      # resume linked from the nav and contact section
└── README.md
```

## Run locally

No installation is needed.

```bash
git clone https://github.com/Anuj-code-AI/anuj-code-ai.github.io.git
cd anuj-code-ai.github.io

# Option 1: open index.html directly in a browser
# Option 2: serve it locally
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

The site is deployed with GitHub Pages from the `main` branch.

1. Push changes to `main`.
2. In the repository, go to **Settings → Pages**.
3. Set the source to **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. The site is available at `https://<username>.github.io/`.

## Customizing

- **Colors:** edit the CSS variables in the `:root` block at the top of `index.html`.
- **Projects:** each project is an `<article class="card">` in the `#projects` section.
- **Resume:** replace `Resume_1.pdf` and keep the filename, or update the links in the nav and contact section.

## Contact

- Email: achourasiyaanuj@gmail.com
- LinkedIn: https://www.linkedin.com/in/anujchourasiya
- GitHub: https://github.com/Anuj-code-AI

## License

All content, including text and project descriptions, is © Anuj Chourasiya. The page structure and styling may be used as a reference, but please do not copy the content as your own.
