const EDGE_FUNCTION_URL = 'https://mvpbtkggrdsyfxmltmvp.supabase.co/functions/v1/sync-deepbet'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12cGJ0a2dnZ3Jkc3lmeG1sdG12cCIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzM0ODMyNDE3LCJleHAiOjIwNTA0MDg0MTd9.pFXcb3wrFNwW9YT9MjrV9YdWmzJqGxIKRfJE9p3Kq9w'

console.log('DeepBet Worker iniciado')

const sync = async () => {
  try {
    const res = await fetch(EDGE_FUNCTION_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()
    console.log(`[${new Date().toLocaleTimeString()}] ${data.surebets || 0} surebets`)
  } catch (err) {
    console.error('Erro:', err.message)
  }
}

sync()
setInterval(sync, 3000)
