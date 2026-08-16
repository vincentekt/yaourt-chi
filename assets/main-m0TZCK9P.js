/* empty css              */(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();document.querySelector("#app").innerHTML=`
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
      <li><a href="customer-creations.html">Customer Creations</a></li>
      <li><a href="#calculator">ROI Calculator</a></li>
      <li><a href="#sourcing">Procurement</a></li>
      <li><a href="#roadmap">Roadmap</a></li>
    </ul>
    <div style="display: flex; align-items: center; gap: 1rem;">
      <div class="currency-switch-wrap" id="currency-switch">
        <button class="curr-btn active" data-curr="VND">VND</button>
        <button class="curr-btn" data-curr="USD">USD</button>
        <button class="curr-btn" data-curr="SGD">SGD</button>
      </div>
      <a href="#calculator" class="btn-primary">View Pitch Deck</a>
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
`;let d="VND";const f={VND:{rate:1,symbol:"VNĐ",decimals:0},USD:{rate:1/25400,symbol:"$",decimals:2,prefix:!0},SGD:{rate:1/19200,symbol:"S$",decimals:2,prefix:!0}};function t(i){const e=f[d],n=i*e.rate;if(d==="VND")return new Intl.NumberFormat("vi-VN").format(Math.round(n))+" VNĐ";if(e.prefix)return e.symbol+new Intl.NumberFormat("en-US",{minimumFractionDigits:e.decimals,maximumFractionDigits:e.decimals}).format(n)}const v=document.querySelector("#input-cups"),g=document.querySelector("#input-weight"),b=document.querySelector("#input-price"),S=document.querySelector("#val-cups"),w=document.querySelector("#val-weight"),C=document.querySelector("#val-price"),x=document.querySelector("#res-aov"),D=document.querySelector("#res-revenue"),T=document.querySelector("#res-cogs"),h=document.querySelector("#res-opex"),k=document.querySelector("#res-net"),N=document.querySelector("#res-payback"),m=document.querySelector("#hero-price");function c(){const i=parseInt(v.value),e=parseInt(g.value),n=parseInt(b.value);S.textContent=i,w.textContent=`${e}g`,C.textContent=t(n),m&&(m.textContent=`${t(n)} / 100g`);const s=e/100*n,r=i*s*30,a=r*.31,o=17e7,l=r-a-o,u=l>0?(16e8/l).toFixed(1):"N/A";x.textContent=t(s),D.textContent=t(r),T.textContent=`-${t(a)}`,h&&(h.textContent=`-${t(o)}`),k.textContent=t(l),N.textContent=u!=="N/A"?`~${u} Months`:"Unprofitable"}v.addEventListener("input",c);g.addEventListener("input",c);b.addEventListener("input",c);document.querySelectorAll("#currency-switch .curr-btn").forEach(i=>{i.addEventListener("click",e=>{document.querySelectorAll("#currency-switch .curr-btn").forEach(n=>n.classList.remove("active")),e.target.classList.add("active"),d=e.target.getAttribute("data-curr"),c(),p()})});const M=document.querySelector("#tab-content");let y="machines";function p(){const i=d,e={machines:`
      <thead>
        <tr>
          <th>Tier / Model</th>
          <th>Condition</th>
          <th>Est. Price (${i}/Unit)</th>
          <th>Supplier & Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Taylor C723 / C713</b> (USA)</td>
          <td>1st Hand New</td>
          <td>${t(35e7)} – ${t(45e7)}</td>
          <td><a href="https://beptoancau.com" target="_blank">Bếp Toàn Cầu (Taylor VN) ↗</a></td>
        </tr>
        <tr>
          <td><b>Space 6240 / Donper</b> (Heavy Duty)</td>
          <td>1st Hand New</td>
          <td>${t(85e6)} – ${t(12e7)}</td>
          <td><a href="https://italio.vn" target="_blank">Italio Vietnam ↗</a></td>
        </tr>
        <tr>
          <td><b>Taylor 336 / 339</b> (USA)</td>
          <td>2nd Hand Refurbished</td>
          <td>${t(12e7)} – ${t(18e7)}</td>
          <td><a href="https://dienmaycuhoanganh.com" target="_blank">Điện Máy Cũ Hoàng Anh ↗</a></td>
        </tr>
        <tr>
          <td><b>Hải Âu / Venus</b> (Local Standard)</td>
          <td>1st Hand New</td>
          <td>${t(45e6)} – ${t(65e6)}</td>
          <td><a href="https://haiau.com" target="_blank">Hải Âu Group ↗</a></td>
        </tr>
      </tbody>
    `,ingredients:`
      <thead>
        <tr>
          <th>Ingredient / Material</th>
          <th>Unit Rate (${i})</th>
          <th>Supplier Name</th>
          <th>Supplier Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Organic Acai Puree (Frozen 100g)</b></td>
          <td>${t(22e4)} – ${t(28e4)} / kg</td>
          <td>Purple Food Vietnam</td>
          <td><a href="https://purplefood.vn" target="_blank">PurpleFood.vn ↗</a></td>
        </tr>
        <tr>
          <td><b>PreGel Italian Froyo Base</b></td>
          <td>${t(28e4)} – ${t(38e4)} / kg</td>
          <td>TIM Corp / Vua Kem</td>
          <td><a href="https://tim-corp.com.vn" target="_blank">TIM Corp ↗</a></td>
        </tr>
        <tr>
          <td><b>Italio Yoggi Froyo Base</b></td>
          <td>${t(12e4)} – ${t(16e4)} / kg</td>
          <td>Italio Vietnam</td>
          <td><a href="https://italio.vn" target="_blank">Italio.vn ↗</a></td>
        </tr>
        <tr>
          <td><b>Italian 100% Pistachio Butter</b></td>
          <td>${t(75e4)} – ${t(95e4)} / kg</td>
          <td>Vua Kem Distributor</td>
          <td><a href="https://vuakem.com" target="_blank">VuaKem.com ↗</a></td>
        </tr>
      </tbody>
    `,capex:`
      <thead>
        <tr>
          <th>Category</th>
          <th>Details</th>
          <th>Est. Budget (${i})</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Lease & Security Deposit</b></td>
          <td>3 Months Deposit + 1st Month Rent (D1 Japan Town)</td>
          <td>${t(2e8)}</td>
        </tr>
        <tr>
          <td><b>Renovation & Dispense Wall</b></td>
          <td>Japandi interior, timber wall, lighting, HVAC, electrical 3-phase</td>
          <td>${t(5e8)}</td>
        </tr>
        <tr>
          <td><b>3x Dispense & Freezing Machines</b></td>
          <td>Combination of 1x Refurbished Taylor + 2x New Mid-Range</td>
          <td>${t(28e7)}</td>
        </tr>
        <tr>
          <td><b>Refrigeration & Topping Bar</b></td>
          <td>Drop-in cold wells, upright deep freezer, chill counter</td>
          <td>${t(12e7)}</td>
        </tr>
        <tr>
          <td><b>1st Batch Inventory & Packaging</b></td>
          <td>Acai, Froyo powder, milk, drizzles, 5k printed cups</td>
          <td>${t(9425e4)}</td>
        </tr>
        <tr style="background: rgba(255, 107, 139, 0.1);">
          <td><b>TOTAL ESTIMATED CAPEX</b></td>
          <td>Complete Turnkey Store Budget</td>
          <td><b>${t(16e8)}</b></td>
        </tr>
      </tbody>
    `};M.innerHTML=e[y]}document.querySelectorAll(".tab-btn").forEach(i=>{i.addEventListener("click",e=>{document.querySelectorAll(".tab-btn").forEach(n=>n.classList.remove("active")),e.target.classList.add("active"),y=e.target.getAttribute("data-tab"),p()})});p();c();
