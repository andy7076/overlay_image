// ===== i18n =====
const I18N = {
  en: {
    pageTitle: 'Image Overlay Compare – Free Online Tool to Compare Two Images Side by Side',
    metaDescription: 'Free online image overlay & compare tool. Upload two images, overlay them with adjustable opacity, blend modes, drag, stretch and zoom to spot pixel differences. 100% browser-based, no upload to server.',
    title: 'Image Overlay Compare',
    subtitle: 'Upload two images and overlay them to spot differences. The second image is semi-transparent by default.',
    seo_features_h: 'Why use this image overlay tool?',
    seo_features_p: 'This free online image comparison tool lets you overlay two pictures and instantly see their differences. It runs entirely in your browser — no sign-up, no uploads to any server, and no watermarks. Designers, developers, photographers, and QA testers can use it to verify pixel-perfect implementations, spot visual regressions, compare photo edits, and align design mockups.',
    seo_f1: '<strong>Privacy-first:</strong> 100% client-side; your images never leave your device.',
    seo_f2: '<strong>Adjustable opacity:</strong> Fade the overlay from 0% to 100% to reveal differences gradually.',
    seo_f3: '<strong>Blend modes:</strong> Use <em>Difference</em> to instantly highlight any mismatched pixels.',
    seo_f4: '<strong>Drag, stretch &amp; zoom:</strong> Freely move, resize, or stretch the overlay; Shift-drag to keep aspect ratio.',
    seo_f5: '<strong>Hide overlay:</strong> Quickly toggle the second image off to confirm the base without removing state.',
    seo_f6: '<strong>Bilingual:</strong> English and Simplified Chinese interface.',
    seo_faq_h: 'Frequently Asked Questions',
    faq_q1: 'How do I compare two images for differences?',
    faq_a1: 'Upload two images, then drag the opacity slider or choose the <em>Difference</em> blend mode. The overlay layer can be moved or resized to align with the base image.',
    faq_q2: 'Are my images uploaded to a server?',
    faq_a2: 'No. All image processing happens locally in your browser using standard HTML5 and CSS. Your files never leave your device.',
    faq_q3: 'Can I stretch the second image to a different size?',
    faq_a3: 'Yes. Drag any corner handle to resize freely, drag an edge handle to stretch a single axis, or hold Shift on a corner handle to preserve the original aspect ratio.',
    faq_q4: 'Which image formats are supported?',
    faq_a4: 'Any image format your browser can display: PNG, JPEG, WebP, GIF, SVG, BMP, and more.',
    footer: '© Image Overlay Compare · A free, privacy-friendly tool for comparing two images in the browser.',
    layer1: 'Base · Image 1',
    layer2: 'Overlay · Image 2',
    uploadHint: 'Click or drop an image here',
    uploadHint2: 'Click or drop (semi-transparent by default)',
    opacity: 'Image 2 opacity',
    scale: 'Image 2 scale',
    blend: 'Blend mode',
    blend_normal: 'Normal',
    blend_diff: 'Difference',
    blend_multiply: 'Multiply',
    blend_screen: 'Screen',
    blend_overlay: 'Overlay',
    blend_darken: 'Darken',
    blend_lighten: 'Lighten',
    blend_exclusion: 'Exclusion',
    dragOn: '✋ Drag: ON',
    dragOff: '✋ Drag: OFF',
    visOn: '👁 Show Image 2',
    visOff: '🚫 Image 2 hidden',
    fit: '⤢ Fit',
    actual: '1:1 Actual',
    matchBase: '⇆ Match base',
    swap: '⇅ Swap',
    clear: '✕ Clear',
    placeholder: 'Please upload two images',
    placeholder1: 'Upload one more image to compare',
    tip: 'Tip: Drag Image 2 to move. Drag the handles to resize/stretch. Scroll wheel to zoom.',
  },
  zh: {
    pageTitle: '图片重叠对比工具 – 在线免费比较两张图片差异',
    metaDescription: '免费在线图片重叠对比工具。上传两张图片，通过透明度、混合模式、拖拽、拉伸和缩放找出像素级差异。100% 浏览器端运行，不上传服务器，保护隐私。',
    title: '图片重叠对比工具',
    subtitle: '上传两张图片，叠加查看差异。第二张默认半透明，便于比对。',
    seo_features_h: '为什么使用这个图片叠加对比工具？',
    seo_features_p: '这是一款免费的在线图片对比工具，让你把两张图片叠加在一起，立即发现它们的差异。所有处理完全在你的浏览器中完成——无需注册、不上传到任何服务器、无水印。设计师、前端开发、摄影师和 QA 测试工程师都可以用它来验证像素级还原、发现视觉回归、对比修图效果以及对齐设计稿。',
    seo_f1: '<strong>隐私优先：</strong>100% 本地运行，图片永不离开你的设备。',
    seo_f2: '<strong>透明度调节：</strong>叠加图层透明度可从 0% 到 100% 自由调整，渐进式查看差异。',
    seo_f3: '<strong>混合模式：</strong>使用「差异 Difference」模式可瞬间高亮所有不同像素。',
    seo_f4: '<strong>拖拽 / 拉伸 / 缩放：</strong>自由移动、缩放、拉伸叠加图层；按 Shift 保持原宽高比。',
    seo_f5: '<strong>隐藏叠加：</strong>一键隐藏图片 2，便于单独查看底图而不丢失调整状态。',
    seo_f6: '<strong>双语界面：</strong>支持中英文切换。',
    seo_faq_h: '常见问题',
    faq_q1: '如何对比两张图片的差异？',
    faq_a1: '上传两张图片，然后拖动透明度滑块，或选择「差异」混合模式。叠加图层可以移动或缩放以对齐底图。',
    faq_q2: '我的图片会上传到服务器吗？',
    faq_a2: '不会。所有图片处理都在你的浏览器中通过标准 HTML5 和 CSS 完成，文件从不离开你的设备。',
    faq_q3: '能把第二张图片拉伸成不同尺寸吗？',
    faq_a3: '可以。拖动四角手柄自由缩放，拖动四边手柄可单方向拉伸；按住 Shift 再拖角点可保持原始宽高比。',
    faq_q4: '支持哪些图片格式？',
    faq_a4: '任何浏览器能显示的格式都支持：PNG、JPEG、WebP、GIF、SVG、BMP 等。',
    footer: '© 图片重叠对比工具 · 一款免费、注重隐私的浏览器端图片对比工具。',
    layer1: '底层 · 图片 1',
    layer2: '叠加 · 图片 2',
    uploadHint: '点击或拖拽上传',
    uploadHint2: '点击或拖拽上传（默认半透明）',
    opacity: '图片 2 透明度',
    scale: '图片 2 缩放',
    blend: '混合模式',
    blend_normal: '正常',
    blend_diff: '差异',
    blend_multiply: '正片叠底',
    blend_screen: '滤色',
    blend_overlay: '叠加',
    blend_darken: '变暗',
    blend_lighten: '变亮',
    blend_exclusion: '排除',
    dragOn: '✋ 拖动：开启',
    dragOff: '✋ 拖动：关闭',
    visOn: '👁 显示图片 2',
    visOff: '🚫 图片 2 已隐藏',
    fit: '⤢ 适应画布',
    actual: '1:1 原始大小',
    matchBase: '⇆ 匹配底图',
    swap: '⇅ 交换',
    clear: '✕ 清空',
    placeholder: '请先上传两张图片',
    placeholder1: '再上传一张图片即可对比',
    tip: '提示：拖动图片 2 移动；拖拽边角手柄调整大小/拉伸；滚轮缩放。',
  },
};
let currentLang = 'en';
const t = k => (I18N[currentLang] && I18N[currentLang][k]) || k;

// ===== DOM =====
const $ = id => document.getElementById(id);
const file1 = $('file1'), file2 = $('file2');
const drop1 = $('drop1'), drop2 = $('drop2');
const img1 = $('img1'), img2 = $('img2');
const stage = $('stage'), frame2 = $('frame2');
const placeholder = $('placeholder');

const opacity = $('opacity'), opacityVal = $('opacityVal');
const scale = $('scale'), scaleVal = $('scaleVal');
const scaleMinus = $('scaleMinus'), scalePlus = $('scalePlus');
const blend = $('blend');

const toggleDragBtn = $('toggleDrag');
const toggleVisibleBtn = $('toggleVisible');
const fitBtn = $('fit'), actualBtn = $('actual'), matchBaseBtn = $('matchBase');
const swapBtn = $('swap'), clearBtn = $('clear');

// ===== State =====
const state = {
  // Image 2 frame geometry (canvas pixels)
  x: 0, y: 0, w: 0, h: 0,
  // image 1 display size (for match-base)
  img1W: 0, img1H: 0,
  dragEnabled: true,
  visible: true,
  hasImg1: false,
  hasImg2: false,
};

function applyFrame() {
  frame2.style.left = state.x + 'px';
  frame2.style.top = state.y + 'px';
  frame2.style.width = state.w + 'px';
  frame2.style.height = state.h + 'px';
}

function updateScaleDisplay() {
  if (!state.hasImg2 || !img2.naturalWidth) {
    scaleVal.textContent = '100%';
    return;
  }
  const sx = state.w / img2.naturalWidth;
  const sy = state.h / img2.naturalHeight;
  const avg = Math.round(((sx + sy) / 2) * 100);
  scaleVal.textContent = avg + '%';
  // keep slider in sync (clamped)
  scale.value = Math.min(400, Math.max(10, avg));
}

function fitRect(natW, natH) {
  const sw = stage.clientWidth, sh = stage.clientHeight;
  const s = Math.min(sw / natW, sh / natH);
  const w = natW * s, h = natH * s;
  return { x: (sw - w) / 2, y: (sh - h) / 2, w, h, scale: s };
}

function fitImg1() {
  if (!state.hasImg1) return;
  const r = fitRect(img1.naturalWidth, img1.naturalHeight);
  img1.style.width = r.w + 'px';
  img1.style.height = r.h + 'px';
  state.img1W = r.w;
  state.img1H = r.h;
}

function fitImg2() {
  if (!state.hasImg2) return;
  const r = fitRect(img2.naturalWidth, img2.naturalHeight);
  state.x = r.x; state.y = r.y; state.w = r.w; state.h = r.h;
  applyFrame();
  updateScaleDisplay();
}

function updatePlaceholder() {
  if (state.hasImg1 && state.hasImg2) {
    placeholder.style.display = 'none';
  } else if (state.hasImg1 || state.hasImg2) {
    placeholder.textContent = t('placeholder1');
    placeholder.style.display = 'flex';
  } else {
    placeholder.textContent = t('placeholder');
    placeholder.style.display = 'flex';
  }
}

function setHint(card, text, filled) {
  const hint = card.querySelector('.hint');
  hint.textContent = text;
  hint.title = text;
  card.classList.toggle('filled', !!filled);
}

function loadFile(file, which) {
  if (!file || !file.type.startsWith('image/')) return;
  const url = URL.createObjectURL(file);
  const imgEl = which === 1 ? img1 : img2;
  const card = which === 1 ? drop1 : drop2;
  imgEl.onload = () => {
    if (which === 1) {
      state.hasImg1 = true;
      img1.style.display = 'block';
      fitImg1();
    } else {
      state.hasImg2 = true;
      frame2.style.display = state.visible ? 'block' : 'none';
      fitImg2();
    }
    setHint(card, '✓ ' + file.name, true);
    updatePlaceholder();
  };
  imgEl.src = url;
}

file1.addEventListener('change', e => loadFile(e.target.files[0], 1));
file2.addEventListener('change', e => loadFile(e.target.files[0], 2));

[[drop1, 1], [drop2, 2]].forEach(([card, which]) => {
  card.addEventListener('dragover', e => { e.preventDefault(); card.classList.add('drag-over'); });
  card.addEventListener('dragleave', () => card.classList.remove('drag-over'));
  card.addEventListener('drop', e => {
    e.preventDefault();
    card.classList.remove('drag-over');
    const f = e.dataTransfer.files[0];
    if (f) loadFile(f, which);
  });
});

// ===== Opacity =====
opacity.addEventListener('input', () => {
  const v = opacity.value;
  img2.style.opacity = v / 100;
  opacityVal.textContent = v + '%';
});

// ===== Scale slider (uniform about frame center) =====
function applyUniformScale(pct, anchor = 'center') {
  if (!state.hasImg2) return;
  pct = Math.max(1, Math.min(2000, pct));
  const nw = img2.naturalWidth * pct / 100;
  const nh = img2.naturalHeight * pct / 100;
  if (anchor === 'center') {
    const cx = state.x + state.w / 2;
    const cy = state.y + state.h / 2;
    state.x = cx - nw / 2;
    state.y = cy - nh / 2;
  }
  state.w = nw;
  state.h = nh;
  applyFrame();
  updateScaleDisplay();
}

scale.addEventListener('input', () => applyUniformScale(parseFloat(scale.value), 'center'));
scaleMinus.addEventListener('click', () => {
  const cur = Math.round((state.w / (img2.naturalWidth || 1)) * 100);
  applyUniformScale(cur - 10, 'center');
});
scalePlus.addEventListener('click', () => {
  const cur = Math.round((state.w / (img2.naturalWidth || 1)) * 100);
  applyUniformScale(cur + 10, 'center');
});

// ===== Blend =====
blend.addEventListener('change', () => { img2.style.mixBlendMode = blend.value; });

// ===== Pointer-based interactions (mouse + touch + pen) =====
// Supports: drag-move, handle-resize, pinch-zoom on touch, wheel zoom on mouse.

const pointers = new Map(); // id -> {x, y}
let moveDrag = null;    // {startX, startY, origX, origY, pid}
let resizeDrag = null;  // {dir, startX, startY, origX, origY, origW, origH, aspect, pid, shiftKey}
let pinch = null;       // {startDist, startMidX, startMidY, origX, origY, origW, origH}

function stageLocal(clientX, clientY) {
  const r = stage.getBoundingClientRect();
  return { x: clientX - r.left, y: clientY - r.top };
}

// ---- Move (pointerdown on img2 body) ----
img2.addEventListener('pointerdown', e => {
  if (!state.dragEnabled || !state.visible) return;
  pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  // If a 2nd pointer arrives, start pinch instead of move
  if (pointers.size === 2) {
    startPinch();
    moveDrag = null;
    return;
  }
  moveDrag = { pid: e.pointerId, startX: e.clientX, startY: e.clientY, origX: state.x, origY: state.y };
  stage.classList.add('dragging');
  img2.setPointerCapture(e.pointerId);
  e.preventDefault();
  e.stopPropagation();
});

// ---- Resize handles ----
frame2.querySelectorAll('.handle').forEach(h => {
  h.addEventListener('pointerdown', e => {
    resizeDrag = {
      pid: e.pointerId,
      dir: h.dataset.dir,
      startX: e.clientX, startY: e.clientY,
      origX: state.x, origY: state.y,
      origW: state.w, origH: state.h,
      aspect: state.w / Math.max(1, state.h),
      shiftKey: e.shiftKey,
    };
    h.setPointerCapture(e.pointerId);
    e.preventDefault();
    e.stopPropagation();
  });
});

// ---- Pinch helpers ----
function startPinch() {
  const pts = [...pointers.values()];
  if (pts.length < 2) return;
  const dx = pts[0].x - pts[1].x;
  const dy = pts[0].y - pts[1].y;
  const dist = Math.hypot(dx, dy) || 1;
  const midClient = { x: (pts[0].x + pts[1].x) / 2, y: (pts[0].y + pts[1].y) / 2 };
  const mid = stageLocal(midClient.x, midClient.y);
  pinch = {
    startDist: dist,
    startMidX: mid.x,
    startMidY: mid.y,
    origX: state.x, origY: state.y,
    origW: state.w, origH: state.h,
  };
}

function updatePinch() {
  if (!pinch) return;
  const pts = [...pointers.values()];
  if (pts.length < 2) return;
  const dx = pts[0].x - pts[1].x;
  const dy = pts[0].y - pts[1].y;
  const dist = Math.hypot(dx, dy) || 1;
  const scale = dist / pinch.startDist;
  const nw = Math.max(10, pinch.origW * scale);
  const nh = Math.max(10, pinch.origH * scale);
  // Keep midpoint anchored within the image
  const midClient = { x: (pts[0].x + pts[1].x) / 2, y: (pts[0].y + pts[1].y) / 2 };
  const mid = stageLocal(midClient.x, midClient.y);
  // point on image under start midpoint (in image local coords, 0..1)
  const px = (pinch.startMidX - pinch.origX) / pinch.origW;
  const py = (pinch.startMidY - pinch.origY) / pinch.origH;
  state.w = nw;
  state.h = nh;
  state.x = mid.x - px * nw;
  state.y = mid.y - py * nh;
  applyFrame();
  updateScaleDisplay();
}

// ---- Global pointermove ----
window.addEventListener('pointermove', e => {
  if (pointers.has(e.pointerId)) {
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  }
  if (pinch && pointers.size >= 2) {
    updatePinch();
    return;
  }
  if (moveDrag && e.pointerId === moveDrag.pid) {
    state.x = moveDrag.origX + (e.clientX - moveDrag.startX);
    state.y = moveDrag.origY + (e.clientY - moveDrag.startY);
    applyFrame();
    return;
  }
  if (resizeDrag && e.pointerId === resizeDrag.pid) {
    const dx = e.clientX - resizeDrag.startX;
    const dy = e.clientY - resizeDrag.startY;
    let { origX, origY, origW, origH, dir, aspect } = resizeDrag;
    let nx = origX, ny = origY, nw = origW, nh = origH;
    if (dir.includes('e')) nw = Math.max(10, origW + dx);
    if (dir.includes('s')) nh = Math.max(10, origH + dy);
    if (dir.includes('w')) { nw = Math.max(10, origW - dx); nx = origX + (origW - nw); }
    if (dir.includes('n')) { nh = Math.max(10, origH - dy); ny = origY + (origH - nh); }
    if (e.shiftKey && dir.length === 2) {
      if (nw / nh > aspect) nw = nh * aspect;
      else nh = nw / aspect;
      if (dir.includes('w')) nx = origX + (origW - nw);
      if (dir.includes('n')) ny = origY + (origH - nh);
    }
    state.x = nx; state.y = ny; state.w = nw; state.h = nh;
    applyFrame();
    updateScaleDisplay();
  }
});

function endPointer(e) {
  pointers.delete(e.pointerId);
  if (moveDrag && e.pointerId === moveDrag.pid) moveDrag = null;
  if (resizeDrag && e.pointerId === resizeDrag.pid) resizeDrag = null;
  if (pointers.size < 2) pinch = null;
  if (pointers.size === 0) stage.classList.remove('dragging');
}
window.addEventListener('pointerup', endPointer);
window.addEventListener('pointercancel', endPointer);

// ===== Wheel zoom (desktop) =====
stage.addEventListener('wheel', e => {
  if (!state.hasImg2 || !state.visible) return;
  e.preventDefault();
  const { x: mx, y: my } = stageLocal(e.clientX, e.clientY);
  const factor = e.deltaY < 0 ? 1.1 : 1 / 1.1;
  const nw = Math.max(10, state.w * factor);
  const nh = Math.max(10, state.h * factor);
  state.x = mx - ((mx - state.x) * (nw / state.w));
  state.y = my - ((my - state.y) * (nh / state.h));
  state.w = nw;
  state.h = nh;
  applyFrame();
  updateScaleDisplay();
}, { passive: false });

// ===== Buttons =====
toggleDragBtn.addEventListener('click', () => {
  state.dragEnabled = !state.dragEnabled;
  toggleDragBtn.classList.toggle('active', state.dragEnabled);
  stage.classList.toggle('drag-enabled', state.dragEnabled);
  toggleDragBtn.querySelector('span').textContent = state.dragEnabled ? t('dragOn') : t('dragOff');
});
stage.classList.add('drag-enabled');

toggleVisibleBtn.addEventListener('click', () => {
  state.visible = !state.visible;
  toggleVisibleBtn.classList.toggle('active', state.visible);
  frame2.style.display = state.visible && state.hasImg2 ? 'block' : 'none';
  toggleVisibleBtn.querySelector('span').textContent = state.visible ? t('visOn') : t('visOff');
});

fitBtn.addEventListener('click', () => { fitImg2(); });
actualBtn.addEventListener('click', () => {
  if (!state.hasImg2) return;
  const sw = stage.clientWidth, sh = stage.clientHeight;
  state.w = img2.naturalWidth;
  state.h = img2.naturalHeight;
  state.x = (sw - state.w) / 2;
  state.y = (sh - state.h) / 2;
  applyFrame();
  updateScaleDisplay();
});
matchBaseBtn.addEventListener('click', () => {
  if (!state.hasImg1 || !state.hasImg2) return;
  const sw = stage.clientWidth, sh = stage.clientHeight;
  state.w = state.img1W;
  state.h = state.img1H;
  state.x = (sw - state.w) / 2;
  state.y = (sh - state.h) / 2;
  applyFrame();
  updateScaleDisplay();
});

swapBtn.addEventListener('click', () => {
  const s1 = img1.src, s2 = img2.src;
  const h1 = state.hasImg1, h2 = state.hasImg2;
  const hint1 = drop1.querySelector('.hint').textContent;
  const hint2 = drop2.querySelector('.hint').textContent;
  const filled1 = drop1.classList.contains('filled');
  const filled2 = drop2.classList.contains('filled');

  img1.onload = () => {
    state.hasImg1 = true;
    img1.style.display = 'block';
    fitImg1();
  };
  img2.onload = () => {
    state.hasImg2 = true;
    frame2.style.display = state.visible ? 'block' : 'none';
    fitImg2();
  };
  if (s2) img1.src = s2; else { img1.src = ''; img1.style.display = 'none'; state.hasImg1 = false; }
  if (s1) img2.src = s1; else { img2.src = ''; frame2.style.display = 'none'; state.hasImg2 = false; }

  setHint(drop1, hint2, filled2);
  setHint(drop2, hint1, filled1);
  updatePlaceholder();
});

clearBtn.addEventListener('click', () => {
  img1.src = ''; img2.src = '';
  img1.style.display = 'none';
  frame2.style.display = 'none';
  file1.value = ''; file2.value = '';
  state.hasImg1 = false; state.hasImg2 = false;
  state.x = state.y = state.w = state.h = 0;
  setHint(drop1, t('uploadHint'), false);
  setHint(drop2, t('uploadHint2'), false);
  opacity.value = 50; opacityVal.textContent = '50%';
  img2.style.opacity = 0.5;
  scale.value = 100; scaleVal.textContent = '100%';
  applyFrame();
  updatePlaceholder();
});

// ===== Re-fit on resize =====
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    fitImg1();
    // Keep image2 relative position: re-fit if user hasn't moved it (simplest: just refit)
    // Avoid surprising the user by NOT refitting image2 automatically.
  }, 100);
});

// ===== Lang switch =====
function applyI18n() {
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
  // Keep document.title in sync with pageTitle
  document.title = t('pageTitle');
  // Update meta description
  document.querySelectorAll('meta[data-i18n-meta]').forEach(m => {
    m.setAttribute('content', t(m.getAttribute('data-i18n-meta')));
  });
  // Keys whose values contain HTML markup (features, FAQ, footer)
  const htmlKeys = new Set([
    'seo_f1','seo_f2','seo_f3','seo_f4','seo_f5','seo_f6',
    'faq_a1','faq_a3','seo_features_p','subtitle'
  ]);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key === 'placeholder') { updatePlaceholder(); return; }
    if (key === 'pageTitle') return; // handled via document.title
    const val = t(key);
    if (htmlKeys.has(key)) el.innerHTML = val;
    else el.textContent = val;
  });
  toggleDragBtn.querySelector('span').textContent = state.dragEnabled ? t('dragOn') : t('dragOff');
  toggleVisibleBtn.querySelector('span').textContent = state.visible ? t('visOn') : t('visOff');
  if (!drop1.classList.contains('filled')) setHint(drop1, t('uploadHint'), false);
  if (!drop2.classList.contains('filled')) setHint(drop2, t('uploadHint2'), false);
  // Sync OG locale
  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) ogLocale.setAttribute('content', currentLang === 'zh' ? 'zh_CN' : 'en_US');
}
function setLang(lang) {
  if (!I18N[lang]) lang = 'en';
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  try { localStorage.setItem('overlay_lang', lang); } catch (_) {}
  // Update URL without reload
  const url = new URL(location.href);
  if (lang === 'en') url.searchParams.delete('lang');
  else url.searchParams.set('lang', lang);
  history.replaceState(null, '', url.toString());
  applyI18n();
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

// Detect language: ?lang= > localStorage > default en (explicit user preference)
function detectLang() {
  const q = new URLSearchParams(location.search).get('lang');
  if (q && I18N[q]) return q;
  try {
    const saved = localStorage.getItem('overlay_lang');
    if (saved && I18N[saved]) return saved;
  } catch (_) {}
  return 'en';
}

// ===== Init =====
img2.style.opacity = 0.5;
setLang(detectLang());
updatePlaceholder();
