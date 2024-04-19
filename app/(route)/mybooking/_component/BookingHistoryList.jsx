import React, { useEffect } from 'react';
import Image from 'next/image'
import { Calendar, Clock, MapPin, User } from 'lucide-react'

const BookingHistoryList = ({ bookingHistory }) => {
    useEffect(() => {
        console.log("bookinghistory:", bookingHistory);
    }, [bookingHistory]);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            {/* Ensure that you return the JSX elements from the map function */}
            {bookingHistory.map((booking, index) => (
                <div key={index} className='flex gap-4'>
                    {booking.businessList && booking.businessList.name && (
                        <Image
                            src={booking.businessList.images[0]?.url || '/placeholder.jpg'}
                            alt='image'
                            width={120}
                            height={120}
                            className='rounded-lg object-cover'
                        />
                    )}

                    <div>
                        {booking.businessList && booking.businessList.name && (
                            <>
                                <h2 className='font-bold'>{booking.businessList.name}</h2>
                                <h2 className='flex gap-2 text-primary'> <User/> {booking.businessList.contactPerson}</h2>
                                <h2 className='flex gap-2 text-gray-500'> <MapPin className='text-primary'/> {booking.businessList.address}</h2>
                            </>
                        )}
                        <h2 className='flex gap-2 text-gray-500'>
                            <Calendar className='text-primary'/> 
                            Service on : <span className='text-black'> {booking.date}</span>
                        </h2>
                        <h2 className='flex gap-2 text-gray-500'>
                            <Clock className='text-primary'/> 
                            Service on : <span className='text-black'> {booking.time}</span>
                        </h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BookingHistoryList;
