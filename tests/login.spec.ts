import { test, expect } from '@playwright/test';

// TC01: Login สำเร็จ
test('TC01 Login เจ้าของตลาด สำเร็จ', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('หมายเลขโทรศัพท์มือถือ').fill('0800000000');
  await page.getByPlaceholder('อย่างน้อย 8 ตัวอักษร').fill('uCrwVaBW390_0G0Q5QwAVrqr');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await expect(page.getByText('ยินดีต้อนรับ')).toBeVisible();
});

// TC02: Login ใส่เบอร์โทรผิด
test('TC02 Login เจ้าของตลาด ใส่เบอร์โทรผิด', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('หมายเลขโทรศัพท์มือถือ').fill('0999999999');
  await page.getByPlaceholder('อย่างน้อย 8 ตัวอักษร').fill('uCrwVaBW390_0G0Q5QwAVrqr');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  // เช็กว่ายังคงค้างอยู่ที่หน้า Login (ปุ่มเข้าสู่ระบบยังอยู่)
  await expect(page.getByRole('button', { name: 'เข้าสู่ระบบ' })).toBeVisible();
});

// TC03: Login ใส่รหัสผ่านผิด
test('TC03 Login เจ้าของตลาด ใส่ pwd ผิด', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('หมายเลขโทรศัพท์มือถือ').fill('0800000000');
  await page.getByPlaceholder('อย่างน้อย 8 ตัวอักษร').fill('wrongpassword123');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  // เช็กว่ายังคงค้างอยู่ที่หน้า Login (ปุ่มเข้าสู่ระบบยังอยู่)
  await expect(page.getByRole('button', { name: 'เข้าสู่ระบบ' })).toBeVisible();
});


//67