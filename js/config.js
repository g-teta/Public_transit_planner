// API Configuration
const CONFIG = {
    // OpenRouteService API
    ORS_API_KEY: 'eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6IjUwNzVlMmQ3OTE4ZDQ3MDRiNGYwNTJhNWY2ZDUxNzFlIiwiaCI6Im11cm11cjY0In0=',
    ORS_BASE_URL: 'https://api.openrouteservice.org/v2/directions/',
   
    
    // OpenCagedata Geocoding API
    OPENCAGE_API_KEY: 'Project 66B8A0',
    OPENCAGE_API_URL: 'https://api.opencagedata.com/geocode/v1/json',  

    // TransitLand API (For US Transit Data)
    TRANSITLAND_API_KEY: 'NtVO7CItxrxfGwrHZszrR9ASqEncoqdp',
    TRANSITLAND_API_URL: 'https://transit.land/api/v2/rest',
    
    // Waze GeoRSS Traffic
WAZE_TRAFFIC_URL: "https://www.waze.com/row-rtserver/web/TGeoRSS",
    
    // Settings
    DEFAULT_MAX_WALK_DISTANCE: 1.0, // miles
    DEFAULT_MAX_RESULTS: 5,
    CACHE_DURATION: 300000, // 5 minutes in milliseconds
};

// DO NOT commit this file with actual API keys!
// Use environment variables in production