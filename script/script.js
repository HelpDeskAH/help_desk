// Application State
let currentView = 'dashboard';
let currentCategory = null;
let currentDepartment = null;
let currentFaculty = null;
let navigationStack = [];

// DOM Elements
const backBtn = document.getElementById('backBtn');
const headerTitle = document.getElementById('headerTitle');
const breadcrumb = document.getElementById('breadcrumb');
const searchContainer = document.getElementById('searchContainer');
const dashboardView = document.getElementById('dashboardView');
const subdepartmentsView = document.getElementById('subdepartmentsView');
const facultyListView = document.getElementById('facultyListView');
const facultyDetailsView = document.getElementById('facultyDetailsView');
const messageModal = document.getElementById('messageModal');
const messageForm = document.getElementById('messageForm');
const closeModal = document.getElementById('closeModal');

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
});

function initializeApp() {
    renderDashboard();
    updateStats();
}

function setupEventListeners() {
    // Back button
    if (backBtn) {
        backBtn.addEventListener('click', handleBack);
    }
    
    // Modal events
    if (closeModal) {
        closeModal.addEventListener('click', closeMessageModal);
    }
    
    if (messageModal) {
        messageModal.addEventListener('click', function(e) {
            if (e.target === messageModal) {
                closeMessageModal();
            }
        });
    }
    
    // Message form
    if (messageForm) {
        messageForm.addEventListener('submit', handleMessageSubmit);
    }
    
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    // ESC key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && messageModal && messageModal.style.display === 'flex') {
            closeMessageModal();
        }
    });
}

// Navigation Functions
function navigateTo(view, data = null) {
    // Save current state to navigation stack
    navigationStack.push({
        view: currentView,
        category: currentCategory,
        department: currentDepartment,
        faculty: currentFaculty
    });
    
    // Hide all views
    hideAllViews();
    
    // Update current state
    currentView = view;
    
    // Show appropriate view
    switch(view) {
        case 'dashboard':
            showDashboard();
            break;
        case 'subdepartments':
            currentCategory = data;
            showSubdepartments(data);
            break;
        case 'faculty-list':
            currentDepartment = data;
            showFacultyList(data);
            break;
        case 'faculty-details':
            currentFaculty = data;
            showFacultyDetails(data);
            break;
    }
    
    updateHeader();
}

function handleBack() {
    if (navigationStack.length > 0) {
        const previousState = navigationStack.pop();
        
        // Hide all views
        hideAllViews();
        
        // Restore previous state
        currentView = previousState.view;
        currentCategory = previousState.category;
        currentDepartment = previousState.department;
        currentFaculty = previousState.faculty;
        
        // Show appropriate view
        switch(currentView) {
            case 'dashboard':
                showDashboard();
                break;
            case 'subdepartments':
                showSubdepartments(currentCategory);
                break;
            case 'faculty-list':
                showFacultyList(currentDepartment);
                break;
            case 'faculty-details':
                showFacultyDetails(currentFaculty);
                break;
        }
        
        updateHeader();
    }
}

function hideAllViews() {
    if (dashboardView) dashboardView.style.display = 'none';
    if (subdepartmentsView) subdepartmentsView.style.display = 'none';
    if (facultyListView) facultyListView.style.display = 'none';
    if (facultyDetailsView) facultyDetailsView.style.display = 'none';
}

function showDashboard() {
    if (dashboardView) dashboardView.style.display = 'block';
}

function showSubdepartments(category) {
    if (subdepartmentsView) {
        subdepartmentsView.style.display = 'block';
        renderSubdepartments(category);
    }
}

function showFacultyList(department) {
    if (facultyListView) {
        facultyListView.style.display = 'block';
        renderFacultyList(department);
    }
}

function showFacultyDetails(faculty) {
    if (facultyDetailsView) {
        facultyDetailsView.style.display = 'block';
        renderFacultyDetails(faculty);
    }
}

function updateHeader() {
    // Update title and breadcrumb
    switch(currentView) {
        case 'dashboard':
            if (headerTitle) headerTitle.textContent = 'HelpDesk Portal';
            if (breadcrumb) breadcrumb.style.display = 'none';
            break;
        case 'subdepartments':
            if (headerTitle) headerTitle.textContent = currentCategory ? currentCategory.name : 'Departments';
            updateBreadcrumb([
                { text: 'Home', current: false },
                { text: currentCategory ? currentCategory.name : 'Departments', current: true }
            ]);
            break;
        case 'faculty-list':
            if (headerTitle) headerTitle.textContent = currentDepartment ? currentDepartment.name : 'Faculty';
            updateBreadcrumb([
                { text: 'Home', current: false },
                { text: currentCategory ? currentCategory.name : 'Category', current: false },
                { text: currentDepartment ? currentDepartment.name : 'Department', current: true }
            ]);
            break;
        case 'faculty-details':
            if (headerTitle) headerTitle.textContent = currentFaculty ? currentFaculty.name : 'Faculty Details';
            updateBreadcrumb([
                { text: 'Home', current: false },
                { text: currentCategory ? currentCategory.name : 'Category', current: false },
                { text: currentDepartment ? currentDepartment.name : 'Department', current: false },
                { text: currentFaculty ? currentFaculty.name : 'Faculty', current: true }
            ]);
            break;
    }
    
    // Show/hide back button
    if (backBtn) {
        backBtn.style.display = currentView === 'dashboard' ? 'none' : 'block';
    }
    
    // Show/hide search
    if (searchContainer) {
        searchContainer.style.display = currentView === 'dashboard' ? 'flex' : 'none';
    }
}

function updateBreadcrumb(items) {
    if (!breadcrumb || items.length <= 1) {
        if (breadcrumb) breadcrumb.style.display = 'none';
        return;
    }
    
    breadcrumb.style.display = 'flex';
    breadcrumb.innerHTML = items.map((item, index) => {
        const isLast = index === items.length - 1;
        const itemClass = item.current ? 'breadcrumb-current' : '';
        
        if (isLast) {
            return `<span class="breadcrumb-item ${itemClass}">${item.text}</span>`;
        } else {
            return `
                <span class="breadcrumb-item ${itemClass}">${item.text}</span>
                <span class="breadcrumb-separator">›</span>
            `;
        }
    }).join('');
}

// Render Functions
function renderDashboard() {
    const categoriesContainer = document.getElementById('categoriesContainer');
    if (!categoriesContainer || !window.departmentsData) return;
    
    const categoriesHTML = window.departmentsData.categories.map(category => `
        <div class="category-card" onclick="navigateTo('subdepartments', ${JSON.stringify(category).replace(/"/g, '&quot;')})">
            <div class="category-icon ${category.color}">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    ${window.icons[category.icon] || window.icons.Building2}
                </svg>
            </div>
            <h3 class="category-title">${category.name}</h3>
            <p class="category-subtitle">${category.departments.length} departments</p>
            <p class="category-description">${category.description}</p>
        </div>
    `).join('');
    
    categoriesContainer.innerHTML = categoriesHTML;
}

function renderSubdepartments(category) {
    const container = document.getElementById('subdepartmentsContainer');
    if (!container) return;
    
    const departmentsHTML = category.departments.map(department => `
        <div class="department-card" onclick="navigateTo('faculty-list', ${JSON.stringify(department).replace(/"/g, '&quot;')})">
            <div class="department-header">
                <div class="department-icon ${department.color}">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        ${window.icons[department.icon] || window.icons.Building2}
                    </svg>
                </div>
                <div class="department-info">
                    <h3 class="department-name">${department.name}</h3>
                    <p class="department-count">${department.faculty.length} faculty member${department.faculty.length !== 1 ? 's' : ''}</p>
                </div>
                <svg class="external-link" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    ${window.icons.ExternalLink}
                </svg>
            </div>
            <p class="department-description">${department.description}</p>
        </div>
    `).join('');
    
    container.innerHTML = departmentsHTML;
}

function renderFacultyList(department) {
    const container = document.getElementById('facultyContainer');
    if (!container) return;
    
    const facultyHTML = department.faculty.map(faculty => `
        <div class="faculty-card" onclick="navigateTo('faculty-details', ${JSON.stringify(faculty).replace(/"/g, '&quot;')})">
            <div class="faculty-card-header">
                <img src="${faculty.photo}" alt="${faculty.name}" class="faculty-photo-large">
                <div class="faculty-status-badge">Available</div>
            </div>
            <div class="faculty-card-content">
                <h3 class="faculty-name-large">${faculty.name}</h3>
                <p class="faculty-designation-large">${faculty.designation}</p>
                <span class="faculty-department">${faculty.department}</span>
                <div class="faculty-specialization">
                    <span class="specialization-tag">${faculty.specialization.split(',')[0]}</span>
                </div>
            </div>
        </div>
    `).join('');
    
    container.innerHTML = facultyHTML;
}

function renderFacultyDetails(faculty) {
    const container = document.getElementById('facultyDetailsContainer');
    if (!container) return;
    
    container.innerHTML = `
        <div class="faculty-details">
            <!-- Hero Section with Gradient Background -->
            <div class="faculty-hero-section">
                <div class="faculty-hero-background"></div>
                <div class="faculty-hero-content">
                    <div class="faculty-hero-left">
                        <div class="faculty-photo-container">
                            <img src="${faculty.photo}" alt="${faculty.name}" class="faculty-photo-hero">
                            <div class="faculty-status-indicator">
                                <div class="status-dot"></div>
                                <span>Available</span>
                            </div>
                        </div>
                    </div>
                    <div class="faculty-hero-center">
                        <h1 class="faculty-hero-name">${faculty.name}</h1>
                        <h2 class="faculty-hero-designation">${faculty.designation}</h2>
                        <p class="faculty-hero-department">${faculty.department}</p>
                        <div class="faculty-hero-stats">
                            <div class="stat-item">
                                <span class="stat-value">${faculty.experience}</span>
                                <span class="stat-label">Experience</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-value">4.9</span>
                                <span class="stat-label">Rating</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-value">150+</span>
                                <span class="stat-label">Students</span>
                            </div>
                        </div>
                    </div>
                    <div class="faculty-hero-actions">
                        <button class="action-button primary" onclick="openMessageModal('${faculty.id}')">
                            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                            </svg>
                            Send Message
                        </button>
                        <button class="action-button secondary" onclick="toggleQRCode('${faculty.id}')">
                            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect width="5" height="5" x="3" y="3" rx="1"/>
                                <rect width="5" height="5" x="16" y="3" rx="1"/>
                                <rect width="5" height="5" x="3" y="16" rx="1"/>
                                <path d="M21 16h-3a2 2 0 0 0-2 2v3"/>
                                <path d="M21 21v.01"/>
                                <path d="M12 7v3a2 2 0 0 1-2 2H7"/>
                                <path d="M3 12h.01"/>
                                <path d="M12 3h.01"/>
                                <path d="M12 16v.01"/>
                                <path d="M16 12h1"/>
                                <path d="M21 12v.01"/>
                                <path d="M12 21v-1"/>
                            </svg>
                            QR Code
                        </button>
                    </div>
                </div>
                
                <div id="qrCodeContainer-${faculty.id}" class="qr-code-container" style="display: none;">
                    <div class="qr-code-box">
                        <canvas id="qrCode-${faculty.id}" class="qr-code-image"></canvas>
                        <p class="qr-code-text">Scan to access this faculty profile</p>
                    </div>
                </div>
            </div>

            <!-- Content Grid -->
            <div class="faculty-content-grid">
                <!-- Contact Information Card -->
                <div class="info-card contact-card">
                    <div class="info-card-header">
                        <div class="info-card-icon contact-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                        </div>
                        <h3 class="info-card-title">Contact Information</h3>
                    </div>
                    <div class="contact-list">
                        <div class="contact-item">
                            <div class="contact-item-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                            </div>
                            <div class="contact-details">
                                <p class="contact-label">Phone</p>
                                <p class="contact-value">${faculty.phone}</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-item-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                    <polyline points="22,6 12,13 2,6"/>
                                </svg>
                            </div>
                            <div class="contact-details">
                                <p class="contact-label">Email</p>
                                <p class="contact-value">${faculty.email}</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-item-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                    <circle cx="12" cy="10" r="3"/>
                                </svg>
                            </div>
                            <div class="contact-details">
                                <p class="contact-label">Office Location</p>
                                <p class="contact-value">${faculty.location.building}</p>
                                <p class="contact-sublabel">${faculty.location.floor}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Education & Specialization Card -->
                <div class="info-card education-card">
                    <div class="info-card-header">
                        <div class="info-card-icon education-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/>
                                <path d="M22 10v6"/>
                                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>
                            </svg>
                        </div>
                        <h3 class="info-card-title">Education & Expertise</h3>
                    </div>
                    <div class="education-content">
                        <div class="education-item">
                            <h4 class="education-title">Education</h4>
                            <p class="education-value">${faculty.education}</p>
                        </div>
                        <div class="education-item">
                            <h4 class="education-title">Specialization</h4>
                            <div class="specialization-tags">
                                ${faculty.specialization.split(',').map(spec => 
                                    `<span class="specialization-tag">${spec.trim()}</span>`
                                ).join('')}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Achievements Card -->
                <div class="info-card achievements-card">
                    <div class="info-card-header">
                        <div class="info-card-icon achievements-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                                <path d="M4 22h16"/>
                                <path d="M10 14.66V17c0 .55.47.98.97 1.21C12.04 18.75 14 20.24 14 22"/>
                                <path d="M14 14.66V17c0 .55-.47.98-.97 1.21C11.96 18.75 10 20.24 10 22"/>
                                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
                            </svg>
                        </div>
                        <h3 class="info-card-title">Achievements & Recognition</h3>
                    </div>
                    <div class="achievements-content">
                        <p class="achievements-text">${faculty.achievements}</p>
                    </div>
                </div>

                <!-- Location Card -->
                <div class="info-card location-card">
                    <div class="info-card-header">
                        <div class="info-card-icon location-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                <circle cx="12" cy="10" r="3"/>
                            </svg>
                        </div>
                        <h3 class="info-card-title">Office Location</h3>
                    </div>
                    <div class="location-display">
                        <div class="location-visual">
                            <div class="location-map-placeholder">
                                <svg class="location-map-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                    <circle cx="12" cy="10" r="3"/>
                                </svg>
                            </div>
                        </div>
                        <div class="location-details">
                            <p class="location-building">${faculty.location.building}</p>
                            <p class="location-floor">${faculty.location.floor}</p>
                            <p class="location-coordinates">
                                Coordinates: ${faculty.location.coordinates.lat}, ${faculty.location.coordinates.lng}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Utility Functions
function updateStats() {
    if (!window.departmentsData) return;
    
    const totalCategories = window.departmentsData.categories.length;
    const totalDepartments = window.departmentsData.categories.reduce((acc, cat) => acc + cat.departments.length, 0);
    const totalFaculty = window.departmentsData.categories.reduce((acc, cat) => 
        acc + cat.departments.reduce((deptAcc, dept) => deptAcc + dept.faculty.length, 0), 0);
    
    const totalCategoriesEl = document.getElementById('totalCategories');
    const totalDepartmentsEl = document.getElementById('totalDepartments');
    const totalFacultyEl = document.getElementById('totalFaculty');
    
    if (totalCategoriesEl) totalCategoriesEl.textContent = totalCategories;
    if (totalDepartmentsEl) totalDepartmentsEl.textContent = totalDepartments;
    if (totalFacultyEl) totalFacultyEl.textContent = totalFaculty;
}

function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    if (currentView === 'dashboard' && searchTerm) {
        // Implement search functionality
        console.log('Searching for:', searchTerm);
    }
}

// Modal Functions
function openMessageModal(facultyId) {
    if (messageModal && messageForm) {
        messageModal.style.display = 'flex';
        messageForm.dataset.facultyId = facultyId;
    }
}

function closeMessageModal() {
    if (messageModal && messageForm) {
        messageModal.style.display = 'none';
        messageForm.reset();
        delete messageForm.dataset.facultyId;
    }
}

function handleMessageSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(messageForm);
    const messageData = {
        facultyId: messageForm.dataset.facultyId,
        studentName: formData.get('studentName'),
        studentId: formData.get('studentId'),
        studentEmail: formData.get('studentEmail'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        timestamp: new Date().toISOString()
    };
    
    // Here you would typically send the message to your backend
    console.log('Message sent:', messageData);
    alert('Message sent successfully!');
    closeMessageModal();
}

// QR Code Functions
function toggleQRCode(facultyId) {
    const container = document.getElementById(`qrCodeContainer-${facultyId}`);
    const canvas = document.getElementById(`qrCode-${facultyId}`);
    
    if (container && canvas) {
        if (container.style.display === 'none') {
            container.style.display = 'flex';
            generateQRCode(canvas, facultyId);
        } else {
            container.style.display = 'none';
        }
    }
}

function generateQRCode(canvas, facultyId) {
    if (typeof QRCode !== 'undefined') {
        const url = `${window.location.origin}${window.location.pathname}#faculty/${facultyId}`;
        
        QRCode.toCanvas(canvas, url, {
            width: 200,
            margin: 2,
            color: {
                dark: '#000000',
                light: '#FFFFFF'
            }
        }, function (error) {
            if (error) console.error('QR Code generation error:', error);
        });
    }
}

// Global functions for onclick handlers
window.navigateTo = navigateTo;
window.openMessageModal = openMessageModal;
window.toggleQRCode = toggleQRCode;