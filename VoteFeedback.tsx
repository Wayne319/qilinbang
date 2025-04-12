import type React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

interface VoteFeedbackProps {
  type: 'upvote' | 'downvote';
  visible: boolean;
  x: number;
  y: number;
}

/**
 * 点赞/踩的视觉反馈组件
 * 在用户点击点赞/踩按钮时显示一个动画效果
 */
const VoteFeedback: React.FC<VoteFeedbackProps> = ({ type, visible, x, y }) => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; scale: number; opacity: number; rotation: number }>>([]);

  useEffect(() => {
    if (visible) {
      // 创建随机粒子
      const newParticles = Array.from({ length: 5 }, (_, index) => ({
        id: Date.now() + index,
        x: Math.random() * 40 - 20,  // -20 ~ 20 随机偏移
        y: Math.random() * -30 - 10, // -40 ~ -10 向上随机偏移
        scale: Math.random() * 0.5 + 0.5, // 0.5 ~ 1 随机缩放
        opacity: Math.random() * 0.4 + 0.6, // 0.6 ~ 1 随机透明度
        rotation: Math.random() * 360, // 0 ~ 360 随机旋转
      }));

      setParticles(newParticles);

      // 动画结束后清除粒子
      const timer = setTimeout(() => {
        setParticles([]);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [visible]);

  if (!visible && particles.length === 0) return null;

  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{
        left: x,
        top: y,
      }}
    >
      {/* 主图标动画 */}
      <div className="absolute animate-bounce-reverse opacity-0">
        <FontAwesomeIcon
          icon={type === 'upvote' ? faThumbsUp : faThumbsDown}
          className={`text-2xl ${type === 'upvote' ? 'text-blue-500' : 'text-orange-500'}`}
        />
      </div>

      {/* 粒子效果 */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute animate-fade-out"
          style={{
            left: particle.x,
            top: particle.y,
            transform: `scale(${particle.scale}) rotate(${particle.rotation}deg)`,
            opacity: particle.opacity,
            transition: 'all 1s ease-out',
          }}
        >
          <FontAwesomeIcon
            icon={type === 'upvote' ? faThumbsUp : faThumbsDown}
            className={`text-xl ${type === 'upvote' ? 'text-blue-500' : 'text-orange-500'}`}
          />
        </div>
      ))}
    </div>
  );
};

export default VoteFeedback;
