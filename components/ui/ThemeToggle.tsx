"use client";

import { useTheme } from "next-themes";
import { useMounted } from "@/hooks/useClientValue";

/**
 * สลับ light / dark — เดิมเขียนไว้ในไฟล์ `Navbar.tsx` ทั้งที่ไม่ผูกกับ nav เลย
 *
 * ก่อน hydrate เสร็จยังไม่รู้ธีมจริง จึงกันที่ว่างขนาดเท่าปุ่มไว้ก่อน ไม่ให้เลย์เอาต์กระโดด
 * ใช้ `useMounted` (useSyncExternalStore) แทน `useState` + `useEffect` เพราะ setState ใน effect
 * ทำให้เรนเดอร์ซ้อนและ React 19 ขึ้น lint error `set-state-in-effect`
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-9 h-9 rounded-full flex items-center justify-center border border-gray-700 dark:border-gray-700 hover:border-indigo-400 transition-colors text-gray-500 dark:text-gray-400 hover:text-indigo-400"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10A5 5 0 0012 7z" />
        </svg>
      ) : (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
}
