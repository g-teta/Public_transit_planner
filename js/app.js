// State Management
let appState = {
    currentRoutes: [],
    savedRoutes: [],
    filters: {
        mode: 'all',
        maxWalkDistance: '',
        wheelchairAccessible: false,
        minTransfers: false
    },
    selectedRoute: null
};

// DOM Elements
const elements = {
    // Tabs
    planTab: document.getElementById('plan-tab'),
    savedTab: document.getElementById('saved-tab'),
    planSection: document.getElementById('plan-section'),
    savedSection: document.getElementById('saved-section'),
    
    // Search
    origin: document.getElementById('origin'),
    destination: document.getElementById('destination'),
    departureTime: document.getElementById('departure-time'),
    searchBtn: document.getElementById('search-btn'),
    filterBtn: document.getElementById('filter-btn'),
    filtersPanel: document.getElementById('filters-panel'),
    
    // Filters
    modeFilter: document.getElementById('mode-filter'),
    maxWalkFilter: document.getElementById('max-walk'),
    wheelchairFilter: document.getElementById('wheelchair-filter'),
    minTransfersFilter: document.getElementById('min-transfers-filter'),
    
    // Display
    loading: document.getElementById('loading'),
    errorMessage: document.getElementById('error-message'),
    errorText: document.getElementById('error-text'),
    resultsSection: document.getElementById('results-section'),
    resultsTitle: document.getElementById('results-title'),
    routesContainer: document.getElementById('routes-container'),
    savedRoutesContainer: document.getElementById('saved-routes-container'),
    savedCount: document.getElementById('saved-count'),
    savedRoutesCount: document.getElementById('saved-routes-count'),
    
    // Modal
    modal: document.getElementById('route-modal'),
    closeModal: document.getElementById('close-modal'),
    routeStats: document.getElementById('route-stats'),
    routeSteps: document.getElementById('route-steps'),
    saveRouteBtn: document.getElementById('save-route-btn')
};

// Initialize App
function initApp() {
    loadSavedRoutes();
    attachEventListeners();
    updateSavedCount();
}

// Event Listeners
function attachEventListeners() {
    // Tab Navigation
    elements.planTab.addEventListener('click', () => switchTab('plan'));
    elements.savedTab.addEventListener('click', () => switchTab('saved'));
    
    // Search
    elements.searchBtn.addEventListener('click', searchRoutes);
    elements.origin.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchRoutes();
    });
    elements.destination.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchRoutes();
    });
    
    // Filters
    elements.filterBtn.addEventListener('click', toggleFilters);
    elements.modeFilter.addEventListener('change', updateFilters);
    elements.maxWalkFilter.addEventListener('input', updateFilters);
    elements.wheelchairFilter.addEventListener('change', updateFilters);
    elements.minTransfersFilter.addEventListener('change', updateFilters);
    
    // Modal
    elements.closeModal.addEventListener('click', closeModal);
    elements.modal.addEventListener('click', (e) => {
        if (e.target === elements.modal) closeModal();
    });
    elements.saveRouteBtn.addEventListener('click', saveCurrentRoute);
}

// Tab Navigation
function switchTab(tab) {
    if (tab === 'plan') {
        elements.planTab.classList.add('active');
        elements.savedTab.classList.remove('active');
        elements.planSection.classList.add('active');
        elements.savedSection.classList.remove('active');
    } else {
        elements.planTab.classList.remove('active');
        elements.savedTab.classList.add('active');
        elements.planSection.classList.remove('active');
        elements.savedSection.classList.add('active');
        renderSavedRoutes();
    }
}

// Toggle Filters
function toggleFilters() {
    elements.filtersPanel.classList.toggle('hidden');
}

// Update Filters
function updateFilters() {
    appState.filters = {
        mode: elements.modeFilter.value,
        maxWalkDistance: elements.maxWalkFilter.value,
        wheelchairAccessible: elements.wheelchairFilter.checked,
        minTransfers: elements.minTransfersFilter.checked
    };
    
    if (appState.currentRoutes.length > 0) {
        renderRoutes(applyFilters(appState.currentRoutes));
    }
}

// Search Routes
async function searchRoutes() {
    const origin = elements.origin.value.trim();
    const destination = elements.destination.value.trim();
    
    if (!origin || !destination) {
        showError('Please enter both origin and destination');
        return;
    }
    
    hideError();
    showLoading();
    hideResults();
    
    try {
        // In production, call actual API here
        const routes = await fetchTransitRoutes(origin, destination);
        appState.currentRoutes = routes;
        
        const filteredRoutes = applyFilters(routes);
        
        hideLoading();
        
        if (filteredRoutes.length > 0) {
            renderRoutes(filteredRoutes);
            showResults();
        } else {
            showError('No routes found matching your criteria');
        }
    } catch (error) {
        hideLoading();
        showError('Failed to fetch routes. Please try again.');
        console.error('Error fetching routes:', error);
    }
}

// Fetch Transit Routes (API Call)
async function fetchTransitRoutes(origin, destination) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In production, replace with actual API call:
    /*
    const response = await fetch(`${CONFIG.GOOGLE_DIRECTIONS_URL}?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&mode=transit&alternatives=true&key=${CONFIG.GOOGLE_API_KEY}`);
    const data = await response.json();
    return parseGoogleDirectionsResponse(data);
    */
    
    // Mock data for demonstration
    return generateMockRoutes(origin, destination);
}

// Generate Mock Routes
function generateMockRoutes(origin, destination) {
    const departureTime = elements.departureTime.value || '08:30';
    
    return [
        {
            id: Date.now() + 1,
            origin,
            destination,
            duration: 45,
            cost: 2.75,
            transfers: 1,
            departureTime,
            arrivalTime: addMinutes(departureTime, 45),
            walkDistance: 0.8,
            wheelchair: true,
            steps: [
                { type: 'walk', duration: 8, distance: 0.5, description: `Walk from ${origin} to Stop A` },
                { type: 'bus', duration: 30, distance: 10.2, description: 'Bus 42 to Central Station' },
                { type: 'walk', duration: 7, distance: 0.3, description: `Walk from Central Station to ${destination}` }
            ]
        },
        {
            id: Date.now() + 2,
            origin,
            destination,
            duration: 60,
            cost: 3.50,
            transfers: 2,
            departureTime,
            arrivalTime: addMinutes(departureTime, 60),
            walkDistance: 1.6,
            wheelchair: false,
            steps: [
                { type: 'walk', duration: 12, distance: 0.8, description: `Walk from ${origin} to Stop B` },
                { type: 'tram', duration: 25, distance: 12.0, description: 'Tram T3 to Market Square' },
                { type: 'walk', duration: 23, distance: 0.8, description: `Walk from Market Square to ${destination}` }
            ]
        },
        {
            id: Date.now() + 3,
            origin,
            destination,
            duration: 52,
            cost: 2.75,
            transfers: 0,
            departureTime,
            arrivalTime: addMinutes(departureTime, 52),
            walkDistance: 0.4,
            wheelchair: true,
            steps: [
                { type: 'walk', duration: 4, distance: 0.2, description: `Walk from ${origin} to Regional Rail` },
                { type: 'train', duration: 44, distance: 22.0, description: 'Regional Rail direct to near destination' },
                { type: 'walk', duration: 4, distance: 0.2, description: `Walk to ${destination}` }
            ]
        }
    ];
}

// Helpers
function addMinutes(timeStr, minutesToAdd) {
    const [h, m] = timeStr.split(':').map(Number);
    const date = new Date();
    date.setHours(h, m, 0, 0);
    date.setMinutes(date.getMinutes() + minutesToAdd);
    const hh = String(date.getHours()).padStart(2, '0');
    const mm = String(date.getMinutes()).padStart(2, '0');
    return `${hh}:${mm}`;
}

function formatDuration(mins) {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

// Filters
function applyFilters(routes) {
    return routes.filter(r => {
        // Mode filter
        if (appState.filters.mode && appState.filters.mode !== 'all') {
            const hasMode = r.steps.some(s => s.type === appState.filters.mode);
            if (!hasMode) return false;
        }
        // Max walk distance
        if (appState.filters.maxWalkDistance) {
            const maxWalk = parseFloat(appState.filters.maxWalkDistance);
            if (!isNaN(maxWalk) && r.walkDistance > maxWalk) return false;
        }
        // Wheelchair accessibility
        if (appState.filters.wheelchairAccessible && !r.wheelchair) return false;
        // Minimum transfers
        if (appState.filters.minTransfers && r.transfers < 1) return false;
        return true;
    });
}

// Rendering
function renderRoutes(routes) {
    elements.routesContainer.innerHTML = '';
    elements.resultsTitle.textContent = `Routes (${routes.length})`;
    routes.forEach(route => {
        const card = document.createElement('div');
        card.className = 'route-card';
        card.innerHTML = `
            <div class="route-main">
                <div class="route-times">${route.departureTime} → ${route.arrivalTime}</div>
                <div class="route-meta">${formatDuration(route.duration)} · ${route.transfers} transfer(s) · $${route.cost.toFixed(2)}</div>
            </div>
            <div class="route-actions">
                <button class="btn-view" data-id="${route.id}">View</button>
                <button class="btn-save" data-id="${route.id}">Save</button>
            </div>
        `;
        elements.routesContainer.appendChild(card);

        card.querySelector('.btn-view').addEventListener('click', () => openModal(route));
        card.querySelector('.btn-save').addEventListener('click', () => {
            appState.selectedRoute = route;
            saveCurrentRoute();
        });
    });
}

// Modal
function openModal(route) {
    appState.selectedRoute = route;
    elements.routeStats.innerHTML = `
        <div class="modal-title">${route.origin} → ${route.destination}</div>
        <div>${route.departureTime} — ${route.arrivalTime} · ${formatDuration(route.duration)}</div>
        <div>Transfers: ${route.transfers} · Walk: ${route.walkDistance} km · Wheelchair: ${route.wheelchair ? 'Yes' : 'No'}</div>
    `;
    elements.routeSteps.innerHTML = '';
    route.steps.forEach((s, i) => {
        const step = document.createElement('div');
        step.className = 'modal-step';
        step.textContent = `${i + 1}. [${s.type}] ${s.description} — ${s.duration}m`;
        elements.routeSteps.appendChild(step);
    });
    elements.saveRouteBtn.disabled = false;
    elements.modal.classList.add('open');
}

function closeModal() {
    elements.modal.classList.remove('open');
    appState.selectedRoute = null;
    elements.routeStats.innerHTML = '';
    elements.routeSteps.innerHTML = '';
    elements.saveRouteBtn.disabled = true;
}

// Saved routes
function saveCurrentRoute() {
    if (!appState.selectedRoute) return;
    const exists = appState.savedRoutes.some(r => r.id === appState.selectedRoute.id);
    if (exists) return;
    appState.savedRoutes.push(appState.selectedRoute);
    persistSavedRoutes();
    updateSavedCount();
    renderSavedRoutes();
}

function renderSavedRoutes() {
    elements.savedRoutesContainer.innerHTML = '';
    if (appState.savedRoutes.length === 0) {
        elements.savedRoutesContainer.innerHTML = '<div class="empty">No saved routes</div>';
        elements.savedRoutesCount.textContent = '0';
        return;
    }
    appState.savedRoutes.forEach(route => {
        const el = document.createElement('div');
        el.className = 'saved-item';
        el.innerHTML = `
            <div class="saved-info">
                <div class="saved-line">${route.origin} → ${route.destination}</div>
                <div class="saved-meta">${route.departureTime} · ${formatDuration(route.duration)}</div>
            </div>
            <div class="saved-actions">
                <button class="open-saved" data-id="${route.id}">Open</button>
                <button class="delete-saved" data-id="${route.id}">Delete</button>
            </div>
        `;
        elements.savedRoutesContainer.appendChild(el);

        el.querySelector('.open-saved').addEventListener('click', () => openModal(route));
        el.querySelector('.delete-saved').addEventListener('click', () => deleteSavedRoute(route.id));
    });
    elements.savedRoutesCount.textContent = String(appState.savedRoutes.length);
}

function deleteSavedRoute(id) {
    appState.savedRoutes = appState.savedRoutes.filter(r => r.id !== id);
    persistSavedRoutes();
    renderSavedRoutes();
    updateSavedCount();
}

// Persistence
function persistSavedRoutes() {
    try {
        localStorage.setItem('transit_saved_routes', JSON.stringify(appState.savedRoutes));
    } catch (e) {
        console.error('Could not persist saved routes', e);
    }
}

function loadSavedRoutes() {
    try {
        const raw = localStorage.getItem('transit_saved_routes');
        appState.savedRoutes = raw ? JSON.parse(raw) : [];
    } catch (e) {
        console.error('Could not load saved routes', e);
        appState.savedRoutes = [];
    }
}

// UI helpers
function updateSavedCount() {
    elements.savedCount.textContent = String(appState.savedRoutes.length);
}

function showError(msg) {
    elements.errorText.textContent = msg;
    elements.errorMessage.classList.remove('hidden');
}

function hideError() {
    elements.errorMessage.classList.add('hidden');
    elements.errorText.textContent = '';
}

function showLoading() {
    elements.loading.classList.remove('hidden');
}

function hideLoading() {
    elements.loading.classList.add('hidden');
}

function showResults() {
    elements.resultsSection.classList.remove('hidden');
}

function hideResults() {
    elements.resultsSection.classList.add('hidden');
}

// Initialize App
initApp();