import type React from 'react';
import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import VoteFeedback from './VoteFeedback';

interface VoteActionButtonProps {
  icon: IconDefinition;
  isActive: boolean;
  isPositive: boolean; // 用于区分点赞和踩
  onClick: () => void;
  className?: string;
  label?: string;
}

/**
 * 增强的投票按钮组件
 * 点击时提供丰富的视觉和触觉反馈
 */
const VoteActionButton: React.FC<VoteActionButtonProps> = ({
  icon,
  isActive,
  isPositive,
  onClick,
  className = '',
  label
}) => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackPosition, setFeedbackPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  // 点击效果增强
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // 获取点击位置
    const rect = e.currentTarget.getBoundingClientRect();
    setFeedbackPosition({
      x: rect.left + rect.width / 2,
      y: rect.top
    });

    // 显示反馈
    setShowFeedback(true);

    // 一段时间后隐藏反馈
    setTimeout(() => {
      setShowFeedback(false);
    }, 1000);

    // 触发原始点击事件
    onClick();
  };

  // 获取按钮基本样式
  const getButtonClass = () => {
    let baseClass = className;

    if (isActive) {
      baseClass += isPositive
        ? ' text-blue-500 dark:text-blue-400'
        : ' text-orange-500 dark:text-orange-400';
    }

    return baseClass;
  };

  return (
    <>
      <button
        ref={buttonRef}
        onClick={handleClick}
        className={getButtonClass()}
        aria-label={label}
      >
        <FontAwesomeIcon
          icon={icon}
          className={`transition-transform duration-300 ${isActive ? 'animate-heartbeat' : 'hover:scale-110'}`}
          style={{ transform: showFeedback ? 'scale(1.2)' : 'scale(1)' }}
        />
      </button>

      <VoteFeedback
        type={isPositive ? 'upvote' : 'downvote'}
        visible={showFeedback}
        x={feedbackPosition.x}
        y={feedbackPosition.y}
      />
    </>
  );
};

export default VoteActionButton;
