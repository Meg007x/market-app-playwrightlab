import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    // 1. ตั้งค่า URL หลักของเว็บ
    baseURL: 'http://127.0.0.1:5173',
    trace: 'on-first-retry',
  },

  /* 2. กำหนดให้รันเฉพาะ Chromium (Chrome) อย่างเดียว */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // ปิดการรัน firefox และ webkit เพื่อไม่ให้ติดปัญหา DLL ในเครื่อง
  ],

  /* 3. สั่งให้เปิด Server อัตโนมัติก่อนเริ่มเทส (ตรงตามเอกสารแลปอาจารย์) */
  webServer: {
    command: 'npm run dev -- --host 0.0.0.0',
    url: 'http://127.0.0.1:5173',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});