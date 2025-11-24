# Public_transit_planner
Hello,

I built SmartTransit to make getting around by public transport way easier. It helps you find the fastest and most convenient routes, saves your favorite trips, and even gives step-by-step directions so you never get lost.

What it can do
🔍 Plan Your Trip

Type in where you’re starting and where you want to go

Choose when you want to leave or arrive

Instantly see route options

🚌 Filter Like a Pro

Pick your transport: bus, train, tram, or even walking

Limit how far you want to walk

Check for wheelchair-friendly options

Reduce transfers if you want a simpler route

💾 Save Your Favorite Routes

Bookmark trips you take often

Access all saved trips anytime

See full details for each route

📱 Easy-to-Use Interface

Works on desktop, tablet, and mobile

Switch easily between planning a trip and checking saved routes

Get instant feedback with loading indicators and helpful error messages

How it’s Organized
SmartTransit/
├── index.html          # Main page
├── css/
│   └── styles.css      # Design and layout
├── js/
│   ├── config.js       # API keys and settings
│   └── app.js          # Core functionality
└── README.md           # Yep, this file!

Getting Started

Clone it locally

git clone https://github.com/yourusername/smarttransit.git
cd smarttransit


Add your API keys

Open js/config.js and plug in your API info

Run it

Open index.html in a browser OR

Start a local server:

# Python
python -m http.server 8000

# Node.js
npx http-server


Open http://localhost:8000 and start exploring! 🚀

How to Use

Planning a trip

Enter your start and destination

Optional: choose a departure time

Apply filters if you want

Click "Find Routes" and explore your options

Save routes you love for later

Saved trips

Go to the "Saved Routes" tab

Click a saved route to check details

Delete old routes you don’t need

Tech I Used

HTML5

CSS3

JavaScript (ES6+)

Font Awesome for icons

APIs

SmartTransit connects to public transit APIs. Add your endpoint info in js/config.js:

const CONFIG = {
    API_KEY: 'your-api-key-here',
    BASE_URL: 'https://api.transit-provider.com',
};

Works On

Chrome (latest) ✅

Firefox (latest) ✅

Safari (latest) ✅

Edge (latest) ✅

Future Plans

Real-time updates

Multiple transit providers

Fare estimates

Multi-language support

Offline route caching

Push notifications

Social sharing

Contributing

I’d love your help! Just:

Fork the repo

Create a branch (git checkout -b feature/AwesomeFeature)

Commit changes (git commit -m 'Add something cool')

Push (git push origin feature/AwesomeFeature)

Open a Pull Request

License

MIT License – check the LICENSE file.

Contact Me

Teta Gasangwa
📧 g.teta5@alustudent.com

📍 Kigali, Rwanda

SmartTransit – making public transport simple and stress-free! 🚌🚇🚊
