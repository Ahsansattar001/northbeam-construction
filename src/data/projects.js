/**
 * Completed projects. `type` drives the filter on the Projects page.
 * `tone` picks the card colour so the grid has some rhythm without photos.
 */
export const PROJECTS = [
  { id: 'elm-road', name: 'Elm Road rear extension', type: 'residential', location: 'Elm Road', size: '32 m²', duration: '12 weeks', year: 2026, tone: 'brand', summary: 'Open-plan kitchen and dining with a flat roof, two roof lights and sliding doors onto the garden.' },
  { id: 'hartley-loft', name: 'Hartley Street loft', type: 'residential', location: 'Hartley Street', size: '28 m²', duration: '8 weeks', year: 2026, tone: 'surface', summary: 'Rear dormer conversion adding a double bedroom and en-suite, with a new staircase over the existing one.' },
  { id: 'quay-offices', name: 'Quay House offices', type: 'commercial', location: 'Quay House, floor 3', size: '410 m²', duration: '6 weeks', year: 2025, tone: 'accent', summary: 'Full fit-out for a 40-person software company: meeting rooms, kitchen, acoustic ceilings and new services.' },
  { id: 'mill-lane', name: 'Mill Lane renovation', type: 'residential', location: 'Mill Lane', size: '140 m²', duration: '18 weeks', year: 2025, tone: 'surface', summary: 'Whole-house refurbishment of a 1930s semi: rewire, replumb, new layout, kitchen, two bathrooms.' },
  { id: 'station-clinic', name: 'Station Road clinic', type: 'commercial', location: 'Station Road', size: '180 m²', duration: '5 weeks', year: 2025, tone: 'brand', summary: 'Conversion of a retail unit into a four-room dental clinic with compliant plant and finishes.' },
  { id: 'orchard-kitchen', name: 'Orchard Close kitchen', type: 'residential', location: 'Orchard Close', size: '24 m²', duration: '3 weeks', year: 2025, tone: 'accent', summary: 'Knock-through of kitchen and dining room with a steel beam, new kitchen and underfloor heating.' },
  { id: 'bakery-fitout', name: 'Corner bakery fit-out', type: 'commercial', location: 'High Street', size: '95 m²', duration: '4 weeks', year: 2024, tone: 'surface', summary: 'Shopfront, counter joinery, extraction and a prep kitchen, delivered before the lease-start date.' },
  { id: 'church-side', name: 'Church Side double extension', type: 'residential', location: 'Church Side', size: '58 m²', duration: '16 weeks', year: 2024, tone: 'brand', summary: 'Two-storey side extension adding a bedroom above a new utility and study.' },
];

export const PROJECT_TYPES = [
  { id: 'all', label: 'All projects' },
  { id: 'residential', label: 'Homes' },
  { id: 'commercial', label: 'Businesses' },
];
