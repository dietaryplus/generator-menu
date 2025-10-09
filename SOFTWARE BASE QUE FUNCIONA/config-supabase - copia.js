// config-supabase.js
// INSTRUCCIONES: 
// 1. Ve a Settings > API en tu proyecto Supabase
// 2. Copia la Project URL y anon public key
// 3. Reemplaza los valores de abajo con tus datos reales
// 4. Guarda este archivo como 'config-supabase.js'

const SUPABASE_CONFIG = {
    url: 'https://uuoxzoqjbquqpvjhszsi.supabase.co', // Ejemplo: 'https://tuproyecto.supabase.co'
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1b3h6b3FqYnF1cXB2amhzenNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzNzMzMTksImV4cCI6MjA3Mzk0OTMxOX0.u5Ozw8L83w8oXBluZLUr_gX4PGr5GVlX2FcllFruqtY' // La clave pública anon (es seguro exponerla en el frontend)
};

// No cambies esto
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SUPABASE_CONFIG;
}