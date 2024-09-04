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
      ticketNumber: 'X12345678',
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
  }
];
