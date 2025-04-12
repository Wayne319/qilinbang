import type React from 'react';
import { useState } from 'react';
import PostCard from './PostCard';
import { CardViewIcon, CompactViewIcon } from '../../assets/icons/RedditIcons';
import CreatePostComponent from './CreatePostComponent';

const mockPosts = [
  {
    id: '1',
    title: '你买的哪一种产品让你变得完全势利 — 比如，你永远无法回到便宜的东西？',
    content: '我发现自己在为一些曾经认为荒谬的东西花钱。例如，我现在买的都是超软的卫生纸，因为便宜的卫生纸不再是我能接受的选择。',
    subreddit: 'AskReddit',
    author: 'reddituser123',
    upvotes: 8900,
    commentCount: 13000,
    timePosted: '11 小时前',
  },
  {
    id: '2',
    title: '私家侦探们，你接到的最令人不安的案子是什么？',
    content: '我一直很好奇私家侦探的真实工作是什么样的。看过一些电影后，我想了解真实生活中的故事和经历。',
    subreddit: 'AskReddit',
    author: 'investigator456',
    upvotes: 5400,
    commentCount: 2300,
    timePosted: '22 小时前',
    image: 'https://images.unsplash.com/photo-1537214971529-00f98e3b8a26?q=80&w=2940&auto=format&fit=crop'
  },
  {
    id: '3',
    title: '什么是网瘾最标志性？',
    content: '我们都知道有人对网络上瘾，但什么是真正的网瘾行为？哪些特征最能说明一个人可能有网瘾？',
    subreddit: 'AskReddit',
    author: 'internetuser789',
    upvotes: 2100,
    commentCount: 2600,
    timePosted: '3 天前',
  },
  {
    id: '4',
    title: '你见过的最可怕的人是谁——一个仅仅靠一个外貌，不是真的坏到骨子里，他只是看起来可怕？',
    content: '',
    subreddit: 'AskReddit',
    author: 'peoplewatcher',
    upvotes: 1300,
    commentCount: 598,
    timePosted: '12 小时前',
  },
  {
    id: '5',
    title: '如果有人当着你的面说"我恨你"，你会如何回应？',
    content: '你会如何处理这种情况？是反击，还是冷静处理，或者完全忽略？',
    subreddit: 'AskReddit',
    author: 'relationship_advice',
    upvotes: 3900,
    commentCount: 7200,
    timePosted: '15 小时前',
  },
  {
    id: '6',
    title: '这有宗教信仰的人么，你觉得相信死后会发生什么？',
    content: '',
    subreddit: 'AskReddit',
    author: 'spiritual_thinker',
    upvotes: 1300,
    commentCount: 5300,
    timePosted: '9 小时前',
  },
  {
    id: '7',
    title: '什么时候选择会令人止步不前不如认识知人？',
    content: '',
    subreddit: 'AskReddit',
    author: 'philosophyman',
    upvotes: 904,
    commentCount: 2550,
    timePosted: '10 小时前',
  },
  {
    id: '8',
    title: '[广州的] 人知道有人来玩人，他们是什么样的？',
    content: '',
    subreddit: 'AskReddit',
    author: 'guangzhou_lover',
    upvotes: 549,
    commentCount: 1100,
    timePosted: '7 小时前',
  },
  {
    id: '9',
    title: '服用 GLP-1 的人，（Ozempic/Mounjaro）您的经历如何？你感觉如何/你的副作用是什么？',
    content: '',
    subreddit: 'AskReddit',
    author: 'healthcare_person',
    upvotes: 448,
    commentCount: 379,
    timePosted: '10 小时前',
  },
  {
    id: '10',
    title: '老师们，学生做过的最令人不安的事情是什么？',
    content: '',
    subreddit: 'AskReddit',
    author: 'teacher101',
    upvotes: 412,
    commentCount: 274,
    timePosted: '11 小时前',
  },
];

const PostList: React.FC = () => {
  const [viewType, setViewType] = useState<'card' | 'compact'>('card');

  return (
    <div className="w-full max-w-[640px] mx-auto pt-16 pb-5 md:pl-56 px-3 dark:bg-reddit-dark-bg">
      {/* Create Post Component */}
      <CreatePostComponent />

      {/* Feed header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="flex items-center border rounded-md overflow-hidden dark:border-gray-700">
            <button className="flex items-center px-3 py-1 text-xs font-medium bg-white dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 border-r dark:border-gray-700 transition-colors duration-200">
              <span>Top</span>
              <svg className="w-4 h-4 ml-1 text-gray-400" fill="none" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5z" fill="currentColor" />
              </svg>
            </button>
            <button className="flex items-center px-3 py-1 text-xs font-medium bg-white dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 border-r dark:border-gray-700 transition-colors duration-200">
              <span>Today</span>
              <svg className="w-4 h-4 ml-1 text-gray-400" fill="none" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5z" fill="currentColor" />
              </svg>
            </button>
            <button className="flex items-center px-3 py-1 text-xs font-medium bg-white dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5z" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <button
            className={`p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200 ${viewType === 'card' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
            onClick={() => setViewType('card')}
          >
            <CardViewIcon size={20} />
          </button>
          <button
            className={`p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md ml-1 transition-colors duration-200 ${viewType === 'compact' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
            onClick={() => setViewType('compact')}
          >
            <CompactViewIcon size={20} />
          </button>
        </div>
      </div>

      {/* Posts */}
      <div>
        {mockPosts.map(post => (
          <PostCard key={post.id} post={post} viewType={viewType} />
        ))}
      </div>

      {/* Right sidebar content - for desktop only */}
      <div className="hidden lg:block fixed right-4 top-16 w-72 bg-white dark:bg-reddit-dark-card rounded-md border border-gray-300 dark:border-gray-700 overflow-hidden transition-colors duration-200">
        <div className="px-3 py-2 bg-gray-200 dark:bg-gray-800 text-sm font-medium dark:text-gray-200">相关的文章</div>
        <div className="p-3">
          <div className="mb-4">
            <a href="/posts/1" className="block text-sm font-medium hover:underline dark:text-gray-200">电脑屏幕上的字太小怎么放大？</a>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">1小时前 • 4条评论</div>
          </div>
          <div className="mb-4">
            <a href="/posts/2" className="block text-sm font-medium hover:underline dark:text-gray-200">广州Reddit网友：您对人工智能的主要关注是什么？</a>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">1小时前</div>
          </div>
          <div className="mb-4">
            <a href="/posts/3" className="block text-sm font-medium hover:underline dark:text-gray-200">你最喜欢的品牌是一款怎样的产品？</a>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">6小时前 • 14条评论</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostList;
