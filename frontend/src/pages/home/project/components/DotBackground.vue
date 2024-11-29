<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const canvasRef = ref<HTMLCanvasElement | null>(null);
const containerRef = ref<HTMLElement | null>(null);
let ctx: CanvasRenderingContext2D | null = null;
let animationFrame: number;
const DOT_SIZE = 2;
const SPACING = 24;
const mouseX = ref(0);
const mouseY = ref(0);
const EFFECT_RADIUS = 80;

// 鼠标活动状态追踪
let isMouseInside = false;
let animationTimeout: NodeJS.Timeout;

// 扩散点动画状态
interface SpreadPoint {
  x: number;
  y: number;
  distance: number;
  direction: 'up' | 'down' | 'left' | 'right';
}

const spreadPoints = ref<SpreadPoint[]>([]);
const SPREAD_SPEED = 5; // 扩散速度

// 生成新的扩散动画
const generateNewSpread = () => {
  if (!containerRef.value || isMouseInside) return;
  
  const width = containerRef.value.clientWidth;
  const height = containerRef.value.clientHeight;
  
  // 随机生成中心点
  const centerX = Math.random() * width;
  const centerY = Math.random() * height;
  
  // 创建四个方向的扩散点
  spreadPoints.value = [
    { x: centerX, y: centerY, distance: 0, direction: 'up' },
    { x: centerX, y: centerY, distance: 0, direction: 'down' },
    { x: centerX, y: centerY, distance: 0, direction: 'left' },
    { x: centerX, y: centerY, distance: 0, direction: 'right' }
  ];
  
  // 创建动画
  const animate = () => {
    if (spreadPoints.value.length === 0) return;
    
    let allFinished = true;
    
    // 更新所有扩散点的位置
    spreadPoints.value = spreadPoints.value.map(point => {
      let newPoint = { ...point };
      
      switch (point.direction) {
        case 'up':
          if (point.y > 0) {
            newPoint.y = point.y - SPREAD_SPEED;
            newPoint.distance = point.distance + SPREAD_SPEED;
            allFinished = false;
          }
          break;
        case 'down':
          if (point.y < height) {
            newPoint.y = point.y + SPREAD_SPEED;
            newPoint.distance = point.distance + SPREAD_SPEED;
            allFinished = false;
          }
          break;
        case 'left':
          if (point.x > 0) {
            newPoint.x = point.x - SPREAD_SPEED;
            newPoint.distance = point.distance + SPREAD_SPEED;
            allFinished = false;
          }
          break;
        case 'right':
          if (point.x < width) {
            newPoint.x = point.x + SPREAD_SPEED;
            newPoint.distance = point.distance + SPREAD_SPEED;
            allFinished = false;
          }
          break;
      }
      
      return newPoint;
    });
    
    if (allFinished) {
      spreadPoints.value = [];
      // 2秒后生成新的扩散
      animationTimeout = setTimeout(generateNewSpread, 2000);
      return;
    }
    
    requestAnimationFrame(animate);
  };
  
  animate();
};

const drawDots = () => {
  if (!ctx || !canvasRef.value || !containerRef.value) return;
  
  const width = containerRef.value.clientWidth;
  const height = containerRef.value.clientHeight;
  
  // 设置canvas尺寸
  canvasRef.value.width = width;
  canvasRef.value.height = height;
  
  // 清空画布
  ctx.clearRect(0, 0, width, height);
  
  // 计算点的数量
  const cols = Math.ceil(width / SPACING);
  const rows = Math.ceil(height / SPACING);
  
  // 目标颜色 #ff3f1a 的 RGB 值
  const targetR = 255;
  const targetG = 63;
  const targetB = 26;
  
  // 基础暗色 RGB 值
  const baseR = 40;
  const baseG = 40;
  const baseB = 40;
  
  // 绘制点
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const x = i * SPACING;
      const y = j * SPACING;
      
      // 计算点到影响源的距离（鼠标或扩散点）
      let minDistance = Infinity;
      
      // 检查鼠标距离
      if (isMouseInside) {
        const dx = x - mouseX.value;
        const dy = y - mouseY.value;
        minDistance = Math.sqrt(dx * dx + dy * dy);
      }
      
      // 检查所有扩散点的距离
      for (const point of spreadPoints.value) {
        const dx = x - point.x;
        const dy = y - point.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < minDistance) {
          minDistance = distance;
        }
      }
      
      // 计算颜色插值
      let intensity = 0;
      if (minDistance < EFFECT_RADIUS) {
        intensity = Math.pow(1 - minDistance / EFFECT_RADIUS, 1.5); // 调整渐变曲线
      }
      
      // 在基础色和目标色之间进行插值
      const r = Math.round(baseR + (targetR - baseR) * intensity);
      const g = Math.round(baseG + (targetG - baseG) * intensity);
      const b = Math.round(baseB + (targetB - baseB) * intensity);
      
      ctx.beginPath();
      ctx.arc(x, y, DOT_SIZE / 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.fill();
    }
  }
  
  animationFrame = requestAnimationFrame(drawDots);
};

const handleMouseMove = (e: MouseEvent) => {
  if (!containerRef.value) return;
  const rect = containerRef.value.getBoundingClientRect();
  mouseX.value = e.clientX - rect.left;
  mouseY.value = e.clientY - rect.top;
};

const handleMouseEnter = () => {
  isMouseInside = true;
  clearTimeout(animationTimeout);
  spreadPoints.value = [];
};

const handleMouseLeave = () => {
  isMouseInside = false;
  // 2秒后开始扩散动画
  animationTimeout = setTimeout(generateNewSpread, 2000);
};

onMounted(() => {
  if (canvasRef.value) {
    ctx = canvasRef.value.getContext('2d');
    drawDots();
  }
  if (containerRef.value) {
    containerRef.value.addEventListener('mousemove', handleMouseMove);
    containerRef.value.addEventListener('mouseenter', handleMouseEnter);
    containerRef.value.addEventListener('mouseleave', handleMouseLeave);
    // 初始启动扩散动画
    animationTimeout = setTimeout(generateNewSpread, 2000);
  }
});

onUnmounted(() => {
  if (containerRef.value) {
    containerRef.value.removeEventListener('mousemove', handleMouseMove);
    containerRef.value.removeEventListener('mouseenter', handleMouseEnter);
    containerRef.value.removeEventListener('mouseleave', handleMouseLeave);
  }
  cancelAnimationFrame(animationFrame);
  clearTimeout(animationTimeout);
});
</script>

<template>
  <div ref="containerRef" class="w-full h-full relative bg-[#1a1a1a]">
    <canvas ref="canvasRef" class="absolute inset-0"></canvas>
  </div>
</template>

<style scoped>
canvas {
  width: 100%;
  height: 100%;
}
</style>
