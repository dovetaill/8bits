'use client'

export function ThemeToggle() {
  const setFamicomTheme = () => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', 'famicom')
    }
  }

  const setLegoTheme = () => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', 'lego')
    }
  }

  const toggleRadius = () => {
    if (typeof document !== 'undefined') {
      const el = document.documentElement
      const current = el.getAttribute('data-radius')
      el.setAttribute('data-radius', current === 'soft' ? 'sharp' : 'soft')
    }
  }

  return (
    <>
      <button
        onClick={setFamicomTheme}
        className="border-3 border-ink rounded-brut shadow-brut bg-[var(--accent)] text-ink px-3 py-1 text-sm font-semibold"
      >
        Famicom
      </button>
      <button
        onClick={setLegoTheme}
        className="border-3 border-ink rounded-brut shadow-brut bg-[var(--accent-3)] text-white px-3 py-1 text-sm font-semibold"
      >
        LEGO
      </button>
      <button
        onClick={toggleRadius}
        className="border-3 border-ink rounded-brut shadow-brut bg-surface px-3 py-1 text-sm font-semibold"
      >
        切圆角
      </button>
    </>
  )
}
