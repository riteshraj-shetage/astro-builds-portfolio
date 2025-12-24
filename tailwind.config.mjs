/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // GitHub-inspired color palette - Enhanced with light mode support
        gh: {
          canvas: {
            default: 'var(--gh-canvas-default, #0d1117)',
            subtle: 'var(--gh-canvas-subtle, #161b22)',
            inset: 'var(--gh-canvas-inset, #010409)',
            overlay: 'var(--gh-canvas-overlay, #161b22)',
          },
          border: {
            default: 'var(--gh-border-default, #30363d)',
            muted: 'var(--gh-border-muted, #21262d)',
            subtle: 'var(--gh-border-subtle, #21262d)',
          },
          fg: {
            default: 'var(--gh-fg-default, #e6edf3)',
            muted: 'var(--gh-fg-muted, #7d8590)',
            subtle: 'var(--gh-fg-subtle, #6e7681)',
            onEmphasis: 'var(--gh-fg-onEmphasis, #ffffff)',
          },
          accent: {
            fg: 'var(--gh-accent-fg, #2f81f7)',
            emphasis: 'var(--gh-accent-emphasis, #1f6feb)',
            muted: 'var(--gh-accent-muted, rgba(56, 139, 253, 0.4))',
            subtle: 'var(--gh-accent-subtle, rgba(56, 139, 253, 0.15))',
          },
          success: {
            fg: 'var(--gh-success-fg, #3fb950)',
            emphasis: 'var(--gh-success-emphasis, #238636)',
            muted: 'var(--gh-success-muted, rgba(46, 160, 67, 0.4))',
            subtle: 'var(--gh-success-subtle, rgba(46, 160, 67, 0.15))',
          },
          danger: {
            fg: '#f85149',
            emphasis: '#da3633',
            muted: 'rgba(248, 81, 73, 0.4)',
            subtle: 'rgba(248, 81, 73, 0.15)',
          },
          attention: {
            fg: 'var(--gh-attention-fg, #d29922)',
            emphasis: 'var(--gh-attention-emphasis, #bb8009)',
            muted: 'var(--gh-attention-muted, rgba(187, 128, 9, 0.4))',
            subtle: 'var(--gh-attention-subtle, rgba(187, 128, 9, 0.15))',
          },
          neutral: {
            muted: 'rgba(110, 118, 129, 0.4)',
            subtle: 'rgba(110, 118, 129, 0.1)',
          },
          rose: 'var(--gh-rose, #f78166)',
          blue: 'var(--gh-blue, #1f6feb)',
          green: 'var(--gh-green, #3fb950)',
          gold: 'var(--gh-gold, #d29922)',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Noto Sans', 'Helvetica', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"'],
        mono: ['"SF Mono"', 'Monaco', '"Cascadia Mono"', '"Segoe UI Mono"', '"Roboto Mono"', '"Oxygen Mono"', '"Ubuntu Monospace"', '"Source Code Pro"', '"Fira Mono"', '"Droid Sans Mono"', '"Courier New"', 'monospace'],
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
