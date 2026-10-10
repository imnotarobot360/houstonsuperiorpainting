# Review requests and review responses

Ethical workflow for Houston Superior Painting (owner brief, 2026-10-10). Google Business Profile is the only
confirmed review platform. Nothing here is sent automatically; the owner or office sends each message.

## Rules

- Ask **every** customer whose job is complete. Never choose who to ask based on whether you expect a good review
  (no review gating).
- No discounts, gifts, raffles or refunds in exchange for a review, positive or not.
- Use the review link for the **office that did the job** (Houston, Cypress, Katy, Sugar Land or Magnolia). Each link is
  the Google Business Profile "Ask for reviews" / "Share review form" link, stored in `data/review-profiles.ts` once the
  owner supplies it. Until then, `[VERIFIED REVIEW LINK]` stays a placeholder and no request is sent.
- Send once, plus **one** polite reminder at most. Stop if the customer says no.
- Do not write, edit or suggest the wording of a customer's review.

## Timing

1. Day of the final walkthrough, after the customer signs off: SMS.
2. Same day: email (if the customer prefers email, send only the email).
3. 5–7 days later, only if no review was left: one reminder.

## SMS

> Thank you for choosing Houston Superior Painting. We appreciate the opportunity to work on your project. If you have
> a moment, please share an honest review of your experience here: [VERIFIED REVIEW LINK]. Your feedback helps
> homeowners understand what to expect and helps our team continue improving.

## Email

**Subject:** Thank you for choosing Houston Superior Painting

> Thank you for trusting Houston Superior Painting with your project. We hope you are pleased with the work and your
> experience with our team. If you have a moment, we would appreciate an honest review at the link below. We value all
> feedback because it helps future customers make informed decisions and helps us improve.
>
> [VERIFIED REVIEW LINK]
>
> Juan Serra, Houston Superior Painting, (346) 594-5960

## Reminder (one only)

> Hi [first name], this is Houston Superior Painting following up once on your recent project. If you have a minute to
> share an honest review, here is the link: [VERIFIED REVIEW LINK]. If not, no problem at all, and thank you again for
> working with us.

## Responding to negative reviews

Do not assume negative reviews exist. When one appears:

1. Classify it: service complaint, scheduling issue, communication issue, billing dispute, mistaken identity, spam, or
   policy violation.
2. Check the project record before replying. Never post private job details (address, price, names of crew, photos).
3. The owner approves every public reply. Reply within a few business days.
4. Do not accuse the reviewer of lying. Do not offer compensation in exchange for removing or changing a review.
5. Spam or a clear policy violation may be reported to Google through the profile's review tools; a negative opinion
   is not a policy violation.

**General response**

> Thank you for sharing your feedback. We take customer concerns seriously and want to understand what happened. For
> privacy, we do not discuss project details publicly. Please contact us at (346) 594-5960 or through our website so we
> can review the project record and work toward an appropriate resolution.

**Mistaken identity** (no matching customer or project)

> We have been unable to match this review to a Houston Superior Painting customer or project. We would like to verify
> the details and make sure the review was posted to the correct company. Please contact us at (346) 594-5960 with the
> project name and service address so we can investigate.

## Quoting reviews on the website

A review appears on the site only after it is added to `data/reviews.ts` with `publish: true`, which requires the
owner's confirmation that it is real and that the customer agreed to be quoted. Add the Google review URL and date.
No AggregateRating or Review schema is added for the company's own reviews.
