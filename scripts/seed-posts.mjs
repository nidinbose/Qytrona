// Adds the starter blog posts below. Posts whose slug already exists are left untouched.
// Usage: npm run seed:posts
import mongoose from "mongoose";

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  console.error("Set MONGODB_URI in .env.local first.");
  process.exit(1);
}

const daysAgo = (n) => new Date(Date.now() - n * 24 * 60 * 60 * 1000);

const posts = [
  {
    title: "Website vs Mobile App: Which Does Your Business Need First?",
    slug: "website-vs-mobile-app-which-first",
    excerpt:
      "Should you build a website or a mobile app first? A simple guide to choosing the right starting point for your business, budget and customers.",
    category: "Mobile Apps",
    tags: ["mobile apps", "websites", "planning"],
    publishedAt: daysAgo(3),
    content: `## Start with how your customers find you

Most new customers discover a business through Google, Instagram or a friend's link. All of these open a **website**, not an app. That is why, for most businesses, a website is the right first step.

## When a website should come first

- You need to be found on Google
- Customers mostly visit once or a few times a year
- You want enquiries, calls and WhatsApp messages
- Your budget is limited and you need results quickly

## When a mobile app makes sense

- Customers use your service often — daily or weekly
- You need push notifications, offline access or the phone's camera and GPS
- You run bookings, deliveries, memberships or loyalty programmes
- You already have steady traffic and want to keep customers coming back

> A website brings new customers in. An app keeps loyal customers close.

## The best of both

Many businesses start with a fast, mobile-friendly website, learn what customers use most, and then build an app around those features. This keeps costs down and makes sure the app solves real problems.

## Not sure which fits?

Tell us how your customers buy from you and we will suggest the simplest path. [Book a free call](/contact).`,
  },
  {
    title: "Local SEO Checklist: Get Your Business Found on Google Maps",
    slug: "local-seo-checklist-google-maps",
    excerpt:
      "A practical local SEO checklist to help your business appear on Google Maps and in 'near me' searches — no technical knowledge needed.",
    category: "SEO",
    tags: ["seo", "google business profile", "local business"],
    publishedAt: daysAgo(10),
    content: `## Why local SEO matters

When someone searches "dentist near me" or "bakery in Kochi", Google shows a map with three businesses at the top. Getting into that list can bring in **calls and visits every day** without paying for ads.

## Your local SEO checklist

### 1. Claim your Google Business Profile

- Verify your business and choose the most accurate main category
- Add opening hours, phone number, WhatsApp and website
- Upload real photos of your shop, team and work

### 2. Keep your details consistent

Your business name, address and phone number should be **exactly the same** on your website, Google, Facebook, Instagram and directories like Justdial.

### 3. Collect reviews regularly

- Ask happy customers for a review right after a good experience
- Share a short review link on WhatsApp
- Reply to every review — good or bad — politely

### 4. Build location pages on your website

If you serve several areas, create a page for each one that explains your services there. Mention landmarks and areas customers recognise.

### 5. Make your site fast and mobile-friendly

Most local searches happen on phones. A slow website loses visitors before they even see your phone number.

> Reviews, photos and accurate details do more for local rankings than any trick.

## Need a hand?

We set up and manage Google Business Profiles and local SEO for businesses across Kerala and beyond. [Talk to us](/contact).`,
  },
  {
    title: "How Much Does a Business Website Cost in India?",
    slug: "business-website-cost-india",
    excerpt:
      "What actually decides the price of a website? We break down the costs — from pages and features to hosting and maintenance — so you can plan with confidence.",
    category: "Website Development",
    tags: ["websites", "pricing", "small business"],
    publishedAt: daysAgo(17),
    content: `## Why prices vary so much

You may get quotes that differ by ten times for what sounds like the same website. That is because "a website" can mean very different things. Here is what really affects the price.

## What decides the cost

1. **Number of pages** — a 5-page site costs less than a 30-page site with service and location pages.
2. **Custom design vs template** — a design made for your brand takes more time than editing a theme.
3. **Features** — booking forms, payments, multiple languages, member logins and integrations add work.
4. **Content** — writing, photography and product uploads are often forgotten in early budgets.
5. **SEO setup** — page titles, speed optimisation and Google Search Console setup.

## Ongoing costs to plan for

- Domain name renewal every year
- Hosting, which depends on traffic and features
- Business email, if you want addresses like you@yourbusiness.com
- Maintenance for updates, backups and security fixes

> Ask for an itemised quote. If you cannot see what you are paying for, you cannot compare.

## How to get an accurate quote

Write down the pages you need, the features you want and two or three websites you like. With that, any good agency can give you a fixed price instead of a guess.

At Qytrona we send a fixed, itemised quote before any work starts. [Request yours](/contact).`,
  },
  {
    title: "Instagram vs Google Ads: Where Should Small Businesses Spend?",
    slug: "instagram-vs-google-ads-small-business",
    excerpt:
      "Meta ads and Google ads work in very different ways. Learn which one suits your business, and how to spend a small budget wisely.",
    category: "Digital Marketing",
    tags: ["digital marketing", "google ads", "meta ads"],
    publishedAt: daysAgo(24),
    content: `## Two different kinds of attention

**Google Ads** reach people who are already searching for what you sell. **Instagram and Facebook ads** reach people based on their interests, even if they were not looking for you today.

## Choose Google Ads when

- People actively search for your service ("AC repair Kochi", "wedding photographer")
- Customers need you urgently
- Each new customer is worth a good amount to you

## Choose Instagram and Facebook ads when

- Your product looks great in photos or videos
- You are launching something new that people do not search for yet
- You want to build awareness in a specific area or age group

## Tips for a small budget

- Start with one platform and one clear offer
- Send people to a focused landing page, not just your homepage
- Track calls, WhatsApp clicks and form enquiries — not just likes
- Review results every week and pause what does not work

> The right platform is the one where your customers already are when they are ready to buy.

## Want a plan that fits your budget?

We run Google and Meta ad campaigns with clear monthly reports. [Get in touch](/contact).`,
  },
  {
    title: "7 Must-Have Features for Your Online Store",
    slug: "must-have-features-online-store",
    excerpt:
      "Planning an e-commerce website? These seven features help turn visitors into paying customers and keep them coming back.",
    category: "E-commerce",
    tags: ["e-commerce", "online store", "conversion"],
    publishedAt: daysAgo(31),
    content: `## Make buying easy

Online shoppers leave quickly when something is confusing or slow. These features remove friction and build trust.

## The 7 essentials

1. **Fast, mobile-first pages** — most orders are placed on phones.
2. **Clear product photos and details** — sizes, materials, delivery time and price, all visible without scrolling.
3. **Simple checkout** — guest checkout, few fields and autofill where possible.
4. **Popular payment options** — UPI, cards, net banking, wallets and cash on delivery where it makes sense.
5. **Order tracking and updates** — SMS, email or WhatsApp messages at each step.
6. **Reviews and ratings** — real feedback from real buyers.
7. **Easy returns information** — a clear policy reduces doubt before purchase.

## Nice to have later

- Discount codes and offers
- Wishlists and recently viewed products
- Abandoned cart reminders
- Integration with your stock or billing software

> Every extra step in checkout is a chance for a customer to change their mind.

## Ready to sell online?

We design and build online stores that are easy to manage and easy to buy from. [Start your project](/contact).`,
  },
  {
    title: "Website Maintenance: What It Is and Why It Matters",
    slug: "website-maintenance-why-it-matters",
    excerpt:
      "Launching a website is just the beginning. Here is what regular maintenance includes and how it protects your business.",
    category: "Website Development",
    tags: ["maintenance", "security", "websites"],
    publishedAt: daysAgo(38),
    content: `## A website is never really finished

Just like a shop or a vehicle, a website needs regular care. Without it, sites slow down, break after updates or become easy targets for hackers.

## What maintenance includes

- **Software updates** — keeping the platform, plugins and libraries up to date
- **Security checks** — monitoring for malware and fixing weak points
- **Backups** — regular copies so nothing is lost if something goes wrong
- **Speed checks** — keeping pages quick as content grows
- **Content updates** — new offers, prices, photos and team members
- **Uptime monitoring** — knowing straight away if the site goes down

## Signs your site needs attention

1. Forms stop sending enquiries
2. Pages load slowly or look broken on some phones
3. Your browser shows a "Not secure" warning
4. Information like prices or opening hours is out of date

> The cheapest fix is the one done before customers notice a problem.

## Let us look after it

Our support plans cover updates, backups, fixes and small changes every month, so you can focus on running your business. [Ask about support plans](/contact).`,
  },
];

const Post =
  mongoose.models.Post ||
  mongoose.model(
    "Post",
    new mongoose.Schema(
      {
        title: String,
        slug: { type: String, unique: true, lowercase: true, trim: true },
        excerpt: String,
        content: String,
        coverImage: { type: String, default: "" },
        category: String,
        tags: [String],
        author: { type: String, default: "Qytrona Team" },
        status: { type: String, default: "draft" },
        publishedAt: Date,
      },
      { timestamps: true }
    )
  );

await mongoose.connect(MONGODB_URI);

let added = 0;
for (const post of posts) {
  if (await Post.exists({ slug: post.slug })) {
    console.log(`Skipped (already exists): ${post.slug}`);
    continue;
  }
  await Post.create({ ...post, status: "published", author: "Qytrona Team" });
  console.log(`Added: ${post.title}`);
  added++;
}

console.log(`Done. ${added} post(s) added.`);
await mongoose.disconnect();
