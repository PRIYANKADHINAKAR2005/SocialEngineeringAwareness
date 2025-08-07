import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'mono': ['JetBrains Mono', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Cybersecurity theme colors
				info: {
					DEFAULT: 'hsl(var(--info))',
					foreground: 'hsl(var(--info-foreground))'
				},
				neon: {
					DEFAULT: 'hsl(var(--neon-glow))',
					glow: 'hsl(var(--neon-glow))'
				},
				warning: {
					DEFAULT: 'hsl(var(--warning-glow))',
					glow: 'hsl(var(--warning-glow))'
				},
				success: {
					DEFAULT: 'hsl(var(--success-glow))',
					glow: 'hsl(var(--success-glow))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'hook-drop': {
					'0%': { transform: 'translateY(-100px) rotate(0deg)', opacity: '0' },
					'50%': { transform: 'translateY(20px) rotate(5deg)', opacity: '1' },
					'100%': { transform: 'translateY(0) rotate(0deg)', opacity: '1' }
				},
				'typing': {
					'from': { width: '0' },
					'to': { width: '100%' }
				},
				'blink': {
					'0%, 50%': { borderColor: 'transparent' },
					'51%, 100%': { borderColor: 'hsl(var(--accent))' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(var(--neon-glow) / 0.3)' },
					'50%': { boxShadow: '0 0 40px hsl(var(--neon-glow) / 0.6)' }
				},
				'wave': {
					'0%': { transform: 'translateX(0) translateY(0) scaleY(1)' },
					'50%': { transform: 'translateX(-25%) translateY(10px) scaleY(0.8)' },
					'100%': { transform: 'translateX(-50%) translateY(0) scaleY(1)' }
				},
				'zoom-in': {
					'from': { opacity: '0', transform: 'scale(0.8)' },
					'to': { opacity: '1', transform: 'scale(1)' }
				},
				'slide-up': {
					'from': { opacity: '0', transform: 'translateY(30px)' },
					'to': { opacity: '1', transform: 'translateY(0)' }
				},
				'card-flip': {
					'0%': { transform: 'perspective(1000px) rotateY(0)' },
					'100%': { transform: 'perspective(1000px) rotateY(180deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'hook-drop': 'hook-drop 2s ease-out',
				'typing': 'typing 3s steps(40, end), blink 0.75s step-end infinite',
				'pulse-glow': 'pulse-glow 2s infinite',
				'wave': 'wave 3s ease-in-out infinite',
				'zoom-in': 'zoom-in 0.3s ease-out',
				'slide-up': 'slide-up 0.6s ease-out',
				'card-flip': 'card-flip 0.6s ease-in-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
