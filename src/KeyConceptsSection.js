import React from 'react';
import ConceptCard from './ConceptCard';

const concepts = [
  {
    icon: '🔌',
    title: 'WebSockets & Real-Time Communication',
    description: 'WebSockets enable persistent, two-way, real-time communication between client and server. Unlike traditional HTTP, which is request-response based and stateless, WebSockets keep a single connection open, allowing the server to push updates to the client instantly. This is essential for collaborative applications like chats, multiplayer games, and live editors, where all users need to see changes as they happen. WebSockets reduce latency, minimize network overhead, and enable features like presence indicators, typing notifications, and live data feeds.',
    extra: 'Fun fact: WebSockets keep a single connection open, unlike HTTP which opens a new connection for every request! Example: socket.send("Hello server!")',
    cricketAnalogy: 'Like two batsmen at the crease in a test match, constantly communicating and signaling to each other between balls—WebSockets keep the line open for ongoing, two-way communication.'
  },
  {
    icon: '🗄️',
    title: 'Server State Management',
    description: 'Server state management refers to how the server keeps track of all the shared data and ensures it is accurate and up-to-date for every connected client. In real-time collaborative systems, the server acts as the single source of truth, resolving conflicts and broadcasting updates to all users. This involves handling concurrent changes, merging updates, and sometimes rolling back or replaying actions to maintain consistency. Efficient state management is crucial for performance and reliability, especially as the number of users grows.',
    extra: 'Servers often use in-memory data stores (like Redis) for fast state management in real-time apps.',
    cricketAnalogy: 'The scorekeeper in a test match keeps the official record of runs, wickets, and overs—just like the server maintains the authoritative state for all players.'
  },
  {
    icon: '🔒',
    title: 'Authentication in Real-Time Apps',
    description: 'Authentication is the process of verifying the identity of users before allowing them to access or interact with the system. In real-time apps, authentication must be secure and efficient, as users may join, leave, or reconnect frequently. Techniques like token-based authentication (e.g., JWT) are used to ensure that only legitimate users can participate. The server must also handle session management, token expiration, and sometimes multi-factor authentication to protect sensitive data and prevent unauthorized access.',
    extra: 'JWT (JSON Web Tokens) are commonly used for secure authentication in real-time systems.',
    cricketAnalogy: 'Before a player can take the field in a test match, the umpire checks their credentials (uniform, equipment, etc.)—just as servers authenticate users before granting access.'
  },
  {
    icon: '🌐',
    title: 'Scaling for Many Users',
    description: 'Scaling is about ensuring the server can handle increasing numbers of users and connections without performance degradation. This involves distributing the load across multiple servers (horizontal scaling), using load balancers, and optimizing resource usage. Real-time systems must also manage connection limits, data synchronization across servers, and failover strategies to maintain availability. Proper scaling ensures that thousands or even millions of users can collaborate smoothly, even during peak times.',
    extra: 'Load balancers distribute traffic across multiple servers to prevent overload and downtime.',
    cricketAnalogy: 'A test match captain rotates bowlers and fielders to keep everyone fresh and effective, ensuring the team can handle the long game—just like load balancing distributes work among servers.'
  },
  {
    icon: '⚖️',
    title: 'Data Consistency & Conflict Resolution',
    description: 'Data consistency ensures that all users see the same information, even when multiple people make changes at the same time. Conflict resolution algorithms, such as Operational Transformation (OT) and Conflict-free Replicated Data Types (CRDTs), are used to merge simultaneous edits and prevent data loss or corruption. The server coordinates these changes, applies them in a consistent order, and broadcasts the resolved state to all clients. This is critical for collaborative editing, shared documents, and any system where concurrent updates are common.',
    extra: 'Operational Transformation (OT) and CRDTs are popular algorithms for real-time conflict resolution.',
    cricketAnalogy: 'When two fielders go for the same catch, the captain decides who takes it to avoid a collision—just as servers resolve data conflicts to keep everyone in sync.'
  },
  {
    icon: '💾',
    title: 'Persistence & Databases',
    description: 'Servers persist important data to databases so that information is not lost if the server restarts or crashes. This ensures reliability and long-term storage of match data, user actions, and more.',
    extra: 'Popular databases for real-time apps include MongoDB, PostgreSQL, and Redis (for in-memory caching).',
    cricketAnalogy: 'Like the official scorebook in a test match, which records every run, wicket, and over for posterity—even if the scoreboard malfunctions, the match record is safe.'
  },
  {
    icon: '🛡️',
    title: 'Authorization & Permissions',
    description: 'Beyond authentication, servers enforce permissions to control what actions each user can perform (e.g., only the umpire can signal a wicket, only the captain can declare an innings).',
    extra: 'Role-based access control (RBAC) is a common pattern for managing permissions.',
    cricketAnalogy: 'In test cricket, only certain players can bowl, only the captain can make field changes—just as servers enforce who can do what in the system.'
  },
  {
    icon: '🔁',
    title: 'Fault Tolerance & Recovery',
    description: 'Servers are designed to handle failures gracefully, using backups, replication, and failover strategies to recover quickly and minimize downtime.',
    extra: 'Techniques like database replication and server clustering help ensure high availability.',
    cricketAnalogy: 'If a ball is lost or weather interrupts play, the match resumes from the last recorded score—just as servers recover from failures using backups and logs.'
  },
  {
    icon: '📋',
    title: 'Logging & Monitoring',
    description: 'Servers log important events and monitor system health to detect issues, analyze performance, and ensure smooth operation.',
    extra: 'Tools like ELK Stack, Prometheus, and Grafana are used for logging and monitoring.',
    cricketAnalogy: 'Umpires and scorers keep detailed records and statistics throughout a test match, allowing teams to review performance and spot issues.'
  },
  {
    icon: '🔗',
    title: 'API Design & Contracts',
    description: 'Servers expose APIs (Application Programming Interfaces) that define how clients interact with the system. Good API design ensures clear, reliable, and secure communication.',
    extra: 'REST and GraphQL are popular API paradigms for real-time and collaborative apps.',
    cricketAnalogy: 'The rules of test cricket define how players, umpires, and scorers interact—just as APIs define how clients and servers communicate.'
  },
];

function KeyConceptsSection() {
  return (
    <section id="concepts" style={{ padding: '2rem', background: '#eaf6fb' }}>
      <h2 style={{ textAlign: 'center' }}>Key Server-Side Concepts in Real-Time Collaboration</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '2rem' }}>
        {concepts.map((concept, idx) => (
          <ConceptCard key={idx} {...concept} cricketAnalogy={concept.cricketAnalogy} />
        ))}
      </div>
    </section>
  );
}

export default KeyConceptsSection; 