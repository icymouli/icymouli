/**
 * Smart Campus Navigation & Student Assistant
 * Karpagam Academy of Higher Education (KAHE), Coimbatore
 */

// App State
const state = {
    currentUser: {
        name: "Mouli Vishnu R",
        role: "Student",
        regNo: "21UBCE045",
        dept: "Computer Science & Engineering",
        year: "3rd Year (B.E. CSE)",
        email: "moulivishnu.21ubce045@kahe.ac.in",
        phone: "+91 98765 43210",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250"
    },
    currentLocation: { id: "main_gate", name: "Main Campus Entrance Gate", x: 12, y: 82 },
    selectedDestination: null,
    searchQuery: "",
    activeView: "loginView"
};

// KAHE Campus Data
const campusData = {
    blocks: [
        { id: "block_a", code: "Block A", name: "Administrative & Science Block", x: 28, y: 62, icon: "fa-building-columns", floors: 4, depts: ["Science & Humanities", "Admin Office", "Dean Office"] },
        { id: "block_b", code: "Block B", name: "Computer Science & IT Block", x: 48, y: 38, icon: "fa-laptop-code", floors: 4, depts: ["Computer Science & Engg", "Information Technology", "AI & Data Science"] },
        { id: "block_c", code: "Block C", name: "Mechanical & Civil Block", x: 72, y: 42, icon: "fa-gears", floors: 3, depts: ["Mechanical Engg", "Civil Engg", "Robotics Lab"] },
        { id: "block_d", code: "Block D", name: "Biotechnology & Life Sciences Block", x: 38, y: 22, icon: "fa-vial-virus", floors: 4, depts: ["Biotechnology", "Biomedical Engg", "Bio-Research Lab"] },
        { id: "block_e", code: "Block E", name: "Management & Commerce Block", x: 62, y: 75, icon: "fa-chart-pie", floors: 3, depts: ["MBA", "Commerce", "Management Studies"] },
        { id: "library", code: "Central Library", name: "Karpagam Knowledge Centre", x: 42, y: 55, icon: "fa-book-open-reader", floors: 3, depts: ["Digital Library", "Reference Hall", "Periodicals"] },
        { id: "canteen", code: "Main Canteen", name: "KAHE Food Court & Refreshments", x: 80, y: 65, icon: "fa-utensils", floors: 2, depts: ["Food Court", "Juice Corner", "Snack Bar"] },
        { id: "auditorium", code: "Auditorium", name: "Dr. APJ Abdul Kalam Auditorium", x: 22, y: 40, icon: "fa-landmark-dome", floors: 2, depts: ["Main Hall", "Seminar Room A"] },
        { id: "hostel_b", code: "Boys Hostel", name: "Kavery Boys Hostel Complex", x: 85, y: 25, icon: "fa-hotel", floors: 5, depts: ["Block 1", "Block 2", "Mess Hall"] },
        { id: "hostel_g", code: "Girls Hostel", name: "Narmada Girls Hostel Complex", x: 18, y: 20, icon: "fa-house-user", floors: 5, depts: ["Block A", "Block B", "Mess Hall"] },
        { id: "parking", code: "Parking Zone", name: "Main Student & Visitor Parking", x: 15, y: 72, icon: "fa-square-parking", floors: 1, depts: ["Two Wheeler", "Four Wheeler"] },
        { id: "sports", code: "Sports Complex", name: "Indoor Gymnasium & Sports Ground", x: 88, y: 82, icon: "fa-basketball", floors: 2, depts: ["Indoor Court", "Fitness Gym", "Cricket Ground"] }
    ],
    classrooms: [
        { id: "c101", code: "A-102", name: "Physics Lecture Hall 1", blockId: "block_a", block: "Block A", floor: "1st Floor", room: "102", capacity: 60, equipment: ["Projector", "Smart Board", "Sound System"], status: "Available" },
        { id: "c102", code: "B-302", name: "Advanced CSE Computing Lab 2", blockId: "block_b", block: "Block B", floor: "3rd Floor", room: "302", capacity: 45, equipment: ["60 i7 PCs", "High-Speed Internet", "AC"], status: "In Class (B.E. CSE 3rd Year)" },
        { id: "c103", code: "B-405", name: "Artificial Intelligence & ML Lab", blockId: "block_b", block: "Block B", floor: "4th Floor", room: "405", capacity: 50, equipment: ["NVIDIA GPU Workstations", "Smart Projector"], status: "Available" },
        { id: "c104", code: "C-110", name: "CAD / CAM Engineering Design Lab", blockId: "block_c", block: "Block C", floor: "1st Floor", room: "110", capacity: 40, equipment: ["Workstation PCs", "3D Printers"], status: "In Class (Mechanical 2nd Year)" },
        { id: "c105", code: "D-201", name: "Genetic Engineering & Molecular Lab", blockId: "block_d", block: "Block D", floor: "2nd Floor", room: "201", capacity: 35, equipment: ["PCR Thermal Cyclers", "Microscopes", "Bio-Safety Cabinets"], status: "Available" },
        { id: "c106", code: "E-102", name: "MBA Smart Seminar Hall", blockId: "block_e", block: "Block E", floor: "1st Floor", room: "102", capacity: 80, equipment: ["Video Conference", "Dual Projectors", "AC"], status: "Available" },
        { id: "c107", code: "L-201", name: "Central Digital Reference Library", blockId: "library", block: "Central Library", floor: "2nd Floor", room: "201", capacity: 120, equipment: ["Digital Kiosks", "Quiet Study Pods", "Wi-Fi"], status: "Open" }
    ],
    faculty: [
        { id: "f1", name: "Dr. R. Sundararajan", desig: "Professor & HOD", dept: "Computer Science & Engineering", blockId: "block_b", office: "Room B-301", hours: "10:00 AM - 04:30 PM", email: "sundararajan.r@kahe.ac.in", phone: "+91 94432 12345", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250" },
        { id: "f2", name: "Dr. K. Meenakshi", desig: "Associate Professor", dept: "Biotechnology", blockId: "block_d", office: "Room D-205", hours: "11:00 AM - 03:00 PM", email: "meenakshi.k@kahe.ac.in", phone: "+91 98421 87654", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250" },
        { id: "f3", name: "Prof. S. Karthik", desig: "Assistant Professor", dept: "Mechanical Engineering", blockId: "block_c", office: "Room C-104", hours: "09:30 AM - 04:00 PM", email: "karthik.s@kahe.ac.in", phone: "+91 97890 23456", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250" },
        { id: "f4", name: "Dr. V. Rajesh Kumar", desig: "Professor & Dean", dept: "Science & Humanities", blockId: "block_a", office: "Room A-201", hours: "10:30 AM - 05:00 PM", email: "rajesh.v@kahe.ac.in", phone: "+91 99441 55667", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=250" },
        { id: "f5", name: "Dr. M. Anitha", desig: "Associate Professor", dept: "Management Studies (MBA)", blockId: "block_e", office: "Room E-105", hours: "01:30 PM - 04:30 PM", email: "anitha.m@kahe.ac.in", phone: "+91 96291 11223", photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=250" }
    ],
    events: [
        { id: "e1", title: "National AI & Robotics Symposium 2026", type: "Seminars", date: "Jul 28, 2026", time: "09:30 AM - 04:30 PM", venue: "Dr. APJ Abdul Kalam Auditorium", blockId: "auditorium", organizer: "Department of CSE & AI", desc: "Expert talks on Generative AI, Autonomous Systems, and Industry 4.0 applications.", badge: "Featured" },
        { id: "e2", title: "Biotech & Gene Editing Workshop", type: "Workshops", date: "Aug 02, 2026", time: "10:00 AM - 03:00 PM", venue: "Block D - Bio-Research Lab 2", blockId: "block_d", organizer: "Dept of Biotechnology", desc: "Hands-on training session on CRISPR gene editing techniques and bioinformatics tools.", badge: "Registration Open" },
        { id: "e3", title: "Mega Campus Placement Drive 2026", type: "Placements", date: "Aug 10, 2026", time: "08:30 AM Onwards", venue: "Block B - Placement Hall & Computer Labs", blockId: "block_b", organizer: "KAHE Career Guidance Cell", desc: "Campus recruitment drive for final year B.E. & M.Sc students with 25+ IT & Core Companies.", badge: "Placement" },
        { id: "e4", title: "KAHE Cultural Extravaganza 'Utsav 2026'", type: "Cultural", date: "Aug 20, 2026", time: "05:00 PM - 09:30 PM", venue: "Sports Complex Open Air Stage", blockId: "sports", organizer: "Student Fine Arts Club", desc: "Annual inter-departmental music, dance, and fashion show celebration.", badge: "Cultural" }
    ]
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
    initUI();
    renderDashboard();
    renderMapOptions();
    renderFaculty();
    renderClassrooms();
    renderEvents();
    bindEvents();
});

// UI Initializers & View Switching
function initUI() {
    updateUserDisplay();
}

function switchView(viewId) {
    state.activeView = viewId;
    document.querySelectorAll('.app-view').forEach(view => {
        view.classList.remove('active');
    });
    const targetView = document.getElementById(viewId);
    if (targetView) {
        targetView.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Update nav link highlighting
    document.querySelectorAll('.nav-link-custom, .bottom-nav-item').forEach(link => {
        if (link.dataset.view === viewId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Specific View Lifecycle triggers
    if (viewId === 'mapView') {
        setTimeout(() => drawCampusMap(), 100);
    }
}

function updateUserDisplay() {
    const userRoleBadges = document.querySelectorAll('.user-role-badge');
    const userNameEls = document.querySelectorAll('.user-name-text');
    const userRegEls = document.querySelectorAll('.user-reg-text');
    const userEmailEls = document.querySelectorAll('.user-email-text');

    userNameEls.forEach(el => el.textContent = state.currentUser.name);
    userRoleBadges.forEach(el => el.textContent = state.currentUser.role);
    userRegEls.forEach(el => el.textContent = state.currentUser.regNo);
    userEmailEls.forEach(el => el.textContent = state.currentUser.email);
}

// Login & Auth Handling
function handleLogin(role) {
    const emailInput = document.getElementById(`${role.toLowerCase()}Email`);
    const nameInput = document.getElementById(`${role.toLowerCase()}Name`);

    state.currentUser.role = role;
    if (role === 'Student') {
        state.currentUser.name = nameInput && nameInput.value ? nameInput.value : "Mouli Vishnu R";
        state.currentUser.regNo = "21UBCE045";
        state.currentUser.dept = "Computer Science & Engineering";
        state.currentUser.email = emailInput && emailInput.value ? emailInput.value : "moulivishnu.21ubce045@kahe.ac.in";
    } else if (role === 'Faculty') {
        state.currentUser.name = nameInput && nameInput.value ? nameInput.value : "Dr. R. Sundararajan";
        state.currentUser.regNo = "KAHE-EMP-9821";
        state.currentUser.dept = "Computer Science & Engineering";
        state.currentUser.email = emailInput && emailInput.value ? emailInput.value : "sundararajan.r@kahe.ac.in";
    } else {
        state.currentUser.name = "Guest Visitor";
        state.currentUser.role = "Guest";
        state.currentUser.regNo = "GUEST-VISITOR";
        state.currentUser.dept = "General Access";
        state.currentUser.email = "visitor@kahe.ac.in";
    }

    updateUserDisplay();
    switchView('dashboardView');
    showToast(`Welcome to KAHE Smart Campus, ${state.currentUser.name}!`);
}

function handleLogout() {
    switchView('loginView');
    showToast("Logged out successfully.");
}

// Dashboard Quick Access & Search
function renderDashboard() {
    // Top Quick Access Cards click handlers built in HTML attributes
}

function handleGlobalSearch(query) {
    const q = query.toLowerCase().trim();
    if (!q) return;

    // Filter faculty or classrooms and navigate to corresponding page
    const foundFaculty = campusData.faculty.filter(f => f.name.toLowerCase().includes(q) || f.dept.toLowerCase().includes(q));
    const foundClassroom = campusData.classrooms.filter(c => c.code.toLowerCase().includes(q) || c.name.toLowerCase().includes(q) || c.block.toLowerCase().includes(q));

    if (foundFaculty.length > 0) {
        document.getElementById('facultySearchInput').value = query;
        renderFaculty(query);
        switchView('facultyView');
    } else if (foundClassroom.length > 0) {
        document.getElementById('classroomSearchInput').value = query;
        renderClassrooms(query);
        switchView('classroomView');
    } else {
        switchView('mapView');
        const select = document.getElementById('mapDestSelect');
        if (select) {
            select.value = "block_b";
            navigateToBlock("block_b");
        }
    }
}

// Campus Map & Navigation Route Drawer
function renderMapOptions() {
    const select = document.getElementById('mapDestSelect');
    if (!select) return;

    select.innerHTML = '<option value="">Select Destination Block / Facility...</option>';
    campusData.blocks.forEach(block => {
        select.innerHTML += `<option value="${block.id}">${block.code} - ${block.name}</option>`;
    });
}

function navigateToBlock(blockId) {
    const block = campusData.blocks.find(b => b.id === blockId);
    if (!block) return;

    state.selectedDestination = block;
    switchView('mapView');

    const select = document.getElementById('mapDestSelect');
    if (select) select.value = blockId;

    drawCampusMap();

    // Estimate walking metrics
    const dx = Math.abs(block.x - state.currentLocation.x);
    const dy = Math.abs(block.y - state.currentLocation.y);
    const distanceMeters = Math.round(Math.sqrt(dx * dx + dy * dy) * 6); // approx scaling
    const walkingMinutes = Math.max(1, Math.ceil(distanceMeters / 70));

    const routeInfo = document.getElementById('routeInfoBanner');
    if (routeInfo) {
        routeInfo.innerHTML = `
            <div>
                <span class="badge badge-primary-soft me-2"><i class="fa-solid fa-person-walking me-1"></i> Walking Route Active</span>
                <strong>Destination:</strong> ${block.code} (${block.name})
            </div>
            <div class="d-flex gap-3 align-items-center">
                <span><i class="fa-regular fa-clock me-1 text-primary"></i> <strong>${walkingMinutes} mins</strong> (${distanceMeters} m)</span>
                <button class="btn btn-sm btn-outline-light" onclick="openFloorPlanModal('${block.id}')"><i class="fa-solid fa-layer-group me-1"></i> View Floor Plan</button>
            </div>
        `;
    }
}

function drawCampusMap() {
    const canvas = document.getElementById('routeCanvas');
    const container = document.getElementById('mapCanvasContainer');
    if (!canvas || !container) return;

    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Place Markers on DOM layer
    const markersLayer = document.getElementById('mapMarkersLayer');
    if (markersLayer) {
        markersLayer.innerHTML = '';

        // Add user location dot
        const userDot = document.createElement('div');
        userDot.className = 'user-pulse-dot';
        userDot.style.left = `${state.currentLocation.x}%`;
        userDot.style.top = `${state.currentLocation.y}%`;
        userDot.title = state.currentLocation.name;
        markersLayer.appendChild(userDot);

        // Add Block Markers
        campusData.blocks.forEach(block => {
            const isTarget = state.selectedDestination && state.selectedDestination.id === block.id;
            const marker = document.createElement('div');
            marker.className = `map-marker ${isTarget ? 'active' : ''}`;
            marker.style.left = `${block.x}%`;
            marker.style.top = `${block.y}%`;
            marker.onclick = () => navigateToBlock(block.id);
            marker.innerHTML = `
                <div class="map-marker-pin">
                    <i class="fa-solid ${block.icon}"></i> ${block.code}
                </div>
            `;
            markersLayer.appendChild(marker);
        });
    }

    // Draw route line if destination selected
    if (state.selectedDestination) {
        const startX = (state.currentLocation.x / 100) * canvas.width;
        const startY = (state.currentLocation.y / 100) * canvas.height;
        const endX = (state.selectedDestination.x / 100) * canvas.width;
        const endY = (state.selectedDestination.y / 100) * canvas.height;

        // Draw dotted route path
        ctx.beginPath();
        ctx.setLineDash([8, 6]);
        ctx.moveTo(startX, startY);

        // Add smooth curved midpoint waypoint
        const midX = (startX + endX) / 2 + (startX > endX ? -30 : 30);
        const midY = (startY + endY) / 2;
        ctx.quadraticCurveTo(midX, midY, endX, endY);

        ctx.strokeStyle = '#D32F2F';
        ctx.lineWidth = 4;
        ctx.stroke();

        // Pulsing destination glow circle
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.arc(endX, endY, 14, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(211, 47, 47, 0.2)';
        ctx.fill();
        ctx.strokeStyle = '#D32F2F';
        ctx.lineWidth = 2;
        ctx.stroke();
    }
}

// Floor Plan Modal
function openFloorPlanModal(blockId) {
    const block = campusData.blocks.find(b => b.id === blockId) || campusData.blocks[1];
    const modalTitle = document.getElementById('floorPlanModalTitle');
    const modalBody = document.getElementById('floorPlanModalBody');

    if (modalTitle) modalTitle.textContent = `${block.code} - Floor Layout Navigator`;
    if (modalBody) {
        modalBody.innerHTML = `
            <div class="row align-items-center mb-3">
                <div class="col-md-6">
                    <label class="form-label fw-bold">Select Floor Level:</label>
                    <select class="form-select form-control-custom" id="floorLevelSelect" onchange="updateFloorLayoutView(this.value, '${block.code}')">
                        <option value="Ground Floor">Ground Floor (Admin / Labs)</option>
                        <option value="1st Floor">1st Floor (Lectures 101 - 112)</option>
                        <option value="2nd Floor" selected>2nd Floor (HOD Office & Seminar Hall)</option>
                        <option value="3rd Floor">3rd Floor (Advanced Research Labs)</option>
                    </select>
                </div>
                <div class="col-md-6 text-end">
                    <span class="badge badge-primary-soft p-2"><i class="fa-solid fa-elevator me-1"></i> Elevator & Fire Stairs Enabled</span>
                </div>
            </div>
            <div class="p-4 border rounded-3 text-center bg-light" id="floorVisualBox">
                <h5 class="fw-bold text-primary mb-2">${block.code} - 2nd Floor Diagram</h5>
                <p class="text-muted small mb-3">Interactive Blueprint Layout & Room Allocation</p>
                <div class="d-flex flex-wrap gap-2 justify-content-center">
                    <div class="p-3 border rounded-3 bg-white shadow-sm flex-fill" style="min-width: 130px;">
                        <i class="fa-solid fa-door-closed text-primary me-1"></i> <strong>Room 201</strong><br><small class="text-muted">Faculty Office</small>
                    </div>
                    <div class="p-3 border rounded-3 bg-white shadow-sm flex-fill" style="min-width: 130px;">
                        <i class="fa-solid fa-laptop text-success me-1"></i> <strong>Room 202</strong><br><small class="text-muted">CS Lab 2</small>
                    </div>
                    <div class="p-3 border rounded-3 bg-white shadow-sm flex-fill" style="min-width: 130px;">
                        <i class="fa-solid fa-chalkboard-user text-warning me-1"></i> <strong>Room 203</strong><br><small class="text-muted">Lecture Room</small>
                    </div>
                    <div class="p-3 border rounded-3 bg-white shadow-sm flex-fill" style="min-width: 130px;">
                        <i class="fa-solid fa-restroom text-info me-1"></i> <strong>Restroom Zone</strong><br><small class="text-muted">North Wing</small>
                    </div>
                </div>
            </div>
        `;
    }

    const modal = new bootstrap.Modal(document.getElementById('floorPlanModal'));
    modal.show();
}

function updateFloorLayoutView(floor, blockCode) {
    const box = document.getElementById('floorVisualBox');
    if (!box) return;
    box.innerHTML = `
        <h5 class="fw-bold text-primary mb-2">${blockCode} - ${floor} Layout</h5>
        <p class="text-muted small mb-3">Live Occupancy & Room Mapping</p>
        <div class="d-flex flex-wrap gap-2 justify-content-center">
            <div class="p-3 border rounded-3 bg-white shadow-sm flex-fill">
                <strong>Main Hallway</strong><br><small class="text-success">Clear Path</small>
            </div>
            <div class="p-3 border rounded-3 bg-white shadow-sm flex-fill">
                <strong>Smart Classroom</strong><br><small class="text-muted">Available</small>
            </div>
            <div class="p-3 border rounded-3 bg-white shadow-sm flex-fill">
                <strong>Emergency Exit</strong><br><small class="text-danger">East Stairwell</small>
            </div>
        </div>
    `;
}

// Faculty Search Page
function renderFaculty(filter = "") {
    const container = document.getElementById('facultyGridContainer');
    if (!container) return;

    const f = filter.toLowerCase().trim();
    const list = campusData.faculty.filter(item => 
        item.name.toLowerCase().includes(f) || 
        item.dept.toLowerCase().includes(f) ||
        item.office.toLowerCase().includes(f)
    );

    if (list.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fa-solid fa-user-slash text-muted display-4 mb-3"></i>
                <h5>No faculty members found</h5>
                <p class="text-muted">Try searching with a different name or department.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = list.map(item => `
        <div class="col-md-6 col-lg-4">
            <div class="info-card">
                <div class="d-flex align-items-center gap-3 mb-3">
                    <img src="${item.photo}" alt="${item.name}" class="faculty-avatar">
                    <div>
                        <h6 class="fw-bold mb-1">${item.name}</h6>
                        <span class="badge badge-primary-soft mb-1">${item.desig}</span>
                        <div class="text-muted small"><i class="fa-solid fa-graduation-cap me-1"></i> ${item.dept}</div>
                    </div>
                </div>
                <div class="border-top pt-3 mt-auto">
                    <div class="small mb-1"><i class="fa-solid fa-building me-2 text-primary"></i> <strong>Office:</strong> ${item.office} (${item.blockId.replace('_', ' ').toUpperCase()})</div>
                    <div class="small mb-1"><i class="fa-regular fa-clock me-2 text-primary"></i> <strong>Hours:</strong> ${item.hours}</div>
                    <div class="small mb-3"><i class="fa-regular fa-envelope me-2 text-primary"></i> <strong>Email:</strong> ${item.email}</div>
                    <button class="btn btn-outline-custom w-100 btn-sm" onclick="navigateToBlock('${item.blockId}')">
                        <i class="fa-solid fa-location-dot me-1"></i> Locate Office on Map
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Classroom Finder Page
function renderClassrooms(filter = "") {
    const container = document.getElementById('classroomGridContainer');
    if (!container) return;

    const f = filter.toLowerCase().trim();
    const list = campusData.classrooms.filter(item =>
        item.code.toLowerCase().includes(f) ||
        item.name.toLowerCase().includes(f) ||
        item.block.toLowerCase().includes(f)
    );

    if (list.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fa-solid fa-door-closed text-muted display-4 mb-3"></i>
                <h5>No classrooms or labs found</h5>
                <p class="text-muted">Try searching for room codes like "A-102" or "B-302".</p>
            </div>
        `;
        return;
    }

    container.innerHTML = list.map(item => `
        <div class="col-md-6 col-lg-4">
            <div class="info-card">
                <div class="d-flex justify-content-between align-items-start mb-2">
                    <span class="badge bg-primary fs-6">${item.code}</span>
                    <span class="badge ${item.status.includes('Available') ? 'badge-success-soft' : 'badge-warning-soft'}">${item.status}</span>
                </div>
                <h6 class="fw-bold mb-2">${item.name}</h6>
                <div class="text-muted small mb-3">
                    <i class="fa-solid fa-layer-group me-1 text-primary"></i> ${item.block} &bull; ${item.floor}
                </div>
                <div class="mb-3">
                    <div class="small fw-semibold mb-1">Equipment Available:</div>
                    <div class="d-flex flex-wrap gap-1">
                        ${item.equipment.map(e => `<span class="badge bg-light text-dark border">${e}</span>`).join('')}
                    </div>
                </div>
                <div class="mt-auto border-top pt-3 d-flex gap-2">
                    <button class="btn btn-primary-custom flex-fill btn-sm" onclick="navigateToBlock('${item.blockId}')">
                        <i class="fa-solid fa-location-arrow me-1"></i> Navigate Here
                    </button>
                    <button class="btn btn-outline-secondary btn-sm" onclick="openFloorPlanModal('${item.blockId}')" title="View Floor Map">
                        <i class="fa-solid fa-map"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Events Page
function renderEvents(category = "All") {
    const container = document.getElementById('eventsGridContainer');
    if (!container) return;

    const list = category === "All" 
        ? campusData.events 
        : campusData.events.filter(e => e.type === category);

    container.innerHTML = list.map(item => `
        <div class="col-md-6">
            <div class="info-card">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="badge badge-primary-soft">${item.type}</span>
                    <span class="badge bg-warning text-dark">${item.badge}</span>
                </div>
                <h5 class="fw-bold text-primary mb-2">${item.title}</h5>
                <p class="text-muted small mb-3">${item.desc}</p>
                <div class="bg-light p-2 rounded-3 mb-3 small">
                    <div class="mb-1"><i class="fa-regular fa-calendar me-2 text-primary"></i> <strong>Date:</strong> ${item.date} (${item.time})</div>
                    <div><i class="fa-solid fa-location-dot me-2 text-danger"></i> <strong>Venue:</strong> ${item.venue}</div>
                </div>
                <div class="d-flex justify-content-between align-items-center mt-auto border-top pt-3">
                    <small class="text-muted"><i class="fa-solid fa-users me-1"></i> ${item.organizer}</small>
                    <button class="btn btn-primary-custom btn-sm" onclick="navigateToBlock('${item.blockId}')">
                        <i class="fa-solid fa-diamond-turn-right me-1"></i> Navigate to Venue
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// SOS Trigger & Audio Alert Simulation
function triggerSOS() {
    // Play audio alert beep via Web Audio API
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(880, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.6);
    } catch (e) {
        console.log("Audio not supported or blocked.");
    }

    const modal = new bootstrap.Modal(document.getElementById('sosAlertModal'));
    modal.show();
}

// Toast Notifications
function showToast(message) {
    const toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) return;

    const toastEl = document.createElement('div');
    toastEl.className = 'toast align-items-center text-white bg-primary border-0 show mb-2 shadow-lg';
    toastEl.setAttribute('role', 'alert');
    toastEl.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                <i class="fa-solid fa-circle-check me-2"></i> ${message}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
    `;
    toastContainer.appendChild(toastEl);
    setTimeout(() => toastEl.remove(), 4000);
}

// Event Listeners Binding
function bindEvents() {
    // Navigation items click handling
    document.querySelectorAll('[data-view]').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const viewId = item.dataset.view;
            if (viewId) switchView(viewId);
        });
    });

    // Faculty filter search input
    const facInput = document.getElementById('facultySearchInput');
    if (facInput) {
        facInput.addEventListener('input', (e) => renderFaculty(e.target.value));
    }

    // Classroom filter search input
    const classInput = document.getElementById('classroomSearchInput');
    if (classInput) {
        classInput.addEventListener('input', (e) => renderClassrooms(e.target.value));
    }

    // Window resize event for canvas route redraw
    window.addEventListener('resize', () => {
        if (state.activeView === 'mapView') {
            drawCampusMap();
        }
    });
}
