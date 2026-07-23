/**
 * WHISPERFLOW — LANDING PAGE INTERACTIVE ENGINE
 * Superhuman Light-Mode Edition
 */

document.addEventListener('DOMContentLoaded', () => {

  // Web Audio Synthesizer
  class WebAudioEngine {
    constructor() {
      this.enabled = true;
      this.ctx = null;
    }
    init() {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) this.ctx = new AudioContext();
      }
      if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
    }
    playClick() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    }
    playChime() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc1.frequency.setValueAtTime(523.25, now);
      osc2.frequency.setValueAtTime(659.25, now + 0.08);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.35);
      osc2.start(now + 0.08);
      osc2.stop(now + 0.35);
    }
  }

  const audio = new WebAudioEngine();

  // Sound Toggle Button
  const soundToggle = document.getElementById('soundToggle');
  if (soundToggle) {
    soundToggle.addEventListener('click', () => {
      audio.enabled = !audio.enabled;
      const label = soundToggle.querySelector('.sound-label');
      if (label) label.textContent = audio.enabled ? 'Sound: ON' : 'Sound: OFF';
      if (audio.enabled) audio.playChime();
      showToast(audio.enabled ? 'Audio chimes enabled' : 'Audio chimes muted');
    });
  }

  // Toast Helper
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  let toastTimer = null;

  function showToast(msg) {
    if (!toast || !toastMsg) return;
    toastMsg.textContent = msg;
    toast.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
  }

  // Copy Clone Command
  const copyCloneBtn = document.getElementById('copyCloneBtn');
  if (copyCloneBtn) {
    copyCloneBtn.addEventListener('click', () => {
      const cmd = 'git clone https://github.com/ParthVarekar/whisper_flow_clone_local.git';
      navigator.clipboard.writeText(cmd).then(() => {
        audio.playChime();
        showToast('Copied git clone command!');
      });
    });
  }

  // Dictation Sandbox Transform Simulator
  const runDictationDemo = document.getElementById('runDictationDemo');
  const sandboxRawText = document.getElementById('sandboxRawText');
  const sandboxResultText = document.getElementById('sandboxResultText');
  const hudStatusDot = document.getElementById('hudStatusDot');
  const hudPhaseLabel = document.getElementById('hudPhaseLabel');
  const hudOutputText = document.getElementById('hudOutputText');

  const dictationPresets = [
    {
      raw: '"um so yeah like I will list a few items bold this word that is groceries bananas and milk and email Sarah by five p m..."',
      result: `<p>• <strong>Groceries</strong></p><p>• Bananas</p><p>• Milk</p><br><p><em>Action item: Email Sarah by 5:00 PM.</em></p>`
    },
    {
      raw: '"uh hey team so basically we need to push back the deploy to thursday at 3pm due to open bugs..."',
      result: `<p><strong>Update:</strong> Deployment schedule adjusted to Thursday at 3:00 PM to resolve critical bugs.</p>`
    }
  ];
  let presetIdx = 0;

  if (runDictationDemo) {
    runDictationDemo.addEventListener('click', () => {
      audio.playClick();
      if (hudStatusDot) hudStatusDot.className = 'hud-status-dot recording';
      if (hudPhaseLabel) hudPhaseLabel.textContent = 'LLM NORMALIZING...';

      presetIdx = (presetIdx + 1) % dictationPresets.length;
      const data = dictationPresets[presetIdx];

      if (sandboxRawText) sandboxRawText.textContent = data.raw;

      setTimeout(() => {
        audio.playChime();
        if (sandboxResultText) sandboxResultText.innerHTML = data.result;
        if (hudOutputText) hudOutputText.innerHTML = data.result;
        if (hudStatusDot) hudStatusDot.className = 'hud-status-dot';
        if (hudPhaseLabel) hudPhaseLabel.textContent = 'TEXT INJECTED AT CURSOR';
      }, 260);
    });
  }

  // Context Prompt Switcher
  const chips = document.querySelectorAll('.chip');
  const contextSelectedText = document.getElementById('contextSelectedText');
  const contextSpokenText = document.getElementById('contextSpokenText');
  const contextResultText = document.getElementById('contextResultText');

  const contextData = {
    'professional': {
      selected: '"Hey team, we might delay the release by two days due to open bugs."',
      spoken: '"Make this executive and action-oriented."',
      result: '"Team, we are adjusting our release schedule by 48 hours to resolve critical issues."'
    },
    'action-items': {
      selected: '"We discussed upgrading DB, migrating to OAuth2, and reviewing security audits."',
      spoken: '"Extract into a bulleted action list."',
      result: '• [ ] Upgrade production DB\n• [ ] Migrate to OAuth2\n• [ ] Conduct security audit review'
    },
    'spanish': {
      selected: '"Please review the architecture plan and send feedback before end of day."',
      spoken: '"Translate to fluent Spanish."',
      result: '"Por favor revise el plan de arquitectura y envíe sus comentarios antes del final del día."'
    },
    'json': {
      selected: '"User Parth Varekar, role Admin, status active."',
      spoken: '"Convert into JSON format."',
      result: '{\n  "user": "Parth Varekar",\n  "role": "Admin",\n  "status": "active"\n}'
    }
  };

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      audio.playClick();

      const key = chip.dataset.prompt;
      const item = contextData[key];
      if (item && contextSelectedText && contextSpokenText && contextResultText) {
        contextSelectedText.textContent = item.selected;
        contextSpokenText.textContent = item.spoken;
        contextResultText.style.opacity = '0.3';
        setTimeout(() => {
          contextResultText.textContent = item.result;
          contextResultText.style.opacity = '1';
          audio.playChime();
        }, 160);
      }
    });
  });

  // Speed Calculator
  const wordsRange = document.getElementById('wordsRange');
  const wordsVal = document.getElementById('wordsVal');
  const hwSelect = document.getElementById('hwSelect');
  const hoursVal = document.getElementById('hoursVal');
  const moneyVal = document.getElementById('moneyVal');

  function updateCalc() {
    if (!wordsRange) return;
    const words = parseInt(wordsRange.value, 10);
    if (wordsVal) wordsVal.textContent = words.toLocaleString();

    const savedHours = (((words / 40 - words / 160) * 22) / 60).toFixed(1);
    if (hoursVal) hoursVal.textContent = `${savedHours} Hours`;

    const annualSavings = Math.round(((words / 150) * 0.006 * 260));
    if (moneyVal) moneyVal.textContent = `$${Math.max(120, annualSavings)} / Year`;
  }

  if (wordsRange) wordsRange.addEventListener('input', updateCalc);
  if (hwSelect) hwSelect.addEventListener('change', () => { audio.playClick(); updateCalc(); });
  updateCalc();

  // FAQ Accordion
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      if (!item) return;
      const isOpen = item.classList.contains('open');
      audio.playClick();

      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // Command Palette & Cheatsheet Modals
  const cmdKModal = document.getElementById('cmdKModal');
  const cheatsheetModal = document.getElementById('cheatsheetModal');
  const cmdKTrigger = document.getElementById('cmdKTrigger');

  function openModal(m) { if (m) { m.classList.add('open'); audio.playClick(); } }
  function closeModal(m) { if (m) m.classList.remove('open'); }

  if (cmdKTrigger) cmdKTrigger.addEventListener('click', () => openModal(cmdKModal));

  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (cmdKModal && cmdKModal.classList.contains('open')) closeModal(cmdKModal);
      else openModal(cmdKModal);
    } else if (e.key === '?' || (e.shiftKey && e.key === '/')) {
      e.preventDefault();
      if (cheatsheetModal && cheatsheetModal.classList.contains('open')) closeModal(cheatsheetModal);
      else openModal(cheatsheetModal);
    } else if (e.key === 'Escape') {
      closeModal(cmdKModal);
      closeModal(cheatsheetModal);
    }
  });

  [cmdKModal, cheatsheetModal].forEach(m => {
    if (m) m.addEventListener('click', (e) => { if (e.target === m) closeModal(m); });
  });

  // Copy Config
  const copyConfigBtn = document.getElementById('copyConfigBtn');
  if (copyConfigBtn) {
    copyConfigBtn.addEventListener('click', () => {
      const toml = `mode = "auto"\nwriting_style = "default"\nsmart_formatting = true\ndictation_hotkey = "ctrl+shift+space"\ncommand_hotkey = "ctrl+shift+t"`;
      navigator.clipboard.writeText(toml).then(() => {
        audio.playChime();
        showToast('Copied config.toml!');
      });
    });
  }

});
