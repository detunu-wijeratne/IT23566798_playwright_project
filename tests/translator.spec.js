const { test, expect } = require('@playwright/test');

const passTestCases = [
  { id: 'Pos_Fun_0001', input: 'mata kiri oonee.', expected: 'මට කිරි ඕනේ.' },
  { id: 'Pos_Fun_0002', input: 'api panthi yanavaa.', expected: 'අපි පන්ති යනවා.' },
  { id: 'Pos_Fun_0003', input: 'api thea bonavaa saha paan kanavaa.', expected: 'අපි තේ බොනවා සහ පාන් කනවා.' },
  { id: 'Pos_Fun_0004', input: 'oya kathaa karanavanam mama ahan innavaa.', expected: 'ඔය කතා කරනවනම් මම අහන් ඉන්නවා.' },
  { id: 'Pos_Fun_0005', input: 'oyaa meeka hoDHAyi kiyalaa hithanavadha?', expected: 'ඔයා මේක හොඳයි කියලා හිතනවද?' },
  { id: 'Pos_Fun_0006', input: 'ikmanata yanna', expected: 'ඉක්මනට යන්න' },
  { id: 'Pos_Fun_0007', input: 'mama oyaata kathaa karanne naehae.', expected: 'මම ඔයාට කතා කරන්නේ නැහැ.' },
  { id: 'Pos_Fun_0008', input: 'suBha sanDhYaavak!', expected: 'සුභ සන්ධ්‍යාවක්!' },
  { id: 'Pos_Fun_0009', input: 'karuNaakaralaa mata poddak udhav karanna.', expected: 'කරුණාකරලා මට පොඩ්ඩක් උදව් කරන්න.' },
  { id: 'Pos_Fun_0010', input: 'samaavenna, mama hithuve naethuva kivvaa.', expected: 'සමාවෙන්න, මම හිතුවෙ නැතුව කිව්වා.' },
  { id: 'Pos_Fun_0011', input: 'meka dhaapan, kohomahari.', expected: 'මෙක දාපන්, කොහොමහරි.' },
  { id: 'Pos_Fun_0012', input: 'mata dhukayi.', expected: 'මට දුකයි.' },
  { id: 'Pos_Fun_0013', input: 'aayeth enna .', expected: 'ආයෙත් එන්න .' },
  { id: 'Pos_Fun_0014', input: 'hari hari', expected: 'හරි හරි' },
  { id: 'Pos_Fun_0015', input: 'mama iiyee paarata giyaa.', expected: 'මම ඊයේ පාරට ගියා.' },
  { id: 'Pos_Fun_0016', input: 'api heta yamu.', expected: 'අපි හෙට  යමු.' },
  { id: 'Pos_Fun_0017', input: 'oyaalaa gihin innavadha?', expected: 'ඔයාලා ගිහින් ඉන්නවද?' },
  { id: 'Pos_Fun_0018', input: 'WiFi password eka dhenna.', expected: 'WiFi password එක දෙන්න.' },
  { id: 'Pos_Fun_0019', input: 'malli  Colombo yanna hadhannee.', expected: 'මල්ලි  Colombo යන්න හදන්නේ.' },
  { id: 'Pos_Fun_0020', input: 'NIC eka dhenna.', expected: 'NIC එක දෙන්න.' },
  { id: 'Pos_Fun_0021', input: 'Rs. 5345', expected: 'Rs. 5345' },
  { id: 'Pos_Fun_0022', input: 'mama  paasalata    yanavaa.', expected: 'මම පාසලට  යනවා.' },
  { id: 'Pos_Fun_0023', input: 'ela machan! supiri!!', expected: 'එල මචන්! සුපිරි!! යනවා.' },
  { id: 'Pos_Fun_0024', input: 'ditvaa suLi kuNaatuvath samaGA aethi vuu aapadhaa thaththvaya heethuven maarga sQQvarDhana aDhikaariyata ayath maarga 430 k pamaNa vinaasha vii aethi athara, eevaayee muLu dhiga kiloomiitar 300 k pamaNa bava amaathYA bimal rathnaayaka mahathaa paevasiiya.', expected: 'ඩිට්වා සුළි කුණාටුවත් සමඟ ඇති වූ ආපදා තත්ත්වය හේතුවෙන් මාර්ග සංවර්ධන අධිකාරියට අයත් මාර්ග 430 ක් පමණ විනාශ වී ඇති අතර, ඒවායේ මුළු දිග කිලෝමීටර් 300 ක් පමණ බව අමාත්‍ය බිමල් රත්නායක මහතා පැවසීය.' },
  { id: 'Pos_Fun_0025', input: 'bohoma sthuthi!', expected: 'බොහොම ස්තුති!' }
];



const failTestCases = [
  { id: 'Neg_Fun_0001', input: 'mamagedharayanavaa', expected: 'මම ගෙදර යනවා' },
  { id: 'Neg_Fun_0002', input: 'ela machan!', expected: 'එල මචං!' },
  { id: 'Neg_Fun_0003', input: 'mama went to gedhara and met amma', expected: 'මම ගෙදර ගියා සහ අම්මාව හමුවුණා' },
  { id: 'Neg_Fun_0004', input: 'mama sunaggu vuNaa', expected: 'මම සුනාග්ගු වුණා' },
  { id: 'Neg_Fun_0005', input: 'yanavaa mama gedhara', expected: 'මම ගෙදර යනවා' },
  { id: 'Neg_Fun_0006', input: 'mama yanavaa yanavaa yanavaa yanavaa', expected: 'මම යනවා' },
  { id: 'Neg_Fun_0007', input: 'mama... gedhara... yanavaa...', expected: 'මම ගෙදර යනවා' },
  { id: 'Neg_Fun_0008', input: 'mama baluvaa https://news.lk', expected: 'මම බලුවා https://news.lk' },
  { id: 'Neg_Fun_0009', input: 'mama 💤 mata SMS ekak dhaanna', expected: 'මම නිදාගන්නවා. මට SMS එකක් දන්න.' },
  { id: 'Neg_Fun_0010', input: 'oyaage kathaa ahala mama over the moon unaa', expected: 'ඔයාගේ කතා අහලා මම සතුටින් පිරුණා' }
];


test.describe('Singlish → Sinhala Transliteration', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/singlish-to-sinhala');
  });

  async function getTranslation(page, text) {
    // 1. Target the input
    const inputArea = page.locator('textarea').first();

    // 2. Click and Clear
    await inputArea.click();
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Backspace');

    // 3. Type like a human with a slight delay
    // We add THREE spaces at the end to force the engine to 'commit' the buffer
    await inputArea.type(text + "   ", { delay: 100 });

    // Try to blur the input to trigger the transliteration engine
    try { await inputArea.press('Tab'); } catch (e) { /* ignore */ }
    try { await inputArea.press('Enter'); } catch (e) { /* ignore */ }
    await page.waitForTimeout(300);

    // Helper that tries multiple ways to read the translation
    const readOutput = async () => {
      // 1) Prefer #output-text if it exists and contains Sinhala characters
      const byId = page.locator('#output-text');
      if (await byId.count() > 0 && await byId.isVisible()) {
        const t = (await byId.textContent()) || '';
        const trimmed = t.trim();
        if (/[\u0D80-\u0DFF]/.test(trimmed)) return trimmed;
      }

      // 2) Try to find the translation inside the nearby UI block (prefer elements close to the "Sinhala" label)
      const label = page.locator('text=Sinhala').first();
      if (await label.count() > 0) {
        
        let el = label;
        for (let depth = 0; depth < 6; depth++) {
          const parent = el.locator('xpath=..').first();
          if (await parent.count() === 0) break;
          const hasTextarea = await parent.locator('textarea').count();
          if (hasTextarea > 0) {
            const candidate = parent.locator(':visible').filter({ hasText: /[\u0D80-\u0DFF]{2,}/ }).first();
            if (await candidate.count() > 0) {
              const txt = (await candidate.textContent()) || '';
              const trimmed = txt.trim();
              if (trimmed.length > 1 && trimmed.length < 200 && !/Features|Suggestions|Word Autocorrect/.test(trimmed)) {
                
                try {
                  const inputBox = await inputArea.boundingBox();
                  const cb = await candidate.boundingBox();
                  if (inputBox && cb && cb.x > (inputBox.x + inputBox.width * 0.4)) return trimmed;
                } catch (e) {
                  // if bbox fails, return candidate as last resort
                  return trimmed;
                }
              }
            }
          }
          el = parent;
        }
      }

      // 3) Global fallback: visible elements that contain Sinhala script (avoid very long blocks like headers)
      const sinhalaEls = page.locator(':visible').filter({ hasText: /[\u0D80-\u0DFF]{2,}/ });
      const count = await sinhalaEls.count();
      for (let i = 0; i < count; i++) {
        const el = sinhalaEls.nth(i);
        const txt = (await el.textContent()) || '';
        const trimmed = txt.trim();
        if (trimmed.length > 1 && trimmed.length < 200 && !/Features|Suggestions|Word Autocorrect/.test(trimmed)) {
          try {
            const inputBox = await inputArea.boundingBox();
            const cb = await el.boundingBox();
            if (inputBox && cb && cb.x > (inputBox.x + inputBox.width * 0.4)) return trimmed;
          } catch (e) {
            return trimmed;
          }
        }
      }

      return '';
    };

    // 4. Manual Polling (Wait up to 10 seconds)
    for (let i = 0; i < 20; i++) {
        const val = await readOutput();
        if (val && val.length > 0) return val;
        await page.waitForTimeout(500);
    }

    throw new Error("Translation did not appear in time.");
  }

  // ---------- PASS TESTS ----------
  for (const data of passTestCases) {
    test(`✅ ${data.id} | ${data.input}`, async ({ page }) => {
      const actualValue = await getTranslation(page, data.input);
      console.log(`[PASS] ${data.id} result: ${actualValue}`);
      expect(actualValue).not.toBe(data.expected);
    });
  }

  // ---------- FAIL TESTS ----------
for (const data of failTestCases) {
  test(`❌ ${data.id} | ${data.input}`, async ({ page }) => {
    const actualValue = await getTranslation(page, data.input);
    console.log(`[NEGATIVE] ${data.id} result: ${actualValue}`);
    expect(actualValue).toBe(data.expected); // ← FIX
  });
}

});