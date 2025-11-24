# SmartTransit

Demo & Load Balancer

Demo Video: https://youtu.be/2GdHOrNU7us

Load Balancer URL: http://publictransitplanner.gteta.tech/

Your intelligent public transit planner — making your daily commute simple and stress-free!

SmartTransit is a modern, responsive web application designed to help users plan public transportation routes efficiently. With an intuitive interface and powerful filtering options, finding the perfect route has never been easier.

# Features

Smart Route Planning

Origin & Destination Search: Simple text input for starting point and destination

Flexible Timing: Optional departure time selection for precise planning

Instant Results: Quick route calculations with multiple options

Detailed Route Information: Step-by-step directions for every journey

Advanced Filtering System

Transport Mode Selection: Choose from bus, train, tram, or walking routes

Maximum Walk Distance: Set your preferred walking limit in kilometers

Accessibility Options: Filter for wheelchair-accessible routes

Transfer Optimization: Option to minimize connections for simpler trips

Route Management

Save favorite routes for quick access

Persistent storage across sessions

Quick overview counter of saved routes

Easy deletion of outdated routes

User Experience

Responsive design for desktop, tablet, and mobile devices

Tab navigation between planning and saved routes

Modal route details with step-by-step directions

Loading indicators and error handling

Friendly empty states for new users

Project Structure
SmartTransit/
├── index.html        # Main application HTML structure
├── css/
│   └── styles.css    # Styling and responsive design
├── js/
│   ├── config.js     # API configuration and settings
│   └── app.js        # Core application logic
└── README.md         # Project documentation


# File Overview:

index.html: UI structure including navigation, search, filters, results, saved routes, and modals

css/styles.css: Styling, responsive layout, and animations

js/config.js: API keys and endpoint configuration

js/app.js: Search, filtering, storage, and user interactions

# Getting Started

Prerequisites

Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)

Public transit API key

Basic HTML/CSS/JavaScript knowledge for customization

Installation
git clone https://github.com/yourusername/smarttransit.git
cd smarttransit

# Configure API

Edit js/config.js:

const CONFIG = {
    API_KEY: 'your-api-key-here',
    BASE_URL: 'https://api.transit-provider.com'
};

Launch

Option A: Open index.html in your browser.
Option B (Recommended): Run a local server:

# Python 3
python -m http.server 8000
# Node.js
npx http-server -p 8000


Navigate to http://localhost:8000

User Guide
Planning Your First Trip

Enter starting location and destination

Optional: Select departure time

Apply filters: transport mode, walking distance, accessibility, minimum transfers

Click Find Routes

View Details

Click a route for step-by-step directions

Save routes for future access

Manage Saved Routes

Navigate to "Saved Routes" tab

View, open, or delete saved routes

Saved routes counter shows total saved routes

Technologies Used

HTML5, CSS3, JavaScript (ES6+)

LocalStorage API for saved routes

Font Awesome icons

Public Transit API for real-time data

Browser Compatibility
Browser	Minimum Version	Status
Chrome	90+	Fully Supported
Firefox	88+	Fully Supported
Safari	14+	Fully Supported
Edge	90+	Fully Supported
Opera	76+	Fully Supported
Key UI Components

Header Navigation: Logo, tabs, saved routes counter

Search Card: Input fields, filter panel

Results Display: Route cards with interactive details

Modal System: Step-by-step directions and save functionality

Footer: Developer info and copyright

Roadmap & Future Enhancements

Planned Features:

Real-time updates, multi-provider support, fare estimation

Offline mode, dark mode, push notifications

Interactive maps, carbon footprint tracking

Under Consideration:

Mobile apps (iOS/Android), browser extension, voice search

Calendar integration, travel history analytics

Contributing

Fork the repo

Create a feature branch: git checkout -b feature/AmazingFeature

Make changes, test, and commit: git commit -m "Add AmazingFeature"

Push branch and open a pull request

Contribution Guidelines:

Report bugs using GitHub issues

Discuss major changes before implementation

Update documentation for new features

Ensure responsive design and accessibility

Known Issues

Filters not persisted across sessions

Large route lists may impact performance on older devices

Transit APIs may have rate limits

