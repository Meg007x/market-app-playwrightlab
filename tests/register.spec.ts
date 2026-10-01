import { test, expect } from '@playwright/test';

test('TC01 เปิดหน้าแรกสำเร็จ', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/ระบบบริหารจัดการตลาด|ตลาดให้เช่า/);
});

test('TC02 ตรวจสอบการแสดงผลปุ่มเข้าสู่ระบบ', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('button', { name: 'เข้าสู่ระบบ' })).toBeVisible();
});

test('TC03 ตรวจสอบข้อความบนหน้าจอหลัก', async ({ page }) => {
  await page.goto('/');
  // ใช้ .first() เพื่อระบุเลือกข้อความแรกที่พบ
  await expect(page.getByText('ตลาดให้เช่า').first()).toBeVisible();
});