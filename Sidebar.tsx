import type React from 'react';
import { HomeIcon, PopularIcon } from '../../assets/icons/RedditIcons';

const Sidebar: React.FC = () => {
  return (
    <div className="fixed left-0 top-12 w-56 h-[calc(100vh-48px)] bg-white overflow-auto hidden md:block border-r border-reddit-light-border">
      <div className="p-3">
        {/* Home navigation */}
        <ul className="mb-2">
          <li>
            <a href="/" className="flex items-center py-2 px-3 text-sm font-medium text-black hover:bg-gray-100 rounded">
              <HomeIcon className="mr-2" size={20} />
              <span>首页</span>
            </a>
          </li>
          <li>
            <a href="/popular" className="flex items-center py-2 px-3 text-sm font-medium text-black hover:bg-gray-100 rounded">
              <PopularIcon className="mr-2" size={20} />
              <span>热门</span>
            </a>
          </li>
          <li>
            <a href="/all" className="flex items-center py-2 px-3 text-sm font-medium text-black hover:bg-gray-100 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mr-2" fill="currentColor">
                <path d="M3.5 3.5h7v7h-7zm10 0h7v7h-7zm-10 10h7v7h-7zm10 0h7v7h-7z" />
              </svg>
              <span>热榜</span>
            </a>
          </li>
        </ul>

        {/* Topics/Feeds section */}
        <div className="mt-4 mb-2">
          <div className="flex items-center justify-between px-3">
            <div className="text-xs font-medium text-gray-500">你的专区</div>
            <button className="text-gray-500 hover:bg-gray-100 rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </svg>
            </button>
          </div>

          <button className="flex items-center py-2 px-3 mt-1 w-full text-sm font-medium text-black hover:bg-gray-100 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mr-2" fill="currentColor">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2v-4H8v-2h4V7h2v4h4v2h-4v4z" />
            </svg>
            <span>创建内容区 Feed</span>
          </button>
        </div>

        {/* Communities section */}
        <div className="mt-4 mb-2">
          <div className="flex items-center justify-between px-3">
            <div className="text-xs font-medium text-gray-500">板块</div>
            <button className="text-gray-500 hover:bg-gray-100 rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </svg>
            </button>
          </div>

          <ul>
            <li>
              <a href="/r/chinese" className="flex items-center py-2 px-3 text-sm font-medium text-black hover:bg-gray-100 rounded">
                <div className="w-6 h-6 rounded-full bg-blue-500 mr-2 flex items-center justify-center text-white text-xs">中</div>
                <span>r/chinese</span>
              </a>
            </li>
            <li>
              <a href="/r/AskReddit" className="flex items-center py-2 px-3 text-sm font-medium text-black hover:bg-gray-100 rounded">
                <div className="w-6 h-6 rounded-full bg-blue-500 mr-2 flex items-center justify-center text-white text-xs">A</div>
                <span>r/AskReddit</span>
              </a>
            </li>
          </ul>

          <button className="flex items-center py-2 px-3 mt-1 w-full text-sm font-medium text-black hover:bg-gray-100 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mr-2" fill="currentColor">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
            <span>创建社区</span>
          </button>
        </div>

        {/* Resources section */}
        <div className="mt-4 border-t border-reddit-light-border pt-4">
          <div className="px-3 text-xs font-medium text-gray-500">资源</div>
          <ul className="mt-1">
            <li>
              <a href="/about" className="flex items-center py-2 px-3 text-sm font-medium text-black hover:bg-gray-100 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mr-2" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
                <span>关于 Reddit</span>
              </a>
            </li>
            <li>
              <a href="/help" className="flex items-center py-2 px-3 text-sm font-medium text-black hover:bg-gray-100 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mr-2" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
                <span>帮助</span>
              </a>
            </li>
            <li>
              <a href="/terms" className="flex items-center py-2 px-3 text-sm font-medium text-black hover:bg-gray-100 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mr-2" fill="currentColor">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                </svg>
                <span>条款</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
