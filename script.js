const file1 = document.getElementById('file1');
const file2 = document.getElementById('file2');
const drop1 = document.getElementById('drop1');
const drop2 = document.getElementById('drop2');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const stage = document.getElementById('stage');
const placeholder = document.getElementById('placeholder');

const opacity = document.getElementById('opacity');
const opacityVal = document.getElementById('opacityVal');
const scale = document.getElementById('scale');
const scaleVal = document.getElementById('scaleVal');
const blend = document.getElementById('blend');

const toggleDragBtn = document.getElementById('toggleDrag');
const resetPosBtn = document.getElementById('resetPos');
const swapBtn = document.getElementById('swap');
const clearBtn = document.getElementById('clear');

// State for image2 transform
const state = {
  x: 0,          // offset from center in px
  y: 0,
  scale: 1,
  dragEnabled: true,
};

function applyTransform() {
  img2.style.transform = `translate(-50%, -50%) translate(${state.x}px, ${state.y}px) scale(${state.scale})`;
}

function updatePlaceholder() {
  const has1 = img1.src && img1.style.display !== 'none';
  const has2 = img2.src && img2.style.display !== 'none';
  if (has1 && has2) placeholder.style.display = 'none';
  else if (has1 || has2) placeholder.textContent = '再上传一张图片即可对比';
  else placeholder.textContent = '请先上传两张图片';
  placeholder.style.display = (has1 && has2) ? 'none' : 'flex';
}

function loadFile(file, imgEl, card) {
  if (!file || !file.type.startsWith('image/')) return;
  const url = URL.createObjectURL(file);
  imgEl.onload = () => {
    imgEl.style.display = 'block';
    card.classList.add('filled');
    card.querySelector('.hint').textContent = `✓ ${file.name}`;
    updatePlaceholder();
  };
  imgEl.src = url;
}

file1.addEventListener('change', e => loadFile(e.target.files[0], img1, drop1));
file2.addEventListener('change', e => loadFile(e.target.files[0], img2, drop2));

// Drag & drop support
[[drop1, file1, img1], [drop2, file2, img2]].forEach(([card, input, imgEl]) => {
  card.addEventListener('dragover', e => { e.preventDefault(); card.classList.add('drag-over'); });
  card.addEventListener('dragleave', () => card.classList.remove('drag-over'));
  card.addEventListener('drop', e => {
    e.preventDefault();
    card.classList.remove('drag-over');
    const f = e.dataTransfer.files[0];
    if (f) loadFile(f, imgEl, card);
  });
});

// Opacity
opacity.addEventListener('input', () => {
  const v = opacity.value;
  img2.style.opacity = v / 100;
  opacityVal.textContent = v + '%';
});
img2.style.opacity = opacity.value / 100;

// Scale slider
scale.addEventListener('input', () => {
  state.scale = scale.value / 100;
  scaleVal.textContent = scale.value + '%';
  applyTransform();
});

// Blend mode
blend.addEventListener('change', () => {
  img2.style.mixBlendMode = blend.value;
});

// Drag image2 on stage
let dragging = false;
let startX = 0, startY = 0, origX = 0, origY = 0;

stage.classList.add('drag-enabled');

img2.addEventListener('mousedown', e => {
  if (!state.dragEnabled) return;
  dragging = true;
  stage.classList.add('dragging');
  startX = e.clientX; startY = e.clientY;
  origX = state.x; origY = state.y;
  e.preventDefault();
});
window.addEventListener('mousemove', e => {
  if (!dragging) return;
  state.x = origX + (e.clientX - startX);
  state.y = origY + (e.clientY - startY);
  applyTransform();
});
window.addEventListener('mouseup', () => {
  dragging = false;
  stage.classList.remove('dragging');
});

// Wheel to zoom image2 when hovering it
stage.addEventListener('wheel', e => {
  if (!img2.src || img2.style.display === 'none') return;
  e.preventDefault();
  const delta = e.deltaY > 0 ? -5 : 5;
  let next = parseInt(scale.value, 10) + delta;
  next = Math.min(300, Math.max(10, next));
  scale.value = next;
  state.scale = next / 100;
  scaleVal.textContent = next + '%';
  applyTransform();
}, { passive: false });

// Toggle drag
toggleDragBtn.addEventListener('click', () => {
  state.dragEnabled = !state.dragEnabled;
  toggleDragBtn.textContent = `✋ 拖动图片 2: ${state.dragEnabled ? '开启' : '关闭'}`;
  toggleDragBtn.classList.toggle('active', state.dragEnabled);
  stage.classList.toggle('drag-enabled', state.dragEnabled);
});
toggleDragBtn.classList.add('active');

// Reset position
resetPosBtn.addEventListener('click', () => {
  state.x = 0; state.y = 0; state.scale = 1;
  scale.value = 100;
  scaleVal.textContent = '100%';
  applyTransform();
});

// Swap
swapBtn.addEventListener('click', () => {
  const s1 = img1.src, s2 = img2.src;
  const d1 = img1.style.display, d2 = img2.style.display;
  img1.src = s2; img2.src = s1;
  img1.style.display = d2; img2.style.display = d1;
  // swap upload card labels
  const h1 = drop1.querySelector('.hint').textContent;
  const h2 = drop2.querySelector('.hint').textContent;
  drop1.querySelector('.hint').textContent = h2;
  drop2.querySelector('.hint').textContent = h1;
  drop1.classList.toggle('filled', !!img1.src);
  drop2.classList.toggle('filled', !!img2.src);
});

// Clear
clearBtn.addEventListener('click', () => {
  img1.src = ''; img2.src = '';
  img1.style.display = 'none'; img2.style.display = 'none';
  file1.value = ''; file2.value = '';
  drop1.classList.remove('filled'); drop2.classList.remove('filled');
  drop1.querySelector('.hint').textContent = '点击或拖拽上传';
  drop2.querySelector('.hint').textContent = '点击或拖拽上传（默认半透明）';
  state.x = 0; state.y = 0; state.scale = 1;
  scale.value = 100; scaleVal.textContent = '100%';
  opacity.value = 50; opacityVal.textContent = '50%';
  img2.style.opacity = 0.5;
  applyTransform();
  updatePlaceholder();
});

applyTransform();
updatePlaceholder();
