"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

type GameState = "start" | "playing" | "level_complete" | "game_over" | "victory";

type Platform = { x: number; y: number; w: number; h: number; type?: "normal" | "accent" };
type Collectible = { x: number; y: number; collected: boolean; label: string; icon: string };
type Enemy = { x: number; y: number; w: number; h: number; vx: number; minX: number; maxX: number; alive: boolean; label: string };
type Particle = { x: number; y: number; vx: number; vy: number; color: string; life: number; maxLife: number };

const LEVEL_CONFIGS = [
  {
    level: 1,
    title: "Nivel 1: Frontend & UI (Angular 19)",
    desc: "Recolecta los componentes y Signals mientras esquivas los Syntax Errors.",
    themeColor: "#38bdf8",
    bgColor: "#091322",
    goalLabel: "npm run build ✓",
    platforms: [
      { x: 0, y: 350, w: 900, h: 50 },
      { x: 140, y: 280, w: 100, h: 18, type: "accent" },
      { x: 280, y: 220, w: 110, h: 18 },
      { x: 430, y: 270, w: 120, h: 18, type: "accent" },
      { x: 580, y: 210, w: 110, h: 18 },
      { x: 720, y: 260, w: 120, h: 18, type: "accent" },
    ] as Platform[],
    collectibles: [
      { x: 180, y: 245, collected: false, label: "Signals", icon: "⚡" },
      { x: 330, y: 185, collected: false, label: "Components", icon: "🧩" },
      { x: 480, y: 235, collected: false, label: "PrimeNG", icon: "🎨" },
      { x: 630, y: 175, collected: false, label: "Chart.js", icon: "📊" },
    ] as Collectible[],
    enemies: [
      { x: 300, y: 326, w: 24, h: 24, vx: 1.2, minX: 200, maxX: 420, alive: true, label: "Bug" },
      { x: 550, y: 326, w: 24, h: 24, vx: 1.4, minX: 450, maxX: 700, alive: true, label: "Bug" },
    ] as Enemy[],
    goalX: 810,
    goalY: 280,
  },
  {
    level: 2,
    title: "Nivel 2: Backend & APIs (Node.js & Express)",
    desc: "Construye endpoints seguros y tokens JWT sorteando Errores 500.",
    themeColor: "#10b981",
    bgColor: "#071914",
    goalLabel: "API Gateway 200 OK",
    platforms: [
      { x: 0, y: 350, w: 900, h: 50 },
      { x: 120, y: 270, w: 90, h: 18 },
      { x: 250, y: 200, w: 100, h: 18, type: "accent" },
      { x: 380, y: 260, w: 100, h: 18 },
      { x: 510, y: 190, w: 110, h: 18, type: "accent" },
      { x: 660, y: 240, w: 120, h: 18 },
    ] as Platform[],
    collectibles: [
      { x: 160, y: 235, collected: false, label: "JWT Token", icon: "🔑" },
      { x: 290, y: 165, collected: false, label: "REST API", icon: "🌐" },
      { x: 550, y: 155, collected: false, label: "Sequelize", icon: "🔗" },
      { x: 710, y: 205, collected: false, label: "Rollback", icon: "🛡️" },
    ] as Collectible[],
    enemies: [
      { x: 200, y: 326, w: 24, h: 24, vx: 1.5, minX: 100, maxX: 340, alive: true, label: "500" },
      { x: 440, y: 326, w: 24, h: 24, vx: 1.8, minX: 370, maxX: 630, alive: true, label: "500" },
    ] as Enemy[],
    goalX: 810,
    goalY: 280,
  },
  {
    level: 3,
    title: "Nivel 3: Bases de Datos (PostgreSQL & MariaDB)",
    desc: "Consolida tablas y transacciones ACID sin fugas de memoria.",
    themeColor: "#f59e0b",
    bgColor: "#191307",
    goalLabel: "DB Migrations ✓",
    platforms: [
      { x: 0, y: 350, w: 900, h: 50 },
      { x: 110, y: 290, w: 80, h: 18, type: "accent" },
      { x: 220, y: 230, w: 90, h: 18 },
      { x: 350, y: 170, w: 100, h: 18, type: "accent" },
      { x: 480, y: 230, w: 90, h: 18 },
      { x: 610, y: 280, w: 100, h: 18, type: "accent" },
      { x: 740, y: 220, w: 110, h: 18 },
    ] as Platform[],
    collectibles: [
      { x: 145, y: 255, collected: false, label: "PostgreSQL", icon: "🐘" },
      { x: 260, y: 195, collected: false, label: "MariaDB", icon: "🦭" },
      { x: 395, y: 135, collected: false, label: "ACID", icon: "💎" },
      { x: 650, y: 245, collected: false, label: "CRUD", icon: "⚡" },
    ] as Collectible[],
    enemies: [
      { x: 250, y: 326, w: 24, h: 24, vx: 1.6, minX: 120, maxX: 400, alive: true, label: "Leak" },
      { x: 520, y: 326, w: 24, h: 24, vx: 1.8, minX: 430, maxX: 720, alive: true, label: "Leak" },
    ] as Enemy[],
    goalX: 810,
    goalY: 280,
  },
  {
    level: 4,
    title: "Nivel 4: Cloud & Producción (AWS & CI/CD)",
    desc: "El desafío final: despliega contenedores Docker y alcanza el servidor en producción.",
    themeColor: "#818cf8",
    bgColor: "#0d0e25",
    goalLabel: "🚀 PRODUCCIÓN",
    platforms: [
      { x: 0, y: 350, w: 900, h: 50 },
      { x: 100, y: 280, w: 90, h: 18 },
      { x: 230, y: 210, w: 100, h: 18, type: "accent" },
      { x: 370, y: 270, w: 90, h: 18 },
      { x: 500, y: 200, w: 100, h: 18, type: "accent" },
      { x: 640, y: 160, w: 100, h: 18 },
      { x: 760, y: 230, w: 100, h: 18, type: "accent" },
    ] as Platform[],
    collectibles: [
      { x: 140, y: 245, collected: false, label: "Docker", icon: "🐳" },
      { x: 275, y: 175, collected: false, label: "AWS EC2", icon: "☁️" },
      { x: 545, y: 165, collected: false, label: "CI/CD", icon: "⚙️" },
      { x: 685, y: 125, collected: false, label: "Release", icon: "🏆" },
    ] as Collectible[],
    enemies: [
      { x: 180, y: 326, w: 24, h: 24, vx: 1.9, minX: 80, maxX: 350, alive: true, label: "Conflict" },
      { x: 420, y: 326, w: 24, h: 24, vx: 2.1, minX: 360, maxX: 630, alive: true, label: "Conflict" },
      { x: 680, y: 326, w: 24, h: 24, vx: 2.3, minX: 620, maxX: 780, alive: true, label: "Conflict" },
    ] as Enemy[],
    goalX: 810,
    goalY: 280,
  },
];

export function DevRunnerGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [gameState, setGameState] = useState<GameState>("start");
  const [currentLevelIdx, setCurrentLevelIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Player state reference
  const playerRef = useRef({
    x: 40,
    y: 290,
    w: 22,
    h: 46,
    vx: 0,
    vy: 0,
    speed: 3.8,
    jumpForce: -9.8,
    grounded: false,
    facing: 1 as 1 | -1,
    animFrame: 0,
  });

  const keysRef = useRef<{ left: boolean; right: boolean; jump: boolean }>({
    left: false,
    right: false,
    jump: false,
  });

  const levelDataRef = useRef({
    platforms: [] as Platform[],
    collectibles: [] as Collectible[],
    enemies: [] as Enemy[],
    particles: [] as Particle[],
    goalX: 810,
    goalY: 280,
  });

  // Sound effects generator via Web Audio API
  const playSound = useCallback((type: "jump" | "coin" | "hit" | "win") => {
    if (isMuted || typeof window === "undefined") return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;
      if (type === "jump") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(260, now);
        osc.frequency.exponentialRampToValueAtTime(520, now + 0.15);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.15);
        osc.start(now);
        osc.stop(now + 0.15);
      } else if (type === "coin") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(587, now);
        osc.frequency.setValueAtTime(880, now + 0.08);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.22);
        osc.start(now);
        osc.stop(now + 0.22);
      } else if (type === "hit") {
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.linearRampToValueAtTime(60, now + 0.25);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      } else if (type === "win") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.setValueAtTime(554, now + 0.1);
        osc.frequency.setValueAtTime(659, now + 0.2);
        osc.frequency.setValueAtTime(880, now + 0.3);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.45);
        osc.start(now);
        osc.stop(now + 0.45);
      }
    } catch {
      // Audio context might be restricted before user gesture
    }
  }, [isMuted]);

  // Load level data
  const loadLevel = useCallback((lvlIndex: number) => {
    const config = LEVEL_CONFIGS[lvlIndex];
    levelDataRef.current = {
      platforms: JSON.parse(JSON.stringify(config.platforms)),
      collectibles: JSON.parse(JSON.stringify(config.collectibles)),
      enemies: JSON.parse(JSON.stringify(config.enemies)),
      particles: [],
      goalX: config.goalX,
      goalY: config.goalY,
    };
    playerRef.current.x = 40;
    playerRef.current.y = 290;
    playerRef.current.vx = 0;
    playerRef.current.vy = 0;
    playerRef.current.grounded = false;
  }, []);

  const startGame = () => {
    setCurrentLevelIdx(0);
    setScore(0);
    loadLevel(0);
    setGameState("playing");
  };

  const restartCurrentLevel = () => {
    loadLevel(currentLevelIdx);
    setGameState("playing");
  };

  const nextLevel = () => {
    if (currentLevelIdx < LEVEL_CONFIGS.length - 1) {
      const nextIdx = currentLevelIdx + 1;
      setCurrentLevelIdx(nextIdx);
      loadLevel(nextIdx);
      setGameState("playing");
    } else {
      setGameState("victory");
      playSound("win");
    }
  };

  // Keyboard handlers
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space", "w", "a", "s", "d"].includes(e.key)) {
        // Prevent window scrolling when playing
        if (gameState === "playing") {
          e.preventDefault();
        }
      }
      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") keysRef.current.left = true;
      if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") keysRef.current.right = true;
      if (e.key === "ArrowUp" || e.key === " " || e.key === "w" || e.key === "W") keysRef.current.jump = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") keysRef.current.left = false;
      if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") keysRef.current.right = false;
      if (e.key === "ArrowUp" || e.key === " " || e.key === "w" || e.key === "W") keysRef.current.jump = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gameState]);

  // Main 60fps Game Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const spawnParticles = (x: number, y: number, color: string, count = 8) => {
      for (let i = 0; i < count; i++) {
        levelDataRef.current.particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4 - 1.5,
          color,
          life: 0,
          maxLife: 20 + Math.random() * 15,
        });
      }
    };

    const drawPlayer = (p: typeof playerRef.current) => {
      ctx.save();
      ctx.translate(p.x + p.w / 2, p.y + p.h / 2);
      ctx.scale(p.facing, 1);

      const runCycle = Math.sin(p.animFrame * 0.3);
      const isMoving = Math.abs(p.vx) > 0.3 && p.grounded;

      // 1. Head & Hair
      ctx.fillStyle = "#fbcfe8"; // skin tone
      ctx.beginPath();
      ctx.arc(0, -14, 7, 0, Math.PI * 2);
      ctx.fill();

      // Hair (dark professional cut)
      ctx.fillStyle = "#1e1e24";
      ctx.beginPath();
      ctx.arc(0, -17, 7, Math.PI, Math.PI * 2);
      ctx.fill();
      ctx.fillRect(-7, -17, 4, 6);

      // Eye
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(2, -15, 2, 2);

      // 2. White Shirt Collar
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.moveTo(-4, -7);
      ctx.lineTo(4, -7);
      ctx.lineTo(0, -2);
      ctx.closePath();
      ctx.fill();

      // 3. Light Blue Tie (Corbata azul como la foto)
      ctx.fillStyle = "#38bdf8";
      ctx.beginPath();
      ctx.moveTo(-1.5, -6);
      ctx.lineTo(1.5, -6);
      ctx.lineTo(2.5, 3 + (isMoving ? runCycle * 1.5 : 0));
      ctx.lineTo(0, 6);
      ctx.lineTo(-2.5, 3 + (isMoving ? runCycle * 1.5 : 0));
      ctx.closePath();
      ctx.fill();

      // 4. Dark Charcoal Suit Jacket (Vestido de paño)
      ctx.fillStyle = "#1e293b"; // Dark suit jacket
      // Left side of jacket
      ctx.fillRect(-7, -7, 4, 15);
      // Right side of jacket
      ctx.fillRect(3, -7, 4, 15);
      // Back of suit
      ctx.fillRect(-4, -7, 8, 4);

      // Suit buttons (subtle silver)
      ctx.fillStyle = "#94a3b8";
      ctx.fillRect(0, 0, 1.5, 1.5);

      // 5. Suit Trousers (Pantalón de paño)
      ctx.fillStyle = "#0f172a";
      const legOffset = isMoving ? runCycle * 5 : 0;
      if (p.grounded) {
        // Left Leg
        ctx.fillRect(-6, 8, 5, 12 - legOffset);
        // Right Leg
        ctx.fillRect(1, 8, 5, 12 + legOffset);
      } else {
        // Jumping legs bent
        ctx.fillRect(-6, 7, 5, 9);
        ctx.fillRect(1, 6, 5, 8);
      }

      // 6. Leather Shoes (Zapatos de charol negro)
      ctx.fillStyle = "#020617";
      if (p.grounded) {
        ctx.fillRect(-6, 20 - legOffset, 7, 3);
        ctx.fillRect(1, 20 + legOffset, 7, 3);
      } else {
        ctx.fillRect(-6, 16, 7, 3);
        ctx.fillRect(1, 14, 7, 3);
      }

      // 7. Suit Arms & Briefcase
      ctx.fillStyle = "#1e293b";
      ctx.fillRect(-8, -4, 3, 10); // Back arm

      // Briefcase in front hand (Portafolio de trabajo)
      ctx.fillStyle = "#451a03"; // Leather brown briefcase
      ctx.fillRect(6, 0 + (isMoving ? runCycle * 2 : 0), 7, 6);
      ctx.fillStyle = "#f59e0b"; // Golden latch
      ctx.fillRect(8.5, 2, 2, 2);

      ctx.restore();
    };

    const loop = () => {
      animId = requestAnimationFrame(loop);

      const cfg = LEVEL_CONFIGS[currentLevelIdx];
      const level = levelDataRef.current;
      const player = playerRef.current;

      // Clear & Background
      ctx.fillStyle = cfg.bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw futuristic grid lines in background
      ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Level Title watermark
      ctx.fillStyle = "rgba(255, 255, 255, 0.07)";
      ctx.font = "bold 28px sans-serif";
      ctx.fillText(cfg.title.toUpperCase(), 30, 45);

      if (gameState === "playing") {
        // --- Input Handling & Physics ---
        if (keysRef.current.left) {
          player.vx = -player.speed;
          player.facing = -1;
          player.animFrame++;
        } else if (keysRef.current.right) {
          player.vx = player.speed;
          player.facing = 1;
          player.animFrame++;
        } else {
          player.vx *= 0.65;
        }

        if (keysRef.current.jump && player.grounded) {
          player.vy = player.jumpForce;
          player.grounded = false;
          playSound("jump");
          spawnParticles(player.x + player.w / 2, player.y + player.h, cfg.themeColor, 5);
        }

        // Apply Gravity
        player.vy += 0.48;
        if (player.vy > 9) player.vy = 9;

        // Move Horizontal
        player.x += player.vx;
        if (player.x < 0) player.x = 0;
        if (player.x + player.w > canvas.width) player.x = canvas.width - player.w;

        // Platform collisions (horizontal + vertical)
        player.grounded = false;
        player.y += player.vy;

        for (const plat of level.platforms) {
          if (
            player.x + player.w > plat.x &&
            player.x < plat.x + plat.w &&
            player.y + player.h >= plat.y &&
            player.y + player.h <= plat.y + 14 &&
            player.vy >= 0
          ) {
            player.y = plat.y - player.h;
            player.vy = 0;
            player.grounded = true;
          }
        }

        // --- Collectibles Collision ---
        for (const item of level.collectibles) {
          if (!item.collected) {
            const dist = Math.hypot(
              player.x + player.w / 2 - item.x,
              player.y + player.h / 2 - item.y
            );
            if (dist < 26) {
              item.collected = true;
              setScore((s) => s + 100);
              playSound("coin");
              spawnParticles(item.x, item.y, "#facc15", 10);
            }
          }
        }

        // --- Enemies Update & Collision ---
        for (const enemy of level.enemies) {
          if (enemy.alive) {
            enemy.x += enemy.vx;
            if (enemy.x <= enemy.minX || enemy.x + enemy.w >= enemy.maxX) {
              enemy.vx = -enemy.vx;
            }

            // Check collision with player
            if (
              player.x + player.w > enemy.x &&
              player.x < enemy.x + enemy.w &&
              player.y + player.h > enemy.y &&
              player.y < enemy.y + enemy.h
            ) {
              // Stomp on enemy from above (like Mario)
              if (player.vy > 0 && player.y + player.h - enemy.y < 16) {
                enemy.alive = false;
                player.vy = -7;
                setScore((s) => s + 150);
                playSound("jump");
                spawnParticles(enemy.x + enemy.w / 2, enemy.y, "#ef4444", 12);
              } else {
                // Hit enemy -> Game Over
                playSound("hit");
                spawnParticles(player.x, player.y, "#ef4444", 16);
                setGameState("game_over");
              }
            }
          }
        }

        // --- Goal Reached Check ---
        const distToGoal = Math.hypot(
          player.x + player.w / 2 - level.goalX,
          player.y + player.h / 2 - (level.goalY - 20)
        );
        if (distToGoal < 34) {
          playSound("win");
          spawnParticles(level.goalX, level.goalY - 20, cfg.themeColor, 20);
          if (currentLevelIdx < LEVEL_CONFIGS.length - 1) {
            setGameState("level_complete");
          } else {
            setGameState("victory");
          }
        }
      }

      // --- Draw Platforms ---
      for (const plat of level.platforms) {
        ctx.fillStyle = plat.type === "accent" ? cfg.themeColor : "#1e293b";
        ctx.fillRect(plat.x, plat.y, plat.w, plat.h);

        // Platform top neon line
        ctx.fillStyle = plat.type === "accent" ? "#ffffff" : cfg.themeColor;
        ctx.fillRect(plat.x, plat.y, plat.w, 3);
      }

      // --- Draw Collectibles ---
      for (const item of level.collectibles) {
        if (!item.collected) {
          ctx.save();
          const bob = Math.sin(Date.now() * 0.005 + item.x) * 4;

          // Glowing aura
          ctx.beginPath();
          ctx.arc(item.x, item.y + bob, 14, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(250, 204, 21, 0.18)";
          ctx.fill();

          // Icon
          ctx.font = "16px sans-serif";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(item.icon, item.x, item.y + bob);

          // Label
          ctx.font = "bold 9px sans-serif";
          ctx.fillStyle = "#ffffff";
          ctx.fillText(item.label, item.x, item.y + bob + 16);

          ctx.restore();
        }
      }

      // --- Draw Enemies (Bugs / Errores con estilo tecnológico) ---
      for (const enemy of level.enemies) {
        if (enemy.alive) {
          ctx.save();
          // Bug body
          ctx.fillStyle = "#ef4444";
          ctx.beginPath();
          ctx.arc(enemy.x + enemy.w / 2, enemy.y + enemy.h / 2, enemy.w / 2, 0, Math.PI * 2);
          ctx.fill();

          // Bug eyes
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(enemy.x + 4, enemy.y + 6, 4, 4);
          ctx.fillRect(enemy.x + 14, enemy.y + 6, 4, 4);

          ctx.fillStyle = "#000000";
          ctx.fillRect(enemy.x + (enemy.vx > 0 ? 6 : 4), enemy.y + 7, 2, 2);
          ctx.fillRect(enemy.x + (enemy.vx > 0 ? 16 : 14), enemy.y + 7, 2, 2);

          // Label
          ctx.font = "bold 9px monospace";
          ctx.fillStyle = "#fca5a5";
          ctx.textAlign = "center";
          ctx.fillText(enemy.label, enemy.x + enemy.w / 2, enemy.y - 4);

          ctx.restore();
        }
      }

      // --- Draw Goal Flag / Server Portal ---
      ctx.save();
      const goalPulse = Math.sin(Date.now() * 0.006) * 3;
      // Glowing pillar
      const gradient = ctx.createLinearGradient(0, level.goalY - 60, 0, level.goalY);
      gradient.addColorStop(0, cfg.themeColor);
      gradient.addColorStop(1, "transparent");
      ctx.fillStyle = gradient;
      ctx.fillRect(level.goalX - 16, level.goalY - 60, 32, 60);

      // Goal Icon / Sign
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(level.goalX - 20, level.goalY - 70 + goalPulse, 40, 24);
      ctx.strokeStyle = cfg.themeColor;
      ctx.lineWidth = 2;
      ctx.strokeRect(level.goalX - 20, level.goalY - 70 + goalPulse, 40, 24);

      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 9px monospace";
      ctx.textAlign = "center";
      ctx.fillText(cfg.goalLabel, level.goalX, level.goalY - 54 + goalPulse);

      ctx.restore();

      // --- Draw Particles ---
      for (let i = level.particles.length - 1; i >= 0; i--) {
        const pt = level.particles[i];
        pt.x += pt.vx;
        pt.y += pt.vy;
        pt.life++;
        const alpha = 1 - pt.life / pt.maxLife;

        ctx.fillStyle = pt.color;
        ctx.globalAlpha = alpha;
        ctx.fillRect(pt.x, pt.y, 3, 3);
        ctx.globalAlpha = 1;

        if (pt.life >= pt.maxLife) {
          level.particles.splice(i, 1);
        }
      }

      // --- Draw Player ---
      drawPlayer(player);

      // --- HUD ---
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 13px sans-serif";
      ctx.textAlign = "left";
      ctx.fillText(`PUNTAJE: ${score}`, 20, 26);
      ctx.textAlign = "right";
      ctx.fillText(`NIVEL ${currentLevelIdx + 1}/4`, canvas.width - 20, 26);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [gameState, currentLevelIdx, score, playSound]);

  return (
    <section id="juego" aria-label="Mini-juego interactivo" className="scroll-mt-20 border-t border-border/60 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <SectionHeading
              eyebrow="Modo Arcade Interactivo"
              description="Acompaña a Daniel en vestido de paño a superar los 4 niveles del ciclo de desarrollo Full Stack."
            >
              Dev Runner: La Ruta del Desarrollador
            </SectionHeading>

            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-accent/40 bg-accent/10 px-5 text-sm font-semibold text-accent transition-all hover:bg-accent hover:text-accent-foreground active:scale-95"
            >
              <span>{isExpanded ? "Ocultar Juego" : "🎮 Jugar Desafío (4 Niveles)"}</span>
            </button>
          </div>

          {isExpanded && (
            <div className="mt-8 overflow-hidden rounded-2xl border border-border/80 bg-surface shadow-2xl transition-all animate-in fade-in zoom-in-95 duration-300">
              {/* Game Top Bar */}
              <div className="flex items-center justify-between border-b border-border/80 bg-background/90 px-4 py-3 text-xs sm:px-6">
                <div className="flex items-center gap-2">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-bold text-foreground">
                    {LEVEL_CONFIGS[currentLevelIdx].title}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-muted">
                    Puntos: <strong className="text-accent">{score}</strong>
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsMuted(!isMuted)}
                    className="text-muted hover:text-foreground transition-colors"
                    aria-label={isMuted ? "Activar sonido" : "Silenciar sonido"}
                  >
                    {isMuted ? "🔇" : "🔊"}
                  </button>
                </div>
              </div>

              {/* Game Viewport / Canvas Container */}
              <div className="relative aspect-[16/8] w-full bg-[#070b14] overflow-hidden">
                <canvas
                  ref={canvasRef}
                  width={900}
                  height={400}
                  className="h-full w-full object-contain"
                />

                {/* Overlay: Start Screen */}
                {gameState === "start" && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 p-4 text-center backdrop-blur-sm">
                    <div className="max-w-md">
                      <span className="inline-block rounded-full bg-accent/20 border border-accent/40 px-3 py-1 text-xs font-semibold text-accent mb-2">
                        🎮 Mini-juego Arcade Tecnológico
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        Dev Runner: Full Stack Quest
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-300">
                        Controla al ingeniero en vestido de paño con su maletín. Salta sobre plataformas, recolecta tecnologías y aplasta los errores para desplegar en producción.
                      </p>

                      <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs text-slate-400">
                        <span className="rounded bg-slate-800 px-2 py-1">⌨️ Flechas / WASD para mover</span>
                        <span className="rounded bg-slate-800 px-2 py-1">Espacio para saltar</span>
                      </div>

                      <button
                        type="button"
                        onClick={startGame}
                        className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-accent px-8 text-sm font-bold text-accent-foreground shadow-lg shadow-accent/40 hover:scale-105 active:scale-95 transition-all"
                      >
                        Iniciar Juego (Nivel 1)
                      </button>
                    </div>
                  </div>
                )}

                {/* Overlay: Game Over */}
                {gameState === "game_over" && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/85 p-4 text-center backdrop-blur-sm">
                    <span className="text-3xl">💥</span>
                    <h3 className="mt-2 text-xl font-bold text-rose-500">
                      ¡Error en Ejecución!
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-300">
                      Un bug interrumpió el proceso. Inténtalo de nuevo para resolverlo.
                    </p>
                    <button
                      type="button"
                      onClick={restartCurrentLevel}
                      className="mt-4 inline-flex h-11 items-center justify-center rounded-xl bg-rose-600 px-6 text-sm font-semibold text-white shadow-lg shadow-rose-600/30 hover:opacity-90 active:scale-95 transition-all"
                    >
                      Reintentar Nivel
                    </button>
                  </div>
                )}

                {/* Overlay: Level Complete */}
                {gameState === "level_complete" && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/85 p-4 text-center backdrop-blur-sm">
                    <span className="text-3xl">✨</span>
                    <h3 className="mt-2 text-xl font-bold text-emerald-400">
                      ¡Nivel {currentLevelIdx + 1} Completado!
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-300">
                      {LEVEL_CONFIGS[currentLevelIdx].desc}
                    </p>
                    <button
                      type="button"
                      onClick={nextLevel}
                      className="mt-4 inline-flex h-11 items-center justify-center rounded-xl bg-emerald-600 px-6 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 hover:opacity-90 active:scale-95 transition-all"
                    >
                      Siguiente Nivel &rarr;
                    </button>
                  </div>
                )}

                {/* Overlay: Victory */}
                {gameState === "victory" && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 p-4 text-center backdrop-blur-md">
                    <span className="text-4xl">🚀🏆</span>
                    <h3 className="mt-2 text-2xl font-bold text-gradient">
                      ¡Despliegue a Producción Exitoso!
                    </h3>
                    <p className="mt-2 max-w-md text-xs sm:text-sm text-slate-200">
                      Has completado los 4 niveles del ciclo de software: Frontend, Backend, Bases de Datos y Producción en AWS. ¡Puntaje final: <strong>{score} puntos</strong>!
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={startGame}
                        className="inline-flex h-11 items-center justify-center rounded-xl border border-border bg-slate-800 px-5 text-sm font-semibold text-white hover:bg-slate-700 active:scale-95 transition-all"
                      >
                        Jugar de nuevo
                      </button>
                      <a
                        href="#contacto"
                        onClick={() => setIsExpanded(false)}
                        className="inline-flex h-11 items-center justify-center rounded-xl bg-accent px-5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/30 hover:opacity-90 active:scale-95 transition-all"
                      >
                        Contratar a Daniel
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile / Touch Controls Overlay (Especial para Android e iOS) */}
              <div className="border-t border-border/80 bg-surface/90 p-4">
                <div className="flex items-center justify-between sm:hidden">
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800 border border-slate-700 text-xl font-bold text-white active:bg-accent active:text-white select-none touch-none"
                      onTouchStart={(e) => {
                        e.preventDefault();
                        keysRef.current.left = true;
                      }}
                      onTouchEnd={(e) => {
                        e.preventDefault();
                        keysRef.current.left = false;
                      }}
                      onMouseDown={() => (keysRef.current.left = true)}
                      onMouseUp={() => (keysRef.current.left = false)}
                      aria-label="Mover a la izquierda"
                    >
                      &larr;
                    </button>
                    <button
                      type="button"
                      className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800 border border-slate-700 text-xl font-bold text-white active:bg-accent active:text-white select-none touch-none"
                      onTouchStart={(e) => {
                        e.preventDefault();
                        keysRef.current.right = true;
                      }}
                      onTouchEnd={(e) => {
                        e.preventDefault();
                        keysRef.current.right = false;
                      }}
                      onMouseDown={() => (keysRef.current.right = true)}
                      onMouseUp={() => (keysRef.current.right = false)}
                      aria-label="Mover a la derecha"
                    >
                      &rarr;
                    </button>
                  </div>

                  <button
                    type="button"
                    className="flex h-14 w-28 items-center justify-center rounded-2xl bg-accent text-sm font-bold text-accent-foreground shadow-lg shadow-accent/30 active:scale-95 select-none touch-none"
                    onTouchStart={(e) => {
                      e.preventDefault();
                      keysRef.current.jump = true;
                    }}
                    onTouchEnd={(e) => {
                      e.preventDefault();
                      keysRef.current.jump = false;
                    }}
                    onMouseDown={() => (keysRef.current.jump = true)}
                    onMouseUp={() => (keysRef.current.jump = false)}
                    aria-label="Saltar"
                  >
                    SALTAR &uarr;
                  </button>
                </div>

                <div className="hidden sm:flex items-center justify-between text-xs text-muted">
                  <div className="flex items-center gap-3">
                    <span>💡 Usa las flechas <kbd className="rounded border border-border px-1.5 py-0.5">&larr;</kbd> <kbd className="rounded border border-border px-1.5 py-0.5">&rarr;</kbd> para correr</span>
                    <span><kbd className="rounded border border-border px-1.5 py-0.5">Espacio</kbd> o <kbd className="rounded border border-border px-1.5 py-0.5">&uarr;</kbd> para saltar</span>
                  </div>
                  <span>Puedes aplastar los errores saltando encima de ellos.</span>
                </div>
              </div>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
