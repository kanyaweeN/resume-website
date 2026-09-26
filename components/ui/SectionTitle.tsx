/**
 * หัวข้อของแต่ละ section — เดิมอยู่ท้ายไฟล์ `About.tsx` แล้วอีก 4 section import ข้ามมาเอา
 * ย้ายมาไว้ที่นี่ตามกฎ: ของที่ใช้ข้าม component ต้องอยู่ `components/ui/` ไม่ใช่ห้อยอยู่กับ section ใด section หนึ่ง
 */
export function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center">
      <p className="text-indigo-500 text-sm font-semibold tracking-widest uppercase mb-2">{subtitle}</p>
      <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">{title}</h2>
      <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
    </div>
  );
}
