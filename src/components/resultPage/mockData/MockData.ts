import { FlightDetails } from '@/utils/types';

export const flightData: FlightDetails[] = [
  {
    flightNumber: 'AF1234',
    airlineLogo: 'https://i.imgur.com/GQNPt6I.png',
    departure: {
      city: 'New York',
      airportCode: 'JFK',
      time: '10:00 AM',
      date: 'Sept 10, 2024'
    },
    arrival: {
      city: 'London',
      airportCode: 'LHR',
      time: '10:00 PM',
      date: 'Sept 10, 2024'
    },
    passengerInfo: {
      name: 'John Doe',
      ticketNumber: 'sample',
      seatNumber: '12A',
      class: 'Economy Class',
      passengerType: 'Adult',
      dateOfBirth: '1985-06-15',
      contactInfo: {
        email: 'john.doe@example.com',
        phone: '+1234567890'
      }
    },
    pricing: {
      ticketPrice: 350.0,
      taxes: 50.0,
      total: 400.0
    }
  },
  {
    flightNumber: 'AF1202',
    airlineLogo: 'https://i.imgur.com/GQNPt6I.png',
    departure: {
      city: 'Atlanta',
      airportCode: 'ATL',
      time: '2:20 PM',
      date: 'Oct 20, 2024'
    },
    arrival: {
      city: 'Gillette',
      airportCode: 'GCC',
      time: '9:00 PM',
      date: 'Oct 20, 2024'
    },
    passengerInfo: {
      name: 'Elizabeth T. Mccauley',
      ticketNumber: 'X12345602',
      seatNumber: '12A',
      class: 'Economy Class',
      passengerType: 'Adult',
      dateOfBirth: '',
      contactInfo: {
        email: '******',
        phone: '***-***-***'
      }
    },
    pricing: {
      ticketPrice: 0.0,
      taxes: 0.0,
      total: 0.0
    }
  },
  {
    flightNumber: 'AF1203',
    airlineLogo: 'https://i.imgur.com/GQNPt6I.png',
    departure: {
      city: 'San Francisco, CA',
      airportCode: 'SFO',
      time: '10:00 AM',
      date: 'Oct 31, 2024'
    },
    stopover: {
      city: 'Chicago, IL',
      airportCode: 'ORD',
      startTime: '3:30 PM',
      endTime: '5:00 PM',
      date: 'Oct 31, 2024'
    },
    arrival: {
      city: 'Manchester, New Hampshire',
      airportCode: 'MHT',
      time: '8:00 PM',
      date: 'Oct 31, 2024'
    },
    passengerInfo: {
      name: 'Scott Jason Adkinz',
      ticketNumber: 'X12345603',
      seatNumber: '12A',
      class: 'Economy Class',
      passengerType: 'Adult',
      dateOfBirth: '',
      contactInfo: {
        email: '******',
        phone: '***-***-***'
      }
    },
    pricing: {
      ticketPrice: 0.0,
      taxes: 0.0,
      total: 0.0
    }
  },
  {
    flightNumber: 'AF1205',
    airlineLogo: 'https://i.imgur.com/GQNPt6I.png',
    departure: {
      city: 'Jacksonville, FL, USA',
      airport: 'Jacksonville International Airport',
      airportCode: 'JAX',
      time: '12:00 PM',
      date: 'January 24, 2025'
    },
    arrival: {
      city: ' Killeen, TX, USA',
      airport: 'Killeen Regional Airport',
      airportCode: 'GRK',
      time: '6:30 PM',
      date: 'January 25, 2025'
    },
    passengerInfo: {
      name: 'Sarah Ann Leah',
      ticketNumber: 'X12345605',
      seatNumber: '12A',
      class: 'Economy Class',
      passengerType: 'Adult',
      dateOfBirth: '',
      contactInfo: {
        email: 'suebynum44@gmail.com',
        phone: '***-***-***'
      }
    },
    pricing: {
      ticketPrice: 0.0,
      taxes: 0.0,
      total: 0.0
    }
  },
  {
    flightNumber: 'AF1206',
    airlineLogo: 'https://i.imgur.com/GQNPt6I.png',
    departure: {
      city: 'Lufthavnsboulevarden, Kastrup, Denmark',
      airport: 'Copenhagen Airport',
      airportCode: 'CPH',
      time: '5:00 AM - CET',
      date: 'February 18, 2025'
    },
    arrival: {
      city: 'Wichita, KS, USA',
      airport: 'Wichita Dwight D. Eisenhower National Airport',
      airportCode: 'ICT',
      time: '9:00 AM - CST',
      date: 'February 18, 2025'
    },
    passengerInfo: {
      name: 'Kelly Danielle Scheirman',
      ticketNumber: 'X12345606',
      seatNumber: '12A',
      class: 'Economy Class',
      passengerType: 'Adult',
      dateOfBirth: '',
      contactInfo: {
        email: '******',
        phone: '***-***-***'
      }
    },
    pricing: {
      ticketPrice: 0.0,
      taxes: 0.0,
      total: 0.0
    }
  }
];
