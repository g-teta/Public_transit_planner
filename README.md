SmartTransit 🚍

Demo Video: [Insert Video URL Here]

Load Balancer URL: [Insert URL Here]

Your intelligent public transit planner — making your daily commute simple and stress-free!

SmartTransit is a modern, responsive web app that helps users plan public transport routes efficiently with an intuitive interface and filtering options.

Features
Smart Route Planning

Origin & Destination: Enter start and end locations.

Flexible Timing: Optional departure time selection.

Instant Results: Multiple route options instantly.

Step-by-Step Directions: Detailed info for each journey.

Advanced Filters

Transport Mode: Bus, train, tram, walking.

Max Walk Distance: Set your preferred walking limit.

Accessibility Options: Wheelchair-friendly routes.

Transfer Optimization: Minimize connections for simpler trips.

Route Management

Save, view, and delete favorite routes.

Persistent storage across sessions.

Quick overview counter of saved routes.

User Experience

Responsive design for desktop, tablet, mobile.

Tab navigation for planning vs. saved routes.

Modal popups for detailed route info.

Loading indicators, error messages, and friendly empty states.

Project Structure
SmartTransit/
├── index.html        # Main UI
├── css/
│   └── styles.css    # Styling and responsive design
├── js/
│   ├── config.js     # API settings
│   └── app.js        # App logic
└── README.md         # Project documentation

Getting Started
Prerequisites

Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)

Public transit API key

Basic HTML/CSS/JS knowledge for customization

Installation
git clone https://github.com/yourusername/smarttransit.git
cd smarttransit

Configure API

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


Visit: http://localhost:8000

User Guide

Plan a Trip

Enter starting point and destination.

Optional: Select departure time.

Apply filters: transport mode, walking distance, accessibility, minimum transfers.

Click Find Routes.

View Details

Click a route for step-by-step directions.

Save route for future use.

Manage Saved Routes

Navigate to "Saved Routes" tab.

View, open, or delete saved routes.

Technologies Used

HTML5, CSS3, JavaScript (ES6+)

LocalStorage API for saved routes

Font Awesome icons

Public Transit API for real-time route data

Browser Compatibility
Browser	Minimum Version	Status
Chrome	90+	✅
Firefox	88+	✅
Safari	14+	✅
Edge	90+	✅
Key UI Components

Header Navigation: Logo, tabs, saved routes counter

Search Card: Input fields, filter panel

Results Display: Route cards with details

Modal: Step-by-step directions, save functionality

Roadmap & Future Enhancements

Real-time updates, multi-provider support, fare estimation

Offline mode, dark mode, push notifications

Interactive maps, carbon footprint tracking

Contributing

Fork the repo

Create a feature branch: git checkout -b feature/AmazingFeature

Make changes, test, and commit: git commit -m "Add AmazingFeature"

Push branch and open a pull request

Known Issues

Filters not persisted across sessions

Large route lists may be slow on older devices

Transit APIs may have rate limits
