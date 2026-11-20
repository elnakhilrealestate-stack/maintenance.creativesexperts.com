# AmanCam — Google Ads & SEO Launch Plan

## Business outcome
Generate qualified calls and WhatsApp enquiries for security-system installation and maintenance in Jordan. The primary service area is Amman; requests from other areas are confirmed individually.

## Landing-page map
- Arabic home: `/` — broad security systems / company intent.
- CCTV: `/services/kamerat-al-muraqaba.html`
- Intruder & fire alarms: `/services/ajhizat-indhar-al-sirqa-wal-hariq.html`
- Fire extinguishers: `/services/tawreed-wa-sianat-tafayat-al-hariq.html`
- Automatic gate motors: `/services/tarkeeb-wa-sianat-matorat-al-abwab.html`
- Access control: `/services/anzimat-access-control.html`
- Video intercom: `/services/intercom-video.html`
- Attendance / fingerprint: `/services/anzimat-basamat-al-dawam.html`
- English overview: `/en/`

## Google Ads campaign structure
Start with Search campaigns only. Keep Arabic and English in separate campaigns so search terms, ad copy and landing pages stay aligned.

### Campaign A — AR | CCTV | Amman
Ad groups:
1. تركيب كاميرات مراقبة
2. كاميرات مراقبة للشركات والمحلات
3. صيانة كاميرات مراقبة

Landing page: CCTV service page. Prioritise exact and phrase match initially. Use call and WhatsApp assets only after verifying contact details and conversion measurement.

### Campaign B — AR | Security Systems | Amman
Ad groups:
1. أنظمة إنذار السرقة
2. إنذار الحريق
3. أكسس كنترول
4. إنتركم فيديو
5. بصمة دوام
6. ماتور بوابة أوتوماتيكية
7. طفايات الحريق

Use the closest matching service page for each ad group. Do not combine unrelated services in one ad group.

### Campaign C — EN | Security Systems | Amman
Ad groups:
1. CCTV installation
2. Access control systems
3. Intruder and fire alarms
4. Video intercom / attendance systems

Landing page: `/en/` until dedicated English service pages exist. Keep English keywords and ads separate from Arabic.

## Initial keyword themes (ideas, not measured volumes)
Arabic:
- تركيب كاميرات مراقبة عمان
- شركة كاميرات مراقبة الأردن
- صيانة كاميرات مراقبة عمان
- كاميرات مراقبة للمحلات والشركات
- تركيب نظام إنذار حريق عمان
- أجهزة إنذار سرقة
- تركيب اكسس كنترول عمان
- انتركم فيديو عمان
- جهاز بصمة دوام للشركات
- ماتور باب كراج أوتوماتيك
- توريد طفايات حريق عمان

English:
- CCTV installation Amman
- security camera installation Jordan
- CCTV maintenance Amman
- access control installation Amman
- fire alarm system Jordan
- video intercom installation Amman
- attendance fingerprint system Jordan

Validate actual search volume, CPC, search terms and competition in Google Ads Keyword Planner before setting bids or claiming market size.

## Negative keyword starter list
Add only after checking actual search terms; use account-level negatives carefully:
- وظائف، وظيفة، راتب، توظيف، تدريب، كورس، دورة، تعلم، شرح
- مستعمل، مجاني، مجانا، صور، تعريف، pdf، manual، tutorial
- software، app download، driver، firmware، repair course
- كاميرا موبايل، كاميرا تصوير، كاميرا فوتوغرافية، كاميرا ويب
- jobs، salary، careers، course، training، used، free، manual، download

Do not automatically exclude words like "سعر" or "أسعار": high-intent buyers often use them.

## Responsive Search Ad copy — Arabic draft
Headlines:
- تركيب كاميرات مراقبة في عمّان
- أنظمة أمن وحماية للمنازل والشركات
- كاميرات CCTV وأنظمة إنذار
- حلول أكسس كنترول وإنتركم
- اطلب عرض سعر لنظام الحماية
- تواصل مع فريق الخبراء المبدعين

Descriptions:
- توريد وتركيب كاميرات مراقبة وأنظمة أمن للمنازل والمنشآت. تواصل معنا لمناقشة احتياج موقعك.
- إنذار سرقة وحريق، أكسس كنترول، إنتركم وبصمة دوام. اطلب عرض سعر عبر الهاتف أو واتساب.

## Responsive Search Ad copy — English draft
Headlines:
- CCTV Installation in Amman
- Security Systems for Homes & Business
- Access Control & Video Intercom
- Request a Security System Quote

Descriptions:
- CCTV, alarm, access control and intercom solutions for homes and businesses. Contact our team.
- Tell us about your site and requirements to discuss a suitable security setup and quotation.

## Geographic and network settings
- Target Amman first. Expand to other Jordanian cities only after confirming service coverage and lead quality.
- Use presence-based location targeting (people in or regularly in the targeted locations), not broad interest targeting.
- Start with Google Search Network. Keep Display expansion and Performance Max off during the first controlled test.
- Schedule based on confirmed staffed response hours. The site currently states 8:00 AM–10:00 PM, 7 days; verify this with the business before using ad schedules.
- Use location assets only if the Google Business Profile is verified and connected.

## Conversion measurement — launch blocker
The website now emits event hooks for:
- `click_to_call`
- `click_whatsapp`
- `generate_lead` when the homepage quote form launches the WhatsApp enquiry

These are event hooks only. They do not send data to Google until a valid GA4 / Google Tag Manager measurement setup is installed and tested.

Before enabling spend:
1. Connect or verify the correct GA4 property and GTM container.
2. Configure the event hooks as GA4 events and mark qualified lead events as key events.
3. Import the right GA4 conversions into Google Ads, or use Google Ads conversion tags consistently — never count the same action twice.
4. Test phone click, WhatsApp click and quote-form WhatsApp launch on desktop and mobile.
5. Distinguish click events from actual conversations and qualified leads. Import qualified/offline leads when a reliable CRM or lead log exists.
6. Add UTMs and preserve them through the enquiry journey where possible.

## Optimisation routine
- First 3–7 days: check search terms, location quality, device split, call/WhatsApp activity and broken links. Do not optimise to clicks alone.
- Weekly: pause irrelevant queries, add negatives, review cost per qualified lead and improve low-converting landing pages.
- Monthly: compare lead quality by service, city, keyword and device; shift budget only using measured outcomes.

## Do not launch until
- The final Preview has been checked on mobile and desktop.
- The actual phone/WhatsApp destination has been tested.
- GA4 / GTM and Google Ads conversion actions are verified.
- Service coverage and opening hours are confirmed.
- Keyword volumes and CPCs are checked in Keyword Planner.


## B2B sector landing pages added
Each campaign/ad group should use the closest sector page rather than sending every B2B click to the homepage:
- Companies and offices: `/sectors/security-systems-for-companies.html`
- Malls and retail: `/sectors/security-systems-for-malls-retail.html`
- Restaurants and cafés: `/sectors/security-systems-for-restaurants.html`
- Schools and universities: `/sectors/security-systems-for-schools-universities.html`
- Hospitals and clinics: `/sectors/security-systems-for-hospitals-clinics.html`
- Factories and warehouses: `/sectors/security-systems-for-factories-warehouses.html`
- Hotels and multi-site institutions: `/sectors/security-systems-for-institutions.html`
- Maintenance contracts: `/contracts/security-system-maintenance-contracts.html`

## Additional B2B campaign structure
Keep separate campaigns or tightly themed ad groups by service/sector only when there is enough budget and search demand. Suggested initial segmentation:
1. CCTV installation for businesses — companies, retail, restaurants.
2. Security systems for educational facilities — schools and universities.
3. Security systems for healthcare — hospitals and clinics.
4. Industrial CCTV and access control — factories and warehouses.
5. Maintenance contracts — CCTV, access control and alarm maintenance.
6. Multi-site / institutional security — hotels and multi-building organizations.

Do not split a small budget into too many low-volume campaigns on day one. Start with the highest-intent services and locations, collect search-term data, then expand sector-specific campaigns as qualified lead volume supports them.

## B2B lead qualification fields
Capture these in the WhatsApp prefill or a short lead form:
- Organization type and activity
- City / site location
- Number of buildings, branches and floors
- Required systems (CCTV, access control, alarm, intercom, attendance)
- New installation, upgrade, one-off maintenance, or maintenance contract
- Desired contract duration (short-term / annual / multi-year)
- Preferred site survey / contact time

Do not promise a response SLA, spare parts inclusion, or guaranteed uptime unless it is approved and explicitly written into the quotation or contract.


## English B2B landing pages added
English campaigns can now use dedicated pages rather than the general English homepage:
- Companies and offices: `/en/sectors/companies-offices.html`
- Malls and retail: `/en/sectors/malls-retail.html`
- Restaurants and cafés: `/en/sectors/restaurants-cafes.html`
- Schools and universities: `/en/sectors/schools-universities.html`
- Hospitals and clinics: `/en/sectors/hospitals-clinics.html`
- Factories and warehouses: `/en/sectors/factories-warehouses.html`
- Hotels and institutions: `/en/sectors/institutions-hotels.html`
- Maintenance contracts: `/en/sectors/maintenance-contracts.html`

Each English page has an Arabic alternate URL, a sector-specific WhatsApp prefill, and a Service schema description scoped to Amman. Other Jordanian cities remain subject to confirmation.

## B2B campaign rollout sequence
1. Launch one Arabic Search campaign for CCTV installation and one tightly grouped Arabic campaign for the other high-intent security services, both focused on Amman.
2. Create a separate Arabic maintenance campaign once the contract landing page and tracking are verified.
3. Start English Search only if the business can handle English enquiries; use the matching English sector pages.
4. Add sector-specific campaigns only when Keyword Planner and actual search-term volume justify the extra campaign split.
5. Use presence-based Amman targeting and review search terms frequently in the initial period.

## Tracking status
The site contains front-end event hooks for `click_to_call`, `click_whatsapp` and `generate_lead`. The Google Ads, GA4 and Google Search Console connections were not authenticated at the time of this revision. These hooks have not yet been verified as delivered GA4 events or imported Google Ads conversions. No spend should be enabled until the connections and conversion tests are complete.
