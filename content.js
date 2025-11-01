// PassMark Score Display Extension for Leboncoin
// Detects CPUs and GPUs in listings and displays their PassMark scores

// Database of common hardware with PassMark scores
const HARDWARE_DATABASE = {
  // AMD Ryzen CPUs
  'ryzen 9 5950x': { type: 'cpu', single: 3493, multi: 46175 },
  'ryzen 9 5900x': { type: 'cpu', single: 3449, multi: 39482 },
  'ryzen 9 5900': { type: 'cpu', single: 3415, multi: 38326 },
  'ryzen 7 5800x': { type: 'cpu', single: 3450, multi: 28342 },
  'ryzen 7 5800': { type: 'cpu', single: 3380, multi: 27450 },
  'ryzen 7 5700x': { type: 'cpu', single: 3340, multi: 26985 },
  'ryzen 5 5600x': { type: 'cpu', single: 3314, multi: 22141 },
  'ryzen 5 5600': { type: 'cpu', single: 3240, multi: 20450 },
  'ryzen 5 5500': { type: 'cpu', single: 3120, multi: 18850 },
  'ryzen 5 3600': { type: 'cpu', single: 2593, multi: 17825 },
  'ryzen 5 2600': { type: 'cpu', single: 2053, multi: 12453 },
  'ryzen 5 1600': { type: 'cpu', single: 1760, multi: 10965 },
  'ryzen 7 3700x': { type: 'cpu', single: 2649, multi: 22716 },
  'ryzen 9 3900x': { type: 'cpu', single: 2694, multi: 31794 },
  'ryzen 9 7900x': { type: 'cpu', single: 4253, multi: 53344 },
  'ryzen 9 7950x': { type: 'cpu', single: 4297, multi: 61405 },
  'ryzen 7 7700x': { type: 'cpu', single: 4181, multi: 40267 },
  'ryzen 5 7600x': { type: 'cpu', single: 4121, multi: 31083 },
  
  // Intel CPUs
  'i9-12900k': { type: 'cpu', single: 4036, multi: 41315 },
  'i9-12900': { type: 'cpu', single: 3800, multi: 38500 },
  'i9-11900k': { type: 'cpu', single: 3505, multi: 27671 },
  'i7-12700k': { type: 'cpu', single: 3884, multi: 35445 },
  'i7-11700k': { type: 'cpu', single: 3260, multi: 23937 },
  'i5-12600k': { type: 'cpu', single: 3803, multi: 30755 },
  'i5-11600k': { type: 'cpu', single: 3155, multi: 19331 },
  'i9-10900k': { type: 'cpu', single: 3103, multi: 25228 },
  'i7-10700k': { type: 'cpu', single: 2936, multi: 20142 },
  'i5-10600k': { type: 'cpu', single: 2817, multi: 16251 },
  'i9-13900k': { type: 'cpu', single: 4644, multi: 56305 },
  'i7-13700k': { type: 'cpu', single: 4385, multi: 48948 },
  'i5-13600k': { type: 'cpu', single: 4375, multi: 42653 },
  
  // NVIDIA GPUs
  'rtx 4090': { type: 'gpu', score: 35823 },
  'rtx 4080': { type: 'gpu', score: 31677 },
  'rtx 4070 ti': { type: 'gpu', score: 26939 },
  'rtx 4070': { type: 'gpu', score: 23371 },
  'rtx 4060 ti': { type: 'gpu', score: 18753 },
  'rtx 4060': { type: 'gpu', score: 15621 },
  'rtx 3090 ti': { type: 'gpu', score: 28021 },
  'rtx 3090': { type: 'gpu', score: 24576 },
  'rtx 3080 ti': { type: 'gpu', score: 25251 },
  'rtx 3080': { type: 'gpu', score: 22701 },
  'rtx 3070 ti': { type: 'gpu', score: 20387 },
  'rtx 3070': { type: 'gpu', score: 18506 },
  'rtx 3060 ti': { type: 'gpu', score: 17078 },
  'rtx 3060': { type: 'gpu', score: 13128 },
  'rtx 3050': { type: 'gpu', score: 9293 },
  'rtx 2080 ti': { type: 'gpu', score: 18717 },
  'rtx 2080': { type: 'gpu', score: 16020 },
  'rtx 2070': { type: 'gpu', score: 13711 },
  'rtx 2060': { type: 'gpu', score: 11347 },
  'gtx 1080 ti': { type: 'gpu', score: 13843 },
  'gtx 1080': { type: 'gpu', score: 11962 },
  'gtx 1070 ti': { type: 'gpu', score: 10421 },
  'gtx 1070': { type: 'gpu', score: 9576 },
  'gtx 1660 ti': { type: 'gpu', score: 8919 },
  'gtx 1660': { type: 'gpu', score: 8161 },
  'gtx 1650': { type: 'gpu', score: 5631 },
  
  // AMD GPUs
  'rx 7900 xtx': { type: 'gpu', score: 29451 },
  'rx 7900 xt': { type: 'gpu', score: 26384 },
  'rx 6950 xt': { type: 'gpu', score: 23801 },
  'rx 6900 xt': { type: 'gpu', score: 22394 },
  'rx 6800 xt': { type: 'gpu', score: 20870 },
  'rx 6800': { type: 'gpu', score: 18735 },
  'rx 6750 xt': { type: 'gpu', score: 16872 },
  'rx 6700 xt': { type: 'gpu', score: 15639 },
  'rx 6650 xt': { type: 'gpu', score: 13248 },
  'rx 6600 xt': { type: 'gpu', score: 12367 },
  'rx 6600': { type: 'gpu', score: 10654 },
  'rx 5700 xt': { type: 'gpu', score: 10842 },
  'rx 5700': { type: 'gpu', score: 9736 },
  'rx 5600 xt': { type: 'gpu', score: 9147 },
  'rx 580': { type: 'gpu', score: 6042 },
  'rx 570': { type: 'gpu', score: 5234 }
};

// Normalize text for matching
function normalizeText(text) {
  return text.toLowerCase()
    .replace(/amd/gi, '')
    .replace(/nvidia/gi, '')
    .replace(/geforce/gi, '')
    .replace(/radeon/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// Detect hardware in title
function detectHardware(title) {
  const normalized = normalizeText(title);
  
  // Check each hardware entry
  for (const [key, data] of Object.entries(HARDWARE_DATABASE)) {
    if (normalized.includes(key)) {
      return { name: key, ...data };
    }
  }
  
  return null;
}

// Format number with thousands separator
function formatScore(score) {
  return score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

// Create score badge
function createScoreBadge(hardware) {
  if (hardware.type === 'cpu') {
    // For CPUs, show both single and multi-core scores
    const container = document.createElement('div');
    container.className = 'passmark-scores';
    
    const singleBadge = document.createElement('div');
    singleBadge.className = 'passmark-mini-badge single-core';
    singleBadge.innerHTML = `
      <span class="icon">⚡</span>
      <span class="label">Single:</span>
      <span class="score">${formatScore(hardware.single)}</span>
    `;
    
    const multiBadge = document.createElement('div');
    multiBadge.className = 'passmark-mini-badge multi-core';
    multiBadge.innerHTML = `
      <span class="icon">🔥</span>
      <span class="label">Multi:</span>
      <span class="score">${formatScore(hardware.multi)}</span>
    `;
    
    container.appendChild(singleBadge);
    container.appendChild(multiBadge);
    
    return container;
  } else {
    // For GPUs, show single score
    const badge = document.createElement('div');
    badge.className = 'passmark-badge gpu';
    badge.innerHTML = `
      <span class="icon">🎮</span>
      <span class="label">GPU Score:</span>
      <span class="score">${formatScore(hardware.score)}</span>
    `;
    return badge;
  }
}

// Process a single ad card
function processAdCard(adCard) {
  // Check if already processed
  if (adCard.dataset.passmarkProcessed) {
    return;
  }
  adCard.dataset.passmarkProcessed = 'true';
  
  // Find the title element
  const titleElement = adCard.querySelector('[data-test-id="adcard-title"]');
  if (!titleElement) {
    return;
  }
  
  const title = titleElement.textContent.trim();
  const hardware = detectHardware(title);
  
  if (hardware) {
    console.log('Found hardware:', hardware.name, 'in title:', title);
    
    // Create and insert badge
    const badge = createScoreBadge(hardware);
    
    // Find the parent container to insert the badge
    const parent = titleElement.parentElement;
    if (parent) {
      parent.appendChild(badge);
    }
  }
}

// Process all ad cards on the page
function processAllAdCards() {
  const adCards = document.querySelectorAll('[data-test-id="ad"]');
  console.log(`Processing ${adCards.length} ad cards...`);
  
  adCards.forEach(adCard => {
    processAdCard(adCard);
  });
}

// Initialize the extension
function init() {
  console.log('PassMark Score Display Extension loaded');
  
  // Process initially loaded cards
  processAllAdCards();
  
  // Watch for dynamically loaded content
  const observer = new MutationObserver((mutations) => {
    let shouldProcess = false;
    
    for (const mutation of mutations) {
      if (mutation.addedNodes.length > 0) {
        shouldProcess = true;
        break;
      }
    }
    
    if (shouldProcess) {
      processAllAdCards();
    }
  });
  
  // Observe the main content area
  const mainContent = document.querySelector('#mainContent');
  if (mainContent) {
    observer.observe(mainContent, {
      childList: true,
      subtree: true
    });
  }
  
  // Also observe the entire body as fallback
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
