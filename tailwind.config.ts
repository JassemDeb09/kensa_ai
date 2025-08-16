import type { Config } from "tailwindcss";

// all in fixtures is set to tailwind v3 as interims solutions

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			'poppins': ['var(--font-poppins)', 'sans-serif'],
  			'cairo': ['var(--font-cairo)', 'sans-serif'],
  			'sans': ['var(--font-poppins)', 'sans-serif'],
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'parallax-tilt': {
  				'0%': {
  					transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
  				},
  				'100%': {
  					transform: 'perspective(1000px) rotateX(-2deg) rotateY(3deg) scale(1.02)'
  				}
  			},
  			'float-y': {
  				'0%, 100%': {
  					transform: 'translateY(0px)'
  				},
  				'50%': {
  					transform: 'translateY(-8px)'
  				}
  			},
  			'fade-in': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(20px) scale(0.95)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0px) scale(1)'
  				}
  			},
  			'luxury-glow': {
  				'0%, 100%': {
  					boxShadow: '0 0 20px rgba(61, 80, 227, 0.3), 0 0 40px rgba(30, 144, 232, 0.2)'
  				},
  				'50%': {
  					boxShadow: '0 0 30px rgba(61, 80, 227, 0.5), 0 0 60px rgba(30, 144, 232, 0.3)'
  				}
  			},
  			'shimmer-luxury': {
  				'0%': {
  					transform: 'translateX(-100%) skewX(-15deg)'
  				},
  				'100%': {
  					transform: 'translateX(200%) skewX(-15deg)'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'parallax-tilt': 'parallax-tilt 0.6s cubic-bezier(0.23, 1, 0.320, 1) forwards',
  			'float-y': 'float-y 3s ease-in-out infinite',
  			'fade-in': 'fade-in 0.8s cubic-bezier(0.23, 1, 0.320, 1) forwards',
  			'luxury-glow': 'luxury-glow 2s ease-in-out infinite',
  			'shimmer-luxury': 'shimmer-luxury 2.5s ease-in-out infinite'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
