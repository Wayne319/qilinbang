import type React from 'react';
import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faPlus, faShareFromSquare, faStar, faThumbsDown, faThumbsUp, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import VoteActionButton from '../common/VoteActionButton';

interface PostCardProps {
  post: {
    id: string;
    title: string;
    content: string;
    subreddit: string;
    author: string;
    upvotes: number;
    commentCount: number;
    timePosted: string;
    image?: string;
  };
  viewType?: 'card' | 'compact';
}

const PostCard: React.FC<PostCardProps> = ({ post, viewType = 'card' }) => {
  const [votes, setVotes] = useState(post.upvotes);
  const [voteStatus, setVoteStatus] = useState<'up' | 'down' | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [voteAnimation, setVoteAnimation] = useState<'increase' | 'decrease' | null>(null);
  const voteCountRef = useRef<HTMLSpanElement>(null);

  // 渲染动画帧
  useEffect(() => {
    if (voteAnimation) {
      setTimeout(() => {
        setVoteAnimation(null);
      }, 1000);
    }
  }, [voteAnimation]);

  const handleUpvote = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);

    if (voteStatus === 'up') {
      setVotes(votes - 1);
      setVoteStatus(null);
      setVoteAnimation('decrease');
    } else {
      setVotes(voteStatus === 'down' ? votes + 2 : votes + 1);
      setVoteStatus('up');
      setVoteAnimation('increase');
    }
  };

  const handleDownvote = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);

    if (voteStatus === 'down') {
      setVotes(votes + 1);
      setVoteStatus(null);
      setVoteAnimation('increase');
    } else {
      setVotes(voteStatus === 'up' ? votes - 2 : votes - 1);
      setVoteStatus('down');
      setVoteAnimation('decrease');
    }
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const formatNumber = (num: number): string => {
    return num >= 1000 ? `${(num / 1000).toFixed(1)}K` : num.toString();
  };

  const buttonBaseClass = "flex items-center px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 ease-in-out transform hover:scale-105";
  const iconClass = "text-lg"; // Increased icon size

  // 投票数字动画类
  const getVoteCountClass = () => {
    let baseClass = "px-2 py-1 border-t border-b border-gray-300 dark:border-gray-600 font-medium dark:text-white transition-all duration-300";

    if (voteAnimation === 'increase') {
      baseClass += ' text-green-500 dark:text-green-400 animate-bounce';
    } else if (voteAnimation === 'decrease') {
      baseClass += ' text-red-500 dark:text-red-400 animate-pulse';
    }

    return baseClass;
  };

  if (viewType === 'compact') {
    return (
      <div className="bg-white dark:bg-reddit-dark-card rounded-md border border-reddit-light-border dark:border-reddit-border mb-3 hover:border-gray-400 dark:hover:border-gray-500 cursor-pointer transition-colors duration-200">
        <div className="flex items-center p-2">
          <div className="flex-grow">
            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
              <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs mr-1">
                A
              </div>
              <a href={`/r/${post.subreddit}`} className="font-medium hover:underline mr-1">
                r/{post.subreddit}
              </a>
              <span className="mx-1">•</span>
              <span>由</span>
              <a href={`/u/${post.author}`} className="hover:underline ml-1">
                u/{post.author}
              </a>
              <span className="mx-1">发布于</span>
              <span>{post.timePosted}</span>
            </div>

            <h3 className="text-sm font-medium my-1 dark:text-white">{post.title}</h3>

            <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs mt-2 gap-1">
              <div className="flex items-center mr-1">
                <VoteActionButton
                  icon={faThumbsUp}
                  isActive={voteStatus === 'up'}
                  isPositive={true}
                  onClick={handleUpvote}
                  className="flex items-center px-2 py-1 rounded-l-full border border-r-0 border-gray-300 dark:border-gray-600 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  label={voteStatus === 'up' ? "取消赞" : "赞"}
                />
                <span ref={voteCountRef} className={getVoteCountClass()}>
                  {formatNumber(votes)}
                </span>
                <VoteActionButton
                  icon={faThumbsDown}
                  isActive={voteStatus === 'down'}
                  isPositive={false}
                  onClick={handleDownvote}
                  className="flex items-center px-2 py-1 rounded-r-full border border-l-0 border-gray-300 dark:border-gray-600 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  label={voteStatus === 'down' ? "取消踩" : "踩"}
                />
              </div>

              <button className={buttonBaseClass}>
                <FontAwesomeIcon icon={faComment} className={iconClass} />
                <span className="ml-1.5">{formatNumber(post.commentCount)}</span>
              </button>

              <button
                className={`${buttonBaseClass} ${isFavorite ? 'text-yellow-500' : ''}`}
                onClick={toggleFavorite}
              >
                <FontAwesomeIcon
                  icon={isFavorite ? faStar : farStar}
                  className={`${iconClass} ${isFavorite ? 'animate-pulse' : ''}`}
                />
              </button>

              <button className={buttonBaseClass}>
                <FontAwesomeIcon icon={faShareFromSquare} className={iconClass} />
              </button>

              <button className={buttonBaseClass}>
                <FontAwesomeIcon icon={faPlus} className={iconClass} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-reddit-dark-card rounded-md border border-reddit-light-border dark:border-reddit-border mb-3 hover:border-gray-400 dark:hover:border-gray-500 cursor-pointer transition-colors duration-200">
      <div className="flex">
        <div className="px-4 py-3 w-full">
          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
            <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs mr-1">
              A
            </div>
            <a href={`/r/${post.subreddit}`} className="font-medium hover:underline mr-1">
              r/{post.subreddit}
            </a>
            <span className="mx-1">•</span>
            <span>由</span>
            <a href={`/u/${post.author}`} className="hover:underline ml-1">
              u/{post.author}
            </a>
            <span className="mx-1">发布于</span>
            <span>{post.timePosted}</span>

            {/* Collapse/Expand button */}
            <button
              onClick={toggleCollapse}
              className="ml-3 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-transform duration-200 hover:scale-110"
              aria-label={isCollapsed ? "展开帖子" : "收起帖子"}
            >
              <FontAwesomeIcon icon={isCollapsed ? faChevronDown : faChevronUp} />
            </button>
          </div>

          <h3 className="text-lg font-medium my-2 dark:text-white">{post.title}</h3>

          {/* Collapsible post content */}
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isCollapsed ? 'max-h-0 opacity-0' : 'max-h-[2000px] opacity-100'}`}>
            {post.content && <p className="text-sm mb-3 dark:text-gray-300">{post.content}</p>}
            {post.image && (
              <div className="my-2 flex justify-center">
                <img src={post.image} alt={post.title} className="max-h-[512px] object-contain" />
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 mt-2">
            <div className="flex items-center">
              <VoteActionButton
                icon={faThumbsUp}
                isActive={voteStatus === 'up'}
                isPositive={true}
                onClick={handleUpvote}
                className="flex items-center px-2 py-1 rounded-l-full border border-r-0 border-gray-300 dark:border-gray-600 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                label={voteStatus === 'up' ? "取消赞" : "赞"}
              />
              <span ref={voteCountRef} className={getVoteCountClass()}>
                {formatNumber(votes)}
              </span>
              <VoteActionButton
                icon={faThumbsDown}
                isActive={voteStatus === 'down'}
                isPositive={false}
                onClick={handleDownvote}
                className="flex items-center px-2 py-1 rounded-r-full border border-l-0 border-gray-300 dark:border-gray-600 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                label={voteStatus === 'down' ? "取消踩" : "踩"}
              />
            </div>

            <button className={buttonBaseClass}>
              <FontAwesomeIcon icon={faComment} className={iconClass} />
              <span className="ml-1.5">{formatNumber(post.commentCount)}</span>
            </button>

            <button
              className={`${buttonBaseClass} ${isFavorite ? 'text-yellow-500' : ''}`}
              onClick={toggleFavorite}
            >
              <FontAwesomeIcon
                icon={isFavorite ? faStar : farStar}
                className={`${iconClass} ${isFavorite ? 'animate-pulse' : ''}`}
              />
            </button>

            <button className={buttonBaseClass}>
              <FontAwesomeIcon icon={faShareFromSquare} className={iconClass} />
            </button>

            <button className={buttonBaseClass}>
              <FontAwesomeIcon icon={faPlus} className={iconClass} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
