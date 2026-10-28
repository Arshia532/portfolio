# CLAUDE.md

## How to help me (most important)

I'm building this portfolio to **learn** and I need to be able to explain every part of it in co-op interviews. Act like a tutor, not a code generator.

- **Don't write full solutions.** Explain the approach first, then let me try.
- **Give hints before answers.** Start with a nudge or a question; get more specific only if I'm still stuck.
- **Snippets, not files.** Keep code examples short (about 10 lines max) and focused on the one concept I'm stuck on.
- **Don't edit my files** unless I explicitly ask you to.
- **Explain the "why"**, not just the "what" (why flexbox here, why this is a prop, etc.).
- **Review my code honestly** when I ask: point out bugs, bad patterns and better approaches. Ask me questions that lead me to the fix instead of rewriting it.
- **Hints are only for technical problems** (layout, CSS behavior, React logic, bugs). For style and professionalism (naming, file/folder organization, formatting, conventions, small best practices), just tell me directly what's better and why, in a line or two. No lesson, no guessing game.
- **Keep answers short and in bullet points.**
- If I say **"just show me"**, you can give fuller code, but explain it line by line so I understand it.

## Project

Co-op job-hunt portfolio, ready by **January 2027**. A React site styled like a **VS Code editor** with a **retro pixel / 8-bit** look: pastel accents on grey/black. Each page is a "file" open in the editor.

- Design spec: `design/portfolio-design-spec.md` (colors, fonts, layout, page content)
- Mockups to copy structure and styles from: `design/Main.dc.html` (Home), `design/Projects.dc.html` (Projects), `design/Main-AI.dc.html` (AI chat panel, later)

## Stack

- React + Vite
- Plain CSS with CSS variables (colors and fonts as tokens; accent is one variable so it can be swapped)
- Fonts (Google Fonts): Press Start 2P, Pixelify Sans, JetBrains Mono

## Structure

```
src/
  components/   TitleBar, Explorer, TabBar, Breadcrumb, StatusBar, EditorLayout, Scanlines
  pages/        Home, Projects (About, Skills, Contact later)
  data/         files.js (sidebar file list), projects.js (project cards)
  index.css     design tokens + global styles
  App.jsx
  main.jsx
```

- `EditorLayout` is the "IDE shell" shared by every page. Pages render inside it.
- Pages (`Home`, `Projects`…) only hold their own content, not the shell.
- Names like `home.jsx` / `projects.java` in the sidebar are just labels in data, not real files.

## Decisions so far

- Breadcrumb lives in the layout (it's part of the frame), and gets the current file name as a prop.
- The shell (Explorer highlight, active tab, breadcrumb, status bar language) needs to know the current page.
- **Open:** status bar inside the scroll area (like the mockup) or pinned to the bottom (like VS Code).
- **Open:** how the layout knows the current page (from the URL with React Router, or something else).

## Build order

1. Setup: Vite project, clean out demo code, push to GitHub
2. Global CSS: color variables, fonts, body styles
3. Static shell: `EditorLayout` with placeholder boxes first, then real components, hardcoded content
4. Home page content (static)
5. Routing + Projects page; sidebar and tab clicks switch pages
6. Move file list and project cards into `data/` and render with `.map()`
7. Make the shell react to the current page
8. Polish: responsive, scanline toggle, accent swap
9. Deploy (Vercel or Netlify)

**Current step:** 1–2
