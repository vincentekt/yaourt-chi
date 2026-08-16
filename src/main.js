import './style.css';

document.querySelector('#app').innerHTML = `
  <!-- Navbar -->
  <nav class="navbar">
    <div class="nav-brand-wrap">
      <a href="#" class="nav-logo">
        <span>Yuki-Chi</span>
        <span class="kanji-badge">雪知</span>
      </a>
    </div>

    <ul class="nav-links">
      <li><a href="#concept">Concept</a></li>
      <li class="nav-dropdown-item">
        <a href="interior.html" class="dropdown-trigger">Galleries ▾</a>
        <div class="dropdown-menu">
          <a href="interior.html">🏛️ Store Architecture</a>
          <a href="toppings.html">🍓 Toppings & Sauce Bar</a>
          <a href="customer-creations.html">🍨 Customer Creations</a>
        </div>
      </li>
      <li><a href="#calculator">ROI Calculator</a></li>
      <li><a href="#sourcing">Financials & Sourcing</a></li>
      <li><a href="#roadmap">Growth Roadmap</a></li>
    </ul>

    <div class="nav-actions">
      <div class="currency-switch-wrap" id="currency-switch">
        <button class="curr-btn active" data-curr="VND">VND</button>
        <button class="curr-btn" data-curr="USD">USD</button>
        <button class="curr-btn" data-curr="SGD">SGD</button>
      </div>
      <a href="#calculator" class="btn-primary nav-cta">View Pitch Deck</a>
    </div>
  </nav>

  <!-- Hero Section -->
  <header class="hero">
    <div class="hero-grid">
      <div>
        <div class="hero-tag">Investment Opportunity • Saigon District 1</div>
        <h1 class="hero-title">
          Bringing <span>Artisanal Self-Serve Froyo</span> to HCMC Japan Town
        </h1>
        <p class="hero-desc">
          Yuki-Chi (雪知) is a high-margin, self-serve Acai & Frozen Yogurt bar combining modern Japanese aesthetic minimalism with gourmet toppings, positioned directly in Saigon's vibrant Japan Town.
        </p>
        <div class="stats-bar">
          <div class="stat-item">
            <h3>69.0%</h3>
            <p>Gross Profit Margin</p>
          </div>
          <div class="stat-item">
            <h3>6-9 Mos</h3>
            <p>Target Payback</p>
          </div>
          <div class="stat-item">
            <h3 id="hero-price">49,000 VNĐ</h3>
            <p>Target Price / 100g Cup</p>
          </div>
        </div>
      </div>
      <div class="hero-image-wrap">
        <img src="customer_cup_dual_flavor.jpg" alt="Acai Bowl Concept" class="hero-img" />
      </div>
    </div>
  </header>

  <!-- Concept Section -->
  <section id="concept" class="section">
    <div class="section-header">
      <h2>Modern Japandi Self-Serve Experience</h2>
      <p>A seamless fusion of customizable soft-serve superfoods and refined Japanese cafe design.</p>
    </div>
    <div class="grid-3">
      <div class="feature-card">
        <div class="card-icon">🎨</div>
        <h3>Artist Pop-Art Mural</h3>
        <p>Commissioned mural combining iconic Saigon landmarks with our mascot, creating the ultimate viral TikTok & IG photo backdrop.</p>
      </div>
      <div class="feature-card">
        <div class="card-icon">🍦</div>
        <h3>Recessed Dispense Wall</h3>
        <p>3 Twin-handle commercial machines housed in warm birch timber walls with pastel LED lighting (Matcha, Original, Acai & Mango).</p>
      </div>
      <div class="feature-card">
        <div class="card-icon">🍓</div>
        <h3>Spacious Island Topping Bar</h3>
        <p>Calacatta marble island with spacious ceramic bowls, mini mochis, brownies, and warm copper drizzle wells.</p>
      </div>
    </div>
    <div class="grid-3" style="margin-top: 3rem;">
      <a href="interior.html" class="feature-card" style="text-decoration: none; text-align: center; border-color: rgba(255,107,139,0.3);">
        <img src="shophouse_store_interior.jpg" alt="Interior Architecture" style="width: 100%; border-radius: 12px; margin-bottom: 1rem;" />
        <h3 style="color: var(--accent-pink);">Store Architecture Blueprint ↗</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem;">Linear rectangular shophouse, single continuous bar & Japandi dining</p>
      </a>

      <a href="toppings.html" class="feature-card" style="text-decoration: none; text-align: center; border-color: rgba(255,107,139,0.3);">
        <img src="spacious_topping_bar.jpg" alt="Spacious Gourmet Toppings Bar" style="width: 100%; border-radius: 12px; margin-bottom: 1rem;" />
        <h3 style="color: var(--accent-pink);">Spacious Topping Island ↗</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem;">Spacious layout, heated copper drizzle wells, brownies & compotes</p>
      </a>

      <a href="customer-creations.html" class="feature-card" style="text-decoration: none; text-align: center; border-color: rgba(255,107,139,0.3);">
        <img src="customer_cup_brownie_pistachio.jpg" alt="Customer Creations" style="width: 100%; border-radius: 12px; margin-bottom: 1rem;" />
        <h3 style="color: var(--accent-pink);">Customer Creations Gallery ↗</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem;">Dual swirls, Matcha pistachio brownies & Strawberry Lychee cups</p>
      </a>
    </div>
  </section>

  <!-- Interactive Investment Calculator -->
  <section id="calculator" class="section">
    <div class="section-header">
      <h2>Interactive Investor Financial Simulator</h2>
      <p>Adjust daily cup sales and average order weight to project monthly revenues & investor net payout.</p>
    </div>
    
    <div class="calc-card">
      <div class="calc-controls">
        <div class="control-group">
          <label>Daily Customer Volume (Cups/Day): <span id="val-cups">180</span></label>
          <input type="range" id="input-cups" min="80" max="400" value="180" step="10" />
        </div>
        
        <div class="control-group">
          <label>Average Cup Weight (Grams): <span id="val-weight">280g</span></label>
          <input type="range" id="input-weight" min="150" max="400" value="280" step="10" />
        </div>

        <div class="control-group">
          <label>Selling Price per 100g: <span id="val-price">49,000 VNĐ</span></label>
          <input type="range" id="input-price" min="39000" max="65000" value="49000" step="1000" />
        </div>

        <div style="background: rgba(255, 107, 139, 0.08); padding: 1rem; border-radius: 12px; font-size: 0.85rem; color: var(--accent-pink);">
          💡 <b>Industry Benchmark:</b> Premium self-serve froyo bars average ~280g–320g per bowl. Japan Town D1 location targets high foot-traffic expat & Gen Z consumer base.
        </div>
      </div>

      <div class="calc-results">
        <div>
          <h3 style="font-size: 1.1rem; color: var(--text-muted); margin-bottom: 1rem;">Monthly Financial Breakdown</h3>
          <div class="metric-row">
            <span>Average Order Value (AOV):</span>
            <strong id="res-aov">137,200 VNĐ</strong>
          </div>
          <div class="metric-row">
            <span>Monthly Gross Revenue:</span>
            <strong id="res-revenue">740,880,000 VNĐ</strong>
          </div>
          <div class="metric-row">
            <span>Estimated Monthly COGS (31%):</span>
            <span id="res-cogs" style="color: #ef4444;">-229,672,800 VNĐ</span>
          </div>
          <div class="metric-row">
            <span>Fixed OPEX (Rent, Staff, Utilities):</span>
            <span id="res-opex" style="color: #ef4444;">-170,000,000 VNĐ</span>
          </div>
        </div>

        <div class="metric-row total">
          <div>
            <p style="font-size: 0.85rem; color: var(--text-muted);">Est. Monthly Net Profit</p>
            <h3 id="res-net">341,207,200 VNĐ</h3>
          </div>
          <div style="text-align: right;">
            <p style="font-size: 0.85rem; color: var(--text-muted);">Payback Period</p>
            <h3 id="res-payback" style="color: var(--accent-gold);">~5.2 Months</h3>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Financials, CAPEX, OPEX & Procurement Tabs -->
  <section id="sourcing" class="section">
    <div class="section-header">
      <h2>Financial Breakdown, CAPEX & OPEX</h2>
      <p>Comprehensive cost model with itemized startup capital (CAPEX) and recurring monthly operating expenses (OPEX).</p>
    </div>

    <!-- Live Total Summary Cards -->
    <div class="grid-3" style="margin-bottom: 2.5rem;">
      <div class="feature-card" style="border-left: 4px solid var(--accent-pink);">
        <span style="color: var(--text-muted); font-size: 0.85rem; font-weight: 600;">TOTAL ESTIMATED CAPEX</span>
        <h3 id="card-total-capex" style="color: var(--accent-pink); font-size: 1.9rem; margin-top: 0.3rem;">1,600,000,000 VNĐ</h3>
        <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 0.4rem;">Full turnkey setup (Fitout, Machines, Topping Bar, Deposit & Permits)</p>
      </div>

      <div class="feature-card" style="border-left: 4px solid var(--accent-gold);">
        <span style="color: var(--text-muted); font-size: 0.85rem; font-weight: 600;">MONTHLY FIXED OPEX</span>
        <h3 id="card-total-opex" style="color: var(--accent-gold); font-size: 1.9rem; margin-top: 0.3rem;">170,000,000 VNĐ</h3>
        <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 0.4rem;">Rent, Store Manager + 6 Staff, Utilities, Marketing & Maintenance</p>
      </div>

      <div class="feature-card" style="border-left: 4px solid var(--accent-green);">
        <span style="color: var(--text-muted); font-size: 0.85rem; font-weight: 600;">COGS RUN RATE (VARIABLE)</span>
        <h3 style="color: var(--accent-green); font-size: 1.9rem; margin-top: 0.3rem;">31.0%</h3>
        <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 0.4rem;">Raw ingredients, acai pulp, imported bases, packaging & toppings</p>
      </div>
    </div>

    <div class="tabs-header">
      <button class="tab-btn active" data-tab="capex">CAPEX Budget</button>
      <button class="tab-btn" data-tab="opex">Monthly OPEX</button>
      <button class="tab-btn" data-tab="machines">Dispense Machinery</button>
      <button class="tab-btn" data-tab="ingredients">Ingredients & Sourcing</button>
    </div>

    <div class="table-wrap">
      <table id="tab-content">
        <!-- Injected via JavaScript -->
      </table>
    </div>
  </section>

  <!-- Strategic Growth Roadmap (Phase 1 Flagship vs Phase 2 Multi-Unit Scale) -->
  <section id="roadmap" class="section">
    <div class="section-header">
      <h2>Strategic Growth Roadmap & Expansion</h2>
      <p>From Japan Town Flagship proof-of-concept (Phase 1) to multi-unit scale with a Centralized Commissary Kitchen (Phase 2).</p>
    </div>

    <!-- Phase 1 vs Phase 2 Cards -->
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 3rem;">
      <!-- Phase 1 -->
      <div class="feature-card" style="border-top: 4px solid var(--accent-pink);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
          <span class="kanji-badge" style="background: var(--accent-pink);">PHASE 1</span>
          <span style="color: var(--accent-pink); font-weight: 700; font-size: 0.85rem;">MONTHS 1 – 12</span>
        </div>
        <h3 style="font-size: 1.4rem; margin-bottom: 0.8rem;">Japan Town Flagship & Proof of Concept</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.2rem;">Establish brand dominance in District 1, validate unit economics, and test customer flavor preferences.</p>
        
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.7rem; font-size: 0.9rem;">
          <li style="display: flex; gap: 10px;"><span style="color: var(--accent-pink);">✓</span> <b>Single Flagship Store:</b> 1 Rectangular shophouse in Japan Town (Hem 15B Le Thanh Ton).</li>
          <li style="display: flex; gap: 10px;"><span style="color: var(--accent-pink);">✓</span> <b>In-Store Prep:</b> Daily batching of mini mochis, fruit compotes, and liquid mixes done on-site.</li>
          <li style="display: flex; gap: 10px;"><span style="color: var(--accent-pink);">✓</span> <b>Target Unit Economics:</b> 180+ cups/day, ~31% COGS, 6–9 months payback.</li>
        </ul>
      </div>

      <!-- Phase 2 -->
      <div class="feature-card" style="border-top: 4px solid var(--accent-green);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
          <span class="kanji-badge" style="background: var(--accent-green);">PHASE 2</span>
          <span style="color: var(--accent-green); font-weight: 700; font-size: 0.85rem;">MONTHS 12 – 24</span>
        </div>
        <h3 style="font-size: 1.4rem; margin-bottom: 0.8rem;">Centralized Kitchen & Multi-Store Expansion</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.2rem;">Scale to 4–6 high-traffic outlets (Thao Dien D2, Crescent Mall D7, D3, Landmark 81) supported by a Centralized Commissary Kitchen.</p>
        
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.7rem; font-size: 0.9rem;">
          <li style="display: flex; gap: 10px;"><span style="color: var(--accent-green);">★</span> <b>Centralized Commissary Kitchen:</b> Bulk production of brownie cubes, cookie cakes, mochis, and liquid bases.</li>
          <li style="display: flex; gap: 10px;"><span style="color: var(--accent-green);">★</span> <b>Disintermediate Middlemen:</b> Direct container-load imports of Brazilian acai pulp and Italian powders, cutting COGS from <b>31% down to ~22%</b>.</li>
          <li style="display: flex; gap: 10px;"><span style="color: var(--accent-green);">★</span> <b>Lean Satellite Store Model:</b> Outlets require zero back-of-house kitchen staff, reducing outlet CAPEX by 35% and labor to just 3 staff/shift.</li>
        </ul>
      </div>
    </div>

    <!-- Phase 1 90-Day Execution Steps -->
    <h3 style="font-size: 1.2rem; margin-bottom: 1.5rem; text-align: center; color: var(--text-muted);">Phase 1 Launch Milestones</h3>
    <div class="grid-3">
      <div class="feature-card">
        <span style="color: var(--accent-pink); font-weight: 700;">MONTH 1</span>
        <h3 style="margin-top: 0.5rem;">Site & Licensing</h3>
        <p>Lease execution in Hem 15B Le Thanh Ton / Thai Van Lung. Entity setup, food hygiene permits & interior blueprint design.</p>
      </div>
      <div class="feature-card">
        <span style="color: var(--accent-gold); font-weight: 700;">MONTH 2</span>
        <h3 style="margin-top: 0.5rem;">Fitout & Machinery</h3>
        <p>Dispense wall construction, installation of Taylor/Space soft serve machines & initial ingredient import delivery.</p>
      </div>
      <div class="feature-card">
        <span style="color: var(--accent-green); font-weight: 700;">MONTH 3</span>
        <h3 style="margin-top: 0.5rem;">R&D & Grand Opening</h3>
        <p>Recipe testing (Acai & Froyo textures), soft opening for food reviewers, TikTok influencer campaign & Grand Launch.</p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <p>© 2026 Yuki-Chi (雪知) Japan Town HCMC Project. Private & Confidential Investor Briefing.</p>
  </footer>
`;

// Currency Conversion State & Rates (1 USD = 25,400 VND, 1 SGD = 19,200 VND)
let currentCurrency = 'VND';
const rates = {
  VND: { rate: 1, symbol: 'VNĐ', decimals: 0 },
  USD: { rate: 1 / 25400, symbol: '$', decimals: 2, prefix: true },
  SGD: { rate: 1 / 19200, symbol: 'S$', decimals: 2, prefix: true }
};

function formatCurrency(amountVND) {
  const curr = rates[currentCurrency];
  const converted = amountVND * curr.rate;
  
  if (currentCurrency === 'VND') {
    return new Intl.NumberFormat('vi-VN').format(Math.round(converted)) + ' VNĐ';
  } else if (curr.prefix) {
    return curr.symbol + new Intl.NumberFormat('en-US', {
      minimumFractionDigits: curr.decimals,
      maximumFractionDigits: curr.decimals
    }).format(converted);
  }
}

// Calculator Logic
const inputCups = document.querySelector('#input-cups');
const inputWeight = document.querySelector('#input-weight');
const inputPrice = document.querySelector('#input-price');

const valCups = document.querySelector('#val-cups');
const valWeight = document.querySelector('#val-weight');
const valPrice = document.querySelector('#val-price');

const resAov = document.querySelector('#res-aov');
const resRevenue = document.querySelector('#res-revenue');
const resCogs = document.querySelector('#res-cogs');
const resOpex = document.querySelector('#res-opex');
const resNet = document.querySelector('#res-net');
const resPayback = document.querySelector('#res-payback');
const heroPrice = document.querySelector('#hero-price');

function updateCalculator() {
  const cups = parseInt(inputCups.value);
  const weight = parseInt(inputWeight.value);
  const pricePer100g = parseInt(inputPrice.value);

  valCups.textContent = cups;
  valWeight.textContent = `${weight}g`;
  valPrice.textContent = formatCurrency(pricePer100g);
  if (heroPrice) heroPrice.textContent = `${formatCurrency(pricePer100g)} / 100g`;

  const aovVND = (weight / 100) * pricePer100g;
  const monthlyRevenueVND = cups * aovVND * 30;
  const monthlyCogsVND = monthlyRevenueVND * 0.31;
  const fixedOpexVND = 170000000; // Rent, staff, electric (~$6,700 USD)
  const monthlyNetVND = monthlyRevenueVND - monthlyCogsVND - fixedOpexVND;
  
  const totalInvestmentVND = 1600000000; // ~1.6 Billion VND average CAPEX (~$63,000 USD)
  const paybackMonths = monthlyNetVND > 0 ? (totalInvestmentVND / monthlyNetVND).toFixed(1) : 'N/A';

  resAov.textContent = formatCurrency(aovVND);
  resRevenue.textContent = formatCurrency(monthlyRevenueVND);
  resCogs.textContent = `-${formatCurrency(monthlyCogsVND)}`;
  if (resOpex) resOpex.textContent = `-${formatCurrency(fixedOpexVND)}`;
  resNet.textContent = formatCurrency(monthlyNetVND);
  resPayback.textContent = paybackMonths !== 'N/A' ? `~${paybackMonths} Months` : 'Unprofitable';
}

inputCups.addEventListener('input', updateCalculator);
inputWeight.addEventListener('input', updateCalculator);
inputPrice.addEventListener('input', updateCalculator);

// Currency Switcher Event Listeners
document.querySelectorAll('#currency-switch .curr-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('#currency-switch .curr-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    currentCurrency = e.target.getAttribute('data-curr');
    updateCalculator();
    renderTabs();
  });
});


// Dynamic Tab Rendering with Currency Conversion
const tabContent = document.querySelector('#tab-content');
let activeTab = 'machines';

function renderTabs() {
  const curr = currentCurrency;

  const tabData = {
    machines: `
      <thead>
        <tr>
          <th>Tier / Model</th>
          <th>Condition</th>
          <th>Est. Price (${curr}/Unit)</th>
          <th>Supplier & Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Taylor C723 / C713</b> (USA)</td>
          <td>1st Hand New</td>
          <td>${formatCurrency(350000000)} – ${formatCurrency(450000000)}</td>
          <td><a href="https://beptoancau.com" target="_blank">Bếp Toàn Cầu (Taylor VN) ↗</a></td>
        </tr>
        <tr>
          <td><b>Space 6240 / Donper</b> (Heavy Duty)</td>
          <td>1st Hand New</td>
          <td>${formatCurrency(85000000)} – ${formatCurrency(120000000)}</td>
          <td><a href="https://italio.vn" target="_blank">Italio Vietnam ↗</a></td>
        </tr>
        <tr>
          <td><b>Taylor 336 / 339</b> (USA)</td>
          <td>2nd Hand Refurbished</td>
          <td>${formatCurrency(120000000)} – ${formatCurrency(180000000)}</td>
          <td><a href="https://dienmaycuhoanganh.com" target="_blank">Điện Máy Cũ Hoàng Anh ↗</a></td>
        </tr>
        <tr>
          <td><b>Hải Âu / Venus</b> (Local Standard)</td>
          <td>1st Hand New</td>
          <td>${formatCurrency(45000000)} – ${formatCurrency(65000000)}</td>
          <td><a href="https://haiau.com" target="_blank">Hải Âu Group ↗</a></td>
        </tr>
      </tbody>
    `,
    ingredients: `
      <thead>
        <tr>
          <th>Ingredient / Material</th>
          <th>Unit Rate (${curr})</th>
          <th>Supplier Name</th>
          <th>Supplier Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Organic Acai Puree (Frozen 100g)</b></td>
          <td>${formatCurrency(220000)} – ${formatCurrency(280000)} / kg</td>
          <td>Purple Food Vietnam</td>
          <td><a href="https://purplefood.vn" target="_blank">PurpleFood.vn ↗</a></td>
        </tr>
        <tr>
          <td><b>PreGel Italian Froyo Base</b></td>
          <td>${formatCurrency(280000)} – ${formatCurrency(380000)} / kg</td>
          <td>TIM Corp / Vua Kem</td>
          <td><a href="https://tim-corp.com.vn" target="_blank">TIM Corp ↗</a></td>
        </tr>
        <tr>
          <td><b>Italio Yoggi Froyo Base</b></td>
          <td>${formatCurrency(120000)} – ${formatCurrency(160000)} / kg</td>
          <td>Italio Vietnam</td>
          <td><a href="https://italio.vn" target="_blank">Italio.vn ↗</a></td>
        </tr>
        <tr>
          <td><b>Italian 100% Pistachio Butter</b></td>
          <td>${formatCurrency(750000)} – ${formatCurrency(950000)} / kg</td>
          <td>Vua Kem Distributor</td>
          <td><a href="https://vuakem.com" target="_blank">VuaKem.com ↗</a></td>
        </tr>
      </tbody>
    `,
    capex: `
      <thead>
        <tr>
          <th>Category</th>
          <th>Details</th>
          <th>Est. Budget (${curr})</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Lease & Security Deposit</b></td>
          <td>3 Months Deposit + 1st Month Rent (D1 Japan Town)</td>
          <td>${formatCurrency(200000000)}</td>
        </tr>
        <tr>
          <td><b>Renovation & Dispense Wall</b></td>
          <td>Japandi interior, timber wall, lighting, HVAC, electrical 3-phase</td>
          <td>${formatCurrency(450000000)}</td>
        </tr>
        <tr>
          <td><b>Guest Restroom & Plumbing Fitout</b></td>
          <td>Full standalone toilet construction, septic connection, Toto/Inax sanitaries & ventilation</td>
          <td>${formatCurrency(50000000)}</td>
        </tr>
        <tr>
          <td><b>3x Dispense & Freezing Machines</b></td>
          <td>Combination of 1x Refurbished Taylor + 2x New Mid-Range</td>
          <td>${formatCurrency(280000000)}</td>
        </tr>
        <tr>
          <td><b>Refrigeration & Topping Bar</b></td>
          <td>Drop-in cold wells, upright deep freezer, chill counter</td>
          <td>${formatCurrency(120000000)}</td>
        </tr>
        <tr>
          <td><b>1st Batch Inventory & Packaging</b></td>
          <td>Acai, Froyo powder, milk, drizzles, 5k printed cups</td>
          <td>${formatCurrency(94250000)}</td>
        </tr>
        <tr>
          <td><b>POS, Permits & Working Buffer</b></td>
          <td>Scale POS setup, ATVSTTP health permits & emergency reserve</td>
          <td>${formatCurrency(405750000)}</td>
        </tr>
        <tr style="background: rgba(255, 107, 139, 0.1);">
          <td><b>TOTAL ESTIMATED CAPEX</b></td>
          <td>Complete Turnkey Store Startup Budget (Including Restroom)</td>
          <td><b>${formatCurrency(1600000000)}</b></td>
        </tr>
      </tbody>
    `,
    opex: `
      <thead>
        <tr>
          <th>Operating Expense</th>
          <th>Details & Staffing</th>
          <th>Monthly Cost (${curr})</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Storefront Rent (Japan Town D1)</b></td>
          <td>Ground floor 60–80 sqm shophouse in Hem 15B Le Thanh Ton area</td>
          <td>${formatCurrency(75000000)}</td>
        </tr>
        <tr>
          <td><b>Store Payroll (7 Employees)</b></td>
          <td>1 Store Manager (18M) + 2 Kitchen Prep (18M) + 4 Shift Crew/Cashiers (28M) + Social/Bonus</td>
          <td>${formatCurrency(70000000)}</td>
        </tr>
        <tr>
          <td><b>Commercial Utilities</b></td>
          <td>3-Phase Electricity for 3x continuous freezing machines, deep freezers, AC & water</td>
          <td>${formatCurrency(25000000)}</td>
        </tr>
        <tr>
          <td><b>Marketing & Local Collabs</b></td>
          <td>TikTok & IG Reels influencer invitations, foodie collabs, Japan Town signage promo</td>
          <td>${formatCurrency(30000000)}</td>
        </tr>
        <tr>
          <td><b>Maintenance, Wastage & Buffer</b></td>
          <td>Equipment sanitation, filter replacements, spare parts & POS software fees</td>
          <td>${formatCurrency(15000000)}</td>
        </tr>
        <tr style="background: rgba(251, 191, 36, 0.1);">
          <td><b>TOTAL MONTHLY FIXED OPEX</b></td>
          <td>Recurring Monthly Overhead (Excluding Variable COGS)</td>
          <td><b>${formatCurrency(170000000)}</b></td>
        </tr>
      </tbody>
    `
  };

  const cardCapex = document.querySelector('#card-total-capex');
  const cardOpex = document.querySelector('#card-total-opex');
  if (cardCapex) cardCapex.textContent = formatCurrency(1600000000);
  if (cardOpex) cardOpex.textContent = `${formatCurrency(170000000)} / mo`;

  tabContent.innerHTML = tabData[activeTab];
}

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    activeTab = e.target.getAttribute('data-tab');
    renderTabs();
  });
});

renderTabs();
updateCalculator();
