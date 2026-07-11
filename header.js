// Header JavaScript for Sri Shankara Cancer Hospital
// This file dynamically generates the header content

// Navigation data structure

// Departments Menu Data - Redesigned to match image layout
const departmentsData = {
    cancerSpecialities: {
        title: "Cancer Specialities",
        icon: "fas fa-ribbon",
        color: "medical-green",
        items: [
            { title: "Surgical Oncology", link: "../Departments/surgical-oncology.html" },
            { title: "Medical Oncology", link: "../Departments/medical-oncology.html" },
            { title: "Radiation Oncology", link: "../Departments/radiation-oncology.html" },
            { title: "Haemato-Oncology & BMT", link: "../Departments/haemato-oncology-bmt.html" },
            { title: "Paediatric Oncology & BMT", link: "../Departments/paediatric-oncology-bmt.html" },
            { title: "Head & Neck Oncology", link: "../Departments/head-and-neck-oncology.html" },
            { title: "Gynaec Oncology", link: "../Departments/gynaecological-oncology.html" },
            { title: "Genito-Urinary Oncology", link: "../Departments/genitourinary-oncology.html" },
            { title: "Bone & Soft Tissue Oncology", link: "../Departments/bone-and-soft-tissue-oncology.html" },
            { title: "Neuro-Oncology", link: "../Departments/neuro-oncology.html" },
            { title: "Plastic & Reconstructive Surgery", link: "../Departments/plastic-and-reconstructive-surgery.html" },
            { title: "Interventional Pulmonology", link: "../Departments/interventional-pulmonology.html" },           
            { title: "Pain & Palliative Care", link: "../Departments/pain-and-palliative-care.html" },
            { title: "Ophthalmic Oncology", link: "../Departments/ophthalmic-oncology.html" },
            { title: "Anaesthesiology", link: "../Departments/onco-anaesthesiology.html" },
            { title: "Psycho Oncology", link: "../Departments/psycho-oncology.html" },
            { title: "Preventive Oncology", link: "../Departments/preventive-oncology.html" }
        ]
    },
    diagnosticsSpecialities: {
        title: "Diagnostics Specialities",
        icon: "fas fa-microphone",
        color: "medical-green",
        items: [
            { title: "Radio diagnosis", link: "../Departments/radiology-and-oncologic-imaging.html" },
            { title: "Nuclear Medicine", link: "../Departments/nuclear-medicine.html" },
            { title: "Interventional Radiology", link: "../Departments/interventional-radiology.html" }
        ]
    },
    clinicalSpecialities: {
        title: "Clinical Specialities",
        icon: "fas fa-stethoscope",
        color: "medical-green",
        items: [
            { title: "Endocrinology", link: "../Departments/endocrinology.html" },
            { title: "Cardiology", link: "../Departments/cardio-oncology.html" },
            { title: "Gastroenterology", link: "../Departments/gastroenterology.html" },
            { title: "Nephrology", link: "../Departments/nephrology.html" },
            { title: "Transfusion Medicine & Blood Centre", link: "../Departments/transfusion-medicine-and-blood-centre.html" }
            
        ]
    },
    pathologyLab: {
        title: "Pathology & Laboratory Medicine",
        icon: "fas fa-flask",
        color: "medical-green",
        items: [
            { title: "Histopathology", link: "../Departments/histopathology.html" },
            { title: "Haematopathology", link: "../Departments/haematopathology.html" },
            { title: "Molecular Diagnostics", link: "../Departments/molecular-oncology.html" },
            { title: "Biochemistry", link: "../Departments/biochemistry.html" },
            { title: "Microbiology & Virology", link: "../Departments/microbiology-and-virology.html" }
        ]
    },
    supportiveServices: {
        title: "Supportive Services",
        icon: "fas fa-heart",
        color: "medical-green",
        items: [
            { title: "Domiciliary Care", link: "../Departments/domiciliary-care.html" },
            { title: "Clinical Pharmacology", link: "../Departments/clinical-pharmacology.html" },
            { title: "Physiotherapy & Rehabilitation", link: "../Departments/physiotherapy-and-rehabilitation.html" },
            { title: "Nutrition & Dietetics", link: "../Departments/nutrition-and-dietetics.html" },
            { title: "Speech & Swallowing Therapy", link: "../Departments/speech-and-swallowing-therapy.html" },
            { title: "Integrative Oncology", link: "../Departments/integrative-oncology.html" }
        ]
    }
};

// Centres of Excellence Data
const centresData = [
    {
        title: "Bone Marrow Transplant",
        link: "../Center-Of-Exellence/bone-marrow-transplant.html",
        icon: "fas fa-heart",
        iconColor: "medical-blue",
        description: "Advanced BMT services"
    },
    {
        title: "Breast Cancer Care",
        link: "../Center-Of-Exellence/breast-cancer.html",
        icon: "fas fa-ribbon",
        iconColor: "pink",
        description: "Comprehensive breast cancer treatment"
    },
    {
        title: "Lung Cancer Care",
        link: "../Center-Of-Exellence/lung-cancer.html",
        icon: "fas fa-lungs",
        iconColor: "blue",
        description: "Advanced lung cancer treatment"
    },
    {
        title: "Head and Neck Oncology",
        link: "../Center-Of-Exellence/head-and-neck-oncology.html",
        icon: "fas fa-user-injured",
        iconColor: "orange",
        description: "Comprehensive head and neck cancer care"
    },
        {
        title: "Gynaecologic Oncology",
        link: "../Center-Of-Exellence/gynaecologic-oncology.html",
        icon: "fas fa-venus",
        iconColor: "pink",
        description: "Advanced gynecological cancer treatment"
    },
    {
        title: "Paediatric Oncology",
        link: "../Center-Of-Exellence/paediatric-oncology.html",
        icon: "fas fa-child",
        iconColor: "green",
        description: "Children's cancer care"
    },
    {
        title: "Robotic Surgery",
        link: "../Center-Of-Exellence/robotic-surgery.html",
        icon: "fas fa-robot",
        iconColor: "orange",
        description: "Advanced robotic procedures"
    }
];

// Doctors & Specialists Data
const doctorsData = [
    {
        title: "Our Doctors",
        link: "../Doctors/cancer-specialists.html",
        icon: "fas fa-user-md",
        iconColor: "medical-blue",
        description: "Meet our expert medical team"
    },
    {
        title: "Request an Appointment",
        link: "../patient-services/book-appointment.html",
        icon: "fas fa-calendar-plus",
        iconColor: "medical-teal",
        description: "Schedule consultation with specialists"
    }
];

// Cancer Screening Data
const screeningData = [
    {
        title: "Cancer Screening Packages",
        link: "../Diagnosis-&-Screening/cancer-screening-packages.html",
        icon: "fas fa-diagnoses",
        iconColor: "medical-blue",
        description: "Comprehensive early detection screenings"
    },
    {
        title: "Advanced Diagnostic Tests",
        link: "../Diagnosis-&-Screening/advanced-diagnostic-tests.html",
        icon: "fas fa-microscope",
        iconColor: "medical-teal",
        description: "State-of-the-art diagnostic services"
    }
];

// Patient Services Data
const patientServicesData = [
    {
        title: "Book an Appointment",
        link: "../patient-services/book-appointment.html",
        icon: "fas fa-calendar-check",
        iconColor: "medical-blue",
        description: "Schedule your visit"
    },
    {
        title: "Second Opinion",
        link: "../patient-services/second-opinion.html",
        icon: "fas fa-stethoscope",
        iconColor: "medical-teal",
        description: "Get expert review"
    },
    {
        title: "Insurance & Billing",
        link: "../patient-services/insurance-and-billing.html",
        icon: "fas fa-file-invoice-dollar",
        iconColor: "medical-green",
        description: "Payment information"
    },
    {
        title: "International Patients",
        link: "../patient-services/international-patients.html",
        icon: "fas fa-globe",
        iconColor: "purple",
        description: "Global care services"
    }
];

const navigationData = {
    // Cancer Care Menu Data
    cancerCare: {
        cancersWeTreat: {
            title: "Cancers We Treat",
            icon: "fas fa-stethoscope",
            color: "medical-blue",
            items: [
                { title: "Cancer-We-Treat", link: "../Cancer-We-Treat/cancerpedia-index.html" },
                {
                    title: "Cancer Specific to Women",
                    items: [
                        { title: "Breast Cancer", link: "../Cancer-We-Treat/Breast-Cancer.html" },
                        {
                            title: "Gynecologic Cancer",
                            link: "../Cancer-We-Treat/Gynecologic-Cancers.html",
                            bold: true,
                            items: [
                                { title: "Cervical Cancer", link: "../Cancer-We-Treat/Cervical-Cancer.html" },
                                { title: "Ovarian Cancer", link: "../Cancer-We-Treat/Ovarian-Cancer.html" }
                            ]
                        }
                    ]
                },
                {
                    title: "Cancer Specific to Men",
                    items: [
                        { title: "Prostate Cancer", link: "../Cancer-We-Treat/Prostate-Cancer.html" },
                        { title: "Testicular Cancer", link: "../Cancer-We-Treat/Testicular-Cancer.html" }
                    ]
                },
                {
                    title: "Other Cancers",
                    items: [
                        { title: "Paediatric Cancer", link: "../Cancer-We-Treat/Childhood-Acute-Lymphocytic-Leukemia.html" },
                        { title: "Blood Cancer", link: "../Cancer-We-Treat/Leukaemia.html" },
                        { title: "Rare Cancers", link: "../Cancer-We-Treat/Cancer-of-Unknown-Primary-CUP.html" }
                    ]
                }
            ]
        },
        organSpecific: {
            title: "Organ-specific Cancer",
            icon: "fas fa-user-md",
            color: "medical-teal",
            items: [
                { title: "Head & Neck Cancer", link: "../Cancer-We-Treat/Head-and-Neck-Cancer.html" },
                { title: "Thyroid Cancer", link: "../Cancer-We-Treat/Thyroid-Cancer.html" },
                { title: "Lung Cancer", link: "../Cancer-We-Treat/Lung-Cancer.html" },
                {
                    title: "Gastrointestinal Cancer",
                    link: "../Cancer-We-Treat/gastrointestinal-cancer.html",
                    bold: true,
                    items: [
                        { title: "Liver Tumours", link: "../Cancer-We-Treat/Liver-Cancer.html" },
                        { title: "Colorectal Cancer", link: "../Cancer-We-Treat/Colorectal-Cancer.html" },
                        { title: "Pancreatic Cancer", link: "../Cancer-We-Treat/Pancreatic-Cancer.html" }
                    ]
                },
                { title: "Brain Tumours", link: "../Cancer-We-Treat/brain-tumours.html" },
                { title: "Skin Cancer", link: "../Cancer-We-Treat/Skin-Cancer.html" },
                { title: "Kidney Cancers", link: "../Cancer-We-Treat/Kidney-Cancer.html" },
                { title: "Adrenal Tumour", link: "../Cancer-We-Treat/Adrenal-Tumours.html" }
            ]
        },
        // screening: {
        //     title: "Screening & Diagnostics",
        //     icon: "fas fa-microscope",
        //     color: "purple",
        //     items: [
        //         { title: "Screenings", link: "../Diagnosis-&-Screening/cancer-screening-packages.html" },
        //         { title: "Diagnostics", link: "../Diagnosis-&-Screening/Advanced-Diagnostic-Tests.html" }
        //     ]
        // }
    }
};

// Research & Clinical Trials Data
const researchData = [
    {
        title: "Ongoing Clinical Trials",
        link: "../research/Ongoing-Clinical-Trial.html",
        icon: "fas fa-flask",
        iconColor: "medical-blue",
        description: "Participate in groundbreaking research"
    },
    {
        title: "Research",
        link: "../research/Research.html",
        icon: "fas fa-microscope",
        iconColor: "medical-teal",
        description: "Discover our latest findings"
    }
];

// Academics Menu Data
const academicsData = [
    {
        title: "Vision & Mission",
        link: "../research/Academics.html#vision-mission",
        icon: "fas fa-bullseye",
        iconColor: "medical-blue",
        description: "Our purpose and guiding principles"
    },
    {
        title: "Milestones",
        link: "../research/Academics.html#milestones",
        icon: "fas fa-flag-checkered",
        iconColor: "medical-teal",
        description: "Key achievements and growth"
    },
    {
        title: "Courses offered",
        link: "../research/Academics.html#programmes",
        icon: "fas fa-graduation-cap",
        iconColor: "medical-teal",
        description: "Programmes and fellowships"
    },
    {
        title: "Notifications",
        link: "../research/Academics.html#notifications",
        icon: "fas fa-bell",
        iconColor: "medical-blue",
        description: "Announcements and updates"
    }
];

// Utility functions for creating HTML elements
function createElement(tag, className = '', content = '', attributes = {}) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (content) element.innerHTML = content;
    
    Object.keys(attributes).forEach(key => {
        if (key === 'target') {
            element.setAttribute(key, attributes[key]);
        } else {
            element[key] = attributes[key];
        }
    });
    
    return element;
}

function createLink(href, className = '', content = '', target = '_blank') {
    const link = createElement('a', className, content, { href, target });
    return link;
}

function createButton(className = '', content = '', onclick = '') {
    const button = createElement('button', className, content, { onclick });
    return button;
}

function createIcon(iconClass) {
    return `<i class="${iconClass}"></i>`;
}

let departmentsMenuResizeTimer;

function syncDepartmentsMenuHeight() {
    const menu = document.querySelector('.departments-menu');
    if (!menu) return;
    const grid = menu.querySelector('.departments-grid-3');
    if (!grid) return;

    const columns = grid.querySelectorAll('.mega-section');
    if (columns.length < 3) return;

    const firstCol = columns[0];
    const thirdCol = columns[2];
    const scrollArea = firstCol.querySelector('.scrollable-content');
    const heading = firstCol.querySelector('.mega-section-title');
    if (!scrollArea || !heading) return;

    firstCol.style.height = 'auto';
    scrollArea.style.height = '';
    scrollArea.style.maxHeight = '';

    const thirdHeight = thirdCol.getBoundingClientRect().height;
    if (!thirdHeight || thirdHeight <= 0) return;

    const headingStyles = window.getComputedStyle(heading);
    const headingHeight = heading.getBoundingClientRect().height;
    const headingMargins = (parseFloat(headingStyles.marginTop) || 0) +
        (parseFloat(headingStyles.marginBottom) || 0);

    const colStyles = window.getComputedStyle(firstCol);
    const colPadding = (parseFloat(colStyles.paddingTop) || 0) +
        (parseFloat(colStyles.paddingBottom) || 0);

    const available = thirdHeight - headingHeight - headingMargins - colPadding;
    if (available <= 0) return;

    firstCol.style.height = `${thirdHeight}px`;
    scrollArea.style.height = `${available}px`;
    scrollArea.style.maxHeight = `${available}px`;
}

// Main header generation function
function generateHeader() {
    const header = document.getElementById('dynamic-header');
    if (!header) return;
    
    header.innerHTML = `
        <!-- Main Navigation -->
        <nav class="main-nav" role="navigation" aria-label="Main Navigation">
            <div class="nav-container">
                <!-- Modern Slim Header Row -->
                <div class="header-top">
                        <div class="header-top-row">
                        <!-- Logo with Shankara Logo -->
                        <div class="logo-section">
                            <a href="../index.html" class="logo-link" target="_blank">
                                <div class="logo-container">
                                    <img src="../Images/Logo.webp" alt="Sri Shankara Logo" class="logo-img">
                                </div>
                            </a>
                        <!-- About Us & Contact Us -->
                        <div class="header-links">
                            <a href="../About-shankara/About-Shankara.html" class="header-link" target="_blank">About Us</a>
                            <a href="../headerbutton/contact-us.html" class="header-link" target="_blank">Contact Us</a>
                            <a href="../About-shankara/About-Shankara.html#From" class="header-link" target="_blank">Sister Institutes</a>
                        </div>
                        </div>
                            <!-- Mobile Menu Button -->
                            <button class="mobile-menu-toggle action-btn" onclick="toggleMobileMenu()" aria-label="Toggle mobile menu">
                                <svg class="mobile-menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path class="hamburger-line" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                    <path class="close-line hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                    
                    <!-- Right Side Navigation and Actions -->
                    <div class="header-right">
                        
                        <!-- Emergency Contact -->
                        <div class="emergency-contact">
                            <i class="fas fa-lightbulb emergency-icon"></i>
                            <div class="emergency-text">
                                <div class="emergency-label">Emergency</div>
                                <div class="emergency-number">080-4648 4424</div>
                            </div>
                        </div>

                        <div class="emergency-contact">
                            <i class="fas fa-calendar-check emergency-icon"></i>
                            <div class="emergency-text">
                                <div class="emergency-label">Appointment</div>
                                <div class="emergency-number">70905 21000</div>
                            </div>
                        </div>
                        
                        <!-- Action Buttons -->
                        <div class="action-buttons">
                            <div class="careers-donate-column">
                                <a href="../headerbutton/Careers.html" class="action-btn careers-btn" target="_blank">
                                    <i class="fas fa-briefcase"></i>
                                    <span>Careers</span>
                                </a>
                                <a href="../events-and-programs/index.html" class="action-btn events-btn" target="_blank">
                                    <i class="fas fa-calendar-days"></i>
                                    <span>Events</span>
                                </a>
                                <a href="../headerbutton/Donate.html" class="action-btn donate-btn" target="_blank">
                                    <i class="fas fa-heart"></i>
                                    <span>Donate</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Main Navigation Row -->
                <div class="nav-main">
                    <!-- Desktop Navigation -->
                    <div class="desktop-nav">
                        <div class="nav-items">                            
                            ${generateDepartmentsMenu()}
                            ${generateCentresMenu()}
                            ${generateDoctorsMenu()}
                            ${generateScreeningMenu()}
                            ${generatePatientServicesMenu()}
                            ${generateCancerCareMenu()}
                            ${generateAcademicsMenu()}
                            ${generateResearchMenu()}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        
        <!-- Mobile Menu -->
        <div class="mobile-menu hidden lg:hidden" id="mobileMenu">
            <div class="mobile-menu-header">
                <div class="mobile-menu-title">Menu</div>
                <button class="mobile-menu-close" onclick="toggleMobileMenu()" aria-label="Close menu">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="mobile-menu-container">
                <div class="mobile-menu-content">
                    ${generateMobileMenu()}
                </div>
            </div>
        </div>
    `;
}

// Generate Cancer Care Menu
function generateCancerCareMenu() {
    return `
        <div class="nav-item">
            <button class="nav-button" aria-expanded="false" aria-haspopup="true">
                <span>Cancer We Treat</span>
                <i class="fas fa-chevron-down nav-arrow"></i>
            </button>
            
            <!-- Cancer Encyclopedia Mega Menu -->
            <div class="mega-menu cancer-care-menu">
                <div class="mega-menu-content cancer-encyclopedia-content">
                    <!-- Header Section -->
                    <div class="cancer-encyclopedia-header">
                        <div class="cancer-encyclopedia-title">
                            
                            <h2>Cancer Encyclopedia</h2>
                        </div>
                        <p class="cancer-encyclopedia-description">Comprehensive information about all types of cancers we treat</p>
                    </div>
                    
                    <!-- Cancer Types Grid -->
                    <div class="cancer-types-grid">
                        <a href="../Cancer-We-Treat/Breast-Cancer.html" class="cancer-type-item" target="_blank">
                            <div class="cancer-type-icon cancer-icon-pink">
                                <i class="fas fa-ribbon"></i>
                            </div>
                            <span class="cancer-type-name">Breast Cancer</span>
                        </a>
                        
                        <a href="../Cancer-We-Treat/Gynecologic-Cancers.html" class="cancer-type-item" target="_blank">
                            <div class="cancer-type-icon cancer-icon-purple">
                                <i class="fas fa-venus"></i>
                            </div>
                            <span class="cancer-type-name">Gynecologic Cancer</span>
                        </a>
                        
                        <a href="../Cancer-We-Treat/Cervical-Cancer.html" class="cancer-type-item" target="_blank">
                            <div class="cancer-type-icon cancer-icon-purple-solid">
                                <i class="fas fa-ribbon"></i>
                            </div>
                            <span class="cancer-type-name">Cervical Cancer</span>
                        </a>
                        
                        <a href="../Cancer-We-Treat/Ovarian-Cancer.html" class="cancer-type-item" target="_blank">
                            <div class="cancer-type-icon cancer-icon-purple-outline">
                                <i class="fas fa-ribbon"></i>
                            </div>
                            <span class="cancer-type-name">Ovarian Cancer</span>
                        </a>
                        
                        <a href="../Cancer-We-Treat/Prostate-Cancer.html" class="cancer-type-item" target="_blank">
                            <div class="cancer-type-icon cancer-icon-blue">
                                <i class="fas fa-mars"></i>
                            </div>
                            <span class="cancer-type-name">Prostate Cancer</span>
                        </a>
                        
                        <a href="../Cancer-We-Treat/Testicular-Cancer.html" class="cancer-type-item" target="_blank">
                            <div class="cancer-type-icon cancer-icon-blue-male">
                                <i class="fas fa-ribbon"></i>
                            </div>
                            <span class="cancer-type-name">Testicular Cancer</span>
                        </a>
                        
                        <a href="../Cancer-We-Treat/Childhood-Acute-Lymphocytic-Leukemia.html" class="cancer-type-item" target="_blank">
                            <div class="cancer-type-icon cancer-icon-orange">
                                <i class="fas fa-child"></i>
                            </div>
                            <span class="cancer-type-name">Paediatric Cancer</span>
                        </a>
                        
                        <a href="../Cancer-We-Treat/Head-and-Neck-Cancer.html" class="cancer-type-item" target="_blank">
                            <div class="cancer-type-icon cancer-icon-green">
                                <i class="fas fa-user"></i>
                            </div>
                            <span class="cancer-type-name">Head & Neck Cancer</span>
                        </a>
                        
                        <a href="../Cancer-We-Treat/Thyroid-Cancer.html" class="cancer-type-item" target="_blank">
                            <div class="cancer-type-icon cancer-icon-teal">
                                <i class="fas fa-ribbon"></i>
                            </div>
                            <span class="cancer-type-name">Thyroid Cancer</span>
                        </a>
                        
                        <a href="../Cancer-We-Treat/Lung-Cancer.html" class="cancer-type-item" target="_blank">
                            <div class="cancer-type-icon cancer-icon-lung">
                                <i class="fas fa-lungs"></i>
                            </div>
                            <span class="cancer-type-name">Lung Cancer</span>
                        </a>
                        
                        <a href="../Cancer-We-Treat/gastrointestinal-cancer.html" class="cancer-type-item" target="_blank">
                            <div class="cancer-type-icon cancer-icon-grey">
                                <i class="fas fa-ribbon"></i>
                            </div>
                            <span class="cancer-type-name">Gastrointestinal Cancer</span>
                        </a>
                        
                        <a href="../Cancer-We-Treat/Liver-Cancer.html" class="cancer-type-item" target="_blank">
                            <div class="cancer-type-icon cancer-icon-black">
                                <i class="fas fa-ribbon"></i>
                            </div>
                            <span class="cancer-type-name">Liver Tumours</span>
                        </a>
                        
                        <a href="../Cancer-We-Treat/Colorectal-Cancer.html" class="cancer-type-item" target="_blank">
                            <div class="cancer-type-icon cancer-icon-red-colon">
                                <i class="fas fa-ribbon"></i>
                            </div>
                            <span class="cancer-type-name">Colorectal Cancer</span>
                        </a>
                        
                        <a href="../Cancer-We-Treat/Pancreatic-Cancer.html" class="cancer-type-item" target="_blank">
                            <div class="cancer-type-icon cancer-icon-purple-pancreas">
                                <i class="fas fa-ribbon"></i>
                            </div>
                            <span class="cancer-type-name">Pancreatic Cancer</span>
                        </a>
                        
                        <a href="../Cancer-We-Treat/brain-tumours.html" class="cancer-type-item" target="_blank">
                            <div class="cancer-type-icon cancer-icon-purple-brain">
                                <i class="fas fa-brain"></i>
                            </div>
                            <span class="cancer-type-name">Brain Tumours</span>
                        </a>
                        
                        <a href="../Cancer-We-Treat/Skin-Cancer.html" class="cancer-type-item" target="_blank">
                            <div class="cancer-type-icon cancer-icon-gold">
                                <i class="fas fa-ribbon"></i>
                            </div>
                            <span class="cancer-type-name">Skin Cancer</span>
                        </a>
                        
                        <a href="../Cancer-We-Treat/Kidney-Cancer.html" class="cancer-type-item" target="_blank">
                            <div class="cancer-type-icon cancer-icon-blue-urology">
                                <i class="fas fa-ribbon"></i>
                            </div>
                            <span class="cancer-type-name">Kidney Cancers</span>
                        </a>
                        
                        <a href="../Cancer-We-Treat/Adrenal-Tumours.html" class="cancer-type-item" target="_blank">
                            <div class="cancer-type-icon cancer-icon-dark-grey-circle">
                                <i class="fas fa-ribbon"></i>
                            </div>
                            <span class="cancer-type-name">Adrenal Tumour</span>
                        </a>
                    </div>
                    
                    <!-- View All Link -->
                    <div class="cancer-encyclopedia-footer">
                        <a href="../Cancer-We-Treat/cancerpedia-index.html" class="cancer-view-all-link" target="_blank">
                            <span>View all other cancers we treat</span>
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Generate Departments Menu
function generateDepartmentsMenu() {
    return `
        <div class="nav-item">
            <button class="nav-button" aria-expanded="false" aria-haspopup="true">
                <span>Departments</span>
                <i class="fas fa-chevron-down nav-arrow"></i>
            </button>
            
            <!-- Departments Mega Menu -->
            <div class="mega-menu departments-menu">
                <div class="mega-menu-content">
                    <div class="mega-menu-grid departments-grid-3">
                        <!-- Column 1: Cancer Specialities -->
                        <div class="mega-section">
                            <h3 class="mega-section-title medical-blue text-medical-blue">
                                <i class="fas fa-hospital text-medical-blue"></i>
                                Cancer Specialities
                            </h3>
                            <div class="mega-links scrollable-content custom-scrollbar orange-scrollbar">
                                <a href="../Departments/surgical-oncology.html" class="mega-link" target="_blank">Surgical Oncology</a>
                                <a href="../Departments/medical-oncology.html" class="mega-link" target="_blank">Medical Oncology</a>
                                <a href="../Departments/radiation-oncology.html" class="mega-link" target="_blank">Radiation Oncology</a>
                                <a href="../Departments/haemato-oncology-bmt.html" class="mega-link" target="_blank">Haemato-Oncology & BMT</a>
                                <a href="../Departments/paediatric-oncology-bmt.html" class="mega-link" target="_blank">Paediatric Oncology & BMT</a>
                                <a href="../Departments/head-and-neck-oncology.html" class="mega-link" target="_blank">Head & Neck Oncology</a>
                                <a href="../Departments/gynaecological-oncology.html" class="mega-link" target="_blank">Gynaec Oncology</a>
                                <a href="../Departments/genitourinary-oncology.html" class="mega-link" target="_blank">Genito-Urinary Oncology</a>
                                <a href="../Departments/bone-and-soft-tissue-oncology.html" class="mega-link" target="_blank">Bone & Soft Tissue Oncology</a>
                                <a href="../Departments/neuro-oncology.html" class="mega-link" target="_blank">Neuro-Oncology</a>
                                <a href="../Departments/plastic-and-reconstructive-surgery.html" class="mega-link" target="_blank">Plastic & Reconstructive Surgery</a>
                                <a href="../Departments/pain-and-palliative-care.html" class="mega-link" target="_blank">Pain & Palliative Care</a>
                                <a href="../Departments/interventional-pulmonology.html" class="mega-link" target="_blank">Interventional Pulmonology</a>
                                <a href="../Departments/ophthalmic-oncology.html" class="mega-link" target="_blank">Ophthalmic Oncology</a>
                                <a href="../Departments/onco-anaesthesiology.html" class="mega-link" target="_blank">Anaesthesiology</a>
                                <a href="../Departments/preventive-oncology.html" class="mega-link" target="_blank">Preventive Oncology</a>
                                <a href="../Departments/psycho-oncology.html" class="mega-link" target="_blank">Psycho Oncology</a>
                            </div>
                        </div>
                        
                        <!-- Column 2: Diagnostics + Clinical Specialities -->
                        <div class="mega-section">
                            <h3 class="mega-section-title purple text-purple-600">
                                <i class="fas fa-x-ray text-medical-blue"></i>
                                Diagnostics Specialities
                            </h3>
                            <div class="mega-links">
                                <a href="../Departments/radiology-and-oncologic-imaging.html" class="mega-link" target="_blank">Radiodiagnosis</a>
                                <a href="../Departments/nuclear-medicine.html" class="mega-link" target="_blank">Nuclear Medicine</a>
                                <a href="../Departments/interventional-radiology.html" class="mega-link" target="_blank">Interventional Radiology</a>
                            </div>
                            
                            <h3 class="mega-section-title medical-blue text-medical-blue" style="margin-top: 2rem;">
                                <i class="fas fa-user-md text-medical-blue"></i>
                                Clinical Specialities
                            </h3>
                            <div class="mega-links">
                                <a href="../Departments/endocrinology.html" class="mega-link" target="_blank">Endocrinology</a>
                                <a href="../Departments/cardio-oncology.html" class="mega-link" target="_blank">Cardiology</a>
                                <a href="../Departments/gastroenterology.html" class="mega-link" target="_blank">Gastroenterology</a>
                                <a href="../Departments/nephrology.html" class="mega-link" target="_blank">Nephrology</a>
                                <a href="../Departments/transfusion-medicine-and-blood-centre.html" class="mega-link" target="_blank">Transfusion Medicine<br>& Blood Centre</a>
                            </div>
                        </div>
                        
                        <!-- Column 3: Pathology & Laboratory Medicine + Supportive Services -->
                        <div class="mega-section">
                            <h3 class="mega-section-title medical-teal text-medical-teal">
                                <i class="fas fa-flask text-medical-blue"></i>
                                Pathology & Laboratory Medicine
                            </h3>
                            <div class="mega-links">
                                <a href="../Departments/histopathology.html" class="mega-link" target="_blank">Histopathology</a>
                                <a href="../Departments/haematopathology.html" class="mega-link" target="_blank">Haematopathology</a>
                                <a href="../Departments/molecular-oncology.html" class="mega-link" target="_blank">Molecular Diagnostics</a>
                                <a href="../Departments/biochemistry.html" class="mega-link" target="_blank">Biochemistry</a>
                                <a href="../Departments/microbiology-and-virology.html" class="mega-link" target="_blank">Microbiology & Virology</a>
                            </div>
                            
                            <h3 class="mega-section-title medical-green text-medical-green" style="margin-top: 2rem;">
                                <i class="fas fa-heart text-medical-blue"></i>
                                Supportive Services
                            </h3>
                            <div class="mega-links">
                                <a href="../Departments/domiciliary-care.html" class="mega-link" target="_blank">Domiciliary Care</a>
                                <a href="../Departments/clinical-pharmacology.html" class="mega-link" target="_blank">Clinical Pharmacology</a>
                                <a href="../Departments/physiotherapy-and-rehabilitation.html" class="mega-link" target="_blank">Physiotherapy & Rehabilitation</a>
                                <a href="../Departments/nutrition-and-dietetics.html" class="mega-link" target="_blank">Nutrition & Dietetics</a>
                                <a href="../Departments/speech-and-swallowing-therapy.html" class="mega-link" target="_blank">Speech & Swallowing Therapy</a>
                                <a href="../Departments/integrative-oncology.html" class="mega-link" target="_blank">Integrative Oncology</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Generate Centres of Excellence Menu
function generateCentresMenu() {
    const centresItems = centresData.map(centre => `
        <a href="${centre.link}" class="centres-item">
            <div class="centres-icon ${centre.iconColor}">
                <i class="${centre.icon}"></i>
            </div>
            <div class="centres-content">
                <h4 class="centres-title">${centre.title}</h4>
                <p class="centres-desc">${centre.description}</p>
            </div>
        </a>
    `).join('');

    return `
        <div class="nav-item">
            <button class="nav-button" aria-expanded="false" aria-haspopup="true">
                <span>Centres of Excellence</span>
                <i class="fas fa-chevron-down nav-arrow"></i>
            </button>
            
            <!-- Centres of Excellence Dropdown Menu -->
            <div class="mega-menu centres-menu">
                <div class="mega-menu-content">
                    <div class="mega-links">
                        ${centresItems}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Generate Doctors & Specialists Menu
function generateDoctorsMenu() {
    const doctorsItems = doctorsData.map(doctor => `
        <a href="${doctor.link}" class="doctors-item">
            <div class="doctors-icon ${doctor.iconColor}">
                <i class="${doctor.icon}"></i>
            </div>
            <div class="doctors-content">
                <h4 class="doctors-title">${doctor.title}</h4>
                <p class="doctors-desc">${doctor.description}</p>
            </div>
            <i class="fas fa-arrow-right doctors-arrow"></i>
        </a>
    `).join('');

    return `
        <div class="nav-item">
            <button class="nav-button" aria-expanded="false" aria-haspopup="true">
                <span>Doctors & Specialists</span>
                <i class="fas fa-chevron-down nav-arrow"></i>
            </button>
            
            <!-- Doctors Dropdown Menu -->
            <div class="mega-menu centres-menu">
                <div class="mega-menu-content">
                    <div class="mega-links">
                        ${doctorsItems}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Generate Cancer Screening Menu
function generateScreeningMenu() {
    const screeningItems = screeningData.map(screening => `
        <a href="${screening.link}" class="doctors-item">
            <div class="doctors-icon ${screening.iconColor}">
                <i class="${screening.icon}"></i>
            </div>
            <div class="doctors-content">
                <h4 class="doctors-title">${screening.title}</h4>
                <p class="doctors-desc">${screening.description}</p>
            </div>
            <i class="fas fa-arrow-right doctors-arrow"></i>
        </a>
    `).join('');

    return `
        <div class="nav-item">
            <button class="nav-button" aria-expanded="false" aria-haspopup="true">
                <span>Cancer Screening</span>
                <i class="fas fa-chevron-down nav-arrow"></i>
            </button>
            
            <!-- Cancer Screening Dropdown -->
            <div class="mega-menu centres-menu">
                <div class="mega-menu-content">
                    <div class="mega-links">
                        ${screeningItems}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Generate Patient Services Menu
function generatePatientServicesMenu() {
    const patientItems = patientServicesData.map(service => `
        <a href="${service.link}" class="patient-item">
            <div class="patient-icon ${service.iconColor}">
                <i class="${service.icon}"></i>
            </div>
            <div class="patient-content">
                <h4 class="patient-title">${service.title}</h4>
                <p class="patient-desc">${service.description}</p>
            </div>
        </a>
    `).join('');

    return `
        <div class="nav-item">
            <button class="nav-button" aria-expanded="false" aria-haspopup="true">
                <span>Patient Services</span>
                <i class="fas fa-chevron-down nav-arrow"></i>
            </button>
            
            <!-- Patient Services Dropdown -->
            <div class="mega-menu centres-menu">
                <div class="mega-menu-content">
                    <div class="mega-links">
                        ${patientItems}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Generate Academics Menu
function generateAcademicsMenu() {
    const academicsItems = academicsData.map(item => `
        <a href="${item.link}" class="doctors-item" target="_blank">
            <div class="doctors-icon ${item.iconColor}">
                <i class="${item.icon}"></i>
            </div>
            <div class="doctors-content">
                <h4 class="doctors-title">${item.title}</h4>
                <p class="doctors-desc">${item.description}</p>
            </div>
            <i class="fas fa-arrow-right doctors-arrow"></i>
        </a>
    `).join('');

    return `
        <div class="nav-item">
            <button class="nav-button" aria-expanded="false" aria-haspopup="true">
                <span>Academics</span>
                <i class="fas fa-chevron-down nav-arrow"></i>
            </button>
            
            <!-- Academics Dropdown -->
            <div class="mega-menu research-menu">
                <div class="mega-menu-content">
                    <div class="mega-links">
                        ${academicsItems}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Generate Research & Clinical Trials Menu
function generateResearchMenu() {
    const researchItems = researchData.map(research => `
        <a href="${research.link}" class="doctors-item">
            <div class="doctors-icon ${research.iconColor}">
                <i class="${research.icon}"></i>
            </div>
            <div class="doctors-content">
                <h4 class="doctors-title">${research.title}</h4>
                <p class="doctors-desc">${research.description}</p>
            </div>
            <i class="fas fa-arrow-right doctors-arrow"></i>
        </a>
    `).join('');

    return `
        <div class="nav-item">
            <button class="nav-button" aria-expanded="false" aria-haspopup="true">
                <span>Research & Clinical Trials</span>
                <i class="fas fa-chevron-down nav-arrow"></i>
            </button>
            
            <!-- Research Dropdown -->
            <div class="mega-menu research-menu">
                <div class="mega-menu-content">
                    <div class="mega-links">
                        ${researchItems}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Generate Mobile Menu
function generateMobileMenu() {
    return `
        <div class="space-y-2">
            <!-- Mobile Top Navigation Links -->
            <div class="mobile-top-buttons">
                <a href="../About-shankara/About-Shankara.html#From" class="mobile-top-button" target="_blank">
                    <i class="fas fa-info-circle"></i>
                    <span>About Us</span>
                </a>
                <a href="../headerbutton/contact-us.html" class="mobile-top-button" target="_blank">
                    <i class="fas fa-phone"></i>
                    <span>Contact Us</span>
                </a>
                <a href="../About-shankara/About-Shankara.html#From" class="mobile-top-button" target="_blank">
                    <i class="fas fa-phone"></i>
                    <span>Sister Institutes</span>
                </a>
            </div>
            
            <!-- Mobile Contact Information -->
            <div class="mobile-contact-info">
                <div class="mobile-contact-card">
                    <div class="mobile-contact-label-wrapper">
                        <i class="fas fa-lightbulb"></i>
                        <div class="mobile-contact-label">Emergency</div>
                    </div>
                    <div class="mobile-contact-number">080-4648 4424</div>
                </div>
                <div class="mobile-contact-card">
                    <div class="mobile-contact-label-wrapper">
                        <i class="fas fa-calendar-check"></i>
                        <div class="mobile-contact-label">Appointment</div>
                    </div>
                    <div class="mobile-contact-number">70905 21000</div>
                </div>
            </div>
            
            <!-- Mobile Action Buttons -->
            <div class="mobile-action-buttons">
                <a href="../headerbutton/Careers.html" class="mobile-action-button careers" target="_blank">
                    <i class="fas fa-briefcase"></i>
                    <span>Careers</span>
                </a>
                <a href="../events-and-programs/index.html" class="mobile-action-button events" target="_blank">
                    <i class="fas fa-calendar-days"></i>
                    <span>Events &amp; Programs</span>
                </a>
                <a href="../headerbutton/Donate.html" class="mobile-action-button donate" target="_blank">
                    <i class="fas fa-heart"></i>
                    <span>Donate / CSR</span>
                </a>
            </div>
            
            <!-- Mobile Navigation Links with Sub-menus -->
            <div class="space-y-2">                
                ${generateMobileDepartmentsMenu()}
                ${generateMobileCentresMenu()}
                ${generateMobileDoctorsMenu()}
                ${generateMobileScreeningMenu()}
                ${generateMobilePatientServicesMenu()}
                ${generateMobileCancerCareMenu()}
                ${generateMobileAcademicsMenu()}
                ${generateMobileResearchMenu()}
            </div>
        </div>
    `;
}

// Generate Mobile Departments Menu
function generateMobileDepartmentsMenu() {
    return `
        <!-- Departments -->
        <div class="mobile-menu-item">
            <button class="w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg" onclick="toggleMobileSubmenu('departments')">
                <div class="flex items-center">
                    <i class="fas fa-hospital mr-3 text-medical-blue"></i>Departments
                </div>
                <i class="fas fa-chevron-down text-sm mobile-nav-arrow" id="departments-arrow"></i>
            </button>
            <div class="mobile-submenu hidden" id="departments-submenu">
                <!-- Cancer Specialities -->
                <div class="mb-3">
                    <h4 class="font-semibold text-gray-800 mb-2 text-sm">Cancer Specialities</h4>
                    <div class="pl-3 space-y-1">
                        <a href="../Departments/surgical-oncology.html" class="block py-1 px-2 text-xs text-gray-600 hover:text-orange-600" target="_blank">Surgical Oncology</a>
                        <a href="../Departments/medical-oncology.html" class="block py-1 px-2 text-xs text-gray-600 hover:text-orange-600" target="_blank">Medical Oncology</a>
                        <a href="../Departments/radiation-oncology.html" class="block py-1 px-2 text-xs text-gray-600 hover:text-orange-600" target="_blank">Radiation Oncology</a>
                        <a href="../Departments/haemato-oncology-bmt.html" class="block py-1 px-2 text-xs text-gray-600 hover:text-orange-600" target="_blank">Haemato-Oncology & BMT</a>
                        <a href="../Departments/paediatric-oncology-bmt.html" class="block py-1 px-2 text-xs text-gray-600 hover:text-orange-600" target="_blank">Paediatric Oncology & BMT</a>
                        <a href="../Departments/head-and-neck-oncology.html" class="block py-1 px-2 text-xs text-gray-600 hover:text-orange-600" target="_blank">Head & Neck Oncology</a>
                        <a href="../Departments/gynaecological-oncology.html" class="block py-1 px-2 text-xs text-gray-600 hover:text-orange-600" target="_blank">Gynaec Oncology</a>
                        <a href="../Departments/genitourinary-oncology.html" class="block py-1 px-2 text-xs text-gray-600 hover:text-orange-600" target="_blank">Genito-Urinary Oncology</a>
                        <a href="../Departments/bone-and-soft-tissue-oncology.html" class="block py-1 px-2 text-xs text-gray-600 hover:text-orange-600" target="_blank">Bone & Soft Tissue Oncology</a>
                        <a href="../Departments/neuro-oncology.html" class="block py-1 px-2 text-xs text-gray-600 hover:text-orange-600" target="_blank">Neuro-Oncology</a>
                        <a href="../Departments/plastic-and-reconstructive-surgery.html" class="block py-1 px-2 text-xs text-gray-600 hover:text-orange-600" target="_blank">Plastic & Reconstructive Surgery</a>
                        <a href="../Departments/interventional-pulmonology.html" class="block py-1 px-2 text-xs text-gray-600 hover:text-orange-600" target="_blank">Interventional Pulmonology</a>
                        <a href="../Departments/pain-and-palliative-care.html" class="block py-1 px-2 text-xs text-gray-600 hover:text-orange-600" target="_blank">Pain & Palliative Care</a>
                        <a href="../Departments/ophthalmic-oncology.html" class="block py-1 px-2 text-xs text-gray-600 hover:text-orange-600" target="_blank">Ophthalmic Oncology</a>
                        <a href="../Departments/onco-anaesthesiology.html" class="block py-1 px-2 text-xs text-gray-600 hover:text-orange-600" target="_blank">Anaesthesiology</a>
                        <a href="../Departments/preventive-oncology.html" class="block py-1 px-2 text-xs text-gray-600 hover:text-orange-600" target="_blank">Preventive Oncology</a>
                        <a href="../Departments/psycho-oncology.html" class="block py-1 px-2 text-xs text-gray-600 hover:text-orange-600" target="_blank">Psycho Oncology</a>
                    </div>
                </div>
                
                <!-- Diagnostics Specialities -->
                <div class="mb-3">
                    <h4 class="font-semibold text-gray-800 mb-2 text-sm">Diagnostics Specialities</h4>
                    <div class="pl-3 space-y-1">
                        <a href="../Departments/radiology-and-oncologic-imaging.html" class="block py-1 px-2 text-xs text-gray-600 hover:text-orange-600" target="_blank">Radiodiagnosis</a>
                        <a href="../Departments/nuclear-medicine.html" class="block py-1 px-2 text-xs text-gray-600 hover:text-orange-600" target="_blank">Nuclear Medicine</a>
                        <a href="../Departments/interventional-radiology.html" class="block py-1 px-2 text-xs text-gray-600 hover:text-orange-600" target="_blank">Interventional Radiology</a>
                    </div>
                </div>
                
                <!-- Clinical Specialities -->
                <div class="mb-3">
                    <h4 class="font-semibold text-gray-800 mb-2 text-sm">Clinical Specialities</h4>
                    <div class="pl-3 space-y-1">
                        <a href="../Departments/endocrinology.html" class="block py-1 px-2 text-xs text-gray-600 hover:text-orange-600" target="_blank">Endocrinology</a>
                        <a href="../Departments/cardio-oncology.html" class="block py-1 px-2 text-xs text-gray-600 hover:text-orange-600" target="_blank">Cardiology</a>
                        <a href="../Departments/gastroenterology.html" class="block py-1 px-2 text-xs text-gray-600 hover:text-orange-600" target="_blank">Gastroenterology</a>
                        <a href="../Departments/nephrology.html" class="block py-1 px-2 text-xs text-gray-600 hover:text-orange-600" target="_blank">Nephrology</a>
                        <a href="../Departments/transfusion-medicine-and-blood-centre.html" class="block py-1 px-2 text-xs text-gray-600 hover:text-orange-600" target="_blank">Transfusion Medicine<br>& Blood Centre</a>
                    </div>
                </div>
                
                <!-- Pathology & Laboratory Medicine -->
                <div class="mb-3">
                    <h4 class="font-semibold text-gray-800 mb-2 text-sm">Pathology & Laboratory Medicine</h4>
                    <div class="pl-3 space-y-1">
                        <a href="../Departments/histopathology.html" class="block py-1 px-2 text-xs text-gray-600 hover:text-orange-600" target="_blank">Histopathology</a>
                        <a href="../Departments/haematopathology.html" class="block py-1 px-2 text-xs text-gray-600 hover:text-orange-600" target="_blank">Haematopathology</a>
                        <a href="../Departments/molecular-oncology.html" class="block py-1 px-2 text-xs text-gray-600 hover:text-orange-600" target="_blank">Molecular Diagnostics</a>
                        <a href="../Departments/biochemistry.html" class="block py-1 px-2 text-xs text-gray-600 hover:text-orange-600" target="_blank">Biochemistry</a>
                        <a href="../Departments/microbiology-and-virology.html" class="block py-1 px-2 text-xs text-gray-600 hover:text-orange-600" target="_blank">Microbiology & Virology</a>
                    </div>
                </div>
                
                <!-- Supportive Services -->
                <div class="mb-3">
                    <h4 class="font-semibold text-gray-800 mb-2 text-sm">Supportive Services</h4>
                    <div class="pl-3 space-y-1">
                        <a href="../Departments/domiciliary-care.html" class="block py-1 px-2 text-xs text-gray-600 hover:text-orange-600" target="_blank">Domiciliary Care</a>
                        <a href="../Departments/clinical-pharmacology.html" class="block py-1 px-2 text-xs text-gray-600 hover:text-orange-600" target="_blank">Clinical Pharmacology</a>
                        <a href="../Departments/physiotherapy-and-rehabilitation.html" class="block py-1 px-2 text-xs text-gray-600 hover:text-orange-600" target="_blank">Physiotherapy & Rehabilitation</a>
                        <a href="../Departments/nutrition-and-dietetics.html" class="block py-1 px-2 text-xs text-gray-600 hover:text-orange-600" target="_blank">Nutrition & Dietetics</a>
                        <a href="../Departments/speech-and-swallowing-therapy.html" class="block py-1 px-2 text-xs text-gray-600 hover:text-orange-600" target="_blank">Speech & Swallowing Therapy</a>
                        <a href="../Departments/integrative-oncology.html" class="block py-1 px-2 text-xs text-gray-600 hover:text-orange-600" target="_blank">Integrative Oncology</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Generate Mobile Centres Menu
function generateMobileCentresMenu() {
    const iconColorMap = {
        'medical-blue': '#2E8B57',
        'pink': '#ec4899',
        'blue': '#3b82f6',
        'medical-teal': '#0891b2',
        'green': '#10b981',
        'orange': '#f97316',
        'purple': '#8b5cf6'
    };
    
    const centresItems = centresData.map(centre => {
        const bgColor = iconColorMap[centre.iconColor] || '#2E8B57';
        return `
        <a href="${centre.link}" class="mobile-centre-item">
            <div class="mobile-centre-icon" style="background-color: ${bgColor};">
                <i class="${centre.icon}"></i>
            </div>
            <div class="mobile-centre-content">
                <div class="mobile-centre-title">${centre.title}</div>
                <div class="mobile-centre-desc">${centre.description}</div>
            </div>
        </a>
    `;
    }).join('');

    return `
        <!-- Centres of Excellence -->
        <div class="mobile-menu-item">
            <button class="w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg" onclick="toggleMobileSubmenu('centres')">
                <div class="flex items-center">
                    <i class="fas fa-award mr-3 text-medical-blue"></i>Centres of Excellence
                </div>
                <i class="fas fa-chevron-down text-sm mobile-nav-arrow" id="centres-arrow"></i>
            </button>
            <div class="mobile-submenu hidden" id="centres-submenu">
                <div class="space-y-1">
                    ${centresItems}
                </div>
            </div>
        </div>
    `;
}

// Generate Mobile Doctors Menu
function generateMobileDoctorsMenu() {
    const iconColorMap = {
        'medical-blue': '#2E8B57',
        'medical-teal': '#0891b2',
        'pink': '#ec4899',
        'blue': '#3b82f6',
        'green': '#10b981',
        'orange': '#f97316'
    };
    
    const doctorsItems = doctorsData.map(doctor => {
        const bgColor = iconColorMap[doctor.iconColor] || '#2E8B57';
        return `
        <a href="${doctor.link}" class="mobile-doctor-item">
            <div class="mobile-doctor-icon" style="background-color: ${bgColor};">
                <i class="${doctor.icon}"></i>
            </div>
            <div class="mobile-doctor-content">
                <div class="mobile-doctor-title">${doctor.title}</div>
                <div class="mobile-doctor-desc">${doctor.description}</div>
            </div>
        </a>
    `;
    }).join('');

    return `
        <!-- Doctors & Specialists -->
        <div class="mobile-menu-item">
            <button class="w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg" onclick="toggleMobileSubmenu('doctors')">
                <div class="flex items-center">
                    <i class="fas fa-user-md mr-3 text-medical-blue"></i>Doctors & Specialists
                </div>
                <i class="fas fa-chevron-down text-sm mobile-nav-arrow" id="doctors-arrow"></i>
            </button>
            <div class="mobile-submenu hidden" id="doctors-submenu">
                <div class="space-y-1">
                    ${doctorsItems}
                </div>
            </div>
        </div>
    `;
}

// Generate Mobile Cancer Screening Menu
function generateMobileScreeningMenu() {
    const iconColorMap = {
        'medical-blue': '#2E8B57',
        'medical-teal': '#0891b2'
    };
    
    const screeningItems = screeningData.map(screening => {
        const bgColor = iconColorMap[screening.iconColor] || '#2E8B57';
        return `
        <a href="${screening.link}" class="mobile-screening-item">
            <div class="mobile-screening-icon" style="background-color: ${bgColor};">
                <i class="${screening.icon}"></i>
            </div>
            <div class="mobile-screening-content">
                <div class="mobile-screening-title">${screening.title}</div>
                <div class="mobile-screening-desc">${screening.description}</div>
            </div>
        </a>
    `;
    }).join('');

    return `
        <!-- Cancer Screening -->
        <div class="mobile-menu-item">
            <button class="w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg" onclick="toggleMobileSubmenu('screening')">
                <div class="flex items-center">
                    <i class="fas fa-search mr-3 text-medical-blue"></i>Cancer Screening
                </div>
                <i class="fas fa-chevron-down text-sm mobile-nav-arrow" id="screening-arrow"></i>
            </button>
            <div class="mobile-submenu hidden" id="screening-submenu">
                <div class="space-y-1">
                    ${screeningItems}
                </div>
            </div>
        </div>
    `;
}

// Generate Mobile Patient Services Menu
function generateMobilePatientServicesMenu() {
    const iconColorMap = {
        'medical-blue': '#2E8B57',
        'medical-teal': '#0891b2',
        'medical-green': '#059669',
        'purple': '#7c3aed'
    };
    
    const patientItems = patientServicesData.map(service => {
        const bgColor = iconColorMap[service.iconColor] || '#2E8B57';
        return `
        <a href="${service.link}" class="mobile-patient-item">
            <div class="mobile-patient-icon" style="background-color: ${bgColor};">
                <i class="${service.icon}"></i>
            </div>
            <div class="mobile-patient-content">
                <div class="mobile-patient-title">${service.title}</div>
                <div class="mobile-patient-desc">${service.description}</div>
            </div>
        </a>
    `;
    }).join('');

    return `
        <!-- Patient Services -->
        <div class="mobile-menu-item">
            <button class="w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg" onclick="toggleMobileSubmenu('patient-services')">
                <div class="flex items-center">
                    <i class="fas fa-heart mr-3 text-medical-blue"></i>Patient Services
                </div>
                <i class="fas fa-chevron-down text-sm mobile-nav-arrow" id="patient-services-arrow"></i>
            </button>
            <div class="mobile-submenu hidden" id="patient-services-submenu">
                <div class="space-y-1">
                    ${patientItems}
                </div>
            </div>
        </div>
    `;
}

// Generate Mobile Cancer Care Menu
function generateMobileCancerCareMenu() {
    return `
        <!-- Cancer Care -->
        <div class="mobile-menu-item">
            <button class="w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg" onclick="toggleMobileSubmenu('cancer-care')">
                <div class="flex items-center">
                    <i class="fas fa-stethoscope mr-3 text-medical-blue"></i>Cancer We Treat
                </div>
                <i class="fas fa-chevron-down text-sm mobile-nav-arrow" id="cancer-care-arrow"></i>
            </button>
            <div class="mobile-submenu hidden" id="cancer-care-submenu">
                <!-- Cancer Encyclopedia Header -->
                <div class="mobile-cancer-encyclopedia-header mb-3 pb-3 border-b border-gray-200">
                    <div class="flex items-center gap-2 mb-2">
                        <div class="w-6 h-6 bg-medical-green rounded flex items-center justify-center">
                            <i class="fas fa-plus text-white text-xs"></i>
                        </div>
                        <h3 class="text-base font-bold text-gray-900">Cancer Encyclopedia</h3>
                    </div>
                    <p class="text-xs text-gray-600 pl-8">Comprehensive information about all types of cancers we treat</p>
                </div>
                
                <!-- Cancer Types Grid for Mobile -->
                <div class="mobile-cancer-types-grid">
                    <a href="../Cancer-We-Treat/Breast-Cancer.html" class="mobile-cancer-type-item" target="_blank">
                        <div class="mobile-cancer-icon bg-pink-500">
                            <i class="fas fa-ribbon text-white text-sm"></i>
                        </div>
                        <span class="mobile-cancer-name">Breast Cancer</span>
                    </a>
                    
                    <a href="../Cancer-We-Treat/Gynecologic-Cancers.html" class="mobile-cancer-type-item" target="_blank">
                        <div class="mobile-cancer-icon bg-purple-600">
                            <i class="fas fa-venus text-white text-sm"></i>
                        </div>
                        <span class="mobile-cancer-name">Gynecologic Cancer</span>
                    </a>
                    
                    <a href="../Cancer-We-Treat/Cervical-Cancer.html" class="mobile-cancer-type-item" target="_blank">
                        <div class="mobile-cancer-icon bg-teal-600">
                            <i class="fas fa-ribbon text-white text-sm"></i>
                        </div>
                        <span class="mobile-cancer-name">Cervical Cancer</span>
                    </a>
                    
                    <a href="../Cancer-We-Treat/Ovarian-Cancer.html" class="mobile-cancer-type-item" target="_blank">
                        <div class="mobile-cancer-icon bg-purple-600 border-2 border-white">
                            <i class="fas fa-ribbon text-white text-sm"></i>
                        </div>
                        <span class="mobile-cancer-name">Ovarian Cancer</span>
                    </a>
                    
                    <a href="../Cancer-We-Treat/Prostate-Cancer.html" class="mobile-cancer-type-item" target="_blank">
                        <div class="mobile-cancer-icon bg-blue-500">
                            <i class="fas fa-mars text-white text-sm"></i>
                        </div>
                        <span class="mobile-cancer-name">Prostate Cancer</span>
                    </a>
                    
                    <a href="../Cancer-We-Treat/Testicular-Cancer.html" class="mobile-cancer-type-item" target="_blank">
                        <div class="mobile-cancer-icon bg-blue-600">
                            <i class="fas fa-ribbon text-white text-sm"></i>
                        </div>
                        <span class="mobile-cancer-name">Testicular Cancer</span>
                    </a>
                    
                    <a href="../Cancer-We-Treat/Childhood-Acute-Lymphocytic-Leukemia.html" class="mobile-cancer-type-item" target="_blank">
                        <div class="mobile-cancer-icon bg-orange-500">
                            <i class="fas fa-child text-white text-sm"></i>
                        </div>
                        <span class="mobile-cancer-name">Paediatric Cancer</span>
                    </a>
                    
                    <a href="../Cancer-We-Treat/Head-and-Neck-Cancer.html" class="mobile-cancer-type-item" target="_blank">
                        <div class="mobile-cancer-icon bg-medical-green">
                            <i class="fas fa-user text-white text-sm"></i>
                        </div>
                        <span class="mobile-cancer-name">Head & Neck Cancer</span>
                    </a>
                    
                    <a href="../Cancer-We-Treat/Thyroid-Cancer.html" class="mobile-cancer-type-item" target="_blank">
                        <div class="mobile-cancer-icon bg-medical-teal">
                            <i class="fas fa-ribbon text-white text-sm"></i>
                        </div>
                        <span class="mobile-cancer-name">Thyroid Cancer</span>
                    </a>
                    
                    <a href="../Cancer-We-Treat/Lung-Cancer.html" class="mobile-cancer-type-item" target="_blank">
                        <div class="mobile-cancer-icon bg-slate-600">
                            <i class="fas fa-lungs text-white text-sm"></i>
                        </div>
                        <span class="mobile-cancer-name">Lung Cancer</span>
                    </a>
                    
                    <a href="../Cancer-We-Treat/gastrointestinal-cancer.html" class="mobile-cancer-type-item" target="_blank">
                        <div class="mobile-cancer-icon bg-gray-500">
                            <i class="fas fa-ribbon text-white text-sm"></i>
                        </div>
                        <span class="mobile-cancer-name">Gastrointestinal Cancer</span>
                    </a>
                    
                    <a href="../Cancer-We-Treat/Liver-Cancer.html" class="mobile-cancer-type-item" target="_blank">
                        <div class="mobile-cancer-icon bg-gray-800">
                            <i class="fas fa-ribbon text-white text-sm"></i>
                        </div>
                        <span class="mobile-cancer-name">Liver Tumours</span>
                    </a>
                    
                    <a href="../Cancer-We-Treat/Colorectal-Cancer.html" class="mobile-cancer-type-item" target="_blank">
                        <div class="mobile-cancer-icon bg-red-700">
                            <i class="fas fa-ribbon text-white text-sm"></i>
                        </div>
                        <span class="mobile-cancer-name">Colorectal Cancer</span>
                    </a>
                    
                    <a href="../Cancer-We-Treat/Pancreatic-Cancer.html" class="mobile-cancer-type-item" target="_blank">
                        <div class="mobile-cancer-icon bg-purple-600">
                            <i class="fas fa-ribbon text-white text-sm"></i>
                        </div>
                        <span class="mobile-cancer-name">Pancreatic Cancer</span>
                    </a>
                    
                    <a href="../Cancer-We-Treat/brain-tumours.html" class="mobile-cancer-type-item" target="_blank">
                        <div class="mobile-cancer-icon bg-indigo-600">
                            <i class="fas fa-brain text-white text-sm"></i>
                        </div>
                        <span class="mobile-cancer-name">Brain Tumours</span>
                    </a>
                    
                    <a href="../Cancer-We-Treat/Skin-Cancer.html" class="mobile-cancer-type-item" target="_blank">
                        <div class="mobile-cancer-icon bg-amber-500">
                            <i class="fas fa-ribbon text-white text-sm"></i>
                        </div>
                        <span class="mobile-cancer-name">Skin Cancer</span>
                    </a>
                    
                    <a href="../Cancer-We-Treat/Kidney-Cancer.html" class="mobile-cancer-type-item" target="_blank">
                        <div class="mobile-cancer-icon bg-blue-600">
                            <i class="fas fa-ribbon text-white text-sm"></i>
                        </div>
                        <span class="mobile-cancer-name">Kidney Cancers</span>
                    </a>
                    
                    <a href="../Cancer-We-Treat/Adrenal-Tumours.html" class="mobile-cancer-type-item" target="_blank">
                        <div class="mobile-cancer-icon bg-gray-700">
                            <i class="fas fa-ribbon text-white text-sm"></i>
                        </div>
                        <span class="mobile-cancer-name">Adrenal Tumour</span>
                    </a>
                </div>
                
                <!-- View All Link -->
                <div class="mt-4 pt-3 border-t border-gray-200 text-center">
                    <a href="../Cancer-We-Treat/cancerpedia-index.html" class="inline-flex items-center gap-2 text-medical-green font-semibold text-sm hover:text-medical-blue" target="_blank">
                        <span>View all other cancers we treat</span>
                        <i class="fas fa-arrow-right text-xs"></i>
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Generate Mobile Academics Menu
function generateMobileAcademicsMenu() {
    const iconColorMap = {
        'medical-blue': '#2E8B57',
        'medical-teal': '#0891b2'
    };

    const academicsItems = academicsData.map(item => {
        const bgColor = iconColorMap[item.iconColor] || '#2E8B57';
        return `
        <a href="${item.link}" class="mobile-research-item" target="_blank">
            <div class="mobile-research-icon" style="background-color: ${bgColor};">
                <i class="${item.icon}"></i>
            </div>
            <div class="mobile-research-content">
                <div class="mobile-research-title">${item.title}</div>
                <div class="mobile-research-desc">${item.description}</div>
            </div>
        </a>
    `;
    }).join('');

    return `
        <!-- Academics -->
        <div class="mobile-menu-item">
            <button class="w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg" onclick="toggleMobileSubmenu('academics')">
                <div class="flex items-center flex-1 min-w-0">
                    <i class="fas fa-graduation-cap mr-3 text-medical-blue flex-shrink-0"></i>
                    <span class="truncate">Academics</span>
                </div>
                <i class="fas fa-chevron-down text-sm mobile-nav-arrow flex-shrink-0" id="academics-arrow"></i>
            </button>
            <div class="mobile-submenu hidden" id="academics-submenu">
                <div class="space-y-1">
                    ${academicsItems}
                </div>
            </div>
        </div>
    `;
}

// Generate Mobile Research Menu
function generateMobileResearchMenu() {
    const iconColorMap = {
        'medical-blue': '#2E8B57',
        'medical-teal': '#0891b2'
    };
    
    const researchItems = researchData.map(research => {
        const bgColor = iconColorMap[research.iconColor] || '#2E8B57';
        return `
        <a href="${research.link}" class="mobile-research-item">
            <div class="mobile-research-icon" style="background-color: ${bgColor};">
                <i class="${research.icon}"></i>
            </div>
            <div class="mobile-research-content">
                <div class="mobile-research-title">${research.title}</div>
                <div class="mobile-research-desc">${research.description}</div>
            </div>
        </a>
    `;
    }).join('');

    return `
        <!-- Research & Clinical Trials -->
        <div class="mobile-menu-item">
            <button class="w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg" onclick="toggleMobileSubmenu('research')">
                <div class="flex items-center flex-1 min-w-0">
                    <i class="fas fa-flask mr-3 text-medical-blue flex-shrink-0"></i>
                    <span class="truncate">Research & Clinical Trials</span>
                </div>
                <i class="fas fa-chevron-down text-sm mobile-nav-arrow flex-shrink-0" id="research-arrow"></i>
            </button>
            <div class="mobile-submenu hidden" id="research-submenu">
                <div class="space-y-1">
                    ${researchItems}
                </div>
            </div>
        </div>
    `;
}

// Mobile Menu Toggle Functions - Define early for global access
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (!mobileMenu) {
        console.error('Mobile menu element not found');
        return;
    }
    
    const hamburgerLine = document.querySelector('.hamburger-line');
    const closeLine = document.querySelector('.close-line');
    const body = document.body;
    
    // Check if menu is currently hidden
    const isHidden = mobileMenu.classList.contains('hidden') ||
                     window.getComputedStyle(mobileMenu).display === 'none';
    
    if (isHidden) {
        // Open menu
        mobileMenu.classList.remove('hidden');
        // Force all styles with !important via inline styles
        mobileMenu.style.cssText = 'display: block !important; visibility: visible !important; opacity: 1 !important; position: fixed !important; top: 0 !important; left: 0 !important; right: 0 !important; bottom: 0 !important; width: 100% !important; height: 100vh !important; z-index: 99999 !important; background: white !important; overflow-y: auto !important; padding: 0 !important; margin: 0 !important; max-height: none !important;';
        if (hamburgerLine) hamburgerLine.classList.add('hidden');
        if (closeLine) closeLine.classList.remove('hidden');
        // Prevent body scroll
        body.classList.add('menu-open');
        console.log('Mobile menu opened');
    } else {
        // Close menu
        mobileMenu.classList.add('hidden');
        mobileMenu.style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important;';
        if (hamburgerLine) hamburgerLine.classList.remove('hidden');
        if (closeLine) closeLine.classList.add('hidden');
        // Restore body scroll
        body.classList.remove('menu-open');
        console.log('Mobile menu closed');
    }
}

// Make function globally accessible immediately
window.toggleMobileMenu = toggleMobileMenu;

function toggleMobileSubmenu(menuId) {
    const submenu = document.getElementById(menuId + '-submenu');
    const arrow = document.getElementById(menuId + '-arrow');
    
    if (submenu && arrow) {
        const isHidden = submenu.classList.contains('hidden');
        
        if (isHidden) {
            submenu.classList.remove('hidden');
            submenu.classList.add('show');
            arrow.classList.add('rotated');
        } else {
            submenu.classList.add('hidden');
            submenu.classList.remove('show');
            arrow.classList.remove('rotated');
        }
    }
}

// Make function globally accessible immediately
window.toggleMobileSubmenu = toggleMobileSubmenu;

// Advanced mobile submenu toggle with accordion behavior
window.toggleMobileSubSubmenu = function(menuId) {
    const submenu = document.getElementById(menuId + '-submenu');
    const arrow = document.getElementById(menuId + '-arrow');
    
    if (submenu && arrow) {
        const isHidden = submenu.classList.contains('hidden');
        
        // Define the main accordion groups (top-level menus in Cancer Care)
        const accordionGroups = [
            'cancers-treat',
            'screening'
        ];
        
        // Define the cancer category accordion groups (within Cancers We Treat)
        const cancerCategoryGroups = [
            'women-cancers',
            'men-cancers',
            'other-cancers',
            'organ-cancers'
        ];
        
        // Check if this is a main accordion group
        const isMainGroup = accordionGroups.includes(menuId);
        const isCancerCategoryGroup = cancerCategoryGroups.includes(menuId);
        
        if (isMainGroup) {
            // Accordion behavior for main groups
            if (isHidden) {
                // Close all other main groups first
                accordionGroups.forEach(groupId => {
                    if (groupId !== menuId) {
                        const otherSubmenu = document.getElementById(groupId + '-submenu');
                        const otherArrow = document.getElementById(groupId + '-arrow');
                        if (otherSubmenu && otherArrow) {
                            otherSubmenu.classList.add('hidden');
                            otherArrow.style.transform = 'rotate(0deg)';
                        }
                    }
                });
                
                // Now open the selected group
                submenu.classList.remove('hidden');
                arrow.style.transform = 'rotate(180deg)';
            } else {
                // Close the current group
                submenu.classList.add('hidden');
                arrow.style.transform = 'rotate(0deg)';
            }
        } else if (isCancerCategoryGroup) {
            // Accordion behavior for cancer category groups
            if (isHidden) {
                // Close all other cancer category groups first
                cancerCategoryGroups.forEach(groupId => {
                    if (groupId !== menuId) {
                        const otherSubmenu = document.getElementById(groupId + '-submenu');
                        const otherArrow = document.getElementById(groupId + '-arrow');
                        if (otherSubmenu && otherArrow) {
                            otherSubmenu.classList.add('hidden');
                            otherArrow.style.transform = 'rotate(0deg)';
                        }
                    }
                });
                
                // Now open the selected group
                submenu.classList.remove('hidden');
                arrow.style.transform = 'rotate(180deg)';
            } else {
                // Close the current group
                submenu.classList.add('hidden');
                arrow.style.transform = 'rotate(0deg)';
            }
        } else {
            // Regular toggle behavior for other sub-groups
            if (isHidden) {
                // Show submenu
                submenu.classList.remove('hidden');
                arrow.style.transform = 'rotate(180deg)';
            } else {
                // Hide submenu
                submenu.classList.add('hidden');
                arrow.style.transform = 'rotate(0deg)';
            }
        }
    }
};

// Initialize Header
document.addEventListener('DOMContentLoaded', function() {
    generateHeader();
    setTimeout(syncDepartmentsMenuHeight, 0);
    window.addEventListener('resize', function() {
        clearTimeout(departmentsMenuResizeTimer);
        departmentsMenuResizeTimer = setTimeout(syncDepartmentsMenuHeight, 150);
    });
    
    // Ensure functions are globally accessible after header is generated
    window.toggleMobileMenu = toggleMobileMenu;
    window.toggleMobileSubmenu = toggleMobileSubmenu;
    
    // Attach event listeners to all mobile menu buttons after header is generated
    setTimeout(function() {
        // Attach to menu toggle button
        const menuButton = document.querySelector('.mobile-menu-toggle');
        if (menuButton) {
            // Remove onclick and add event listener
            menuButton.removeAttribute('onclick');
            menuButton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Menu button clicked');
                if (window.toggleMobileMenu) {
                    window.toggleMobileMenu();
                } else {
                    console.error('toggleMobileMenu function not found');
                }
            }, true); // Use capture phase
            
            // Also set onclick as backup
            menuButton.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                if (window.toggleMobileMenu) {
                    window.toggleMobileMenu();
                }
                return false;
            };
        }
        
        // Attach to close button
        const closeButton = document.querySelector('.mobile-menu-close');
        if (closeButton) {
            closeButton.removeAttribute('onclick');
            closeButton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                if (window.toggleMobileMenu) {
                    window.toggleMobileMenu();
                }
            }, true);
            closeButton.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                if (window.toggleMobileMenu) {
                    window.toggleMobileMenu();
                }
                return false;
            };
        }
    }, 200);
});
