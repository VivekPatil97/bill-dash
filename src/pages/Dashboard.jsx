import React from 'react';

const Dashboard = () => {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>Dashboard</h1>
        <p style={styles.subtitle}>Overview of your billing and usage</p>
      </header>

      <section style={styles.cardRow}>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Total Revenue</h2>
          <p style={styles.cardValue}>$12,480</p>
          <p style={styles.cardMeta}>Last 30 days</p>
        </div>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Active Customers</h2>
          <p style={styles.cardValue}>1,792</p>
          <p style={styles.cardMeta}>Monthly active users</p>
        </div>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Invoices Paid</h2>
          <p style={styles.cardValue}>264</p>
          <p style={styles.cardMeta}>Completed this month</p>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.panel}>
          <h3 style={styles.panelTitle}>Usage Summary</h3>
          <ul style={styles.list}>
            <li>New subscriptions: 48</li>
            <li>Failed payments: 7</li>
            <li>Refund requests: 3</li>
          </ul>
        </div>
        <div style={styles.panel}>
          <h3 style={styles.panelTitle}>Recent Activity</h3>
          <div style={styles.activityItem}>
            <span>Payment received</span>
            <strong>$420</strong>
          </div>
          <div style={styles.activityItem}>
            <span>Invoice sent</span>
            <strong>#INV-2026</strong>
          </div>
          <div style={styles.activityItem}>
            <span>Subscription renewed</span>
            <strong>Pro Plan</strong>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  page: {
    fontFamily: 'Arial, sans-serif',
    padding: '24px',
    backgroundColor: '#f5f7fb',
    minHeight: '80vh',
  },
  header: {
    marginBottom: '24px',
  },
  title: {
    margin: 0,
    fontSize: '32px',
    color: '#222',
  },
  subtitle: {
    margin: '8px 0 0',
    color: '#555',
  },
  cardRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '16px',
    marginBottom: '24px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(15, 23, 42, 0.08)',
    border: '1px solid #e4e7ef',
  },
  cardTitle: {
    margin: 0,
    fontSize: '16px',
    color: '#777',
  },
  cardValue: {
    margin: '16px 0 8px',
    fontSize: '28px',
    color: '#111',
  },
  cardMeta: {
    margin: 0,
    color: '#999',
    fontSize: '14px',
  },
  section: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr',
    gap: '16px',
  },
  panel: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(15, 23, 42, 0.08)',
    border: '1px solid #e4e7ef',
  },
  panelTitle: {
    margin: 0,
    marginBottom: '16px',
    fontSize: '18px',
    color: '#222',
  },
  list: {
    paddingLeft: '20px',
    margin: 0,
    color: '#555',
  },
  activityItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px 0',
    borderBottom: '1px solid #eef2f7',
    color: '#444',
  },
};

export default Dashboard;
