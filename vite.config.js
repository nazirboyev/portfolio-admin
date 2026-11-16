import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
// Portfolio loyihasidagi umumiy ma'lumotlar bazasi fayli
const portfolioDataPath = path.resolve(__dirname, '..', 'portfolio', 'data', 'portfolio-data.json')
const portfolioPublicDir = path.resolve(__dirname, '..', 'portfolio', 'public')

function portfolioDataApiPlugin() {
  return {
    name: 'portfolio-admin-data-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // GET /api/data -> Portfolio ma'lumotlarini o'qish
        if (req.url === '/api/data' && req.method === 'GET') {
          res.setHeader('Content-Type', 'application/json')
          try {
            if (!fs.existsSync(portfolioDataPath)) {
              fs.mkdirSync(path.dirname(portfolioDataPath), { recursive: true })
              fs.writeFileSync(
                portfolioDataPath,
                JSON.stringify({ projects: [], avatar: '/avatar.jpg', messages: [] }, null, 2),
                'utf-8'
              )
            }
            const data = fs.readFileSync(portfolioDataPath, 'utf-8')
            res.end(data)
          } catch (err) {
            res.statusCode = 500
            res.end(JSON.stringify({ error: err.message }))
          }
          return
        }

        // POST /api/save -> Portfolio ma'lumotlarini saqlash
        if (req.url === '/api/save' && req.method === 'POST') {
          let body = ''
          req.on('data', chunk => { body += chunk })
          req.on('end', () => {
            res.setHeader('Content-Type', 'application/json')
            try {
              const parsed = JSON.parse(body)
              fs.writeFileSync(portfolioDataPath, JSON.stringify(parsed, null, 2), 'utf-8')
              res.end(JSON.stringify({ success: true, message: "Ma'lumotlar saqlandi!" }))
            } catch (err) {
              res.statusCode = 500
              res.end(JSON.stringify({ error: err.message }))
            }
          })
          return
        }

        next()
      })
    }
  }
}

export default defineConfig({
  plugins: [react(), portfolioDataApiPlugin()],
  server: {
    port: 5174,
    host: true
  }
})
