# SEO Audit Report

**Website:** Digi Dracuaa
**Audit date:** 10 September 2026
**Audited source:** Static HTML website in the project workspace
**Pages reviewed:** Home, About, Services, Portfolio, Contact

## Executive Summary

The website has a clear agency proposition, consistent navigation, descriptive page copy, and basic title, description, and canonical tags. Its main SEO weaknesses were technical HTML duplication, competing page headings, a broken JavaScript reference, incomplete crawl files, weak social metadata, and placeholder business/contact details.

The highest-risk structural issues identified during the audit have been corrected. The site now has one document and one primary H1 per page, uses the existing JavaScript file correctly, includes Open Graph metadata, and provides `robots.txt` and `sitemap.xml`.

The remaining SEO work depends on production information and live verification. The placeholder phone number, inactive social links, form delivery, final domain, Google Search Console, analytics, performance, indexing, and backlink profile still need to be verified.

## Current Assessment

| Area | Status | Assessment |
|---|---|---|
| HTML document structure | Improved | Duplicate document markup was removed from About. |
| Heading structure | Improved | Each reviewed page now has one primary H1. |
| Titles and descriptions | Improved | Titles and descriptions now target page intent more clearly. |
| Canonical URLs | Present | Confirm they match the final production domain. |
| Robots and sitemap | Added | Submit the sitemap in Google Search Console. |
| Open Graph metadata | Added | Social image metadata is still recommended. |
| Internal linking | Present | Add dedicated pages for priority services. |
| Images | Needs work | Add more relevant project images and modern image formats. |
| Contact conversion | Needs work | The form currently validates locally but does not send data. |
| Local SEO | Needs work | Replace placeholder business details and create or optimize Google Business Profile. |
| Analytics | Not verified | Install analytics and define lead events. |
| Live performance | Not verified | Run Lighthouse and PageSpeed against the deployed site. |

## Findings

### High Priority

#### 1. Contact form is not connected to a backend

The form displays a success message after browser-side validation but does not send an enquiry to an email service, CRM, server, or form provider. This can create false conversion signals and lose leads.

**Recommendation:** Connect the form to a trusted endpoint such as a serverless function or form service. Show the success message only after the request succeeds, and show an error state when it fails.

#### 2. Verified business contact information is still required

The footer and contact panel still use `+91 00000 00000`. Social placeholders are now non-clickable until real profile URLs are supplied. The phone number must still be replaced before launch.

**Recommendation:** Replace the phone number and pending social labels with verified business details and real profile URLs.

#### 3. Final production domain must be confirmed

The canonical URLs and sitemap use the current production deployment at `https://seo-project-lake.vercel.app/`.

**Recommendation:** If a custom domain is used, update every canonical URL, Open Graph URL, sitemap URL, and robots sitemap reference. Redirect alternate domains to one preferred HTTPS domain.

#### 4. Service intent is too broad on one page

The Services page combines website creation, SEO, paid media, automation, video, advertising, Android apps, and desktop apps. This makes it difficult to build strong relevance for individual service searches.

**Recommendation:** Create dedicated pages for the most commercially important services, starting with SEO, website development, digital marketing, and app development.

### Medium Priority

#### 5. Portfolio proof needs verified metrics

Portfolio cards now lead to crawlable case-study pages, but several outcomes still need verified analytics or client-approved evidence.

**Recommendation:** Add measured results, before-and-after evidence, and client permission before publishing claims.

#### 6. Limited visual content and image SEO

The site contains very few project images, and service media blocks do not appear to contain meaningful image content.

**Recommendation:** Add relevant project images with descriptive `alt` text, explicit dimensions, responsive loading, and WebP or AVIF versions where supported.

#### 7. LocalBusiness data needs verification

Organization, WebSite, Service, and report schema are present. LocalBusiness schema is intentionally waiting for a verified phone number and address.

**Recommendation:** Add LocalBusiness and BreadcrumbList schema after the business details are confirmed. Validate all schema with Google's Rich Results Test.

#### 8. Social sharing can be improved

Basic Open Graph fields were added, but `og:image`, Twitter/X card metadata, and a dedicated social preview image are still recommended.

**Recommendation:** Create a correctly sized branded social preview image and add `og:image`, `og:image:width`, `og:image:height`, and `twitter:card` metadata.

### Low Priority

#### 9. Copy and formatting need editorial cleanup

Some older copy contains inconsistent spacing and punctuation, such as spaces around ampersands and commas. This does not usually cause a ranking penalty, but it affects perceived quality and readability.

**Recommendation:** Complete a copy-editing pass after the service and location strategy is finalized.

#### 10. No dedicated content strategy is visible

The current pages provide service descriptions but do not establish a continuing search-focused content program.

**Recommendation:** Publish useful content for target customers, such as local SEO guides, website cost explanations, marketing case studies, and practical advice for businesses in Hazaribagh and Jharkhand.

## Changes Already Implemented

- Removed duplicate introductory content and competing H1 elements.
- Replaced the duplicated About page with one valid HTML document.
- Corrected script references from the missing `js/main.js` path to the existing `main.js` file.
- Added `defer` to the shared script reference.
- Repaired the homepage project image markup.
- Added image dimensions and lazy loading to the homepage project image.
- Improved title and meta description wording across pages.
- Added Open Graph title, description, type, and URL metadata.
- Added `robots.txt`.
- Added `sitemap.xml`.
- Added clearer local relevance for Hazaribagh.
- Added page-current navigation semantics on the About page.

## Recommended Implementation Roadmap

### Immediate

1. Replace the phone number and pending social profile labels with verified business details.
2. Confirm the final production domain and update canonical URLs if needed.
3. Replace the email-draft fallback with a real form delivery endpoint.
4. Create or verify the Google Business Profile.
5. Deploy the site over HTTPS.

### Next

1. Add LocalBusiness and Service JSON-LD.
2. Create dedicated SEO, website development, and digital marketing pages.
3. Turn portfolio items into real case studies.
4. Add project images and social preview images.
5. Add a custom 404 page and verify all internal links.

### Ongoing

1. Publish useful, original content based on customer questions.
2. Earn relevant local and industry mentions.
3. Improve pages based on Search Console query data.
4. Review technical errors and conversions monthly.

## Measurement Plan

### Google Search Console

Verify the production domain and submit `sitemap.xml`. Track:

- Impressions
- Organic clicks
- Average position
- Click-through rate
- Queries by page
- Indexed pages
- Excluded pages
- Crawl and Core Web Vitals issues

Use a 28-day baseline before major changes and compare it with the equivalent period after each release.

### Analytics events

Install GA4 or an equivalent analytics tool and track:

- `contact_form_start`
- `contact_form_submit`
- `contact_form_error`
- `email_click`
- `phone_click`
- `whatsapp_click` if applicable
- `cta_click`
- `portfolio_project_click`

The primary business conversion should be a qualified enquiry, not a page view.

### Core formulas

**Organic lead conversion rate**

`qualified organic leads / organic sessions x 100`

**Organic cost per lead**

`SEO investment / qualified organic leads`

**Lead-to-customer rate**

`customers from organic leads / total organic leads x 100`

### Technical checks

Run these after deployment and after major changes:

- Google PageSpeed Insights
- Lighthouse
- Google Search Console URL Inspection
- Rich Results Test
- Schema Markup Validator
- W3C HTML Validator
- Mobile usability checks

Suggested Core Web Vitals targets:

- LCP below 2.5 seconds
- INP below 200 milliseconds
- CLS below 0.1

### Reporting cadence

- **Weekly:** indexing, technical errors, form delivery, broken links
- **Monthly:** organic traffic, rankings, click-through rate, leads, landing-page performance
- **Quarterly:** content strategy, backlinks, service-page performance, lead quality, revenue attribution

## Limitations

This report is based on the local source files. It does not include live crawler results, real Search Console data, PageSpeed results from a deployed server, backlink analysis, keyword-volume data, server headers, or Google Business Profile verification.

## Conclusion

The website now has a cleaner technical SEO foundation. The next meaningful gains will come from making the business details trustworthy, ensuring every enquiry is captured, creating focused service and case-study pages, and measuring qualified organic leads rather than traffic alone.
