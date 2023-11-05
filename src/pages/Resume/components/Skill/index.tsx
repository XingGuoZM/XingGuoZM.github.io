import React, { useRef, useEffect, useContext } from 'react';
import promiseModal from '@/components/PromisifyModal';
import { data } from '@/data';
import { getRpx2px } from '@/utils';

import styles from './index.module.less';

const CWidth = getRpx2px(500);
const CHeight = getRpx2px(500);

export default function Skill() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useContext(promiseModal.ModalContext);
  useEffect(() => {
    function getDots(data, radius: number) {
      const len = data.length;
      return data.map((item, index: number) => {
        const angle = Math.PI * 2 * index / len
        const x = radius * (1 - Number(Math.sin(angle).toFixed(2)));
        const y = radius * (1 - Number(Math.cos(angle).toFixed(2)));
        return { ...item, x, y, angle }
      })
    }
    function drawLine(ctx: CanvasRenderingContext2D) {
      const radius = CWidth / 3
      const space = CWidth / 2 - radius
      ctx.beginPath();
      const arr = getDots(data.skill, radius);
      arr.forEach(item => {
        ctx.lineTo(item.x + space, item.y + space);
      })
      ctx.closePath();
      ctx.strokeStyle = '#666';
      ctx.stroke();
      ctx.beginPath();
      ctx.fillStyle = theme;
      arr.forEach(item => {
        const remain = Math.floor(radius * (1 - item.percent));
        ctx.lineTo(item.x * item.percent + remain + space, item.y * item.percent + remain + space);
      });
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.strokeStyle = '#666'
      ctx.font = `${getRpx2px(30)}px serif`;
      arr.forEach(item => {
        ctx.moveTo(item.x + space, item.y + space);
        ctx.lineTo(radius + space, radius + space);
        const m = getRpx2px(30);
        let x = item.x + space
        let y = item.y + space;
        if (item.angle === 0) {
          x -= m * item.tag.length / 6;
          y -= m / 2
        } else if (item.angle <= Math.PI / 2) {
          x -= m * item.tag.length / 2;
          y += m / 2
        } else if (item.angle <= Math.PI) {
          x -= m * item.tag.length / 4;
          y += m;
        } else if (item.angle <= Math.PI * 3 / 2) {
          x += m / 2;
          y += m / 4;
        }
        ctx.fillText(item.tag, x, y);
      });
      ctx.closePath();
      ctx.stroke();
    }
    const dom = canvasRef.current

    const ctx = dom.getContext('2d');
    if (ctx) {
      drawLine(ctx);
    }
  }, [])
  return <div className={styles.wrap}>
    <canvas ref={canvasRef} width={CWidth} height={CHeight} className={styles.canvas} />
  </div>
}