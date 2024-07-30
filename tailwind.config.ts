import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      screens: {
        "xs": "294px",
        "sm": "600px",
        "md": "960px",
        "lg": "1280px",
        "xl": "1920px",
        "xxl": "2048px",
        "xxxl": "2500px",
      },
      fontSize: {
        "1.5xl": "1.375rem",
        "2.5xl": "1.75rem",
        "3.5xl": "2rem",
        "4.5xl": "2.5rem"
      },
      spacing: {
        "home-content-lg": "calc(83.333333% - 6rem)",
        "home-content-xl": "calc(66.66666666666666% - 6rem)",
        "home-content-md": "calc(100% - 4rem)"
      },
      fontFamily: {
        NetflixSansRegular: ["var(--netflix-sans_400)"],
        NetflixSansSemiBold: ["var(--netflix-sans_500)"],
        NetflixSansBold: ["var(--netflix-sans_900)"],
      },
      textShadow: {
        "app-home-movie": "rgba(0, 0, 0, 0.45) 2px 2px 4px"
      },
      colors: {
        primary: "#e50914",
        "input-validation": "#eb3942",
        "home-select": "#ffffff66",
        "home-overlay": "#00000066",
        "home-input-border": "#808080b3",
        "home-input": "#161616b3",
        "home-input-label": "#ffffffb3",
        "home-section-divider": "#232323",
        "home-download-text": "#0071eb",
        "home-question-btn": "#2d2d2d",
        "home-question-btn-hover": "#414141",
        "choose-profile-background": "#141414",
        "choose-profile-default-text-color": "#808080",
        "app-header-nav-item-color": "#e5e5e5",
        "app-header-nav-item-hover-color": "#b3b3b3",
        "app-home-default-btn-bg-hover": "#ffffffbf",
        "app-home-secondary-btn-bg": "#6d6d6eb3",
        "app-home-secondary-btn-bg-hover": "#6d6d6e66",
        "app-home-refresh-btn-hover": "#ffffff1a",
        "app-home-maturity-ranking-bg": "#33333399",
        "app-home-maturity-ranking-border": "#dcdcdc",
      },
      padding: {
        18: "4.5rem",
      },
      margin: {
        18: "4.5rem"
      },
      scale: {
        125: "1.25"
      },
      zIndex: {
        "1": "1",
        "2": "2",
        "3": "3",
      },
      backgroundImage: {
        "home-promo-pattern": "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)",
        "app-header-gradient": "linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent)",
        "app-home-hero-vignette-gradient": "linear-gradient(77deg,rgba(0,0,0,.6),transparent 85%)",
        "avatar": "url('/images/avatar.png')",
        "avatar-hero": "url('/images/avatar-hero.png')",
        "avatar-girl": "url('/images/avatar-girl.png')",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.25s ease-out",
      },
      transitionProperty: {
        "rotate": "rotate",
        "input": "margin-top, font-size",
      },
      data: {
        "placeholder-position": "placeholder-position~='top'"
      },
      borderWidth: {
        "5": "5px"
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
} satisfies Config

export default config
