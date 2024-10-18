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
  }
];
