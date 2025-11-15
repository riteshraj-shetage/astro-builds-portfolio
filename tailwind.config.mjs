/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // GitHub-inspired color palette - Enhanced
        gh: {
          canvas: {
            default: '#0d1117',
            subtle: '#161b22',
            inset: '#010409',
            overlay: '#161b22',
          },
          border: {
            default: '#30363d',
            muted: '#21262d',
            subtle: '#21262d',
          },
          fg: {
            default: '#e6edf3',
            muted: '#7d8590',
            subtle: '#6e7681',
            onEmphasis: '#ffffff',
          },
          accent: {
            fg: '#2f81f7',
            emphasis: '#1f6feb',
            muted: 'rgba(56, 139, 253, 0.4)',
            subtle: 'rgba(56, 139, 253, 0.15)',
          },
          success: {
            fg: '#3fb950',
            emphasis: '#238636',
            muted: 'rgba(46, 160, 67, 0.4)',
            subtle: 'rgba(46, 160, 67, 0.15)',
          },
          danger: {
            fg: '#f85149',
            emphasis: '#da3633',
            muted: 'rgba(248, 81, 73, 0.4)',
            subtle: 'rgba(248, 81, 73, 0.15)',
          },
          attention: {
            fg: '#d29922',
            emphasis: '#9e6a03',
            muted: 'rgba(187, 128, 9, 0.4)',
            subtle: 'rgba(187, 128, 9, 0.15)',
          },
          neutral: {
            muted: 'rgba(110, 118, 129, 0.4)',
            subtle: 'rgba(110, 118, 129, 0.1)',
          },
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Noto Sans', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(47, 129, 247, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(47, 129, 247, 0.5)' },
        },
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
};
