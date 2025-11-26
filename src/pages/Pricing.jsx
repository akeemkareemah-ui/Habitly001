import React from "react";
import { Link } from "react-router-dom";

function PricingPage() {
  const wrapper = {
    minHeight: "100vh",
    width: "100%",
    backgroundImage: "url(/goal1.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "40px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
  };

  const container = {
    fontFamily: "sans-serif",
    maxWidth: 1000,
    width: "90%",
    background: "rgba(255, 255, 255, 0.45)",
    borderRadius: 12,
    padding: "30px 20px",
  };

  const header = { textAlign: "center", marginBottom: 40 };
  const title = { fontSize: "2.5rem", fontWeight: 700, color: "#0d9488" };
  const subtitle = { fontSize: "1.3rem", marginTop: 8, color: "#334155" };

  const table = { width: "100%", borderCollapse: "collapse", marginBottom: 40 };
  const th = { border: "1px solid #e2e8f0", padding: 12, background: "#0d9488", color: "#fff", fontSize: "18px" };
  const td = { border: "1px solid #e2e8f0", padding: 12, textAlign: "center", fontSize: "18.5px" };

  const faqSection = { marginBottom: 40 };
  const faqItem = { marginBottom: 16 };
  const question = { fontWeight: 600, fontSize: "20px", color: "#0d9488" };
  const answer = { marginTop: 4, fontSize: "16px", color: "#334155" };

  const footerCTA = { textAlign: "center", padding: 22, background: "#0d9488", borderRadius: 12, color: "#fff" };
  const ctaButton = {
    display: "inline-block",
    padding: "12px 24px",
    background: "#fff",
    color: "#0d9488",
    border: "none",
    borderRadius: 8,
    fontWeight: 700,
    cursor: "pointer",
    textDecoration: "none",
    marginTop: 12,
  };

  return (
    <div style={wrapper}>
      <div style={container}>
      
        <div style={header}>
          <div style={title}>Pricing Plans</div>
          <div style={subtitle}>Choose the plan that fits your habit tracking journey.</div>
        </div>

       
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>Plan</th>
              <th style={th}>Price</th>
              <th style={th}>Features</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Free</td>
              <td style={td}>$0/mo</td>
              <td style={td}>Basic habit tracking, limited tools</td>
            </tr>
            <tr>
              <td style={td}>Pro</td>
              <td style={td}>$9/mo</td>
              <td style={td}>All Free features + Advanced Tools, Mood Tracking, Timer</td>
            </tr>
            <tr>
              <td style={td}>Premium</td>
              <td style={td}>$19/mo</td>
              <td style={td}>All Pro features + Health Sync, Priority Support</td>
            </tr>
          </tbody>
        </table>

        
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>Feature</th>
              <th style={th}>Free</th>
              <th style={th}>Pro</th>
              <th style={th}>Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Habit Tracking</td>
              <td style={td}>✓</td>
              <td style={td}>✓</td>
              <td style={td}>✓</td>
            </tr>
            <tr>
              <td style={td}>Notes & Timer</td>
              <td style={td}>✗</td>
              <td style={td}>✓</td>
              <td style={td}>✓</td>
            </tr>
            <tr>
              <td style={td}>Mood Tracking</td>
              <td style={td}>✗</td>
              <td style={td}>✓</td>
              <td style={td}>✓</td>
            </tr>
            <tr>
              <td style={td}>Health Sync</td>
              <td style={td}>✗</td>
              <td style={td}>✗</td>
              <td style={td}>✓</td>
            </tr>
            <tr>
              <td style={td}>Priority Support</td>
              <td style={td}>✗</td>
              <td style={td}>✗</td>
              <td style={td}>✓</td>
            </tr>
          </tbody>
        </table>

        
        <div style={faqSection}>
          <div style={faqItem}>
            <div style={question}>How do I upgrade to Pro?</div>
            <div style={answer}>Click the "Get Started" button on the Pro plan or in your account settings.</div>
          </div>
          <div style={faqItem}>
            <div style={question}>Can I cancel anytime?</div>
            <div style={answer}>Yes, subscriptions can be cancelled at any time with no penalty.</div>
          </div>
          <div style={faqItem}>
            <div style={question}>Do you offer refunds?</div>
            <div style={answer}>Refunds are available within 14 days of purchase if unsatisfied.</div>
          </div>
        </div>

     
        <div style={footerCTA}>
          <div style={{ fontSize: "1.5rem", fontWeight: 700 }}>Try Pro Free for 7 Days!</div>
          <Link to="/signup" style={ctaButton}>Get Started</Link>
        </div>
      </div>
    </div>
  );
}

export default PricingPage;
