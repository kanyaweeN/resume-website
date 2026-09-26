<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# resume-website

เว็บโปรไฟล์หน้าเดียว static ล้วน — ไม่มี state ที่ต้องเก็บ ไม่มี backend
กฎกลางอยู่ที่ [`../PROJECT-STANDARD.md`](../PROJECT-STANDARD.md) · รายละเอียดหน้าเว็บที่ [`README.md`](./README.md)

- **port 3003** pin ไว้ทั้งใน `package.json` และ `.claude/launch.json` ห้ามเปลี่ยน
- **CSS track A (Tailwind v4)** — สีทั้งหมดใช้ utility ของ Tailwind + `dark:` variant
  ธีมมาจาก next-themes (`attribute="class"`) อย่าเขียน CSS ไฟล์แยกเพิ่ม
- **โครง component**: `ui/` = primitive ไร้ domain (มี barrel) · `sections/` = 1 section ของหน้า ·
  `shell/` = โครงหน้า — component ใหม่ต้องเลือกให้ถูกกอง อย่าโยนไว้ที่ `components/` เปล่า ๆ
- **ของที่ 2 section ขึ้นไปใช้ → ย้ายเข้า `components/ui/` ทันที** ห้าม import ข้าม section
  (เคยเป็นแบบนั้นมาแล้ว: `SectionTitle` ห้อยอยู่ท้าย `About.tsx` แล้วอีก 4 section ดึงข้ามมาใช้)
- **ห้าม `setState` ใน `useEffect`** เพื่อเช็กว่า mount แล้วหรือยัง — ใช้ `useMounted`
  จาก `@/hooks/useClientValue` (ของกลางจาก `app-template/`)
- `page.tsx` ประกอบ section เท่านั้น ห้ามมี logic

## ก่อนบอกว่าเสร็จ

```bash
npm run lint && npm run typecheck && npm run build
```
