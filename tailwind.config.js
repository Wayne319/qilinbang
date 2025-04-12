/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        reddit: {
          orange: '#FF4500',
          red: '#F84503',
          blue: '#0079D3',
          'dark-blue': '#1c1c1c',
          'hover-blue': '#1484D6',
          'light-blue': '#7193FF',
          'button-blue': '#0079D3',
          'light-bg': '#DAE0E6',
          'dark-bg': '#030303',
          'light-border': '#EDEFF1',
          border: '#343536',
          'light-text': '#1A1A1B',
          'dark-text': '#D7DADC',
          'light-card': '#FFFFFF',
          'dark-card': '#1A1A1B',
          'light-hover': '#F6F7F8',
          'dark-hover': '#272729',
          upvote: '#FF4500',
          downvote: '#7193FF',
          neutral: '#9CA3AF',
        },
      },
      fontFamily: {
        'ibm-plex': ['IBM Plex Sans', 'Noto Sans', 'Arial', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        // 添加心跳动画效果
        "heartbeat": {
          "0%": { transform: "scale(1)" },
          "14%": { transform: "scale(1.3)" },
          "28%": { transform: "scale(1)" },
          "42%": { transform: "scale(1.3)" },
          "70%": { transform: "scale(1)" },
        },
        // 添加反向弹跳动画
        "bounce-reverse": {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
          "50%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
        },
        // 添加发光动画效果
        "glow": {
          "0%, 100%": {
            opacity: 1,
            filter: "brightness(1)",
          },
          "50%": {
            opacity: 0.6,
            filter: "brightness(1.5)",
          },
        },
        // 添加淡出动画效果
        "fade-out": {
          "0%": {
            opacity: 1,
            transform: "translateY(0)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(-20px)",
          },
        },
        // 添加画圈动画
        "circle-around": {
          "0%": {
            transform: "rotate(0deg) translateX(6px) rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateX(6px) rotate(-360deg)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "heartbeat": "heartbeat 1s ease-in-out",
        "bounce-reverse": "bounce-reverse 1s infinite",
        "glow": "glow 1.5s ease-in-out infinite",
        "fade-out": "fade-out 1s ease-out forwards",
        "circle-around": "circle-around 2s linear infinite",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
