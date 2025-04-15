// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: vercel({
        analytics: false // Desactiva el uso de analíticas si no es necesario
    }),
    vite: {
        plugins: [tailwindcss()],
    },
    experimental: {
        svg: true,
    },
})
