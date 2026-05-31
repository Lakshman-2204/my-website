// ═══════════════════════════════════════════════════════════════════
//  DOLPHIN OCEAN ENGINE  –  matches the illustrated video style:
//  • Vivid teal-green rolling waves with white foam caps
//  • Warm sunset sky: peach/pink clouds, bright sun + rays
//  • Dolphins: grey-blue illustrated style, water-caustic skin
//    pattern (shimmering polygonal patches), dark fins,
//    streaming water trails & flying droplets
// ═══════════════════════════════════════════════════════════════════
(function(){

const canvas = document.getElementById('bg');
const ctx    = canvas.getContext('2d');
let W, H, T = 0;
const PI2 = Math.PI * 2;

function resize(){
  W = canvas.width  = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

// ── Easing ──────────────────────────────────────────────────────
const easeOut = t => 1 - Math.pow(1-t, 3);
const easeInOut = t => t<.5 ? 4*t*t*t : 1-Math.pow(-2*t+2,3)/2;
const clamp = (v,a,b) => Math.max(a,Math.min(b,v));
const lerp  = (a,b,t) => a + (b-a)*t;

// ══════════════════════════════════════════════════════
//  SKY  – warm sunset with sun rays + puffy clouds
// ══════════════════════════════════════════════════════
const clouds = Array.from({length:14}, (_,i) => ({
  x: Math.random(),
  y: 0.04 + Math.random() * 0.28,
  w: 80 + Math.random() * 180,
  h: 30 + Math.random() * 50,
  speed: 0.000008 + Math.random() * 0.000012,
  alpha: 0.55 + Math.random() * 0.35,
  puffs: Math.floor(3 + Math.random() * 4)
}));

function drawCloud(x, y, w, h, alpha, puffs){
  ctx.save();
  ctx.globalAlpha = alpha;
  for(let p = 0; p < puffs; p++){
    const px = x + (p / (puffs-1)) * w;
    const py = y + Math.sin(p * 1.1) * h * 0.3;
    const pr = h * (0.5 + 0.5 * Math.sin(p * 0.9 + 1));
    const g  = ctx.createRadialGradient(px, py, 0, px, py, pr);
    g.addColorStop(0,   'rgba(255,218,185,0.9)');
    g.addColorStop(0.4, 'rgba(240,190,160,0.75)');
    g.addColorStop(1,   'rgba(200,140,120,0.0)');
    ctx.beginPath();
    ctx.arc(px, py, pr, 0, PI2);
    ctx.fillStyle = g;
    ctx.fill();
  }
  ctx.restore();
}

function drawSky(){
  // gradient: deep blue-purple top → warm orange/peach horizon
  const g = ctx.createLinearGradient(0, 0, 0, H * 0.52);
  g.addColorStop(0,    '#1a3a6e');
  g.addColorStop(0.3,  '#2e6a9e');
  g.addColorStop(0.65, '#7dc4d8');
  g.addColorStop(0.85, '#f0b060');
  g.addColorStop(1,    '#f5c870');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H * 0.52);

  // Sun
  const sx = W * 0.5, sy = H * 0.18;
  // rays
  ctx.save();
  ctx.translate(sx, sy);
  for(let i = 0; i < 18; i++){
    const angle  = (i / 18) * PI2;
    const rayLen = 90 + 60 * Math.sin(T * 0.3 + i * 0.7);
    const rg = ctx.createLinearGradient(0, 0, Math.cos(angle)*rayLen, Math.sin(angle)*rayLen);
    rg.addColorStop(0,   `rgba(255,240,180,${0.35 + 0.1*Math.sin(T*0.5+i)})`);
    rg.addColorStop(1,   'rgba(255,200,80,0)');
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(Math.cos(angle)*rayLen, Math.sin(angle)*rayLen);
    ctx.strokeStyle = rg;
    ctx.lineWidth = 2 + Math.sin(T*0.4+i)*0.5;
    ctx.stroke();
  }
  ctx.restore();
  // sun disc
  const sg = ctx.createRadialGradient(sx,sy,0, sx,sy,36);
  sg.addColorStop(0,   'rgba(255,250,220,1)');
  sg.addColorStop(0.4, 'rgba(255,220,100,0.95)');
  sg.addColorStop(1,   'rgba(255,180,60,0)');
  ctx.beginPath();
  ctx.arc(sx, sy, 36, 0, PI2);
  ctx.fillStyle = sg;
  ctx.fill();

  // Clouds
  clouds.forEach(c => {
    c.x = (c.x + c.speed) % 1.3;
    drawCloud(c.x * W, c.y * H, c.w, c.h, c.alpha, c.puffs);
  });

  // Horizon glow band
  const hg = ctx.createLinearGradient(0, H*0.44, 0, H*0.54);
  hg.addColorStop(0, 'rgba(255,200,100,0.35)');
  hg.addColorStop(1, 'rgba(255,180,60,0.0)');
  ctx.fillStyle = hg;
  ctx.fillRect(0, H*0.44, W, H*0.1);
}

// ══════════════════════════════════════════════════════
//  OCEAN  – teal-green rolling waves, white foam
// ══════════════════════════════════════════════════════
function waveY(x, T, layers){
  let y = 0;
  layers.forEach(l => {
    y += l.amp * Math.sin(l.freq * x + l.speed * T + l.phase);
    y += l.amp * 0.35 * Math.sin(l.freq * 1.6 * x - l.speed * 0.7 * T + l.phase + 1.2);
  });
  return y;
}

const waveLayers = [
  { amp:28, freq:0.007, speed:1.0, phase:0.0,  depth:0.00 },
  { amp:22, freq:0.009, speed:0.8, phase:1.5,  depth:0.04 },
  { amp:18, freq:0.012, speed:1.2, phase:3.0,  depth:0.08 },
  { amp:14, freq:0.015, speed:0.9, phase:0.8,  depth:0.12 },
  { amp:10, freq:0.020, speed:1.5, phase:2.2,  depth:0.16 },
  { amp: 6, freq:0.028, speed:1.1, phase:4.0,  depth:0.20 },
];

// Teal palette per layer
const waveColors = [
  ['#0d7a6a','#0a6858'],
  ['#0e8a72','#0c7560'],
  ['#12a080','#0e8a6e'],
  ['#0f9478','#0d7e66'],
  ['#0b7c62','#096850'],
  ['#094f40','#073a2e'],
];

function drawOcean(){
  const horizon = H * 0.48;

  waveLayers.forEach((l, li) => {
    const baseY = horizon + H * l.depth;
    const [c1, c2] = waveColors[li];

    ctx.beginPath();
    ctx.moveTo(0, H);
    ctx.lineTo(0, baseY + waveY(0, T, [l]));
    for(let x = 2; x <= W; x += 2){
      ctx.lineTo(x, baseY + waveY(x, T, [l]));
    }
    ctx.lineTo(W, H);
    ctx.closePath();

    const wg = ctx.createLinearGradient(0, baseY - 30, 0, H);
    wg.addColorStop(0, c1);
    wg.addColorStop(0.5, c2);
    wg.addColorStop(1, '#041e14');
    ctx.fillStyle = wg;
    ctx.fill();

    // White foam crests
    ctx.beginPath();
    ctx.moveTo(0, baseY + waveY(0, T, [l]));
    for(let x = 2; x <= W; x += 2){
      ctx.lineTo(x, baseY + waveY(x, T, [l]));
    }
    ctx.strokeStyle = `rgba(255,255,255,${0.28 - li * 0.03})`;
    ctx.lineWidth = 2.5 - li * 0.25;
    ctx.stroke();

    // Inner foam detail (slightly below crest)
    if(li < 3){
      ctx.beginPath();
      for(let x = 0; x <= W; x += 2){
        const fy = baseY + waveY(x, T, [l]) + 6;
        x === 0 ? ctx.moveTo(x, fy) : ctx.lineTo(x, fy);
      }
      ctx.strokeStyle = `rgba(200,240,230,${0.12 - li*0.03})`;
      ctx.lineWidth = 1.2;
      ctx.stroke();
    }
  });

  // Sun reflection column on water
  const sx = W * 0.5;
  const rg = ctx.createLinearGradient(sx, H*0.48, sx, H*0.7);
  rg.addColorStop(0, `rgba(255,220,100,${0.28 + Math.sin(T*0.4)*0.05})`);
  rg.addColorStop(1, 'rgba(255,200,80,0.0)');
  ctx.fillStyle = rg;
  ctx.fillRect(sx - 25, H*0.48, 50, H*0.22);

  // Foam bubble patches on surface
  for(let i = 0; i < 8; i++){
    const bx = ((i * 137.5 + T * 30) % W);
    const by = H * 0.50 + waveY(bx, T, [waveLayers[2]]) + H * 0.08;
    ctx.beginPath();
    ctx.ellipse(bx, by, 18 + i*4, 4 + i*1.5, 0, 0, PI2);
    ctx.strokeStyle = `rgba(255,255,255,${0.12 + i*0.01})`;
    ctx.lineWidth = 1;
    ctx.stroke();
  }
}

// ══════════════════════════════════════════════════════
//  BUBBLES & DROPLETS floating up
// ══════════════════════════════════════════════════════
const bubbles = Array.from({length:18}, () => ({
  x: Math.random(), y: 0.5 + Math.random() * 0.4,
  r: 3 + Math.random() * 8,
  speed: 0.0003 + Math.random() * 0.0006,
  wobble: Math.random() * PI2,
  alpha: 0.3 + Math.random() * 0.4
}));
function drawBubbles(){
  bubbles.forEach(b => {
    b.y -= b.speed;
    b.wobble += 0.02;
    const bx = b.x * W + Math.sin(b.wobble) * 8;
    if(b.y < 0.42){ b.y = 0.55 + Math.random()*0.3; b.x = Math.random(); }
    const bg = ctx.createRadialGradient(bx-b.r*0.3, b.y*H-b.r*0.3, 0, bx, b.y*H, b.r);
    bg.addColorStop(0,   `rgba(180,235,255,${b.alpha})`);
    bg.addColorStop(0.6, `rgba(80,180,220,${b.alpha*0.4})`);
    bg.addColorStop(1,   `rgba(40,120,180,0.05)`);
    ctx.beginPath();
    ctx.arc(bx, b.y*H, b.r, 0, PI2);
    ctx.fillStyle = bg;
    ctx.fill();
    ctx.strokeStyle = `rgba(200,240,255,${b.alpha*0.7})`;
    ctx.lineWidth = 0.8;
    ctx.stroke();
  });
}

// ══════════════════════════════════════════════════════
//  DOLPHIN  –  illustrated style matching the video
//  Grey-blue body, water-caustic skin pattern, dark fins
//  Water streams & flying droplets
// ══════════════════════════════════════════════════════
class Dolphin {
  constructor(side){
    this.side   = side;   // 'left' | 'right'
    this.startT = T;
    this.animDur= 2.8;    // seconds to reach final position
    this.holdPhase = 0;   // bobbing once arrived

    // Droplets ejected during leap
    this.drops = Array.from({length:40}, () => this.newDrop());
    this.dropsActive = false;
  }

  newDrop(){
    return {
      ox:0, oy:0,
      vx:(Math.random()-0.5)*4.5,
      vy:-(1.5+Math.random()*4.5),
      grav:0.12+Math.random()*0.08,
      r:  1.5+Math.random()*3,
      life:0, maxLife:0.6+Math.random()*1.0,
      alpha:0.7+Math.random()*0.3
    };
  }

  // Progress 0→1 for entry arc
  get prog(){
    return clamp((T - this.startT) / this.animDur, 0, 1);
  }

  // World position of dolphin centre
  pos(){
    const p  = easeInOut(this.prog);
    // Final resting X: flanking the login card
    const cardCX = W * 0.5;
    const destX  = this.side === 'left' ? cardCX - 245 : cardCX + 245;
    const destY  = H * 0.38;
    // Start: erupt from wave on far side
    const startX = this.side === 'left' ? W * 0.05  : W * 0.95;
    const startY = H * 0.52;
    // Arc control point
    const cpX = this.side === 'left' ? W * 0.25 : W * 0.75;
    const cpY = H * 0.12;
    // Quadratic bezier
    const t1 = 1 - p;
    const bx = t1*t1*startX + 2*t1*p*cpX + p*p*destX;
    const by = t1*t1*startY + 2*t1*p*cpY + p*p*destY;
    // Gentle bob once arrived
    const bob = this.prog >= 1 ? Math.sin(T * 2.2) * 10 : 0;
    return { x: bx, y: by + bob };
  }

  // Body tilt angle based on velocity direction
  angle(){
    const p  = easeInOut(this.prog);
    if(p < 0.01) return this.side==='left' ? -0.5 : 0.5 + Math.PI;
    const eps = 0.01;
    const p2  = clamp(p+eps,0,1);
    const t1a = 1-(p-eps<0?0:p-eps), t2a = (p-eps<0?0:p-eps);
    const t1b = 1-p2, t2b = p2;
    const cardCX=W*.5, destX=this.side==='left'?cardCX-245:cardCX+245, destY=H*.38;
    const startX=this.side==='left'?W*.05:W*.95, startY=H*.52;
    const cpX=this.side==='left'?W*.25:W*.75, cpY=H*.12;
    const xa = t1a*t1a*startX+2*t1a*t2a*cpX+t2a*t2a*destX;
    const ya = t1a*t1a*startY+2*t1a*t2a*cpY+t2a*t2a*destY;
    const xb = t1b*t1b*startX+2*t1b*t2b*cpX+t2b*t2b*destX;
    const yb = t1b*t1b*startY+2*t1b*t2b*cpY+t2b*t2b*destY;
    let a = Math.atan2(yb-ya, xb-xa);
    if(this.side==='right') a = Math.atan2(yb-ya, xa-xb);
    return a;
  }

  // ── Draw caustic water-light patches on skin ──
  drawCaustics(ctx, bodyW, bodyH){
    const patches = [
      {x:-10, y:-8,  r:22},
      {x: 20, y:-14, r:18},
      {x: 50, y:-6,  r:16},
      {x:-30, y: 2,  r:15},
      {x: 5,  y: 6,  r:20},
      {x: 35, y: 8,  r:14},
      {x:-50, y:-2,  r:12},
      {x: 65, y:-2,  r:10},
    ];
    patches.forEach((p, i) => {
      const flicker = 0.3 + 0.2 * Math.sin(T * 3.5 + i * 0.8);
      const cg = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
      cg.addColorStop(0,   `rgba(160,230,255,${flicker})`);
      cg.addColorStop(0.5, `rgba(100,190,230,${flicker*0.4})`);
      cg.addColorStop(1,   'transparent');
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, PI2);
      ctx.fillStyle = cg;
      ctx.fill();
    });
    // polygonal caustic lines
    ctx.save();
    ctx.globalAlpha = 0.18;
    ctx.strokeStyle = 'rgba(180,235,255,0.6)';
    ctx.lineWidth = 0.8;
    const verts = [
      [-60,-10],[-30,-22],[ 0,-18],[35,-20],[65,-8],[75, 5],
      [ 55, 15],[25, 18],[-5, 14],[-38, 12],[-65, 5]
    ];
    ctx.beginPath();
    verts.forEach(([vx,vy],i) => i===0?ctx.moveTo(vx,vy):ctx.lineTo(vx,vy));
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }

  // ── Draw one dolphin ──
  drawDolphin(cx, cy){
    ctx.save();
    ctx.translate(cx, cy);

    const ang = this.angle();
    ctx.rotate(ang);

    // mirror left dolphin faces right (towards card)
    if(this.side === 'left') ctx.scale(1, 1);
    else ctx.scale(-1, 1);

    const s = 1.3; // scale factor

    // ── Water stream trails below body ──
    for(let i = 0; i < 5; i++){
      const sx2 = (-40 + i*20) * s;
      const streamLen = (30 + i*12 + Math.sin(T*3+i)*8) * s;
      const sg = ctx.createLinearGradient(sx2, 20*s, sx2, 20*s+streamLen);
      sg.addColorStop(0,   `rgba(150,220,255,${0.5-i*0.05})`);
      sg.addColorStop(1,   'rgba(150,220,255,0.0)');
      ctx.beginPath();
      ctx.moveTo(sx2 - 2*s, 18*s);
      ctx.bezierCurveTo(sx2-3*s,30*s+streamLen*0.4, sx2+2*s,streamLen*0.7, sx2,20*s+streamLen);
      ctx.strokeStyle = sg;
      ctx.lineWidth = (3-i*0.4)*s;
      ctx.stroke();
    }

    // ── CLIP to body shape ──
    ctx.save();
    ctx.beginPath();
    // Main body torpedo
    ctx.moveTo(-90*s, 0);
    ctx.bezierCurveTo(-75*s,-28*s,  10*s,-32*s,  65*s,-12*s);
    ctx.bezierCurveTo( 92*s, -2*s,  92*s,  14*s,  65*s,  20*s);
    ctx.bezierCurveTo( 10*s,  32*s,-75*s,  26*s, -90*s,  0);
    ctx.closePath();
    ctx.clip();

    // ── BASE BODY COLOUR: grey-blue gradient ──
    const bg = ctx.createLinearGradient(-90*s,-32*s, 92*s,32*s);
    bg.addColorStop(0,   '#5a8fa8');
    bg.addColorStop(0.2, '#7aaecc');
    bg.addColorStop(0.5, '#9fcfe8');
    bg.addColorStop(0.75,'#6ea5c0');
    bg.addColorStop(1,   '#4a7a96');
    ctx.fillStyle = bg;
    ctx.fill();

    // ── BELLY lighter area ──
    ctx.beginPath();
    ctx.ellipse(0, 12*s, 70*s, 15*s, 0, 0, PI2);
    const belly = ctx.createLinearGradient(0, 0, 0, 28*s);
    belly.addColorStop(0, 'rgba(220,240,250,0.6)');
    belly.addColorStop(1, 'rgba(180,215,235,0.0)');
    ctx.fillStyle = belly;
    ctx.fill();

    // ── CAUSTIC WATER PATTERN ──
    this.drawCaustics(ctx, 180*s, 60*s);

    ctx.restore(); // unclip

    // ── BODY OUTLINE ──
    ctx.beginPath();
    ctx.moveTo(-90*s, 0);
    ctx.bezierCurveTo(-75*s,-28*s,  10*s,-32*s,  65*s,-12*s);
    ctx.bezierCurveTo( 92*s, -2*s,  92*s,  14*s,  65*s,  20*s);
    ctx.bezierCurveTo( 10*s,  32*s,-75*s,  26*s, -90*s,  0);
    ctx.closePath();
    ctx.strokeStyle = 'rgba(60,110,150,0.7)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // ── DORSAL FIN (dark slate-blue) ──
    ctx.beginPath();
    ctx.moveTo(10*s, -30*s);
    ctx.bezierCurveTo(18*s,-58*s, 42*s,-62*s, 48*s,-30*s);
    ctx.bezierCurveTo(35*s,-28*s, 20*s,-29*s, 10*s,-30*s);
    ctx.closePath();
    const dfg = ctx.createLinearGradient(10*s,-62*s, 48*s,-30*s);
    dfg.addColorStop(0, '#2d5a72');
    dfg.addColorStop(1, '#4a8aaa');
    ctx.fillStyle = dfg;
    ctx.fill();
    ctx.strokeStyle = 'rgba(40,80,110,0.8)';
    ctx.lineWidth = 1.5; ctx.stroke();

    // ── PECTORAL FIN ──
    ctx.beginPath();
    ctx.moveTo(8*s, 10*s);
    ctx.bezierCurveTo(16*s,30*s, 2*s,50*s, -12*s,46*s);
    ctx.bezierCurveTo(-4*s,32*s,  4*s,20*s, 8*s,10*s);
    ctx.closePath();
    const pfg = ctx.createLinearGradient(8*s,10*s,-12*s,46*s);
    pfg.addColorStop(0, '#3d7090');
    pfg.addColorStop(1, '#255068');
    ctx.fillStyle = pfg; ctx.fill();
    ctx.strokeStyle='rgba(40,80,110,0.7)'; ctx.lineWidth=1.5; ctx.stroke();

    // ── TAIL FLUKES ──
    ctx.beginPath();
    ctx.moveTo(-88*s,0);
    ctx.bezierCurveTo(-102*s,-8*s,-125*s,-26*s,-115*s,-38*s);
    ctx.bezierCurveTo(-105*s,-46*s,-92*s,-28*s,-88*s,0);
    ctx.closePath();
    ctx.fillStyle='#3d7090'; ctx.fill();
    ctx.strokeStyle='rgba(40,80,110,0.8)'; ctx.lineWidth=1.5; ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(-88*s,0);
    ctx.bezierCurveTo(-102*s,8*s,-126*s,24*s,-116*s,36*s);
    ctx.bezierCurveTo(-106*s,44*s,-92*s,26*s,-88*s,0);
    ctx.closePath();
    ctx.fillStyle='#3d7090'; ctx.fill();
    ctx.strokeStyle='rgba(40,80,110,0.8)'; ctx.lineWidth=1.5; ctx.stroke();

    // ── HEAD DETAILS ──
    // Rostrum (snout)
    ctx.beginPath();
    ctx.moveTo(65*s,-10*s);
    ctx.bezierCurveTo(80*s,-8*s, 96*s,-2*s, 92*s, 6*s);
    ctx.bezierCurveTo(82*s, 10*s, 68*s, 8*s, 65*s, 20*s);
    ctx.closePath();
    const hg2 = ctx.createLinearGradient(65*s,-10*s,92*s,10*s);
    hg2.addColorStop(0,'#7ab5d0'); hg2.addColorStop(1,'#5a90b0');
    ctx.fillStyle=hg2; ctx.fill();
    ctx.strokeStyle='rgba(60,100,140,0.6)'; ctx.lineWidth=1.5; ctx.stroke();

    // Smile
    ctx.beginPath();
    ctx.moveTo(68*s, 8*s);
    ctx.bezierCurveTo(76*s,14*s, 84*s,14*s, 90*s,8*s);
    ctx.strokeStyle='rgba(50,90,120,0.55)'; ctx.lineWidth=1.2; ctx.stroke();

    // Eye
    ctx.beginPath();
    ctx.arc(70*s,-4*s, 6*s, 0, PI2);
    ctx.fillStyle='#1a2e40'; ctx.fill();
    ctx.beginPath();
    ctx.arc(71.5*s,-5.5*s, 2.2*s, 0, PI2);
    ctx.fillStyle='rgba(255,255,255,0.85)'; ctx.fill();
    // Eye ring highlight
    ctx.beginPath();
    ctx.arc(70*s,-4*s, 6.5*s, 0, PI2);
    ctx.strokeStyle='rgba(120,190,220,0.4)'; ctx.lineWidth=1; ctx.stroke();

    // Melon (forehead bump light)
    ctx.beginPath();
    ctx.ellipse(58*s,-18*s, 14*s, 8*s, -0.3, 0, PI2);
    const mg = ctx.createRadialGradient(56*s,-20*s,0, 58*s,-18*s,14*s);
    mg.addColorStop(0,'rgba(255,255,255,0.35)');
    mg.addColorStop(1,'transparent');
    ctx.fillStyle=mg; ctx.fill();

    // ── TOP SPECULAR SHINE ──
    ctx.beginPath();
    ctx.moveTo(-50*s,-27*s);
    ctx.bezierCurveTo(-10*s,-33*s, 30*s,-30*s, 60*s,-18*s);
    ctx.strokeStyle='rgba(255,255,255,0.55)';
    ctx.lineWidth=3.5; ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-30*s,-22*s);
    ctx.bezierCurveTo(5*s,-28*s, 40*s,-24*s, 62*s,-14*s);
    ctx.strokeStyle='rgba(255,255,255,0.22)';
    ctx.lineWidth=2; ctx.stroke();

    ctx.restore();
  }

  // ── Splash at water entry ──
  drawSplash(cx){
    const wY = H * 0.52;
    const p  = this.prog;
    if(p < 0.05 || p > 0.5) return;
    const sp = p / 0.5;
    const spread = sp * 90;
    // two arcing splash columns
    for(let side = -1; side <= 1; side += 2){
      ctx.beginPath();
      ctx.moveTo(cx, wY);
      ctx.bezierCurveTo(
        cx + side*spread*0.4, wY - 30*sp,
        cx + side*spread*0.8, wY - 20*sp,
        cx + side*spread,     wY + 10*sp
      );
      ctx.strokeStyle=`rgba(200,240,255,${(1-sp)*0.7})`;
      ctx.lineWidth = 3*(1-sp);
      ctx.stroke();
      // splash drops
      for(let d=0;d<5;d++){
        const dx = cx + side*(spread*0.3 + d*12);
        const dy = wY - (10 + d*8)*sp;
        ctx.beginPath();
        ctx.arc(dx, dy, 2.5*(1-sp), 0, PI2);
        ctx.fillStyle=`rgba(220,245,255,${(1-sp)*0.8})`; ctx.fill();
      }
    }
  }

  // ── Rope / water trail connecting to card ──
  drawRope(px, py){
    const p = this.prog;
    if(p < 0.35) return;
    const a = clamp((p-0.35)/0.3, 0, 1);
    const cardX = this.side==='left' ? W*0.5-183 : W*0.5+183;
    const cardY = H * 0.5;
    const cpX   = (px + cardX) * 0.5;
    const cpY   = Math.min(py, cardY) - 50;

    ctx.save();
    ctx.setLineDash([7, 6]);
    ctx.lineDashOffset = -T * 20;
    ctx.beginPath();
    ctx.moveTo(px + (this.side==='left'?80:-80), py - 5);
    ctx.quadraticCurveTo(cpX, cpY, cardX, cardY);
    const rg = ctx.createLinearGradient(px, py, cardX, cardY);
    rg.addColorStop(0,   `rgba(160,230,255,0)`);
    rg.addColorStop(0.2, `rgba(160,230,255,${a*0.55})`);
    rg.addColorStop(1,   `rgba(140,210,255,${a*0.35})`);
    ctx.strokeStyle = rg;
    ctx.lineWidth = 2;
    ctx.globalAlpha = a;
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.globalAlpha = 1;
    ctx.restore();
  }

  // ── Update & draw flying droplets ──
  updateDroplets(cx, cy){
    if(this.prog > 0.08 && !this.dropsActive){
      this.dropsActive = true;
      this.drops.forEach(d => { d.ox=cx; d.oy=cy; d.life=0; });
    }
    if(!this.dropsActive) return;
    this.drops.forEach(d => {
      d.life = Math.min(d.life + 0.018, d.maxLife);
      const f  = d.life / d.maxLife;
      const dx = d.ox + d.vx * d.life * 55;
      const dy = d.oy + d.vy * d.life * 55 + 0.5 * d.grav * Math.pow(d.life*55,2);
      if(f >= 0.98){ d.life=0; d.ox=cx; d.oy=cy; d.vx=(Math.random()-0.5)*4.5; d.vy=-(1.5+Math.random()*4); }
      const da = d.alpha * (1-f);
      // teardrop shape
      ctx.save();
      ctx.translate(dx, dy);
      ctx.rotate(Math.atan2(d.vy + d.grav*d.life*30, d.vx));
      ctx.beginPath();
      ctx.arc(0, 0, d.r*(1-f*0.3), 0, PI2);
      const dg = ctx.createRadialGradient(-d.r*0.3,-d.r*0.3,0, 0,0,d.r);
      dg.addColorStop(0,'rgba(220,245,255,'+da+')');
      dg.addColorStop(1,'rgba(100,180,220,0)');
      ctx.fillStyle=dg; ctx.fill();
      ctx.restore();
    });
  }

  draw(){
    const {x, y} = this.pos();
    this.drawSplash(x);
    this.updateDroplets(x, y);
    this.drawRope(x, y);
    this.drawDolphin(x, y);
  }
}

// ══════════════════════════════════════════════════════
//  INIT & RENDER LOOP
// ══════════════════════════════════════════════════════
const dolphins = [new Dolphin('left'), new Dolphin('right')];
let last = 0;

function render(now){
  const dt = Math.min((now - last) / 1000, 0.05);
  last = now;
  T   += dt;

  ctx.clearRect(0,0,W,H);
  drawSky();
  drawOcean();
  drawBubbles();
  dolphins.forEach(d => d.draw());

  requestAnimationFrame(render);
}
requestAnimationFrame(t => { last=t; render(t); });

})();
