import fs from 'fs'
import path from 'path'
const root = path.join(process.cwd(), 'prisma')
const arg = (process.argv[2] || process.env.DB_PROVIDER || 'sqlite').toLowerCase()
const map = { postgres:'schema.postgres.prisma', postgresql:'schema.postgres.prisma', mysql:'schema.mysql.prisma', sqlite:'schema.sqlite.prisma' }
const file = map[arg] || map.sqlite
fs.copyFileSync(path.join(root, file), path.join(root, 'schema.prisma'))
console.log(`[db] selected provider: ${arg} -> ${file}`)
