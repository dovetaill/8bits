'use client'

export function ThemeToggle() {
  const handleThemeChange = () => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', 'lego')
    }
  }

  const handleRadiusToggle = () => {
    if (typeof document !== 'undefined') {
      const el = document.documentElement
      const current = el.getAttribute('data-radius')
      el.setAttribute('data-radius', current === 'soft' ? 'sharp' : 'soft')
    }
  }

  return (
    <>
      <button
        className="border-3 border-ink rounded-brut shadow-brut bg-[var(--accent-3)] text-white px-3 py-1 text-sm font-semibold"
        onClick={handleThemeChange}
      >
        LEGO
      </button>
      <button
        className="border-3 border-ink rounded-brut shadow-brut bg-surface px-3 py-1 text-sm font-semibold"
        onClick={handleRadiusToggle}
      >
        切圆角
      </button>
    </>
  )
}
