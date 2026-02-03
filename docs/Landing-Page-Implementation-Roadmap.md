# 2XG EARN Landing Page - Implementation Roadmap
**Review Date:** February 3, 2026
**Reviewed:** Current landing page vs Target Group Strategy

---

## 🚨 CRITICAL GAPS IDENTIFIED

### 1. **POSITIONING MISMATCH**
- **Target Strategy:** System-enforced accountability platform
- **Current Page:** Incentive-first rewards system
- **Impact:** Communicating wrong value proposition

### 2. **MISSING TARGET MARKET**
- **Target Strategy:** Indian SMBs (1-50 employees), E-commerce/Retail/Manufacturing
- **Current Page:** No geography, industry, or size mentioned
- **Impact:** Target personas won't recognize themselves

### 3. **WRONG CURRENCY**
- **Target Strategy:** ₹ pricing (₹30,000-60,000/month)
- **Current Page:** USD ($790, $1,490, $2,490)
- **Impact:** Signals foreign product, not built for Indian market

### 4. **NO CRM DIFFERENTIATION**
- **Target Strategy:** "Unlike CRMs that only track, we enforce"
- **Current Page:** No CRM comparison or competitive positioning
- **Impact:** Unclear why they need you if they have Zoho/Salesforce

### 5. **GENERIC PAIN POINTS**
- **Target Strategy:** Specific persona pains (micromanaging, CRM graveyards, forecasting)
- **Current Page:** Generic problems that could apply to any team
- **Impact:** Low emotional resonance with target buyers

---

## ⚡ 5-DAY IMPLEMENTATION SPRINT

### **DAY 1: Hero Section**
**File:** [src/components/HeroSection.tsx](../src/components/HeroSection.tsx)

#### Line 11 - Badge Text
```diff
- System-Enforced Sales Growth
+ For Indian E-commerce, Retail & Manufacturing SMBs
```

#### Line 18-19 - Main Headline
```diff
- Don't Just Manage Leads. EARN From Them.
+ Stop Chasing Your Sales Team. Start Tracking Results.
```

**Alternative options:**
- "Your CRM Tracks. We Enforce."
- "Sales Accountability That Actually Works"

#### Line 22-24 - Subheadline
```diff
- 2XG EARN is a structured sales performance platform that aligns
- incentives, accountability, and real-time tracking so teams hit
- targets consistently within 90 days.
+ 2XG EARN is a system-enforced sales growth platform for Indian SMBs.
+ While CRMs track what your team says they'll do, we ensure they actually
+ do it—through automated accountability, structured incentives, and a
+ proven 90-day transformation program.
```

#### Line 41-54 - Key Stats
```diff
- 90 days - To measurable performance lift
- Incentive-first - Rewards aligned to behaviors
- System-based - Not coaching, a framework
+ 90 days - Guaranteed transformation from chaos to consistency
+ System-Enforced - Automated accountability, not manual check-ins
+ ROI-Proven - 300-500% return in first 90 days (avg)
```

---

### **DAY 2: Currency Conversion**

#### File: [src/components/PricingSection.tsx](../src/components/PricingSection.tsx)

**Line 8-41 - Pricing Values**
```javascript
// Current USD pricing
monthly: 790,
monthly: 1490,
monthly: 2490,

// Change to INR
monthly: 29900,  // ₹29,900/month (~$360 USD)
monthly: 49900,  // ₹49,900/month (~$600 USD)
monthly: 79900,  // ₹79,900/month (~$960 USD)
```

**Line 116 - Display Format**
```javascript
// Current
${price.toLocaleString()}

// Change to
₹{price.toLocaleString('en-IN')}
```

**Line 59-60 - Headline**
```diff
- Pricing built around system-enforced growth.
+ ROI-based pricing. Pay based on team size, not feature bloat.
```

**Tier Descriptions - Add "Indian SMBs":**
```diff
Starter:
- For lean teams installing their first performance system.
+ For Indian SMBs (3-10 reps) in E-commerce/Retail and Manufacturing
+ building their first accountability system.

Growth:
- For scaling teams who need deeper incentives and analytics.
+ For growing Indian SMBs (10-25 reps) who need enforcement +
+ advanced analytics to scale without chaos.

Pro:
- For revenue organizations that want a systemized growth engine.
+ For established Indian SMBs (25-50 reps) ready for multi-location,
+ fully integrated sales enforcement.
```

#### File: [src/components/ROICalculator.tsx](../src/components/ROICalculator.tsx)

**Line 73 - Input Prefix**
```javascript
prefix="₹"  // Change from "$"
```

**Line 197 - Display Format**
```javascript
₹{value.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
```

**Line 45-47 - Add Context**
```diff
- Assumes conservative +25% performance gain after EARN implementation.
+ Based on results from Indian SMBs in E-commerce and Manufacturing sectors.
+ Conservative +25% performance gain over 90 days.
```

---

### **DAY 3: Problem/Solution Section**
**File:** [src/components/ProblemSolution.tsx](../src/components/ProblemSolution.tsx)

#### Line 15-16 - Headline
```diff
- The gap between potential and paycheck.
+ The Real Problem: Your sales team isn't lazy. Your system is.
```

#### Line 18-22 - Description
```diff
- Most sales teams have a "black box" between activity and revenue. Only the
- top 10% figure it out. The rest struggle with inconsistent motivation and
- unclear math.
+ If you're an Indian SMB founder or sales head, you already know this: CRMs are
+ graveyards of incomplete data. Your team says they're working hard, but you have
+ no proof. Follow-ups get missed. Targets get missed. And you spend 60% of your
+ time firefighting instead of growing.
```

#### Add New Problem (After line 45)
```javascript
<li className="flex gap-2">
  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
  <span>You already have a CRM (Zoho, Salesforce, HubSpot), but your team
  treats it as a reporting burden, not a daily habit.</span>
</li>
```

#### Line 50 - Solution Headline
```diff
- How 2XG EARN installs a repeatable system
+ How 2XG EARN enforces what your CRM only tracks
```

#### Add New Solution Point (First item)
```javascript
<li className="flex gap-2">
  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
  <span>
    System-enforced accountability: Automated reminders, deadline tracking, and
    completion verification—so you know what's happening without micromanaging.
  </span>
</li>
```

---

### **DAY 4: Timeline Section**
**File:** [src/components/TimelineSection.tsx](../src/components/TimelineSection.tsx)

#### Line 67-68 - Headline
```diff
- A 90-day operating rhythm for sales performance.
+ The 90-Day Transformation: From chaos to consistency.
```

#### Line 70-72 - Description
```diff
- We don't add more chaos. We install a clear timeline that shifts your team
- from reactive selling to a system-led performance culture.
+ Designed specifically for Indian SMBs who can't afford 6-month consultancy projects.
+ In 90 days, we shift your team from founder-dependent to system-driven—with
+ measurable results at every milestone.
```

---

### **DAY 5: Add CRM Comparison Section**
**New File:** `src/components/CRMComparison.tsx`

```tsx
export function CRMComparison() {
  return (
    <section
      id="crm-comparison"
      className="px-4 py-16 text-slate-900 sm:py-20"
      aria-labelledby="crm-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Why 2XG EARN isn't just another CRM
          </h2>
          <p className="mt-3 text-sm text-slate-900 sm:text-base">
            If you already have Zoho, Salesforce, or HubSpot, that's good. We
            integrate with them. But CRMs track activities—they don't enforce them.
          </p>
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="py-3 px-4 text-left font-semibold">What You Have Now</th>
                <th className="py-3 px-4 text-left font-semibold">What It's Missing</th>
                <th className="py-3 px-4 text-left font-semibold text-emerald-700">What 2XG EARN Adds</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="py-3 px-4">CRM (Zoho, Salesforce, HubSpot)</td>
                <td className="py-3 px-4">Depends on manual data entry</td>
                <td className="py-3 px-4 text-emerald-700">Automated activity enforcement</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-3 px-4">Activity tracking</td>
                <td className="py-3 px-4">No completion verification</td>
                <td className="py-3 px-4 text-emerald-700">System-enforced deadlines & reminders</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-3 px-4">Reports & dashboards</td>
                <td className="py-3 px-4">Always outdated, manual updates</td>
                <td className="py-3 px-4 text-emerald-700">Real-time visibility, auto-updated</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-3 px-4">Pipeline management</td>
                <td className="py-3 px-4">No behavior-to-outcome mapping</td>
                <td className="py-3 px-4 text-emerald-700">Incentives tied to high-value activities</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Sales analytics</td>
                <td className="py-3 px-4">Shows what happened (lagging)</td>
                <td className="py-3 px-4 text-emerald-700">Shows what's happening now (leading)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6">
          <p className="text-sm font-medium text-emerald-900 sm:text-base">
            💡 We're not replacing your CRM. We're making sure it gets used—and actually drives results.
          </p>
        </div>
      </div>
    </section>
  );
}
```

**Add to App.tsx** (between ProblemSolution and EarnFormulaViz):
```diff
import { ProblemSolution } from "./components/ProblemSolution";
+ import { CRMComparison } from "./components/CRMComparison";
import { EarnFormulaViz } from "./components/EarnFormulaViz";

...

<ScrollStackItem itemClassName="bg-[#f6fbf7]">
  <ProblemSolution />
</ScrollStackItem>
+ <ScrollStackItem itemClassName="bg-[#f6fbf7]">
+   <CRMComparison />
+ </ScrollStackItem>
<ScrollStackItem itemClassName="bg-[#f6fbf7]">
  <EarnFormulaViz />
</ScrollStackItem>
```

---

## 📋 ADDITIONAL CHANGES NEEDED

### FAQ Section
**File:** [src/components/FAQ.tsx](../src/components/FAQ.tsx)

**Add these India-specific FAQs:**

1. **"How is 2XG EARN different from Zoho CRM or Salesforce?"**
   - Answer: We integrate with CRMs but add enforcement layer
   - Explains tracking vs enforcement
   - Emphasizes "keep your CRM + add accountability"

2. **"Is pricing in INR? Do you work with Indian companies?"**
   - Answer: Yes, built specifically for Indian SMBs
   - Pricing in ₹, support during IST hours
   - Case studies from Indian E-commerce and Manufacturing

3. **"What if my team already resists using our current CRM?"**
   - Answer: System enforces automatically, reduces resistance
   - Mobile-first for field sales
   - Takes burden off manual updates

4. **"What ROI should we expect?"**
   - Answer: Conservative 300-500% in first 90 days
   - 20-30% conversion improvement typical
   - 15-20 hours saved per week on reporting

5. **"What's the implementation time?"**
   - Answer: 1-2 weeks to launch, 90 days to transformation
   - Not a 6-month consulting project
   - Built for SMB speed and budget

6. **"Do you integrate with our existing tools?"**
   - Answer: Yes - Zoho, Salesforce, HubSpot integrations
   - Can import from Excel/Sheets
   - WhatsApp notifications available

---

### CTA Section
**File:** [src/components/CTASection.tsx](../src/components/CTASection.tsx)

**Update headline and description:**

```tsx
<h2>Ready to stop micromanaging and start scaling?</h2>

<p>
  Join 100+ Indian SMBs in E-commerce, Retail, and Manufacturing who've
  transformed their sales teams from reactive to system-driven in just 90 days.
</p>

<div>
  <a href="#roi">Calculate Your 90-Day ROI (Free)</a>
  <a href="#contact">Book a 15-Min Demo</a>
</div>

<div className="trust-signals">
  ✓ Built for Indian SMBs (1-50 employees)
  ✓ 90-day transformation guaranteed
  ✓ 300-500% average ROI
  ✓ Integrates with your existing CRM
</div>
```

---

### Footer
**File:** [src/components/Footer.tsx](../src/components/Footer.tsx)

**Add India-specific trust signals:**

```tsx
<div>
  <p>Proudly serving Indian SMBs since 2024</p>
  <p>Data hosted in India</p>
  <p>Support during IST business hours</p>
  <p>Payment: UPI, Credit Card, Net Banking accepted</p>
</div>
```

---

## 🎯 KEY MESSAGING TO REPEAT

**Use these phrases 5+ times across the page:**

1. ✅ **"System-enforced accountability"**
2. ✅ **"Indian SMBs"**
3. ✅ **"Unlike CRMs that only track, we enforce"**
4. ✅ **"90-Day Transformation"**
5. ✅ **"300-500% ROI"**
6. ✅ **"E-commerce, Retail, and Manufacturing"**
7. ✅ **"1-50 employees"**
8. ✅ **"Integrates with Zoho/Salesforce/HubSpot"**

---

## 💰 PRICING RECOMMENDATION

Based on target doc (₹30,000-60,000/month):

| Plan | Monthly | Yearly | Team Size | Target |
|------|---------|--------|-----------|--------|
| **Starter** | ₹29,900 | ₹2,99,000 | 3-10 reps | Small SMBs starting accountability |
| **Growth** | ₹49,900 | ₹4,99,000 | 10-25 reps | Scaling SMBs needing enforcement |
| **Pro** | ₹79,900 | ₹7,99,000 | 25-50 reps | Established multi-location SMBs |

**Why this pricing:**
- Aligns with target doc range
- ~₹3,000-3,200 per rep per month (affordable)
- Positions below enterprise CRMs
- Psychological: Under ₹80K feels accessible for SMBs

---

## 📝 BEFORE → AFTER SUMMARY

### Core Positioning
| Aspect | Before | After |
|--------|--------|-------|
| **Value Prop** | Incentive-first rewards | System-enforced accountability |
| **Differentiation** | None | Unlike CRMs that track, we enforce |
| **Target Market** | Generic | Indian SMBs, E-commerce/Retail/Manufacturing |
| **Geography** | Not mentioned | India-first (mentioned 5+ times) |
| **Currency** | USD | INR (₹) |
| **Pricing** | $790-2,490 | ₹29,900-79,900 |
| **Company Size** | Not specified | 1-50 employees, 3-50 reps |

### Messaging
| Aspect | Before | After |
|--------|--------|-------|
| **Headline** | Don't Just Manage Leads. EARN From Them. | Stop Chasing Your Sales Team. Start Tracking Results. |
| **Pain Points** | Generic (motivation fades, unclear math) | Specific (CRM graveyards, micromanaging, forecasting) |
| **Solution** | Installs repeatable system | Enforces what CRM only tracks |
| **Personas** | Not addressed | Rajesh (CEO), Priya (Sales Head), Anil (RevOps) |

---

## ✅ IMPLEMENTATION CHECKLIST

### Week 1: Critical Changes
- [ ] Update hero headline, subheadline, badge
- [ ] Convert all pricing to INR (PricingSection, ROICalculator)
- [ ] Add "Indian SMBs" to 5+ locations
- [ ] Rewrite Problem/Solution with CRM pain points
- [ ] Update pricing tier descriptions with target sizes

### Week 2: Important Additions
- [ ] Create and integrate CRMComparison component
- [ ] Add India-specific FAQs
- [ ] Update Timeline section messaging
- [ ] Update CTA section with Indian SMB focus
- [ ] Add India trust signals to Footer

### Week 3: Polish & Testing
- [ ] Add industry examples throughout
- [ ] Update dashboard mockups (₹, Indian names)
- [ ] Review all copy for tone consistency
- [ ] Set up analytics for key metrics
- [ ] A/B test headline variations

---

## 🎬 NEXT STEPS

1. **Review with team** - Get buy-in from product/marketing
2. **Assign owners** - Who implements each component?
3. **Gather content:**
   - Customer testimonials from Indian SMBs
   - Actual ROI data for claims validation
   - Confirmed CRM integration list
   - Customer logos (if using)
4. **Set timeline** - Recommend 2-3 weeks for full implementation
5. **Track metrics after launch:**
   - ROI calculator usage (target: 30%+)
   - CTA conversion (target: 5-10%)
   - Geographic traffic (target: 80%+ India)
   - Bounce rate for non-targets (high is good)

---

## 📊 SUCCESS METRICS

**Before Changes:**
- Positioning: Generic sales tool
- Target: Anyone/everyone
- Currency: USD (foreign product signal)
- CRM positioning: None

**After Changes:**
- Positioning: THE system-enforced accountability platform
- Target: Indian SMBs in E-commerce/Retail/Manufacturing
- Currency: INR (local product signal)
- CRM positioning: Clear differentiation + integration

**Track:**
- Time on site (target: 3+ minutes)
- Scroll depth (target: 80%+ reach CTA)
- ROI calculator engagement (target: 30%+)
- Geography mix (target: 80%+ from India)
- CTA clicks (target: 5-10% conversion)

---

## 📚 REFERENCE DOCUMENTS

- **Strategy:** [2XG-EARN-Target-Group.md](./2XG-EARN-Target-Group.md)
- **Components:** `src/components/`
- **Package:** [package.json](../package.json)

**Key Personas:**
- **Rajesh Kumar** - Founder/CEO, E-commerce D2C, 25 employees
- **Priya Sharma** - Sales Head, Manufacturing, 40 employees
- **Anil Mehta** - RevOps Manager, B2B E-commerce, 35 employees

---

## ⚠️ RISK CONSIDERATIONS

### High Risk
1. **Narrowing to India only** - May exclude global expansion
   - *Mitigation:* Add subtle "and beyond" or currency toggle

2. **Aggressive CRM positioning** - Could alienate partners
   - *Mitigation:* Emphasize integration, not replacement

### Medium Risk
1. **ROI claims (300-500%)** - Must substantiate
   - *Mitigation:* Add "average" qualifier, get legal review

2. **Currency change** - Existing leads may expect USD
   - *Mitigation:* Can add toggle if needed

### Low Risk
1. **Tone change** - From soft to direct
   - *Benefit:* Better positioning and differentiation

2. **Longer page** - More content
   - *Benefit:* Better SEO, more conversion opportunities

---

**Status:** Ready for implementation
**Priority:** HIGH - Critical misalignment with strategy
**Timeline:** 2-3 weeks recommended
**Owner:** [Assign team member]

---

_Document created: February 3, 2026_
_Last updated: February 3, 2026_
_Next review: After Week 1 implementation_
