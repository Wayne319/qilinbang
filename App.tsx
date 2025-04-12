import React from 'react';
import Navbar from './components/navigation/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import PostList from './components/posts/PostList';
import { useTheme } from './contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function App() {
  const { theme } = useTheme();
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  // Add scroll-to-top functionality
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollBtnClass = `fixed bottom-5 right-5 bg-blue-500 dark:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${showScrollTop ? "opacity-100" : "opacity-0 pointer-events-none"}`;

  return (
    <div className="bg-gray-100 dark:bg-reddit-dark-bg min-h-screen transition-colors duration-300">
      <Navbar />
      <div className="flex pt-12">
        <Sidebar />
        <main className="flex-1">
          <PostList />
        </main>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={scrollBtnClass}
        aria-label="Scroll to top"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </div>
  );
}

export default App;
