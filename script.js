// ===== i18n =====
const I18N = {
  en: {
    title: 'Image Overlay Compare',
    subtitle: 'Upload two images and overlay them to spot differences. The second image is semi-transparent by default.',
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
    title: '图片重叠对比工具',
    subtitle: '上传两张图片，叠加查看差异。第二张默认半透明，便于比对。',
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

// ===== Drag image 2 (move) =====
let moveDrag = null;
img2.addEventListener('mousedown', e => {
  if (!state.dragEnabled || !state.visible) return;
  moveDrag = { startX: e.clientX, startY: e.clientY, origX: state.x, origY: state.y };
  stage.classList.add('dragging');
  e.preventDefault();
  e.stopPropagation();
});

// ===== Resize handles =====
let resizeDrag = null;
frame2.querySelectorAll('.handle').forEach(h => {
  h.addEventListener('mousedown', e => {
    resizeDrag = {
      dir: h.dataset.dir,
      startX: e.clientX, startY: e.clientY,
      origX: state.x, origY: state.y,
      origW: state.w, origH: state.h,
      shift: false,
      aspect: state.w / state.h,
    };
    e.preventDefault();
    e.stopPropagation();
  });
});

window.addEventListener('mousemove', e => {
  if (moveDrag) {
    state.x = moveDrag.origX + (e.clientX - moveDrag.startX);
    state.y = moveDrag.origY + (e.clientY - moveDrag.startY);
    applyFrame();
    return;
  }
  if (resizeDrag) {
    const dx = e.clientX - resizeDrag.startX;
    const dy = e.clientY - resizeDrag.startY;
    let { origX, origY, origW, origH, dir, aspect } = resizeDrag;
    let nx = origX, ny = origY, nw = origW, nh = origH;
    if (dir.includes('e')) nw = Math.max(10, origW + dx);
    if (dir.includes('s')) nh = Math.max(10, origH + dy);
    if (dir.includes('w')) { nw = Math.max(10, origW - dx); nx = origX + (origW - nw); }
    if (dir.includes('n')) { nh = Math.max(10, origH - dy); ny = origY + (origH - nh); }
    // Shift key => preserve aspect ratio for corner drags
    if (e.shiftKey && dir.length === 2) {
      if (nw / nh > aspect) nw = nh * aspect;
      else nh = nw / aspect;
      if (dir.includes('w')) nx = origX + (origW - nw);
      if (dir.includes('n')) ny = origY + (origH - nh);
    }
    state.x = nx; state.y = ny; state.w = nw; state.h = nh;
    applyFrame();
    updateScaleDisplay();
    return;
  }
});
window.addEventListener('mouseup', () => {
  moveDrag = null;
  resizeDrag = null;
  stage.classList.remove('dragging');
});

// ===== Wheel zoom (cursor-anchored, uniform) =====
stage.addEventListener('wheel', e => {
  if (!state.hasImg2 || !state.visible) return;
  e.preventDefault();
  const rect = stage.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;
  const factor = e.deltaY < 0 ? 1.1 : 1 / 1.1;
  const nw = Math.max(10, state.w * factor);
  const nh = Math.max(10, state.h * factor);
  // Keep the point under cursor stationary within the image
  state.x = mx - ((mx - state.x) * (nw / state.w));
  state.y = my - ((my - state.y) * (nh / state.h));
  state.w = nw;
  state.h = nh;
  applyFrame();
  updateScaleDisplay();
}, { passive: false });

// Also zoom when hovering the controls? no – only stage
// Prevent scrolling page when hovering stage already handled.

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
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key === 'placeholder') { updatePlaceholder(); return; }
    el.textContent = t(key);
  });
  toggleDragBtn.querySelector('span').textContent = state.dragEnabled ? t('dragOn') : t('dragOff');
  toggleVisibleBtn.querySelector('span').textContent = state.visible ? t('visOn') : t('visOff');
  if (!drop1.classList.contains('filled')) setHint(drop1, t('uploadHint'), false);
  if (!drop2.classList.contains('filled')) setHint(drop2, t('uploadHint2'), false);
}
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    currentLang = btn.dataset.lang;
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b === btn));
    applyI18n();
  });
});

// ===== Init =====
img2.style.opacity = 0.5;
applyI18n();
updatePlaceholder();
