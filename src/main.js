import './style.css';

document.querySelector('#app').innerHTML = `
  <!-- Navbar -->
  <nav class="navbar">
    <a href="#" class="nav-logo">
      <span>Yuki-Chi</span>
      <span class="kanji-badge">雪知</span>
    </a>
    <ul class="nav-links">
      <li><a href="#concept">Concept</a></li>
      <li><a href="interior.html">Interior Renders</a></li>
      <li><a href="toppings.html">Toppings & Taps</a></li>
      <li><a href="#calculator">ROI Calculator</a></li>
      <li><a href="#sourcing">Procurement</a></li>
      <li><a href="#roadmap">Roadmap</a></li>
    </ul>
    <a href="#calculator" class="btn-primary">View Pitch Deck</a>
  </nav>

  <!-- Hero Section -->
  <header class="hero">
    <div class="hero-grid">
      <div>
        <div class="hero-tag">Investment Opportunity • Saigon District 1</div>
        <h1 class="hero-title">
          Bringing <span>Yo-Chi's Cult Froyo</span> to HCMC Japan Town
        </h1>
        <p class="hero-desc">
          Yuki-Chi (雪知) is a high-margin, self-serve Acai & Frozen Yogurt bar replica of Singapore's famous Star Vista outlet, positioned directly in Saigon's Japan Town nightlife & foodie district.
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
            <h3>49k VNĐ</h3>
            <p>Price / 100g Cup</p>
          </div>
        </div>
      </div>
      <div class="hero-image-wrap">
        <img src="hero_bowl.jpg" alt="Acai Bowl Concept" class="hero-img" />
      </div>
    </div>
  </header>

  <!-- Concept Section -->
  <section id="concept" class="section">
    <div class="section-header">
      <h2>Star Vista Instagrammable Concept</h2>
      <p>A aesthetic hybrid of Singapore's Yo-Chi self-serve bar & Japandi minimalism.</p>
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
        <h3>360° Cold Topping Island</h3>
        <p>White terrazzo island with 24+ refrigerated topping wells featuring Japanese mochi, fresh berries & warm pistachio drizzle taps.</p>
      </div>
    </div>
    <div style="margin-top: 3rem; display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
      <a href="interior.html" class="feature-card" style="text-decoration: none; text-align: center; border-color: rgba(255,107,139,0.3);">
        <img src="yuki_chi_store_complete.jpg" alt="Interior Architecture" style="width: 100%; border-radius: 12px; margin-bottom: 1rem;" />
        <h3 style="color: var(--accent-pink);">Store Architecture Blueprint ↗</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem;">Fluted timber dispense wall, Japandi dining & integrated toppings island</p>
      </a>

      <a href="toppings.html" class="feature-card" style="text-decoration: none; text-align: center; border-color: rgba(255,107,139,0.3);">
        <img src="yuki_chi_topping_station.jpg" alt="Gourmet Toppings Bar" style="width: 100%; border-radius: 12px; margin-bottom: 1rem;" />
        <h3 style="color: var(--accent-pink);">Gourmet Toppings & Heated Sauce Bar ↗</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem;">Heated drizzle wells, homemade mochis, fudge brownies & fruit compotes</p>
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
          💡 <b>Benchmark:</b> Yo-Chi Singapore averages ~300g per bowl ($6.00 USD). Japan Town D1 location targets high foot-traffic expat & Gen Z crowd.
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
            <span style="color: #ef4444;">-170,000,000 VNĐ</span>
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

  <!-- Procurement & Machinery Tabs -->
  <section id="sourcing" class="section">
    <div class="section-header">
      <h2>Equipment & Sourcing Directory</h2>
      <p>Direct supplier quotes and first-hand vs second-hand comparison in HCMC.</p>
    </div>

    <div class="tabs-header">
      <button class="tab-btn active" data-tab="machines">Dispense Machines</button>
      <button class="tab-btn" data-tab="ingredients">Ingredients & Toppings</button>
      <button class="tab-btn" data-tab="capex">CAPEX Budget</button>
    </div>

    <div class="table-wrap">
      <table id="tab-content">
        <!-- Injected via JavaScript -->
      </table>
    </div>
  </section>

  <!-- Roadmap Section -->
  <section id="roadmap" class="section">
    <div class="section-header">
      <h2>90-Day Execution Roadmap</h2>
      <p>Structured launch timeline from lease signing to Grand Opening.</p>
    </div>
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
const resNet = document.querySelector('#res-net');
const resPayback = document.querySelector('#res-payback');

function formatVND(num) {
  return new Intl.NumberFormat('vi-VN').format(Math.round(num)) + ' VNĐ';
}

function updateCalculator() {
  const cups = parseInt(inputCups.value);
  const weight = parseInt(inputWeight.value);
  const pricePer100g = parseInt(inputPrice.value);

  valCups.textContent = cups;
  valWeight.textContent = `${weight}g`;
  valPrice.textContent = formatVND(pricePer100g);

  const aov = (weight / 100) * pricePer100g;
  const monthlyRevenue = cups * aov * 30;
  const monthlyCogs = monthlyRevenue * 0.31;
  const fixedOpex = 170000000; // Rent, staff, electric
  const monthlyNet = monthlyRevenue - monthlyCogs - fixedOpex;
  
  const totalInvestment = 1600000000; // ~1.6 Billion VND average CAPEX
  const paybackMonths = monthlyNet > 0 ? (totalInvestment / monthlyNet).toFixed(1) : 'N/A';

  resAov.textContent = formatVND(aov);
  resRevenue.textContent = formatVND(monthlyRevenue);
  resCogs.textContent = `-${formatVND(monthlyCogs)}`;
  resNet.textContent = formatVND(monthlyNet);
  resPayback.textContent = paybackMonths !== 'N/A' ? `~${paybackMonths} Months` : 'Unprofitable';
}

inputCups.addEventListener('input', updateCalculator);
inputWeight.addEventListener('input', updateCalculator);
inputPrice.addEventListener('input', updateCalculator);
updateCalculator();

// Tab Content Data & Logic
const tabData = {
  machines: `
    <thead>
      <tr>
        <th>Tier / Model</th>
        <th>Condition</th>
        <th>Est. Price (VND/Unit)</th>
        <th>Supplier & Link</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><b>Taylor C723 / C713</b> (USA)</td>
        <td>1st Hand New</td>
        <td>350,000,000 – 450,000,000 VNĐ</td>
        <td><a href="https://beptoancau.com" target="_blank">Bếp Toàn Cầu (Taylor VN) ↗</a></td>
      </tr>
      <tr>
        <td><b>Space 6240 / Donper</b> (Heavy Duty)</td>
        <td>1st Hand New</td>
        <td>85,000,000 – 120,000,000 VNĐ</td>
        <td><a href="https://italio.vn" target="_blank">Italio Vietnam ↗</a></td>
      </tr>
      <tr>
        <td><b>Taylor 336 / 339</b> (USA)</td>
        <td>2nd Hand Refurbished</td>
        <td>120,000,000 – 180,000,000 VNĐ</td>
        <td><a href="https://dienmaycuhoanganh.com" target="_blank">Điện Máy Cũ Hoàng Anh ↗</a></td>
      </tr>
      <tr>
        <td><b>Hải Âu / Venus</b> (Local Standard)</td>
        <td>1st Hand New</td>
        <td>45,000,000 – 65,000,000 VNĐ</td>
        <td><a href="https://haiau.com" target="_blank">Hải Âu Group ↗</a></td>
      </tr>
    </tbody>
  `,
  ingredients: `
    <thead>
      <tr>
        <th>Ingredient / Material</th>
        <th>Unit Rate</th>
        <th>Supplier Name</th>
        <th>Supplier Link</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><b>Organic Acai Puree (Frozen 100g)</b></td>
        <td>220,000 – 280,000 VNĐ / kg</td>
        <td>Purple Food Vietnam</td>
        <td><a href="https://purplefood.vn" target="_blank">PurpleFood.vn ↗</a></td>
      </tr>
      <tr>
        <td><b>PreGel Italian Froyo Base</b></td>
        <td>280,000 – 380,000 VNĐ / kg</td>
        <td>TIM Corp / Vua Kem</td>
        <td><a href="https://tim-corp.com.vn" target="_blank">TIM Corp ↗</a></td>
      </tr>
      <tr>
        <td><b>Italio Yoggi Froyo Base</b></td>
        <td>120,000 – 160,000 VNĐ / kg</td>
        <td>Italio Vietnam</td>
        <td><a href="https://italio.vn" target="_blank">Italio.vn ↗</a></td>
      </tr>
      <tr>
        <td><b>Italian 100% Pistachio Butter</b></td>
        <td>750,000 – 950,000 VNĐ / kg</td>
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
        <th>Est. Budget (VND)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><b>Lease & Security Deposit</b></td>
        <td>3 Months Deposit + 1st Month Rent (D1 Japan Town)</td>
        <td>200,000,000 VNĐ</td>
      </tr>
      <tr>
        <td><b>Renovation & Dispense Wall</b></td>
        <td>Japandi interior, timber wall, lighting, HVAC, electrical 3-phase</td>
        <td>500,000,000 VNĐ</td>
      </tr>
      <tr>
        <td><b>3x Dispense & Freezing Machines</b></td>
        <td>Combination of 1x Refurbished Taylor + 2x New Mid-Range</td>
        <td>280,000,000 VNĐ</td>
      </tr>
      <tr>
        <td><b>Refrigeration & Topping Bar</b></td>
        <td>Drop-in cold wells, upright deep freezer, chill counter</td>
        <td>120,000,000 VNĐ</td>
      </tr>
      <tr>
        <td><b>1st Batch Inventory & Packaging</b></td>
        <td>Acai, Froyo powder, milk, drizzles, 5k printed cups</td>
        <td>94,250,000 VNĐ</td>
      </tr>
    </tbody>
  `
};

const tabContent = document.querySelector('#tab-content');
tabContent.innerHTML = tabData.machines;

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    const tabKey = e.target.getAttribute('data-tab');
    tabContent.innerHTML = tabData[tabKey];
  });
});
