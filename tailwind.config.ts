import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [ require('daisyui') ],
  daisyui: {
    themes: [
      {
        lightTheme: {
          primary: "#6ec800",
          secondary: "#f4f4a1",
          accent: "#1be885",
          neutral: "#272136",
          "base-100": "#ffffff",
          info: "#838383",
          success: "#23b893",
          warning: "#f79926",
          error: "#ea535a",
          body: {
            "background-color": "#e3e6e6",
          },
        },
      },
    ],
  },
};

export default config
