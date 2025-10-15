// @dove/tokens/plugins/brutalism.tailwind.js
const plugin = require('tailwindcss/plugin');
module.exports = plugin(
  ({ addBase, addComponents }) => {
    addBase({
      ':root': {
        '--ink':'#000000','--paper':'#F5F5F3','--panel':'#FAFAF8','--surface':'#FFFFFF','--divide':'#E0E0E0',
        '--info':'#1D4ED8','--success':'#2DBE60','--warn':'#FFD34A','--danger':'#E53935',
        '--accent':'#D22C2C','--accent-2':'#1D4ED8','--accent-3':'#FFD54F',
        '--font-sans':"-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans SC','Microsoft YaHei',sans-serif",
        '--font-mono':"ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace",
        '--radius':'2px','--radius-soft':'16px',
        '--shadow-sm':'3px 3px 0 0 #000','--shadow-md':'6px 6px 0 0 #000','--shadow-lg':'10px 10px 0 0 #000'
      },
      '[data-theme="famicom"]': { '--accent':'#A72434','--accent-2':'#D7B95E','--accent-3':'#EDEADB' },
      '[data-theme="pokemon"]': { '--accent':'#FFDA3E','--accent-2':'#E53935' },
      '[data-theme="lego"]':    { '--accent':'#FFD500','--accent-2':'#DA291C','--accent-3':'#006DB7','--accent-4':'#00A94F' },
      '[data-theme="dmg"]':     { '--accent':'#D9D9D9','--accent-2':'#9BBC0F','--accent-3':'#7D3E74' },
      '[data-radius="soft"]': { '--radius':'var(--radius-soft)' }
    });
    addComponents({
      '.brut-card':{ background:'var(--panel)', border:'3px solid var(--ink)', borderRadius:'var(--radius)', boxShadow:'var(--shadow-md)', padding:'20px' },
      '.brut-btn': { border:'3px solid var(--ink)', borderRadius:'var(--radius)', boxShadow:'var(--shadow-md)', background:'var(--accent)', color:'var(--ink)', fontWeight:'600', padding:'12px 28px', transition:'transform .2s, box-shadow .2s' },
      '.brut-btn:hover':{ transform:'translate(2px,2px)', boxShadow:'4px 4px 0 0 #000' },
      '.brut-btn:active':{ boxShadow:'2px 2px 0 0 #000' },
      '.brut-input':{ background:'#fff', border:'2px solid var(--ink)', borderRadius:'10px', padding:'12px 16px' },
      '.brut-input:focus':{ outline:'none', boxShadow:'0 0 0 2px rgba(0,0,0,.12)' },
      '.brut-toggle':{ width:'56px', height:'32px', background:'#999', border:'3px solid var(--ink)', borderRadius:'20px', position:'relative' },
      '.brut-toggle__dot':{ width:'20px', height:'20px', background:'#000', borderRadius:'9999px', position:'absolute', top:'3px', left:'3px', transition:'.3s' },
      '.brut-toggle[data-checked="true"]':{ background:'var(--success)' },
      '.brut-toggle[data-checked="true"] .brut-toggle__dot':{ left:'27px' }
    });
  },
  { theme:{ extend:{
      borderWidth:{3:'3px'}, borderRadius:{brut:'2px', soft:'16px', xlsoft:'20px'},
      boxShadow:{ 'brut-sm':'3px 3px 0 0 #000','brut':'6px 6px 0 0 #000','brut-lg':'10px 10px 0 0 #000' },
      colors:{
        ink:'var(--ink)', paper:'var(--paper)', panel:'var(--panel)', surface:'var(--surface)', divide:'var(--divide)',
        accent:'var(--accent)', accent2:'var(--accent-2)', accent3:'var(--accent-3)',
        info:'var(--info)', success:'var(--success)', warn:'var(--warn)', danger:'var(--danger)'
      },
      fontFamily:{ sans:['var(--font-sans)'], mono:['var(--font-mono)'] }
  }}}
);
