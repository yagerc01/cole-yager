// ─── Travel Map ───────────────────────────────────────────────────
(function () {
    const mapEl = document.getElementById('travel-map');
    if (!mapEl) return;

    const map = L.map('travel-map', {
        center: [35, 10],
        zoom: 2,
        minZoom: 2,
        maxZoom: 12,
        scrollWheelZoom: false,
        zoomControl: true
    });

    // CartoDB Positron — clean, minimal tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);

    // ─── Marker styles ─────────────────────────────────────────────
    const homeStyle = {
        radius: 8,
        fillColor: '#F4B8C1',
        color: '#D48A97',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.9
    };

    const visitedStyle = {
        radius: 6,
        fillColor: '#0B1F3A',
        color: '#1D6FA4',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.85
    };

    // ─── Called Home ───────────────────────────────────────────────
    const homeCities = [
        { coords: [40.7128,  -74.0060], label: 'New York City, NY'   },
        { coords: [38.9072,  -77.0369], label: 'Washington, DC'       },
        { coords: [47.6062, -122.3321], label: 'Seattle, WA'          },
        { coords: [43.0831,  -73.7846], label: 'Saratoga Springs, NY' },
        { coords: [32.7765,  -79.9311], label: 'Charleston, SC'       },
        { coords: [42.7284,  -73.6918], label: 'Troy, NY'             },
    ];

    // ─── International Visited ─────────────────────────────────────
    const visitedPlaces = [
        { coords: [48.8566,    2.3522], label: 'Paris',       country: 'France'         },
        { coords: [52.3676,    4.9041], label: 'Amsterdam',   country: 'Netherlands'    },
        { coords: [41.1579,   -8.6291], label: 'Porto',       country: 'Portugal'       },
        { coords: [38.7223,   -9.1393], label: 'Lisbon',      country: 'Portugal'       },
        { coords: [64.1466,  -21.9426], label: 'Reykjavik',   country: 'Iceland'        },
        { coords: [65.6885,  -18.0999], label: 'Akureyri',    country: 'Iceland'        },
        { coords: [66.0449,  -17.3390], label: 'Húsavík',     country: 'Iceland'        },
        { coords: [35.6762,  139.6503], label: 'Tokyo',       country: 'Japan'          },
        { coords: [34.6937,  135.5023], label: 'Osaka',       country: 'Japan'          },
        { coords: [35.0116,  135.7681], label: 'Kyoto',       country: 'Japan'          },
        { coords: [35.1796,  129.0756], label: 'Busan',       country: 'South Korea'    },
        { coords: [50.9333,    6.9500], label: 'Rhineland',   country: 'Germany'        },
        { coords: [50.8503,    4.3517], label: 'Brussels',    country: 'Belgium'        },
        { coords: [51.2093,    3.2247], label: 'Brugge',      country: 'Belgium'        },
        { coords: [51.5074,   -0.1278], label: 'London',      country: 'United Kingdom' },
        { coords: [53.3498,   -6.2603], label: 'Dublin',      country: 'Ireland'        },
        { coords: [12.5211,  -69.9683], label: 'Aruba',       country: 'Aruba'          },
        { coords: [45.4642,    9.1900], label: 'Milan',       country: 'Italy'          },
        { coords: [41.9028,   12.4964], label: 'Rome',        country: 'Italy'          },
        { coords: [26.2235,   50.5876], label: 'Bahrain',     country: 'Bahrain'        },
    ];

    // ─── Add markers ───────────────────────────────────────────────
    homeCities.forEach(({ coords, label }) => {
        L.circleMarker(coords, homeStyle)
            .bindPopup(`<strong>${label}</strong><span class="popup-tag popup-tag--home">Called Home</span>`)
            .addTo(map);
    });

    visitedPlaces.forEach(({ coords, label, country }) => {
        L.circleMarker(coords, visitedStyle)
            .bindPopup(`<strong>${label}</strong><span class="popup-tag popup-tag--visited">${country}</span>`)
            .addTo(map);
    });

    // ─── Legend ────────────────────────────────────────────────────
    const legend = L.control({ position: 'bottomleft' });
    legend.onAdd = function () {
        const div = L.DomUtil.create('div', 'map-legend');
        div.innerHTML = `
            <div class="legend-item">
                <span class="legend-dot legend-dot--home"></span>
                <span>Called Home</span>
            </div>
            <div class="legend-item">
                <span class="legend-dot legend-dot--visited"></span>
                <span>Visited</span>
            </div>`;
        return div;
    };
    legend.addTo(map);
})();
