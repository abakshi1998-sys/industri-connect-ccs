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
    },
    {
      customerKey: "+919876543215",
      companyName: "Metro Construction Ltd.",
      contactName: "Vijay Gupta",
      phoneNumber: "+919876543215",
      crmContactId: "CRM_MC_006",
      email: "vijay@metroconstruction.in",
      industry: "Construction",
      location: "Delhi, NCR",
      status: "active",
      lastInteraction: "2025-08-12T14:20:00Z",
      totalInteractions: 8,
      createdAt: "2025-04-12T08:00:00Z"
    },
    {
      customerKey: "+919876543216",
      companyName: "Apex Pharmaceuticals",
      contactName: "Dr. Sneha Joshi",
      phoneNumber: "+919876543216",
      crmContactId: "CRM_AP_007",
      email: "sneha.joshi@apexpharma.com",
      industry: "Pharmaceuticals",
      location: "Hyderabad, Telangana",
      status: "active",
      lastInteraction: "2025-08-11T11:45:00Z",
      totalInteractions: 19,
      createdAt: "2025-02-28T15:30:00Z"
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

// Phone Number Masking Utility Function
function maskPhoneNumber(phoneNumber) {
  if (!phoneNumber || phoneNumber.length < 10) {
    return phoneNumber;
  }
  
  // Handle Indian phone numbers with +91 country code
  if (phoneNumber.startsWith('+91') && phoneNumber.length === 13) {
    // Format: +91987654**** (show +91 + first 4 digits + ****)
    const countryCode = phoneNumber.substring(0, 3); // +91
    const firstFourDigits = phoneNumber.substring(3, 7); // first 4 digits after country code
    return `${countryCode}${firstFourDigits}****`;
  }
  
  // For other formats, mask last 4 digits
  if (phoneNumber.length >= 8) {
    const visiblePart = phoneNumber.substring(0, phoneNumber.length - 4);
    return `${visiblePart}****`;
  }
  
  return phoneNumber;
}

function findCustomerByKey(customerKey) {
  return appData.customers.find(c => c.customerKey === customerKey);
}

// Navigation
function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const view = item.dataset.view;
      switchView(view);
      
      // Update active nav item
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

function switchView(view) {
  console.log('Switching to view:', view);
  
  // Hide all views
  document.querySelectorAll('.view-content').forEach(content => {
    content.classList.remove('active');
  });
  
  // Show selected view
  const targetView = document.getElementById(`${view}View`);
  if (targetView) {
    targetView.classList.add('active');
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
  } else {
    console.error('View not found:', `${view}View`);
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
  const recentInteractions = appData.interactions
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    .slice(0, 8);

  container.innerHTML = recentInteractions.map(interaction => {
    const customer = findCustomerByKey(interaction.customerKey);
    const channelClass = getChannelClass(interaction.channel);
    const channelIcon = getChannelIcon(interaction.channel);
    
    return `
      <div class="interaction-item ${channelClass}">
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
}

function loadActiveCustomers() {
  const container = document.getElementById('activeCustomers');
  const activeCustomers = appData.customers
    .sort((a, b) => new Date(b.lastInteraction) - new Date(a.lastInteraction))
    .slice(0, 6);

  container.innerHTML = activeCustomers.map(customer => `
    <div class="customer-item" data-customer-key="${customer.customerKey}" style="cursor: pointer;">
      <div class="customer-info">
        <div class="customer-company">${customer.companyName}</div>
        <div class="customer-contact">${customer.contactName} • ${maskPhoneNumber(customer.phoneNumber)}</div>
      </div>
      <div class="customer-stats">
        <span>${customer.totalInteractions} interactions</span>
        <span>•</span>
        <span>${formatDateTime(customer.lastInteraction)}</span>
      </div>
    </div>
  `).join('');

  // Add click listeners for customer items
  container.querySelectorAll('.customer-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const customerKey = item.dataset.customerKey;
      openCustomerModal(customerKey);
    });
  });
}

function updateStats() {
  document.getElementById('todayInteractions').textContent = appData.systemStats.todayInteractions;
  document.getElementById('totalCustomers').textContent = appData.systemStats.totalCustomers;
}

// Customers View
function loadCustomers() {
  renderCustomers();
  initCustomerFilters();
}

function renderCustomers() {
  const container = document.getElementById('customersGrid');
  
  container.innerHTML = filteredCustomers.map(customer => `
    <div class="customer-card" data-customer-key="${customer.customerKey}" style="cursor: pointer;">
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
        <div>📞 ${maskPhoneNumber(customer.phoneNumber)}</div>
      </div>
      <div class="customer-meta">
        <span class="interaction-count">${customer.totalInteractions} interactions</span>
        <span class="last-interaction">${formatDateTime(customer.lastInteraction)}</span>
      </div>
    </div>
  `).join('');

  // Add click listeners for customer cards
  container.querySelectorAll('.customer-card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const customerKey = card.dataset.customerKey;
      openCustomerModal(customerKey);
    });
  });
}

function initCustomerFilters() {
  const searchInput = document.getElementById('customerSearch');
  const industryFilter = document.getElementById('industryFilter');

  if (searchInput) {
    searchInput.addEventListener('input', filterCustomers);
  }
  if (industryFilter) {
    industryFilter.addEventListener('change', filterCustomers);
  }
}

function filterCustomers() {
  const searchInput = document.getElementById('customerSearch');
  const industryFilter = document.getElementById('industryFilter');
  
  const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
  const industry = industryFilter ? industryFilter.value : '';

  filteredCustomers = appData.customers.filter(customer => {
    const matchesSearch = !searchTerm || 
      customer.companyName.toLowerCase().includes(searchTerm) ||
      customer.contactName.toLowerCase().includes(searchTerm) ||
      customer.phoneNumber.includes(searchTerm) ||
      customer.email.toLowerCase().includes(searchTerm);
    
    const matchesIndustry = !industry || customer.industry === industry;
    
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
      if (interaction.metadata.phoneNumber) {
        metadata += `<div class="metadata-item">📞 ${maskPhoneNumber(interaction.metadata.phoneNumber)}</div>`;
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

  if (channelFilter) {
    channelFilter.addEventListener('change', filterCommunications);
  }
  if (directionFilter) {
    directionFilter.addEventListener('change', filterCommunications);
  }
  if (dateFilter) {
    dateFilter.addEventListener('change', filterCommunications);
  }
}

function filterCommunications() {
  const channelFilter = document.getElementById('channelFilter');
  const directionFilter = document.getElementById('directionFilter');
  const dateFilter = document.getElementById('dateFilter');
  
  const channel = channelFilter ? channelFilter.value : '';
  const direction = directionFilter ? directionFilter.value : '';
  const date = dateFilter ? dateFilter.value : '';

  filteredInteractions = appData.interactions.filter(interaction => {
    const matchesChannel = !channel || interaction.channel === channel;
    const matchesDirection = !direction || interaction.direction === direction;
    
    let matchesDate = true;
    if (date) {
      const interactionDate = new Date(interaction.timestamp).toISOString().split('T')[0];
      matchesDate = interactionDate === date;
    }
    
    return matchesChannel && matchesDirection && matchesDate;
  });

  renderCommunications();
}

// Campaigns View
function loadCampaigns() {
  const container = document.getElementById('campaignsGrid');
  
  container.innerHTML = appData.campaigns.map(campaign => {
    const connectRate = campaign.contacted > 0 ? ((campaign.connected / campaign.contacted) * 100).toFixed(1) : '0';
    const interestRate = campaign.connected > 0 ? ((campaign.interested / campaign.connected) * 100).toFixed(1) : '0';
    
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

// Customer Modal
function openCustomerModal(customerKey) {
  console.log('Opening modal for customer:', customerKey);
  const modal = document.getElementById('customerModal');
  const customer = findCustomerByKey(customerKey);
  
  if (!customer) {
    console.error('Customer not found:', customerKey);
    return;
  }

  // Update modal content
  document.getElementById('modalCustomerName').textContent = customer.companyName;
  
  const customerInfo = document.getElementById('customerInfo');
  customerInfo.innerHTML = `
    <div class="customer-details">
      <div><strong>Contact:</strong> ${customer.contactName}</div>
      <div><strong>Phone:</strong> ${maskPhoneNumber(customer.phoneNumber)}</div>
      <div><strong>Email:</strong> ${customer.email}</div>
      <div><strong>Industry:</strong> ${customer.industry}</div>
      <div><strong>Location:</strong> ${customer.location}</div>
      <div><strong>CRM ID:</strong> ${customer.crmContactId}</div>
      <div><strong>Total Interactions:</strong> ${customer.totalInteractions}</div>
      <div><strong>Last Interaction:</strong> ${formatDateTime(customer.lastInteraction)}</div>
    </div>
  `;

  // Load customer timeline
  const customerInteractions = appData.interactions
    .filter(interaction => interaction.customerKey === customerKey)
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  const timeline = document.getElementById('customerTimeline');
  timeline.innerHTML = customerInteractions.map(interaction => {
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
          <div class="timeline-message">${interaction.content}</div>
          ${metadata ? `<div class="timeline-metadata">${metadata}</div>` : ''}
        </div>
      </div>
    `;
  }).join('');

  modal.classList.remove('hidden');
}

function closeCustomerModal() {
  document.getElementById('customerModal').classList.add('hidden');
}

// Refresh Data
function refreshData() {
  const refreshBtn = document.getElementById('refreshData');
  if (refreshBtn) {
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
}

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  console.log('Industri-Connect initializing...');
  
  // Initialize navigation
  initNavigation();
  
  // Load initial view
  loadDashboard();
  
  // Initialize event listeners
  const refreshBtn = document.getElementById('refreshData');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', refreshData);
  }
  
  const closeModalBtn = document.getElementById('closeModal');
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeCustomerModal);
  }
  
  // Close modal when clicking outside
  const modal = document.getElementById('customerModal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        closeCustomerModal();
      }
    });
  }

  console.log('Industri-Connect Communication Consolidation System initialized successfully');
});