// Application Data
const appData = {
  customers: [
    {
      customerKey: "+919876543210",
      companyName: "Precision Manufacturing Ltd.",
      contactName: "Rajesh Kumar",
      phoneNumber: "+919876543210",
      crmContactId: "CRM_PM_001",
      email: "procurement@precisionmfg.com",
      industry: "Manufacturing",
      location: "Gurgaon, Haryana",
      status: "active",
      lastInteraction: "2025-08-14T10:30:00Z",
      totalInteractions: 15,
      createdAt: "2025-01-15T09:00:00Z"
    },
    {
      customerKey: "+919876543211",
      companyName: "TechVision Systems Pvt Ltd",
      contactName: "Priya Singh",
      phoneNumber: "+919876543211",
      crmContactId: "CRM_TV_002",
      email: "priya.singh@techvision.in",
      industry: "IT Services",
      location: "Pune, Maharashtra",
      status: "active",
      lastInteraction: "2025-08-14T09:45:00Z",
      totalInteractions: 23,
      createdAt: "2025-02-20T10:30:00Z"
    },
    {
      customerKey: "+919876543212",
      companyName: "GlobalTech Solutions",
      contactName: "Amit Sharma",
      phoneNumber: "+919876543212",
      crmContactId: "CRM_GT_003",
      email: "amit@globaltech.co.in",
      industry: "Technology",
      location: "Bangalore, Karnataka",
      status: "active",
      lastInteraction: "2025-08-14T08:20:00Z",
      totalInteractions: 18,
      createdAt: "2025-01-28T14:15:00Z"
    },
    {
      customerKey: "+919876543213",
      companyName: "Industrial Dynamics Corp",
      contactName: "Sunita Rao",
      phoneNumber: "+919876543213",
      crmContactId: "CRM_ID_004",
      email: "sunita.rao@indydynamics.com",
      industry: "Heavy Industry",
      location: "Mumbai, Maharashtra",
      status: "active",
      lastInteraction: "2025-08-13T16:15:00Z",
      totalInteractions: 31,
      createdAt: "2025-01-10T11:00:00Z"
    },
    {
      customerKey: "+919876543214",
      companyName: "EcoSmart Innovations",
      contactName: "Kavita Mehta",
      phoneNumber: "+919876543214",
      crmContactId: "CRM_ES_005",
      email: "kavita@ecosmart.in",
      industry: "Green Technology",
      location: "Chennai, Tamil Nadu",
      status: "active",
      lastInteraction: "2025-08-13T12:30:00Z",
      totalInteractions: 12,
      createdAt: "2025-03-05T09:30:00Z"
    }
  ],
  interactions: [
    {
      id: "int_001",
      customerKey: "+919876543210",
      channel: "WhatsApp",
      direction: "inbound",
      content: "Hi, we need urgent quotation for 2000 reams A4 paper and 50 HP LaserJet cartridges. Can you send pricing with GST breakdown?",
      timestamp: "2025-08-14T10:30:00Z",
      status: "read",
      metadata: {
        messageType: "text",
        templateName: null,
        deliveryStatus: "delivered",
        readStatus: "read",
        phoneNumber: "+919876543210"
      }
    },
    {
      id: "int_002",
      customerKey: "+919876543210",
      channel: "WhatsApp",
      direction: "outbound",
      content: "Hello Mr. Kumar! Thank you for your inquiry. I'll prepare the quotation for 2000 reams A4 paper and 50 HP cartridges with complete GST breakdown and delivery timeline. You'll receive it within 30 minutes.",
      timestamp: "2025-08-14T10:33:00Z",
      status: "delivered",
      metadata: {
        messageType: "text",
        templateName: null,
        deliveryStatus: "delivered",
        readStatus: "pending",
        agentId: "AGENT_001"
      }
    },
    {
      id: "int_003",
      customerKey: "+919876543210",
      channel: "Business Call",
      direction: "inbound",
      content: "Customer called to discuss bulk pricing and delivery schedule for office supplies",
      timestamp: "2025-08-14T11:15:00Z",
      status: "completed",
      metadata: {
        duration: 480,
        disposition: "resolved",
        outcome: "Quote approved, order confirmed",
        recordingUrl: "https://recordings.example.com/call_001.mp3",
        agentId: "AGENT_001"
      }
    },
    {
      id: "int_004",
      customerKey: "+919876543211",
      channel: "Dialer",
      direction: "outbound",
      content: "Dialer Campaign: Q3 Office Furniture Promotion - Connected successfully",
      timestamp: "2025-08-14T09:45:00Z",
      status: "connected",
      metadata: {
        campaignId: "CAMP_001",
        campaignName: "Q3 Office Furniture Promotion",
        outcome: "connected",
        attempts: 1,
        duration: 240,
        disposition: "interested"
      }
    },
    {
      id: "int_005",
      customerKey: "+919876543211",
      channel: "WhatsApp",
      direction: "inbound",
      content: "Thanks for the call. Please send catalog for ergonomic office chairs - we need 180 units for our new office setup.",
      timestamp: "2025-08-14T10:20:00Z",
      status: "read",
      metadata: {
        messageType: "text",
        templateName: null,
        deliveryStatus: "delivered",
        readStatus: "read"
      }
    },
    {
      id: "int_006",
      customerKey: "+919876543212",
      channel: "Mobile Call",
      direction: "outbound",
      content: "Follow-up call for pending quotation approval",
      timestamp: "2025-08-14T08:20:00Z",
      status: "completed",
      metadata: {
        duration: 180,
        disposition: "callback_requested",
        outcome: "Will decide by tomorrow",
        callType: "follow_up"
      }
    },
    {
      id: "int_007",
      customerKey: "+919876543213",
      channel: "WhatsApp",
      direction: "inbound",
      content: "We need industrial safety equipment for 450 employees - helmets, boots, high-vis jackets. All must have IS certification. Budget: ₹25L approved.",
      timestamp: "2025-08-13T16:15:00Z",
      status: "read",
      metadata: {
        messageType: "text",
        templateName: null,
        deliveryStatus: "delivered",
        readStatus: "read"
      }
    },
    {
      id: "int_008",
      customerKey: "+919876543213",
      channel: "WhatsApp",
      direction: "outbound",
      content: "📋 Industrial Safety Catalog | IS Certified Products | Bulk Pricing Available | Free Site Survey",
      timestamp: "2025-08-13T16:20:00Z",
      status: "read",
      metadata: {
        messageType: "catalog",
        templateName: "safety_equipment_catalog",
        deliveryStatus: "delivered",
        readStatus: "read",
        agentId: "AGENT_002"
      }
    },
    {
      id: "int_009",
      customerKey: "+919876543214",
      channel: "Business Call",
      direction: "inbound",
      content: "Discussion about eco-friendly office supplies procurement and sustainable product options",
      timestamp: "2025-08-13T12:30:00Z",
      status: "completed",
      metadata: {
        duration: 720,
        disposition: "quote_requested",
        outcome: "Interested in eco-friendly paper and recycled furniture",
        recordingUrl: "https://recordings.example.com/call_002.mp3",
        agentId: "AGENT_003"
      }
    },
    {
      id: "int_010",
      customerKey: "+919876543214",
      channel: "Dialer",
      direction: "outbound",
      content: "Dialer Campaign: Eco-Friendly Products Launch - No answer, voicemail left",
      timestamp: "2025-08-13T10:00:00Z",
      status: "no_answer",
      metadata: {
        campaignId: "CAMP_002",
        campaignName: "Eco-Friendly Products Launch",
        outcome: "no_answer",
        attempts: 2,
        disposition: "voicemail_left"
      }
    },
    {
      id: "int_011",
      customerKey: "+919876543210",
      channel: "WhatsApp",
      direction: "inbound",
      content: "Order delivery confirmed. Team is very happy with quality. Will place monthly orders now.",
      timestamp: "2025-08-13T14:20:00Z",
      status: "read",
      metadata: {
        messageType: "text",
        deliveryStatus: "delivered",
        readStatus: "read"
      }
    },
    {
      id: "int_012",
      customerKey: "+919876543210",
      channel: "Mobile Call",
      direction: "outbound",
      content: "Follow-up call to confirm delivery and discuss monthly contract",
      timestamp: "2025-08-12T16:30:00Z",
      status: "completed",
      metadata: {
        duration: 360,
        disposition: "satisfied",
        outcome: "Monthly contract agreed",
        callType: "follow_up"
      }
    }
  ],
  call_logs: [
    {
      call_id: "call_001",
      interaction_id: "int_003",
      call_start_time: "2025-08-14T11:15:00Z",
      call_end_time: "2025-08-14T11:23:00Z",
      duration: 480,
      call_outcome: "resolved",
      call_disposition: "order_confirmed",
      recording_url: "https://recordings.example.com/call_001.mp3",
      caller_number: "+919876543210",
      call_quality: "good"
    },
    {
      call_id: "call_002",
      interaction_id: "int_009",
      call_start_time: "2025-08-13T12:30:00Z",
      call_end_time: "2025-08-13T12:42:00Z",
      duration: 720,
      call_outcome: "quote_requested",
      call_disposition: "quote_followup",
      recording_url: "https://recordings.example.com/call_002.mp3",
      caller_number: "+919876543214",
      call_quality: "good"
    },
    {
      call_id: "call_003",
      interaction_id: "int_006",
      call_start_time: "2025-08-14T08:20:00Z",
      call_end_time: "2025-08-14T08:23:00Z",
      duration: 180,
      call_outcome: "callback_requested",
      call_disposition: "callback_scheduled",
      recording_url: null,
      caller_number: "+919876543212",
      call_quality: "fair"
    },
    {
      call_id: "call_004",
      interaction_id: "int_012",
      call_start_time: "2025-08-12T16:30:00Z",
      call_end_time: "2025-08-12T16:36:00Z",
      duration: 360,
      call_outcome: "satisfied",
      call_disposition: "contract_agreed",
      recording_url: "https://recordings.example.com/call_004.mp3",
      caller_number: "+919876543210",
      call_quality: "excellent"
    },
    {
      call_id: "call_005",
      interaction_id: "int_004",
      call_start_time: "2025-08-14T09:45:00Z",
      call_end_time: "2025-08-14T09:49:00Z",
      duration: 240,
      call_outcome: "connected",
      call_disposition: "interested",
      recording_url: "https://recordings.example.com/call_005.mp3",
      caller_number: "+919876543211",
      call_quality: "good"
    }
  ],
  whatsapp_messages: [
    {
      message_id: "wa_001",
      interaction_id: "int_001",
      phone_number: "+919876543210",
      message_type: "text",
      content: "Hi, we need urgent quotation for 2000 reams A4 paper and 50 HP LaserJet cartridges. Can you send pricing with GST breakdown?",
      timestamp: "2025-08-14T10:30:00Z",
      direction: "inbound",
      delivery_status: "delivered",
      read_status: "read"
    },
    {
      message_id: "wa_002",
      interaction_id: "int_002",
      phone_number: "+919876543210",
      message_type: "text",
      content: "Hello Mr. Kumar! Thank you for your inquiry. I'll prepare the quotation for 2000 reams A4 paper and 50 HP cartridges with complete GST breakdown and delivery timeline. You'll receive it within 30 minutes.",
      timestamp: "2025-08-14T10:33:00Z",
      direction: "outbound",
      delivery_status: "delivered",
      read_status: "pending"
    }
  ],
  systemStats: {
    totalCustomers: 247,
    totalInteractions: 4287,
    todayInteractions: 156,
    channelBreakdown: {
      WhatsApp: 2567,
      "Business Call": 1204,
      "Mobile Call": 318,
      Dialer: 198
    },
    responseMetrics: {
      avgResponseTime: "4.8 minutes",
      whatsappDeliveryRate: 98.2,
      callConnectRate: 76.5,
      dialerConnectRate: 34.2
    }
  },
  campaigns: [
    {
      id: "CAMP_001",
      name: "Q3 Office Furniture Promotion",
      type: "dialer",
      status: "active",
      totalContacts: 156,
      contacted: 89,
      connected: 34,
      interested: 12,
      startDate: "2025-08-10T09:00:00Z"
    },
    {
      id: "CAMP_002",
      name: "Eco-Friendly Products Launch",
      type: "dialer",
      status: "active",
      totalContacts: 78,
      contacted: 45,
      connected: 18,
      interested: 7,
      startDate: "2025-08-12T10:00:00Z"
    }
  ]
};

// Application State
let currentView = 'dashboard';
let filteredCustomers = [...appData.customers];
let filteredInteractions = [...appData.interactions];
let currentLeadKey = null;
let timelineDisplayCount = 10;

// Utility Functions
function formatDateTime(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diff = now - date;
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(hours / 24);
  
  if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else {
    return 'Just now';
  }
}

function formatTime(dateString) {
  return new Date(dateString).toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit'
  });
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
}

function formatDuration(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

function maskPhoneNumber(phoneNumber) {
  if (phoneNumber && phoneNumber.length >= 10) {
    const country = phoneNumber.substring(0, 3);
    const firstPart = phoneNumber.substring(3, 6);
    const masked = '****';
    return `${country}${firstPart}${masked}`;
  }
  return phoneNumber;
}

function getChannelClass(channel) {
  switch (channel) {
    case 'WhatsApp':
      return 'whatsapp';
    case 'Business Call':
    case 'Mobile Call':
      return 'call';
    case 'Dialer':
      return 'dialer';
    default:
      return 'call';
  }
}

function getChannelIcon(channel) {
  switch (channel) {
    case 'WhatsApp':
      return '💬';
    case 'Business Call':
    case 'Mobile Call':
      return '📞';
    case 'Dialer':
      return '📢';
    default:
      return '📞';
  }
}

function findCustomerByKey(customerKey) {
  return appData.customers.find(c => c.customerKey === customerKey);
}

// Navigation
function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const view = item.dataset.view;
      switchView(view);
      
      // Update active nav item
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

function switchView(view) {
  // Hide all views
  document.querySelectorAll('.view-content').forEach(content => {
    content.classList.remove('active');
  });
  
  // Show selected view
  const viewElement = document.getElementById(`${view}View`);
  if (viewElement) {
    viewElement.classList.add('active');
    currentView = view;
    
    // Load view-specific content
    switch (view) {
      case 'dashboard':
        loadDashboard();
        break;
      case 'customers':
        loadCustomers();
        break;
      case 'communications':
        loadCommunications();
        break;
      case 'campaigns':
        loadCampaigns();
        break;
    }
  }
}

// Dashboard View
function loadDashboard() {
  loadRecentInteractions();
  loadActiveCustomers();
  updateStats();
}

function loadRecentInteractions() {
  const container = document.getElementById('recentInteractions');
  if (!container) return;
  
  const recentInteractions = appData.interactions
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    .slice(0, 8);

  container.innerHTML = recentInteractions.map(interaction => {
    const customer = findCustomerByKey(interaction.customerKey);
    const channelClass = getChannelClass(interaction.channel);
    const channelIcon = getChannelIcon(interaction.channel);
    
    return `
      <div class="interaction-item ${channelClass}" data-customer-key="${interaction.customerKey}" style="cursor: pointer;">
        <div class="interaction-channel ${channelClass}">
          ${channelIcon} ${interaction.channel}
        </div>
        <div class="interaction-content">
          <div class="interaction-customer">${customer?.companyName || 'Unknown Customer'}</div>
          <div class="interaction-text">${interaction.content.substring(0, 80)}${interaction.content.length > 80 ? '...' : ''}</div>
          <div class="interaction-time">${formatDateTime(interaction.timestamp)}</div>
        </div>
      </div>
    `;
  }).join('');
  
  // Add click event listeners to interaction items
  container.querySelectorAll('.interaction-item').forEach(item => {
    item.addEventListener('click', () => {
      const customerKey = item.dataset.customerKey;
      if (customerKey) {
        openLeadView(customerKey);
      }
    });
  });
}

function loadActiveCustomers() {
  const container = document.getElementById('activeCustomers');
  if (!container) return;
  
  const activeCustomers = appData.customers
    .sort((a, b) => new Date(b.lastInteraction) - new Date(a.lastInteraction))
    .slice(0, 6);

  container.innerHTML = activeCustomers.map(customer => `
    <div class="customer-item" data-customer-key="${customer.customerKey}" style="cursor: pointer; tabindex: 0;">
      <div class="customer-info">
        <div class="customer-company">${customer.companyName}</div>
        <div class="customer-contact">${customer.contactName} • ${customer.phoneNumber}</div>
      </div>
      <div class="customer-stats">
        <span>${customer.totalInteractions} interactions</span>
        <span>•</span>
        <span>${formatDateTime(customer.lastInteraction)}</span>
      </div>
    </div>
  `).join('');
  
  // Add click event listeners to customer items
  container.querySelectorAll('.customer-item').forEach(item => {
    item.addEventListener('click', () => {
      const customerKey = item.dataset.customerKey;
      if (customerKey) {
        openLeadView(customerKey);
      }
    });
    
    // Add keyboard support
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const customerKey = item.dataset.customerKey;
        if (customerKey) {
          openLeadView(customerKey);
        }
      }
    });
  });
}

function updateStats() {
  const todayElement = document.getElementById('todayInteractions');
  const totalElement = document.getElementById('totalCustomers');
  
  if (todayElement) todayElement.textContent = appData.systemStats.todayInteractions;
  if (totalElement) totalElement.textContent = appData.systemStats.totalCustomers;
}

// Customers View
function loadCustomers() {
  renderCustomers();
  initCustomerFilters();
}

function renderCustomers() {
  const container = document.getElementById('customersGrid');
  if (!container) return;
  
  container.innerHTML = filteredCustomers.map(customer => `
    <div class="customer-card" data-customer-key="${customer.customerKey}" style="cursor: pointer; tabindex: 0;">
      <div class="customer-header">
        <div>
          <div class="customer-name">${customer.contactName}</div>
          <div class="customer-company-name">${customer.companyName}</div>
        </div>
      </div>
      <div class="customer-details">
        <div>📧 ${customer.email}</div>
        <div>📍 ${customer.location}</div>
        <div>🏭 ${customer.industry}</div>
        <div>📞 ${customer.phoneNumber}</div>
      </div>
      <div class="customer-meta">
        <span class="interaction-count">${customer.totalInteractions} interactions</span>
        <span class="last-interaction">${formatDateTime(customer.lastInteraction)}</span>
      </div>
    </div>
  `).join('');
  
  // Add click event listeners to customer cards
  container.querySelectorAll('.customer-card').forEach(card => {
    card.addEventListener('click', () => {
      const customerKey = card.dataset.customerKey;
      if (customerKey) {
        openLeadView(customerKey);
      }
    });
    
    // Add keyboard support
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const customerKey = card.dataset.customerKey;
        if (customerKey) {
          openLeadView(customerKey);
        }
      }
    });
  });
}

function initCustomerFilters() {
  const searchInput = document.getElementById('customerSearch');
  const industryFilter = document.getElementById('industryFilter');

  if (searchInput) searchInput.addEventListener('input', filterCustomers);
  if (industryFilter) industryFilter.addEventListener('change', filterCustomers);
}

function filterCustomers() {
  const searchInput = document.getElementById('customerSearch');
  const industryFilter = document.getElementById('industryFilter');
  
  const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
  const industryValue = industryFilter ? industryFilter.value : '';

  filteredCustomers = appData.customers.filter(customer => {
    const matchesSearch = !searchTerm || 
      customer.companyName.toLowerCase().includes(searchTerm) ||
      customer.contactName.toLowerCase().includes(searchTerm) ||
      customer.phoneNumber.includes(searchTerm) ||
      customer.email.toLowerCase().includes(searchTerm);
    
    const matchesIndustry = !industryValue || customer.industry === industryValue;
    
    return matchesSearch && matchesIndustry;
  });

  renderCustomers();
}

// Communications View
function loadCommunications() {
  renderCommunications();
  initCommunicationFilters();
}

function renderCommunications() {
  const container = document.getElementById('communicationTimeline');
  if (!container) return;
  
  const sortedInteractions = filteredInteractions
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  container.innerHTML = sortedInteractions.map(interaction => {
    const customer = findCustomerByKey(interaction.customerKey);
    const channelClass = getChannelClass(interaction.channel);
    const channelIcon = getChannelIcon(interaction.channel);
    
    let metadata = '';
    if (interaction.metadata) {
      if (interaction.metadata.duration) {
        const minutes = Math.floor(interaction.metadata.duration / 60);
        const seconds = interaction.metadata.duration % 60;
        metadata += `<div class="metadata-item">⏱️ ${minutes}:${seconds.toString().padStart(2, '0')}</div>`;
      }
      if (interaction.metadata.deliveryStatus) {
        metadata += `<div class="metadata-item">📊 ${interaction.metadata.deliveryStatus}</div>`;
      }
      if (interaction.metadata.disposition) {
        metadata += `<div class="metadata-item">📋 ${interaction.metadata.disposition}</div>`;
      }
      if (interaction.metadata.campaignName) {
        metadata += `<div class="metadata-item">🎯 ${interaction.metadata.campaignName}</div>`;
      }
    }
    
    return `
      <div class="timeline-item">
        <div class="timeline-indicator ${channelClass}"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <div class="timeline-channel ${channelClass}">${channelIcon} ${interaction.channel}</div>
            <div class="timeline-direction ${interaction.direction}">${interaction.direction}</div>
            <div class="timeline-time">${formatTime(interaction.timestamp)} • ${formatDate(interaction.timestamp)}</div>
          </div>
          <div class="timeline-customer">${customer?.companyName || 'Unknown Customer'} • ${customer?.contactName || ''}</div>
          <div class="timeline-message">${interaction.content}</div>
          ${metadata ? `<div class="timeline-metadata">${metadata}</div>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

function initCommunicationFilters() {
  const channelFilter = document.getElementById('channelFilter');
  const directionFilter = document.getElementById('directionFilter');
  const dateFilter = document.getElementById('dateFilter');

  if (channelFilter) channelFilter.addEventListener('change', filterCommunications);
  if (directionFilter) directionFilter.addEventListener('change', filterCommunications);
  if (dateFilter) dateFilter.addEventListener('change', filterCommunications);
}

function filterCommunications() {
  const channelFilter = document.getElementById('channelFilter');
  const directionFilter = document.getElementById('directionFilter');
  const dateFilter = document.getElementById('dateFilter');
  
  const channelValue = channelFilter ? channelFilter.value : '';
  const directionValue = directionFilter ? directionFilter.value : '';
  const dateValue = dateFilter ? dateFilter.value : '';

  filteredInteractions = appData.interactions.filter(interaction => {
    const matchesChannel = !channelValue || interaction.channel === channelValue;
    const matchesDirection = !directionValue || interaction.direction === directionValue;
    
    let matchesDate = true;
    if (dateValue) {
      const interactionDate = new Date(interaction.timestamp).toISOString().split('T')[0];
      matchesDate = interactionDate === dateValue;
    }
    
    return matchesChannel && matchesDirection && matchesDate;
  });

  renderCommunications();
}

// Campaigns View
function loadCampaigns() {
  const container = document.getElementById('campaignsGrid');
  if (!container) return;
  
  container.innerHTML = appData.campaigns.map(campaign => {
    const connectRate = ((campaign.connected / campaign.contacted) * 100).toFixed(1);
    const interestRate = ((campaign.interested / campaign.connected) * 100).toFixed(1);
    
    return `
      <div class="campaign-card">
        <div class="campaign-header">
          <div class="campaign-name">${campaign.name}</div>
          <span class="campaign-status">🟢 ${campaign.status}</span>
        </div>
        <div class="campaign-metrics">
          <div class="metric-item">
            <span class="metric-label">Total Contacts</span>
            <span class="metric-value">${campaign.totalContacts}</span>
          </div>
          <div class="metric-item">
            <span class="metric-label">Contacted</span>
            <span class="metric-value">${campaign.contacted}</span>
          </div>
          <div class="metric-item">
            <span class="metric-label">Connected</span>
            <span class="metric-value">${campaign.connected}</span>
          </div>
          <div class="metric-item">
            <span class="metric-label">Interested</span>
            <span class="metric-value">${campaign.interested}</span>
          </div>
          <div class="metric-item">
            <span class="metric-label">Connect Rate</span>
            <span class="metric-value">${connectRate}%</span>
          </div>
          <div class="metric-item">
            <span class="metric-label">Interest Rate</span>
            <span class="metric-value">${interestRate}%</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Lead View
function openLeadView(customerKey) {
  const customer = findCustomerByKey(customerKey);
  if (!customer) return;

  currentLeadKey = customerKey;
  timelineDisplayCount = 10;

  // Update lead header
  const leadCompanyName = document.getElementById('leadCompanyName');
  const leadContactName = document.getElementById('leadContactName');
  const leadPhoneMasked = document.getElementById('leadPhoneMasked');
  const leadIndustry = document.getElementById('leadIndustry');
  
  if (leadCompanyName) leadCompanyName.textContent = customer.companyName;
  if (leadContactName) leadContactName.textContent = customer.contactName;
  if (leadPhoneMasked) leadPhoneMasked.textContent = maskPhoneNumber(customer.phoneNumber);
  if (leadIndustry) leadIndustry.textContent = customer.industry;

  // Update stats
  const customerInteractions = appData.interactions.filter(i => i.customerKey === customerKey);
  const totalInteractionsCount = document.getElementById('totalInteractionsCount');
  const lastInteractionTime = document.getElementById('lastInteractionTime');
  
  if (totalInteractionsCount) totalInteractionsCount.textContent = customerInteractions.length;
  if (lastInteractionTime) lastInteractionTime.textContent = formatDateTime(customer.lastInteraction);

  // Update channel mix bar
  updateChannelMixBar(customerInteractions);

  // Load timeline and call summary
  loadLeadTimeline();
  loadCallSummary();

  // Show modal
  const modal = document.getElementById('leadViewModal');
  if (modal) {
    modal.classList.remove('hidden');
  }
}

function updateChannelMixBar(interactions) {
  const channelCounts = {};
  const totalInteractions = interactions.length;

  interactions.forEach(interaction => {
    const channel = interaction.channel;
    channelCounts[channel] = (channelCounts[channel] || 0) + 1;
  });

  const channelMixBar = document.getElementById('channelMixBar');
  if (!channelMixBar) return;
  
  let html = '';

  if (channelCounts['WhatsApp']) {
    const percentage = (channelCounts['WhatsApp'] / totalInteractions) * 100;
    html += `<div class="channel-segment whatsapp" style="width: ${percentage}%" title="WhatsApp: ${channelCounts['WhatsApp']}"></div>`;
  }

  if (channelCounts['Business Call'] || channelCounts['Mobile Call']) {
    const callCount = (channelCounts['Business Call'] || 0) + (channelCounts['Mobile Call'] || 0);
    const percentage = (callCount / totalInteractions) * 100;
    html += `<div class="channel-segment calls" style="width: ${percentage}%" title="Calls: ${callCount}"></div>`;
  }

  if (channelCounts['Dialer']) {
    const percentage = (channelCounts['Dialer'] / totalInteractions) * 100;
    html += `<div class="channel-segment dialer" style="width: ${percentage}%" title="Dialer: ${channelCounts['Dialer']}"></div>`;
  }

  channelMixBar.innerHTML = html;
}

function loadLeadTimeline() {
  if (!currentLeadKey) return;
  
  const customerInteractions = appData.interactions
    .filter(i => i.customerKey === currentLeadKey)
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  const displayedInteractions = customerInteractions.slice(0, timelineDisplayCount);
  const timelineContainer = document.getElementById('leadTimeline');
  
  if (!timelineContainer) return;

  timelineContainer.innerHTML = displayedInteractions.map(interaction => {
    const channelClass = getChannelClass(interaction.channel);
    const channelIcon = getChannelIcon(interaction.channel);

    let metadata = '';
    if (interaction.metadata) {
      if (interaction.metadata.duration) {
        metadata += `<div class="metadata-item">⏱️ ${formatDuration(interaction.metadata.duration)}</div>`;
      }
      if (interaction.metadata.deliveryStatus) {
        metadata += `<div class="metadata-item">📊 ${interaction.metadata.deliveryStatus}</div>`;
      }
      if (interaction.metadata.disposition) {
        metadata += `<div class="metadata-item">📋 ${interaction.metadata.disposition}</div>`;
      }
    }

    return `
      <div class="lead-timeline-item">
        <div class="timeline-indicator ${channelClass}"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <div class="timeline-channel ${channelClass}">${channelIcon} ${interaction.channel}</div>
            <div class="timeline-direction ${interaction.direction}">${interaction.direction}</div>
            <div class="timeline-time">${formatTime(interaction.timestamp)} • ${formatDate(interaction.timestamp)}</div>
          </div>
          <div class="timeline-message">${interaction.content}</div>
          ${metadata ? `<div class="timeline-metadata">${metadata}</div>` : ''}
        </div>
      </div>
    `;
  }).join('');

  // Show/hide load more button
  const loadMoreBtn = document.getElementById('loadMoreTimeline');
  if (loadMoreBtn) {
    if (customerInteractions.length > timelineDisplayCount) {
      loadMoreBtn.style.display = 'block';
    } else {
      loadMoreBtn.style.display = 'none';
    }
  }
}

function loadMoreTimeline() {
  timelineDisplayCount += 10;
  loadLeadTimeline();
}

function loadCallSummary() {
  if (!currentLeadKey) return;

  const timeFilterElement = document.getElementById('callTimeFilter');
  const timeFilter = timeFilterElement ? timeFilterElement.value : 'all';
  let filteredCalls = getCallsForCustomer(currentLeadKey, timeFilter);

  // Update metrics
  const totalCalls = filteredCalls.length;
  const totalDuration = filteredCalls.reduce((sum, call) => sum + call.duration, 0);
  const avgDuration = totalCalls > 0 ? Math.round(totalDuration / totalCalls) : 0;
  const connectedCalls = filteredCalls.filter(call => call.call_outcome !== 'no_answer' && call.call_outcome !== 'busy').length;
  const connectRate = totalCalls > 0 ? Math.round((connectedCalls / totalCalls) * 100) : 0;

  const totalCallsElement = document.getElementById('totalCalls');
  const avgDurationElement = document.getElementById('avgDuration');
  const connectRateElement = document.getElementById('connectRate');
  
  if (totalCallsElement) totalCallsElement.textContent = totalCalls;
  if (avgDurationElement) avgDurationElement.textContent = formatDuration(avgDuration);
  if (connectRateElement) connectRateElement.textContent = `${connectRate}%`;

  // Update call table
  const callTableBody = document.getElementById('callTableBody');
  if (!callTableBody) return;
  
  callTableBody.innerHTML = filteredCalls.map(call => {
    const outcomeClass = call.call_outcome.replace(/_/g, '_').toLowerCase();
    const recordingIcon = call.recording_url ? 
      `<span class="recording-link" onclick="playRecording('${call.recording_url}')" title="Play Recording">🎵</span>` : 
      '-';

    return `
      <tr>
        <td>${formatTime(call.call_start_time)}</td>
        <td>${formatDuration(call.duration)}</td>
        <td><span class="call-outcome ${outcomeClass}">${call.call_outcome.replace(/_/g, ' ')}</span></td>
        <td>${recordingIcon}</td>
      </tr>
    `;
  }).join('');
}

function getCallsForCustomer(customerKey, timeFilter = 'all') {
  const customerInteractions = appData.interactions
    .filter(i => i.customerKey === customerKey && (i.channel === 'Business Call' || i.channel === 'Mobile Call'));

  const interactionIds = customerInteractions.map(i => i.id);
  let calls = appData.call_logs.filter(call => interactionIds.includes(call.interaction_id));

  // Apply time filter
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  switch (timeFilter) {
    case 'today':
      calls = calls.filter(call => new Date(call.call_start_time) >= today);
      break;
    case '7days':
      const week = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
      calls = calls.filter(call => new Date(call.call_start_time) >= week);
      break;
    case '30days':
      const month = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
      calls = calls.filter(call => new Date(call.call_start_time) >= month);
      break;
  }

  return calls.sort((a, b) => new Date(b.call_start_time) - new Date(a.call_start_time));
}

function playRecording(url) {
  // Simulate playing recording
  alert(`Playing recording: ${url}`);
}

function closeLead() {
  const modal = document.getElementById('leadViewModal');
  if (modal) {
    modal.classList.add('hidden');
  }
  currentLeadKey = null;
}

// Quick Actions
function openCallbackModal() {
  const modal = document.getElementById('callbackModal');
  if (modal) {
    modal.classList.remove('hidden');
  }
  
  // Set minimum datetime to current time
  const now = new Date();
  now.setMinutes(now.getMinutes() + 15); // Add 15 minutes buffer
  const callbackDateTime = document.getElementById('callbackDateTime');
  if (callbackDateTime) {
    callbackDateTime.min = now.toISOString().slice(0, 16);
  }
}

function closeCallbackModal() {
  const modal = document.getElementById('callbackModal');
  const form = document.getElementById('callbackForm');
  
  if (modal) modal.classList.add('hidden');
  if (form) form.reset();
}

function scheduleCallback(event) {
  event.preventDefault();
  
  const datetimeElement = document.getElementById('callbackDateTime');
  const notesElement = document.getElementById('callbackNotes');
  
  const datetime = datetimeElement ? datetimeElement.value : '';
  const notes = notesElement ? notesElement.value : '';
  
  if (!datetime) {
    alert('Please select a callback date and time.');
    return;
  }
  
  // Simulate scheduling callback
  alert(`Callback scheduled for ${new Date(datetime).toLocaleString('en-IN')}${notes ? '\nNotes: ' + notes : ''}`);
  
  closeCallbackModal();
}

function openWhatsAppModal() {
  const modal = document.getElementById('whatsappModal');
  if (modal) {
    modal.classList.remove('hidden');
  }
}

function closeWhatsAppModal() {
  const modal = document.getElementById('whatsappModal');
  const form = document.getElementById('whatsappForm');
  
  if (modal) modal.classList.add('hidden');
  if (form) form.reset();
}

function updateMessageTemplate() {
  const templateElement = document.getElementById('messageTemplate');
  const messageContentElement = document.getElementById('messageContent');
  
  if (!templateElement || !messageContentElement) return;
  
  const template = templateElement.value;
  
  const templates = {
    'followup': 'Hi! Following up on our previous discussion. Do you have any questions or need additional information?',
    'quote': 'Thank you for your interest! Could you please share your specific requirements so we can prepare a detailed quotation for you?',
    'catalog': 'Please find our latest product catalog attached. Let me know if you need more information about any specific products.',
    'custom': ''
  };
  
  messageContentElement.value = templates[template] || '';
}

function sendWhatsAppMessage(event) {
  event.preventDefault();
  
  const templateElement = document.getElementById('messageTemplate');
  const contentElement = document.getElementById('messageContent');
  
  const template = templateElement ? templateElement.value : '';
  const content = contentElement ? contentElement.value : '';
  
  if (!template || !content.trim()) {
    alert('Please select a template and enter a message.');
    return;
  }
  
  // Simulate sending message
  alert(`WhatsApp message sent:\n"${content}"`);
  
  closeWhatsAppModal();
}

// Refresh Data
function refreshData() {
  const refreshBtn = document.getElementById('refreshData');
  if (!refreshBtn) return;
  
  refreshBtn.textContent = '⟳ Refreshing...';
  refreshBtn.disabled = true;

  // Simulate data refresh
  setTimeout(() => {
    loadDashboard();
    refreshBtn.textContent = '🔄 Refresh';
    refreshBtn.disabled = false;
    
    // Update last sync time
    const lastSync = document.querySelector('.last-sync');
    if (lastSync) {
      lastSync.textContent = 'Last sync: Just now';
    }
  }, 1500);
}

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  // Initialize navigation
  initNavigation();
  
  // Load initial view
  loadDashboard();
  
  // Initialize event listeners
  const refreshBtn = document.getElementById('refreshData');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', refreshData);
  }
  
  // Lead View Modal
  const closeLead = document.getElementById('closeLead');
  if (closeLead) {
    closeLead.addEventListener('click', () => {
      const modal = document.getElementById('leadViewModal');
      if (modal) {
        modal.classList.add('hidden');
      }
      currentLeadKey = null;
    });
  }
  
  const loadMoreTimeline = document.getElementById('loadMoreTimeline');
  if (loadMoreTimeline) {
    loadMoreTimeline.addEventListener('click', () => {
      timelineDisplayCount += 10;
      loadLeadTimeline();
    });
  }
  
  const callTimeFilter = document.getElementById('callTimeFilter');
  if (callTimeFilter) {
    callTimeFilter.addEventListener('change', loadCallSummary);
  }
  
  // Quick Actions
  const scheduleCallbackBtn = document.getElementById('scheduleCallback');
  if (scheduleCallbackBtn) {
    scheduleCallbackBtn.addEventListener('click', openCallbackModal);
  }
  
  const sendWhatsAppBtn = document.getElementById('sendWhatsApp');
  if (sendWhatsAppBtn) {
    sendWhatsAppBtn.addEventListener('click', openWhatsAppModal);
  }
  
  // Callback Modal
  const closeCallback = document.getElementById('closeCallback');
  if (closeCallback) {
    closeCallback.addEventListener('click', closeCallbackModal);
  }
  
  const cancelCallback = document.getElementById('cancelCallback');
  if (cancelCallback) {
    cancelCallback.addEventListener('click', closeCallbackModal);
  }
  
  const callbackForm = document.getElementById('callbackForm');
  if (callbackForm) {
    callbackForm.addEventListener('submit', scheduleCallback);
  }
  
  // WhatsApp Modal
  const closeWhatsApp = document.getElementById('closeWhatsApp');
  if (closeWhatsApp) {
    closeWhatsApp.addEventListener('click', closeWhatsAppModal);
  }
  
  const cancelWhatsApp = document.getElementById('cancelWhatsApp');
  if (cancelWhatsApp) {
    cancelWhatsApp.addEventListener('click', closeWhatsAppModal);
  }
  
  const whatsappForm = document.getElementById('whatsappForm');
  if (whatsappForm) {
    whatsappForm.addEventListener('submit', sendWhatsAppMessage);
  }
  
  const messageTemplate = document.getElementById('messageTemplate');
  if (messageTemplate) {
    messageTemplate.addEventListener('change', updateMessageTemplate);
  }
  
  // Close modals when clicking outside
  const leadViewModal = document.getElementById('leadViewModal');
  if (leadViewModal) {
    leadViewModal.addEventListener('click', function(e) {
      if (e.target === this) {
        this.classList.add('hidden');
        currentLeadKey = null;
      }
    });
  }
  
  const callbackModal = document.getElementById('callbackModal');
  if (callbackModal) {
    callbackModal.addEventListener('click', function(e) {
      if (e.target === this) {
        closeCallbackModal();
      }
    });
  }
  
  const whatsappModal = document.getElementById('whatsappModal');
  if (whatsappModal) {
    whatsappModal.addEventListener('click', function(e) {
      if (e.target === this) {
        closeWhatsAppModal();
      }
    });
  }

  console.log('IndustriConnect CRM initialized successfully');
});