# resume-website

เว็บโปรไฟล์/เรซูเม่หน้าเดียว — static ล้วน ไม่มีข้อมูลผู้ใช้ ไม่มี localStorage ไม่มี backend

Next.js 16 (App Router) + React 19 + TypeScript strict + **Tailwind v4** (CSS track A ตาม
[`../PROJECT-STANDARD.md`](../PROJECT-STANDARD.md) ข้อ 1.1) + next-themes

## เริ่มต้น

```bash
npm install
npm run dev
```

เปิด **http://localhost:3003** — port นี้จองไว้ให้ app นี้ (ตาราง port อยู่ใน `PROJECT-STANDARD.md` ข้อ 8)

## Scripts

| Command | ทำอะไร |
| --- | --- |
| `npm run dev` | Dev server (Turbopack) — port 3003 |
| `npm run build` | Production build |
| `npm start` | รัน production build — port 3003 |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |

## โครงสร้าง

```
app/
  layout.tsx              root layout + ThemeProvider
  page.tsx                ประกอบ section ทั้งหมด — ไม่มี logic
  globals.css             Tailwind + token
components/
  ui/                     primitive ไร้ domain + barrel index.ts
    SectionTitle · ThemeToggle
  sections/               1 section ของหน้า = 1 ไฟล์
    Hero · About · Skills · Experience · Projects · Contact
  shell/
    Navbar.tsx            แถบบน (sticky + เมนูมือถือ)
hooks/
  useClientValue.ts       useMounted() — ของกลางจาก app-template
lib/
  utils.ts                cn() — ของกลางจาก app-template
```

Import ด้วย `@/...` ทุกที่ — relative ใช้ได้เฉพาะไฟล์ข้าง ๆ กันใน `components/ui/`

## แก้เนื้อหา

ข้อความ/ข้อมูลของแต่ละ section เป็น array คงที่อยู่บนหัวไฟล์ section นั้น ๆ
(`stats` ใน `About.tsx`, `navLinks` ใน `Navbar.tsx` ฯลฯ) — แก้ตรงนั้นได้เลย

## หมายเหตุเวอร์ชัน 0.2.0

- แยก `components/` แบนราบเป็น `ui/` · `sections/` · `shell/`
- `SectionTitle` ย้ายจากท้าย `About.tsx` มาเป็น primitive จริง (เดิม 4 section import ข้ามมาเอา)
- `ThemeToggle` แยกออกจาก `Navbar.tsx` และเลิกใช้ `useState` + `useEffect` เช็ก mount
- เพิ่ม `lib/utils.ts` (`cn()`) และ `hooks/useClientValue.ts` ของกลาง
- pin port 3003

## ยังไม่มี

- **test** — หน้านี้เป็น static ไม่มี logic ให้เทสต์ (ไม่เข้าเงื่อนไขบังคับใน `PROJECT-STANDARD.md` ข้อ 7)
