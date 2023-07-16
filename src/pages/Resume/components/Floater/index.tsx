import React, { useEffect, useContext, useRef, useState, useCallback, useMemo } from 'react';
import classnames from 'classnames';
import Modal from "@/components/PromisifyModal";
import FloaterModal from "@/components/Modal/FloaterModal";
import SvgCircle from '@/components/Circle';
import { CountdownSvg } from '@/assets';
import { ModalContext } from '@/components/PromisifyModal';
import styles from './index.module.less';

export default function Floater() {
  const [show, setShow] = useState(false);
  const [percent, setPercent] = useState(1);
  const timeRef = useRef<number>(0)
  const { theme } = useContext(ModalContext);

  const duration = 10000;
  const speed = 1000 / 60 / duration;
  const showTitle = useMemo(() => percent >= 100 || (timeRef.current > 0 && percent <= 10), [percent])
  const completeHandler = useCallback(() => {
    timeRef.current += duration;
  }, []);
  useEffect(() => {
    let id;
    const step = () => {
      setPercent((v) => {
        let _v = v + speed * 100;
        if (_v >= 100) {
          _v = 0;
          completeHandler();
        }
        id = requestAnimationFrame(step);
        return _v;
      });
    };
    id = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(id);
    };
  }, [speed, completeHandler]);

  const openModal = () => {
    Modal.show(FloaterModal, { title: '欢迎浏览', timeRef, minTime: Math.floor(percent * duration / 100) });
  }
  useEffect(() => {
    window.addEventListener('fullFixed', (e) => {
      setShow(e.detail.fullFixed);
    })
  }, []);
  return <div className={classnames({
    [styles.ball]: true,
    [styles.showBall]: show,
    [styles.hideBall]: !show,
  })} onClick={openModal}>
    <SvgCircle percent={percent} className={styles.countdown} config={{
      id: 0,
      strokeWidth: 5,
      x: 84, // y + r
      y: 42, // taskProgressInfoWrapper的width/2
      r: 42, // taskProgressInfoWrapper的width/2 + strokeWidth
      radian: 359.9999,
      clockwise: 1,
      strokeColor: { "100%": theme },
      trailColor: { "100%": "#fff" }
    }} />
    <CountdownSvg
      className={classnames({
        [styles.spinAmin]: showTitle,
        [styles.icon]: true
      })}
      fill={theme}
    />
    {showTitle && <div className={styles.title}>{`+${Math.floor(duration / 1000)}s`}</div>}
  </div>
}