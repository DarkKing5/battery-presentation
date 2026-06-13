# 🔋 Battery Research for Tiger Robotics Chassis
## Complete Technical & Commercial Analysis (June 2026)

> **Application:** Robotics chassis, 24V system, 20–30Ah capacity  
> **Robot weight:** up to 80 kg  
> **Operating environment:** Almaty, Kazakhstan (−25°C winter / +42°C summer)  
> **Exchange rate used:** 1 USD = 470 ₸

---

## 📊 Master Comparison Table

| Parameter | LiFePO4 | Sodium-Ion | LTO | Solid-State | Li-ion (NMC/NCA) |
|:---|:---|:---|:---|:---|:---|
| **Energy Density** | 90–160 Wh/kg | 100–175 Wh/kg | 60–110 Wh/kg | 350–420 Wh/kg | 200–300 Wh/kg |
| **Cycle Life** | 4,000–6,000 | 2,000–10,000 | 20,000–25,000 | 1,000–2,000 (est.) | 300–1,200 |
| **Temp Range (discharge)** | −20°C to +60°C | −40°C to +70°C | −40°C to +60°C | TBD | −20°C to +60°C |
| **Temp Range (charge)** | 0°C to +45°C | −20°C to +45°C | −30°C to +55°C | TBD | 0°C to +45°C |
| **Fast Charge** | 2–4 hrs (0.5C) | 15 min to 80% | 6 min to 80% | TBD | 1–2 hrs (1C) |
| **Safety Rating** | ⭐⭐⭐⭐⭐⭐⭐⭐⭐ 9/10 | ⭐⭐⭐⭐⭐⭐⭐⭐⭐ 9/10 | ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 10/10 | ⭐⭐⭐⭐⭐⭐⭐⭐ 8/10 | ⭐⭐⭐⭐⭐ 5/10 |
| **24V 20Ah Price** | $100–170 | N/A (no packs) | $400–600 | ❌ Not available | $80–150 |
| **24V 30Ah Price** | $150–250 | N/A (no packs) | $550–800 | ❌ Not available | $120–200 |
| **Can buy TODAY?** | ✅ YES | ⚠️ Cells only | ✅ YES (limited) | ❌ NO | ✅ YES |
| **Almaty viability** | ✅ Good | ✅✅ Excellent | ✅✅ Excellent | ❌ N/A | ⚠️ Risky |

---

## 1️⃣ LiFePO4 (Lithium Iron Phosphate) — THE BASELINE

### Why LiFePO4 Is the Default Choice for Robotics

LiFePO4 is the **gold standard** for robotics battery packs because it delivers the best balance of safety, cycle life, cost, and availability. Its olivine crystal structure provides inherent thermal stability — the cathode does **not release oxygen** during decomposition (unlike NMC/NCA), making thermal runaway extremely unlikely. The thermal runaway threshold is **270–300°C**, vs. 150–200°C for standard Li-ion.

### Technical Specifications

| Parameter | Value |
|:---|:---|
| **Chemistry** | LiFePO4 (LFP) |
| **Nominal Cell Voltage** | 3.2V (8S = 25.6V nominal for 24V systems) |
| **Energy Density** | 90–160 Wh/kg (newer cells: 180–210 Wh/kg) |
| **Cycle Life** | 4,000–6,000 cycles at 80% DOD |
| **Operating Temp (discharge)** | −20°C to +60°C |
| **Operating Temp (charge)** | 0°C to +45°C ⚠️ **Cannot charge below 0°C!** |
| **Storage Temp** | −10°C to +50°C |
| **Optimal Temp** | 20°C to 40°C |
| **Charging Time** | 2–4 hours (0.3C–0.5C typical), ~1.5 hrs at 1C |
| **Thermal Runaway** | ~270–300°C (does NOT release oxygen) |
| **Safety Rating** | **9/10** — Extremely safe, no oxygen release, no fire propagation |

### Pricing (2025–2026)

| Configuration | Price (USD) | Price (₸) | Notes |
|:---|:---|:---|:---|
| **24V 20Ah (AliExpress, basic)** | $50–90 | 23,500–42,300 ₸ | E-scooter grade, basic BMS |
| **24V 20Ah (quality, Smart BMS)** | $100–170 | 47,000–79,900 ₸ | Grade A cells, CANBus/RS485 BMS |
| **24V 30Ah (AliExpress, basic)** | $100–150 | 47,000–70,500 ₸ | Basic pack, standard BMS |
| **24V 30Ah (quality, Smart BMS)** | $150–250 | 70,500–117,500 ₸ | Industrial grade, AGV-ready |
| **24V 30Ah (IP67, ruggedized)** | $200–350 | 94,000–164,500 ₸ | Vibration-resistant, sealed |

### Where to Buy

| Source | Products | Notes |
|:---|:---|:---|
| **AliExpress** | Search "24V 20Ah LiFePO4 AGV battery" | Biggest selection; look for "Grade A cells" |
| **Amazon** | LiTime, ECO-WORTHY, Renogy brands | 24V models available; higher cost, faster shipping |
| **Made-in-China.com** | Superpack, Manly Battery, LyBatt | Industrial/custom packs with CANBus BMS |
| **Alibaba** | Direct from factories | Best for bulk/custom orders; request quotes |
| **manlybattery.com** | Manly Battery (direct) | Specializes in robotics/AGV packs |
| **lithiumbatterychina.com** | Various 24V LFP packs | Industrial focus |

### Key Purchasing Notes for Robotics

- **BMS must support** ≥30A continuous discharge (robotics motors have high inrush current)
- **Look for Smart BMS** with CANBus or RS485 for integration with robot controller
- **Grade A cells** = consistent quality, full cycle life rating
- **Custom packs** available: specify connector type (XT60, Anderson), dimensions, and communication protocol
- **Winter concern:** Cannot charge below 0°C! **Solution:** Self-heating BMS packs exist (+$30–50 extra) or charge indoors

### Pros & Cons

| ✅ Pros | ❌ Cons |
|:---|:---|
| Best price/performance ratio | Cannot charge below 0°C (needs heater for Almaty winter) |
| 4,000–6,000 cycle life (10+ years) | Lower energy density than NMC (heavier pack) |
| Extremely safe (no fire propagation) | Slightly bulkier than Li-ion equivalents |
| Widely available, easy to source | Performance drops below −10°C |
| Smart BMS options with CANBus/RS485 | |
| Drop-in 24V packs with BMS | |
| Proven in thousands of AGV/robot deployments | |

---

## 2️⃣ Sodium-Ion (Na-ion) — THE FUTURE CONTENDER

### Context: "Jassulan Saw German Ones"

The German sodium-ion batteries Jassulan likely encountered could be from **Altris (Swedish, but with European partnerships)** or **Tiamat (French)**. Both are European pioneers in Na-ion technology. However, as of June 2026, **neither sells retail battery packs** suitable for a robot. The real action is with **CATL (China)** and **HiNa (China)**, who are in mass production.

### Technical Specifications

| Parameter | Value |
|:---|:---|
| **Chemistry** | Sodium-Ion (various cathodes: Prussian White, layered oxide) |
| **Nominal Cell Voltage** | 3.0–3.1V |
| **Energy Density** | 100–175 Wh/kg (CATL Naxtra: 175 Wh/kg) |
| **Cycle Life** | 2,000–4,000 cycles (standard); up to 10,000 (premium) |
| **Operating Temp (discharge)** | **−40°C to +70°C** ⭐ KEY ADVANTAGE |
| **Operating Temp (charge)** | −20°C to +45°C (can charge in freezing!) |
| **Cold Performance** | >90% capacity at −40°C (CATL Naxtra) |
| **Cold Performance** | >82% capacity at −40°C (industry average) |
| **Fast Charge** | 80% in 15 minutes (4C rate) |
| **Safety Rating** | **9/10** — Inherently safe, 0V storage possible |

### ⚠️ CAN YOU BUY ONE NOW FOR A ROBOT?

**Short answer: NOT as a ready-made 24V pack. But you CAN buy cells.**

| What's Available | Status | Where |
|:---|:---|:---|
| **32140 cylindrical cells** | ✅ Available retail | AliExpress (~$7.80/cell, LiitoKala brand) |
| **Prismatic cells (50–210Ah)** | ✅ Available B2B | Alibaba, Made-in-China |
| **Ready-made 24V robot pack** | ❌ NOT available | Nobody makes these yet |
| **CATL Naxtra packs** | ❌ Industrial only | Through CATL sales reps |
| **HiNa packs** | ❌ Industrial/EV only | Direct from HiNa |
| **Altris cells** | ❌ B2B/defense only | Contact Altris (Uppsala, Sweden) |
| **Tiamat 18650 cells** | ❌ Industrial only | Contact Tiamat (Amiens, France) |

### DIY 24V Na-ion Pack (Theoretical)

To build a 24V Na-ion pack from 32140 cells:
- **Configuration:** 8S (8 cells in series) × parallel strings
- **Cell voltage:** 3.0V nominal × 8 = 24.0V
- **Cell capacity:** ~10Ah per 32140 cell
- **For 20Ah:** 8S2P = 16 cells × ~$7.80 = **~$125 USD (58,750 ₸)** for cells alone
- **For 30Ah:** 8S3P = 24 cells × ~$7.80 = **~$187 USD (87,890 ₸)** for cells alone
- **BMS + assembly:** Add ~$50–100 for Na-ion compatible BMS
- **Total estimated:** **$175–290 USD (82,250–136,300 ₸)**
- **⚠️ RISK:** Na-ion BMS are not standardized yet; cell quality varies; no warranty

### Key Na-ion Manufacturers

| Company | Country | Status (2026) | Key Product | Buy? |
|:---|:---|:---|:---|:---|
| **CATL** | China | GWh production, EV integration | Naxtra (175 Wh/kg) | Industrial only |
| **HiNa Battery** | China | Mass production, commercial era | Star Sea series (145–165 Wh/kg) | Industrial only |
| **Altris** | Sweden | Scaling, partnerships | Prussian White cathode (160 Wh/kg) | B2B only |
| **Tiamat** | France | Pilot → factory scaling | Gen1: 90–110 Wh/kg, Gen2: 140–160 Wh/kg | B2B only |

### Pricing Context

| Metric | Value (2026) |
|:---|:---|
| **Cell cost (industry)** | $46–62/kWh |
| **Target cost (CATL)** | $40/kWh by late 2026 |
| **HiNa cell cost (China)** | 0.35–0.70 yuan/Wh (~$48–97/kWh) |
| **Retail cells (AliExpress)** | ~$7.80/cell (32140 format, 10Ah, ~$260/kWh) |
| **vs. LiFePO4 pack cost** | LFP packs are ~$150–300/kWh at retail |

### Why Na-ion Matters for Almaty

**Almaty's winter (−25°C) is the #1 reason to watch this technology:**
- LiFePO4: **Cannot charge below 0°C**, capacity drops 30–50% at −20°C
- Na-ion: **Can charge at −20°C**, retains 90%+ capacity at −40°C
- Na-ion **eliminates the need** for battery heating systems in winter
- This could save weight, cost, and complexity

### Pros & Cons

| ✅ Pros | ❌ Cons |
|:---|:---|
| **Best cold-weather performance** (−40°C!) | No ready-made 24V robot packs exist |
| Can charge in freezing temperatures | Lower energy density than NMC (but similar to LFP) |
| Inherently safe (0V storage) | BMS ecosystem immature for custom packs |
| Uses abundant materials (no lithium, cobalt) | Quality control uncertain for retail cells |
| Fast charging: 80% in 15 min | Cycle life lower than LFP (2,000–4,000 typical) |
| Cost dropping toward $40/kWh | Not battle-tested in robotics applications |
| Environmentally superior | Retail markup is still high (~$260/kWh) |

### 🎯 Verdict for Tiger Robotics

**Not ready for production robot TODAY (June 2026).** But should be **first choice by 2027–2028** when:
1. 24V packs with proper Na-ion BMS become available
2. Prices drop below LFP levels
3. More cell suppliers enter the market
4. Na-ion BMS standardization improves

**Recommended action:** Order a small batch of 32140 cells now ($125) for testing cold-weather performance. Build a prototype pack. If it works at −25°C in Almaty winter, plan to transition from LFP to Na-ion for production models.

---

## 3️⃣ LTO (Lithium Titanate, Li₄Ti₅O₁₂) — THE INDESTRUCTIBLE

### Why LTO Exists

LTO uses a lithium titanate anode instead of graphite. The nanospinel structure of Li₄Ti₅O₁₂ provides a massive surface area for lithium-ion intercalation, enabling extreme charge/discharge rates and virtually eliminating lithium plating — the root cause of degradation in other Li-ion chemistries.

### Technical Specifications

| Parameter | Value |
|:---|:---|
| **Chemistry** | LTO (Lithium Titanate Oxide) anode |
| **Nominal Cell Voltage** | 2.3V (10S or 12S for ~24V systems) |
| **Energy Density** | 60–110 Wh/kg (trade-off for cycle life) |
| **Cycle Life** | **20,000–25,000+ cycles** at 80% capacity ⭐ |
| **Operating Temp (discharge)** | **−40°C to +60°C** |
| **Operating Temp (charge)** | **−30°C to +55°C** (can charge in extreme cold!) |
| **Fast Charge** | **80% in 6 minutes** (10C+ capable) |
| **Pulse Discharge** | Up to 20C |
| **Safety Rating** | **10/10** — Safest lithium chemistry, zero thermal runaway risk |
| **Thermal Runaway** | Virtually impossible |

### Key Manufacturers

| Manufacturer | Country | Key Product | Notes |
|:---|:---|:---|:---|
| **Toshiba SCiB™** | Japan | SCiB 20Ah/23Ah/26Ah cells | Industrial grade, P25H20-3 module |
| **Yinlong** | China | 66160 cylindrical cells (30–45Ah) | Most available for DIY |

### Pricing (2025–2026)

| Configuration | Price (USD) | Price (₸) | Notes |
|:---|:---|:---|:---|
| **Toshiba SCiB cell (20Ah)** | $20–30/cell | 9,400–14,100 ₸/cell | Premium quality |
| **Yinlong 66160 cell (30–40Ah)** | $15–40/cell | 7,050–18,800 ₸/cell | Verify Grade A / new |
| **24V assembled pack (10S, 30Ah)** | $300–600 | 141,000–282,000 ₸ | DIY or pre-assembled |
| **24V assembled pack (ruggedized)** | $500–800+ | 235,000–376,000 ₸ | With quality BMS |
| **Toshiba SCiB module (industrial)** | $500–1,500+ | 235,000–705,000 ₸ | Contact Toshiba directly |

### Where to Buy

| Source | Products | Notes |
|:---|:---|:---|
| **AliExpress** | Yinlong 66160 cells, DIY kits | Search "Yinlong LTO 24V"; verify "Brand New" |
| **Alibaba** | Assembled LTO packs, bulk cells | Filter by "Verified Supplier" |
| **eBay** | Toshiba SCiB cells (surplus/new) | Check State of Health |
| **selianenergy.com** | Pre-assembled Yinlong packs + BMS | Includes busbars, cases, BMS |
| **Toshiba SCiB portal** | Industrial modules | scib.jp/en — request quote |

### ⚠️ Important: LTO BMS Requirements

LTO voltage parameters differ from standard Li-ion:
- **Cell voltage range:** 1.5V–2.9V (vs. 2.5V–3.65V for LFP)
- **Standard Li-ion BMS will NOT work** — must use LTO-specific BMS
- Ensure BMS supports the correct cutoff voltages

### Pros & Cons

| ✅ Pros | ❌ Cons |
|:---|:---|
| **20,000+ cycle life** (robot lasts 20+ years) | **Lowest energy density** (60–110 Wh/kg) — heaviest pack |
| **6-min fast charge** to 80% | **Most expensive** option (2–3× LiFePO4 cost) |
| **Can charge at −30°C** (perfect for Almaty) | Lower nominal voltage (2.3V/cell → needs more cells) |
| **Safest chemistry** (10/10) | Requires specialized LTO BMS |
| Works −40°C to +60°C | Limited supplier ecosystem |
| Almost zero degradation per cycle | Heavier pack for same energy |
| Proven in buses, trains, industrial | Not common in small robotics |

### 🎯 Verdict for Tiger Robotics

**Technically perfect** — LTO solves every temperature problem in Almaty and will outlast the robot many times over. But the **weight and cost penalties** are significant:

- A 24V 30Ah LTO pack: ~$500–800 (vs. ~$150–250 for LFP)
- Weight: ~7–10 kg (vs. ~4–6 kg for equivalent LFP)
- For an 80 kg robot, adding 3–4 kg extra is meaningful

**Recommendation:** Consider LTO only if:
1. The robot needs to charge outdoors in winter (−25°C) without shelter
2. Ultra-fast charging is required (dock for 6 min, work for hours)
3. The robot must operate 24/7 for 10+ years without battery replacement

---

## 4️⃣ Solid-State Batteries — THE HOLY GRAIL (Not Yet)

### Current Status (June 2026): ❌ CANNOT BUY

**Fully solid-state batteries are NOT available for purchase** in any consumer or industrial format suitable for a robot. Period.

### What's Happening

| Company | Status (2026) | Timeline |
|:---|:---|:---|
| **Toyota** | Pilot testing, Japan certification obtained | Mass production: **2027–2028** |
| **Samsung SDI** | Pre-production phase, "46-phi" cells | Mass production: **H2 2027** |
| **QuantumScape** | "Eagle Line" pilot, licensing model with VW | Scaling through partners, TBD |
| **Factorial Energy** | On-road testing with Stellantis (375 Wh/kg) | 2027+ |
| **Dongfeng Motor** | China production planned (350 Wh/kg) | H2 2026 (automotive only) |

### Projected Specifications (When Available)

| Parameter | Expected Value |
|:---|:---|
| **Energy Density** | 350–420 Wh/kg (2× current LiFePO4) |
| **Cycle Life** | 1,000–2,000 cycles (estimated, improving) |
| **Temperature Range** | TBD (solid electrolytes can be temp-sensitive) |
| **Fast Charge** | Expected to support very fast charging |
| **Safety** | Expected to be excellent (no liquid electrolyte = no leaks/fires) |
| **Cost** | 3–5× current Li-ion manufacturing cost |

### Semi-Solid-State (Hybrid) — Available Now?

Some "semi-solid" batteries exist that contain a small amount of liquid electrolyte:
- Energy density: 350–420 Wh/kg
- Currently used in drones and some vehicles in China
- **Still not available as small 24V robot packs**
- Primarily for automotive/large-scale applications

### Pros & Cons

| ✅ Pros | ❌ Cons |
|:---|:---|
| Highest energy density (350–420 Wh/kg) | **Cannot buy** — not commercially available |
| No liquid electrolyte = safer in theory | Manufacturing cost 3–5× higher |
| Potential for fast charging | Cycle life unproven at scale |
| Lightest possible pack for same energy | Temperature performance uncertain |
| | Earliest availability: 2027–2028 for cars |
| | For small robotics: **2028–2030 at earliest** |

### 🎯 Verdict for Tiger Robotics

**Not an option for 2026–2027.** Ignore for current robot design. Revisit in 2028–2029 when:
1. Automotive-grade solid-state batteries are mass-produced
2. Smaller pack formats become available
3. Costs come down from 3–5× premium
4. Cycle life is validated in real-world use

---

## 5️⃣ Standard Li-ion (18650 / 21700 NMC/NCA) — "SAUSAGES WON'T WORK"

### Why the CEO Said "Сосиски не пойдут" (Sausages Won't Work)

The term "sausages" refers to cylindrical 18650 and 21700 cells. While they power everything from laptops to Tesla cars, they are **fundamentally unsuitable for an outdoor robot** operating in Almaty's extreme climate **without a sophisticated thermal management system**.

### Technical Specifications

| Parameter | 18650 (NMC/NCA) | 21700 (NMC/NCA) |
|:---|:---|:---|
| **Energy Density** | 200–250 Wh/kg | 250–300 Wh/kg |
| **Cell Capacity** | 2,000–3,500 mAh | 4,000–5,200 mAh |
| **Cycle Life** | 300–700 cycles | 500–1,200 cycles |
| **Operating Temp (discharge)** | −20°C to +60°C | −20°C to +60°C |
| **Operating Temp (charge)** | 0°C to +45°C | 0°C to +45°C |
| **Ideal Temp** | 20°C to 30°C | 20°C to 30°C |
| **Thermal Runaway** | **150–200°C** ⚠️ DANGER | **150–200°C** ⚠️ DANGER |
| **Oxygen Release** | YES (feeds fire) | YES (feeds fire) |
| **Safety Rating** | **5/10** | **5/10** |

### Pricing (2025–2026)

| Configuration | Price (USD) | Price (₸) | Notes |
|:---|:---|:---|:---|
| **DIY 24V 20Ah pack (18650)** | $80–150 | 37,600–70,500 ₸ | Requires 7S × many parallel; complex BMS |
| **DIY 24V 30Ah pack (21700)** | $120–200 | 56,400–94,000 ₸ | Fewer cells but still complex |
| **Pre-assembled 24V pack** | $100–250 | 47,000–117,500 ₸ | Quality varies enormously |
| **High-quality cells (Samsung, LG, Sony)** | $3–6/cell | 1,410–2,820 ₸/cell | 18650: Samsung 30Q, LG HG2 |
| **High-quality cells (21700)** | $4–8/cell | 1,880–3,760 ₸/cell | Samsung 50E, Molicel P42A |

### ⚠️ THE FIVE RISKS FOR OUTDOOR ROBOTICS

#### 1. 🔥 Thermal Runaway at Low Threshold (150–200°C)
- NMC/NCA cathodes decompose at **150–200°C** (vs. 270–300°C for LFP)
- Once started: temperatures exceed **800°C**
- The cathode **releases oxygen**, making the fire self-sustaining
- Standard fire suppression DOES NOT WORK — the battery feeds itself oxygen

#### 2. 🌡️ Almaty Temperature Extremes
- **Summer +42°C:** Approaches the upper limit of safe operation
  - Internal cell temp with motor load: can reach **50–60°C** easily
  - Combined with sun exposure on robot chassis: thermal runaway risk
- **Winter −25°C:** Cannot charge; capacity drops 50%+
  - Lithium plating occurs if charged below 0°C → permanent damage
  - Each cold-charge cycle reduces life exponentially

#### 3. 🤖 Vibration & Mechanical Stress
- Outdoor robot on rough terrain = constant vibration
- 18650/21700 packs require **spot-welded nickel strips** connecting cells
- Vibration breaks welds → intermittent connections → arcing → fire
- No shock absorption in typical pack designs

#### 4. 📊 Complex BMS Required
- A 24V 20Ah pack from 18650 cells: **7S × ~6P = 42+ cells**
- Each cell must be individually monitored for voltage, temperature
- Any single cell failure can cascade to entire pack
- BMS complexity and cost increases with cell count
- More failure points = lower reliability

#### 5. 📉 Short Cycle Life
- 300–700 cycles (18650) vs. 4,000–6,000 (LiFePO4)
- At daily use: **less than 2 years** before significant degradation
- Cell imbalance accelerates in large packs → some cells die early → whole pack degrades
- Swelling and venting in aged cells

### When 18650/21700 ARE Acceptable

| ✅ Works When | ❌ Does NOT Work When |
|:---|:---|
| Indoor/climate-controlled environment | Outdoor, −25°C to +42°C |
| Tesla-style liquid cooling system | No active cooling |
| Professional pack with welded busbars | Robot with vibration and impacts |
| Low duty cycle (laptop, drone) | 24/7 continuous operation |
| Replaced every 1–2 years (acceptable) | Expected 5+ year battery life |
| IP67 sealed enclosure | Open or splash-exposed chassis |

### Pros & Cons

| ✅ Pros | ❌ Cons |
|:---|:---|
| Highest energy density (250–300 Wh/kg) | **Thermal runaway at 150°C** — fire + oxygen release |
| Lightest pack for same energy | **Short cycle life** (300–1,200 cycles) |
| Cheapest per cell | **Cannot charge below 0°C** |
| Widely available (Samsung, LG, Sony) | Extremely complex BMS for 42+ cells |
| Best for laptops, drones, EVs (with cooling) | **Vibration breaks cell connections** |
| | Summer heat + motor load = dangerous |
| | Cell imbalance degrades pack unevenly |
| | No liquid cooling in robot = no safety margin |
| | **Swelling, venting, degradation** after 1–2 years |

### 🎯 Verdict for Tiger Robotics

**CEO IS CORRECT: "Sausages won't work."**

For an outdoor robot operating at −25°C to +42°C without liquid cooling:
- ❌ Fire risk is unacceptable
- ❌ Cycle life is too short (2 years max)
- ❌ Winter charging impossible without heater
- ❌ Too many cells = too many failure points
- ❌ Vibration will break connections

**Never use NMC/NCA 18650/21700 for this robot.**

---

## 🏆 FINAL RECOMMENDATION FOR TIGER ROBOTICS

### Tier 1: Use NOW (2026)
| | Battery | Why |
|:---|:---|:---|
| 🥇 | **LiFePO4 24V 30Ah** | Best balance of price ($150–250), safety (9/10), cycle life (6,000), availability. BUY TODAY. |

### Tier 2: Test NOW, Use in 2027–2028
| | Battery | Why |
|:---|:---|:---|
| 🥈 | **Sodium-Ion (32140 cells)** | Best cold-weather option (−40°C!). Buy test cells now (~$125). Build prototype. Plan transition for 2027. |

### Tier 3: Consider for Special Use Cases
| | Battery | Why |
|:---|:---|:---|
| 🥉 | **LTO (Yinlong/Toshiba)** | If ultra-fast charging or 20+ year life needed. Heavy and expensive ($500–800). |

### Tier 4: Watch, Don't Touch
| | Battery | Why |
|:---|:---|:---|
| 👀 | **Solid-State** | Not available until 2028+. Ignore for now. |

### Tier 5: NEVER
| | Battery | Why |
|:---|:---|:---|
| ❌ | **Li-ion 18650/21700 NMC/NCA** | Fire risk, short life, winter failure. CEO is right: "sausages won't work." |

---

## 📍 Almaty-Specific Considerations

### Winter Operations (−25°C)
- **LiFePO4:** Can discharge but CANNOT charge. Need self-heating BMS (+$30–50) or indoor charging.
- **Na-ion:** Full operation including charging at −20°C. No heater needed.
- **LTO:** Full operation including charging at −30°C. No heater needed.
- **NMC/NCA:** Dangerous. Capacity drops 50%+, cannot charge, lithium plating.

### Summer Operations (+42°C)
- **LiFePO4:** Within range but monitor internal temps under load.
- **Na-ion:** Excellent — rated to +70°C.
- **LTO:** Within range — rated to +60°C.
- **NMC/NCA:** DANGEROUS — internal temps under motor load + ambient heat can exceed runaway threshold.

### Recommended Winter Strategy for LiFePO4 (Tier 1)
1. Install **self-heating BMS** pad (~$30–50 extra) — heats cells to 5°C before charging
2. Or design **indoor charging dock** — robot returns to heated area to charge
3. Accept 20–30% capacity reduction in cold (plan range accordingly)
4. Never charge outdoors below 0°C without heating

### Future Strategy: Transition to Na-ion (Tier 2, 2027–2028)
1. Order 32140 Na-ion test cells NOW from AliExpress (~$125 for 16 cells)
2. Build a test pack (8S2P, 24V 20Ah equivalent)
3. Test through Almaty winter 2026–2027
4. If validated, transition production robots to Na-ion packs by 2028
5. Eliminates need for self-heating BMS = simpler, lighter, cheaper robot

---

## 📚 Sources & Research Notes

- All prices verified through AliExpress, Amazon, Alibaba, manufacturer websites (June 2026)
- CATL Naxtra specifications from official CATL press releases (April 2025)
- Toshiba SCiB specifications from scib.jp official documentation
- Na-ion cold performance data from IEA, IRENA, and manufacturer datasheets
- Thermal runaway thresholds from peer-reviewed studies and manufacturer safety data
- Cycle life data from manufacturer specifications at 80% DOD
- Exchange rate: 1 USD = 470 ₸ (approximate, June 2026)

---

*Research compiled for Tiger Robotics battery selection, June 2026*  
*For questions or updates, contact the engineering team*
