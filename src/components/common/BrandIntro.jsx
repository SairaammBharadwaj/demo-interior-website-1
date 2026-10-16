import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import BrandMark from './BrandMark';

const EASE = [0.22, 1, 0.36, 1];

function Filler({ collapsed, children }) {
  return (
    <motion.span className="intro-filler" initial={false}
      animate={{ width: collapsed ? 0 : 'auto', opacity: collapsed ? 0 : 1 }}
      transition={{ width: { duration: 0.7, ease: EASE }, opacity: { duration: 0.35 } }}>
      {children}
    </motion.span>
  );
}

export default function BrandIntro({ onReveal, onExited }) {
  const [stage, setStage] = useState('loading');

  useEffect(() => {
    let disposed = false;
    let started = false;
    let timers = [];
    const start = () => {
      if (disposed || started) return;
      started = true;
      setStage('name');
      timers = [
        setTimeout(() => setStage('initials'), 1100),
        setTimeout(() => setStage('mark'), 2250),
        setTimeout(() => { setStage('handoff'); onReveal(); }, 3600),
        setTimeout(onExited, 4800),
      ];
    };
    // Avoid changing letter widths halfway through the name-to-initials animation.
    const fallback = setTimeout(start, 1200);
    if (document.fonts?.load) document.fonts.load('400 72px Jost').then(start, start);
    else start();
    return () => { disposed = true; clearTimeout(fallback); timers.forEach(clearTimeout); };
  }, [onReveal, onExited]);

  const showName = stage === 'name' || stage === 'initials';
  const handedOff = stage === 'handoff';

  return (
    <div className="brand-intro" role="status" aria-label="Dream Space Interiors opening animation">
      <motion.div className="intro-backdrop" initial={false}
        animate={{ opacity: handedOff ? 0 : 1 }} transition={{ duration: 0.8, ease: EASE }} />
      <motion.div className="intro-glow" initial={{ opacity: 0 }}
        animate={{ opacity: handedOff ? 0 : 1 }} transition={{ duration: 0.8 }} aria-hidden="true" />
      <div className="intro-stage" aria-hidden="true">
        <motion.div className="intro-name" initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: showName ? 1 : 0, y: showName ? 0 : -8, scale: showName ? 1 : 0.96 }}
          transition={{ duration: 0.45, ease: EASE }}>
          <div className={`intro-name-line ${stage === 'initials' ? 'intro-name-compact' : ''}`}>
            <span>D</span><Filler collapsed={stage !== 'name'}>REAM</Filler>
            <motion.span className="intro-word-gap" initial={false} animate={{ width: stage === 'initials' ? '0.12em' : '0.3em' }} transition={{duration:0.7,ease:EASE}} />
            <span>S</span><Filler collapsed={stage !== 'name'}>PACE</Filler>
          </div>
          <span className="intro-descriptor">INTERIORS</span>
        </motion.div>
        {stage === 'mark' && (
          <motion.div layoutId="studio-brand" className="intro-logo" initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, ease: EASE, layout: { duration: 1.1, ease: EASE } }}>
            <BrandMark draw />
          </motion.div>
        )}
      </div>
      <motion.button type="button" className="intro-skip" onClick={onExited}
        initial={{ opacity: 0 }} animate={{ opacity: handedOff ? 0 : 1 }} transition={{ delay: handedOff ? 0 : 0.6 }}
        tabIndex={handedOff ? -1 : 0}>Skip intro <span aria-hidden="true">↗</span></motion.button>
    </div>
  );
}
