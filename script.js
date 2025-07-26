diff --git a//dev/null b/script.js
index 0000000000000000000000000000000000000000..0b66165d76744207e6d0beb175dc5321d0805b3c 100644
--- a//dev/null
+++ b/script.js
@@ -0,0 +1,52 @@
+// External script to sync checklist checkboxes with Energy/Mood/Aura bars
+
+const stats = { energy: 50, mood: 50, aura: 50 };
+
+function loadStats(){
+  const saved = localStorage.getItem('simStats');
+  if(saved){
+    const s = JSON.parse(saved);
+    stats.energy = s.energy;
+    stats.mood = s.mood;
+    stats.aura = s.aura;
+  }
+  updateBars();
+}
+
+function saveStats(){
+  localStorage.setItem('simStats', JSON.stringify(stats));
+}
+
+function updateBars(){
+  const eBar = document.getElementById('energyBar');
+  const mBar = document.getElementById('moodBar');
+  const aBar = document.getElementById('auraBar');
+  if(eBar) eBar.style.width = stats.energy + '%';
+  if(mBar) mBar.style.width = stats.mood + '%';
+  if(aBar) aBar.style.width = stats.aura + '%';
+}
+
+function handleChange(e){
+  const label = e.target.parentElement;
+  label.classList.toggle('checked', e.target.checked);
+  const item = label.textContent.trim();
+  const val = (window.checklistValues && window.checklistValues[item]) ||
+              { energy:0, mood:0, aura:0 };
+  if(e.target.checked){
+    stats.energy = Math.min(100, stats.energy + val.energy);
+    stats.mood   = Math.min(100, stats.mood   + val.mood);
+    stats.aura   = Math.min(100, stats.aura   + val.aura);
+  } else {
+    stats.energy = Math.max(0, stats.energy - val.energy);
+    stats.mood   = Math.max(0, stats.mood   - val.mood);
+    stats.aura   = Math.max(0, stats.aura   - val.aura);
+  }
+  updateBars();
+  saveStats();
+}
+
+document.addEventListener('DOMContentLoaded', () => {
+  loadStats();
+  document.querySelectorAll('#checklist-form input[type=checkbox]')
+          .forEach(cb => cb.addEventListener('change', handleChange));
+});
