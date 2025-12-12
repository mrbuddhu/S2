// Structured Data (JSON-LD) for SEO and AEO
// This component adds schema markup for better search engine understanding

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SanganakHQ",
    "url": "https://sanganakhq.com",
    "logo": "https://sanganakhq.com/logo.png",
    "description": "Premium digital agency specializing in brand repair, web development, mobile apps, AI integration, blockchain solutions, and growth marketing. Fix broken brands and build new products.",
    "foundingLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "India",
        "addressCountry": "IN"
      }
    },
    "areaServed": [
      { "@type": "Place", "name": "India" },
      { "@type": "Place", "name": "Dubai" },
      { "@type": "Place", "name": "Global" }
    ],
    "sameAs": [
      "https://twitter.com/SanganakHQ",
      "https://linkedin.com/company/sanganakhq",
      "https://instagram.com/sanganakhq",
      "https://tiktok.com/@sanganakhq",
      "https://youtube.com/@sanganakhq"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "availableLanguage": ["English"]
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Digital Agency Services",
    "provider": {
      "@type": "Organization",
      "name": "SanganakHQ"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Brand Identity & Design",
            "description": "Professional brand identity design, logo creation, and design systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web & Mobile Development",
            "description": "Custom web applications and mobile app development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Integration",
            "description": "Artificial intelligence integration and automation services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Blockchain Solutions",
            "description": "Web3, NFT, and DeFi platform development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Growth Marketing",
            "description": "SEO, conversion optimization, and growth marketing services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Audit & Optimization",
            "description": "Brand, code, and marketing system audits and optimization"
          }
        }
      ]
    }
  };

  // Expanded FAQ schema for SEO/AEO - includes all FAQs (visible + hidden)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      // Branding & Design
      {
        "@type": "Question",
        "name": "How much does a brand identity redesign cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Brand identity projects range from $1,500 for logo refresh to $8,000+ for complete brand systems. Our Standard package ($3,500-$6k) includes full brand guidelines, visual identity, and design system."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a complete brand redesign take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A comprehensive brand redesign typically takes 4-6 weeks. This includes discovery, strategy, concept development, refinement, and final brand guidelines. Rush projects can be completed in 2-3 weeks with priority scheduling."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with AI-generated designs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in transforming AI-generated or poorly structured visuals into professional, high-converting brand identities. We audit what's broken, rebuild with strategic design systems, and ensure your brand commands authority and trust."
        }
      },
      {
        "@type": "Question",
        "name": "What's included in a brand identity package?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our brand identity packages include logo design, color palette, typography system, brand guidelines document, business card design, social media templates, and brand application examples. Premium packages include full design system and UI component library."
        }
      },
      // Web & Mobile Development
      {
        "@type": "Question",
        "name": "How much does it cost to build a web application?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Web app development ranges from $1,500 for simple fixes to $15,000+ for complex platforms. Our Standard package ($3,500-$6k) includes full-stack development, UI/UX design, and deployment. Factors include features, integrations, and scalability requirements."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies do you use for web development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We build with modern tech stacks: React, Next.js, TypeScript for frontend; Node.js, Express for backend; PostgreSQL, MongoDB for databases. We also work with React Native for mobile apps, and specialize in scalable, production-ready architectures."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a mobile app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mobile app development typically takes 6-12 weeks depending on complexity. Simple apps: 4-6 weeks. Complex apps with backend, integrations, and advanced features: 8-12 weeks. We use React Native for cross-platform efficiency."
        }
      },
      {
        "@type": "Question",
        "name": "Do you fix broken codebases?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in codebase audits and optimization. We identify performance issues, security vulnerabilities, and architectural problems. Then we refactor for speed, stability, and scalability. Delivered clean, maintainable, and production-ready."
        }
      },
      {
        "@type": "Question",
        "name": "Can you rebuild an existing website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We audit your current site, identify what's broken, and rebuild with modern architecture. We preserve what works, fix what doesn't, and optimize for conversions, speed, and user experience. Typical rebuild: 4-6 weeks."
        }
      },
      // AI & Automation
      {
        "@type": "Question",
        "name": "How do you integrate AI into existing products?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We audit your current system, identify automation opportunities, and integrate custom AI solutions. This includes chatbots, workflow automation, predictive analytics, and AI-powered features. We use OpenAI, Anthropic, and custom models based on your needs."
        }
      },
      {
        "@type": "Question",
        "name": "What AI services do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer AI chatbot development, workflow automation, predictive analytics, custom AI model integration, AI-powered search, content generation systems, and AI-driven personalization. All built with production-grade architecture and security."
        }
      },
      {
        "@type": "Question",
        "name": "How much does AI integration cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI integration projects start at $3,500 for basic chatbots and automation. Complex AI systems with custom models range from $8,000-$15,000+. Pricing depends on complexity, data requirements, and integration scope."
        }
      },
      // Blockchain & Web3
      {
        "@type": "Question",
        "name": "Do you build blockchain applications?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we develop Web3 platforms, NFT marketplaces, DeFi applications, and blockchain integrations. We work with Ethereum, Solana, Polygon, and other chains. We build secure, scalable, and user-friendly blockchain solutions."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a Web3 project cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Web3 development ranges from $5,000 for simple smart contracts to $15,000+ for full DeFi platforms or NFT marketplaces. Factors include blockchain choice, smart contract complexity, frontend requirements, and security audits."
        }
      },
      {
        "@type": "Question",
        "name": "What blockchain technologies do you use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work with Solidity for Ethereum, Rust for Solana, and build with Web3.js, Ethers.js, and modern frameworks. We also develop NFT marketplaces, DeFi protocols, and blockchain-based applications with security best practices."
        }
      },
      // Marketing & Growth
      {
        "@type": "Question",
        "name": "How do you improve conversion rates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We audit your funnel, identify drop-off points, and optimize each stage. This includes A/B testing, copy optimization, UX improvements, and data-driven changes. We typically see 20-40% conversion rate improvements within 30 days."
        }
      },
      {
        "@type": "Question",
        "name": "What marketing services do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer funnel optimization, ad creative development, email marketing automation, landing page design, conversion rate optimization (CRO), analytics setup (GA4, Meta Pixel), and growth strategy. All data-driven and results-focused."
        }
      },
      {
        "@type": "Question",
        "name": "How much does marketing optimization cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Marketing optimization starts at $1,500 for single funnel audits. Complete marketing revamps range from $3,500-$8,000. Monthly growth retainers start at $2,500/month for ongoing optimization and campaign management."
        }
      },
      {
        "@type": "Question",
        "name": "Do you do SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer technical SEO audits, on-page optimization, content strategy, and SEO-focused development. We ensure your site is fast, crawlable, and optimized for search engines. We also do AEO (Answer Engine Optimization) for AI search."
        }
      },
      // Audit & Optimization
      {
        "@type": "Question",
        "name": "What does a brand audit include?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A comprehensive brand audit includes design system analysis, messaging review, competitive positioning, user experience audit, conversion funnel analysis, and technical performance review. We deliver a detailed report with prioritized recommendations."
        }
      },
      {
        "@type": "Question",
        "name": "How long does an audit take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Single-area audits (design OR code OR marketing) take 1-2 weeks. Comprehensive full-system audits take 2-3 weeks. We deliver detailed reports with actionable insights and prioritized improvement roadmap."
        }
      },
      {
        "@type": "Question",
        "name": "What happens after the audit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "After the audit, you receive a detailed report with findings, recommendations, and priority roadmap. You can then choose to implement fixes yourself, or we can handle the rebuild/optimization. Most clients proceed with our Standard or Elite packages."
        }
      },
      {
        "@type": "Question",
        "name": "How much does an audit cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Single-area audits start at $1,500. Full system audits (design + code + marketing) start at $3,500. Enterprise-grade audits with detailed analysis start at $8,000. All audits include comprehensive reports and action plans."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

