import type React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faFaceSmile, faPoll, faLocationDot, faChartSimple } from '@fortawesome/free-solid-svg-icons';

const CreatePostComponent: React.FC = () => {
  const [postText, setPostText] = useState('');
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);

  const buttonHoverClass = "transition-all duration-200 transform hover:scale-110 hover:shadow-md";

  return (
    <div className="bg-white dark:bg-reddit-dark-card border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-4 transition-colors duration-300">
      <div className="flex">
        {/* User avatar */}
        <div className="mr-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_2.png"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Post input area */}
        <div className="flex-1">
          <div className={`mb-3 w-full rounded-lg ${isTextareaFocused ? 'ring-2 ring-blue-500 dark:ring-blue-400' : 'hover:bg-gray-50 dark:hover:bg-gray-800'} transition-all duration-200 p-2`}>
            <textarea
              className="w-full border-0 focus:ring-0 text-lg placeholder-gray-500 dark:placeholder-gray-400 resize-none bg-transparent outline-none dark:text-gray-200"
              placeholder="What's happening?"
              rows={2}
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              onFocus={() => setIsTextareaFocused(true)}
              onBlur={() => setIsTextareaFocused(false)}
            />
          </div>

          {/* Post actions */}
          <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-3">
            <div className="flex space-x-2">
              {/* Media upload buttons */}
              <button className={`p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full ${buttonHoverClass}`}>
                <FontAwesomeIcon icon={faImage} size="lg" />
              </button>
              <button className={`p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full ${buttonHoverClass}`}>
                <FontAwesomeIcon icon={faFaceSmile} size="lg" />
              </button>
              <button className={`p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full ${buttonHoverClass}`}>
                <FontAwesomeIcon icon={faPoll} size="lg" />
              </button>
              <button className={`p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full ${buttonHoverClass}`}>
                <FontAwesomeIcon icon={faLocationDot} size="lg" />
              </button>
              <button className={`p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full ${buttonHoverClass}`}>
                <FontAwesomeIcon icon={faChartSimple} size="lg" />
              </button>
            </div>

            {/* Post button */}
            <button
              className={`px-4 py-1.5 rounded-full font-medium text-white transition-all duration-300 transform hover:scale-105 ${
                postText ? 'bg-blue-500 hover:bg-blue-600 hover:shadow-lg' : 'bg-blue-300 dark:bg-blue-900/50 cursor-not-allowed'
              }`}
              disabled={!postText}
            >
              Post
            </button>
          </div>
        </div>
      </div>

      {/* "Everyone can reply" section */}
      <div className="mt-3 ml-12">
        <span className="flex items-center text-blue-500 text-sm cursor-pointer hover:underline transition-colors duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="mr-1">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
          </svg>
          Everyone can reply
        </span>
      </div>
    </div>
  );
};

export default CreatePostComponent;
