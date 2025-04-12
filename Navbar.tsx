import type React from 'react';
import { RedditLogo, SearchIcon, NotificationIcon, ChatIcon, CreatePostIcon } from '../../assets/icons/RedditIcons';
import { useTheme } from '../../contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 w-full h-12 bg-white dark:bg-reddit-dark-card border-b border-reddit-light-border dark:border-reddit-border z-50 flex items-center px-4 transition-colors duration-300">
      {/* Logo */}
      <div className="flex items-center">
        <a href="/" className="flex items-center mr-4">
          <RedditLogo size={32} className="mr-1" />
          <span className="text-black dark:text-white font-bold text-lg">reddit</span>
        </a>
      </div>

      {/* Search Bar */}
      <div className="flex items-center mx-4 flex-1 max-w-[600px] relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="text-gray-400" size={20} />
        </div>
        <input
          type="text"
          placeholder="登入 Reddit"
          className="w-full py-1.5 px-10 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 rounded-full border border-transparent hover:border-gray-300 dark:hover:border-gray-600 focus:border-blue-500 focus:outline-none text-sm transition-colors duration-300"
        />
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center space-x-2 ml-auto">
        {/* Theme toggle button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-reddit-light-hover dark:hover:bg-reddit-dark-hover transition-transform duration-300 hover:scale-110"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? (
            <FontAwesomeIcon icon={faSun} className="text-yellow-400 animate-pulse" />
          ) : (
            <FontAwesomeIcon icon={faMoon} className="text-gray-600" />
          )}
        </button>

        <button className="p-2 rounded-full hover:bg-reddit-light-hover dark:hover:bg-reddit-dark-hover transition-transform duration-300 hover:scale-110">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor" className="dark:text-gray-300" />
          </svg>
        </button>
        <button className="p-2 rounded-full hover:bg-reddit-light-hover dark:hover:bg-reddit-dark-hover transition-transform duration-300 hover:scale-110">
          <ChatIcon size={20} className="text-gray-600 dark:text-gray-300" />
        </button>
        <button className="p-2 rounded-full hover:bg-reddit-light-hover dark:hover:bg-reddit-dark-hover transition-transform duration-300 hover:scale-110">
          <CreatePostIcon size={20} className="text-gray-600 dark:text-gray-300" />
        </button>
        <button className="p-2 rounded-full hover:bg-reddit-light-hover dark:hover:bg-reddit-dark-hover transition-transform duration-300 hover:scale-110">
          <NotificationIcon size={20} className="text-gray-600 dark:text-gray-300" />
        </button>

        <div className="flex items-center ml-2 cursor-pointer hover:bg-reddit-light-hover dark:hover:bg-reddit-dark-hover rounded-full p-1 transition-transform duration-300 hover:scale-105">
          <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
            <img src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png" alt="User Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
