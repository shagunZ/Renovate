"use client"
import React, { useEffect,useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingHistoryList from "../mybooking/_component/BookingHistoryList"
import { useSession } from 'next-auth/react'
import GlobalApi from '@/app/_services/GlobalApi'


const MyBooking = () => {

    const {data}=useSession();
const [bookingHistory,setBookingHistory]=useState([])
const [loading, setLoading] = useState(false);

    useEffect(()=>{
      if(data){
        setLoading(true);
        GetUserBookingHistory();
      }
        // data&&GetUserBookingHistory();
    },[data]);


    // used to get user booking history
    const GetUserBookingHistory=()=>{
        GlobalApi.GetUserBookingHistory(data.user.email)
        .then(resp=>{
        console.log("bookings??",resp.bookings)
            setBookingHistory(resp.bookings)
        }).catch(e=>{
          console.log("err",e);
        }).finally(()=>{
          setLoading(false);
        })
    }
    
    const filterData = (type) => {
      const currentDate = new Date().toISOString().slice(0, 10); // Get the current date in 'YYYY-MM-DD' format
      const result = bookingHistory.filter(item => {
          const itemDate = item.date.split('-').reverse().join('-'); // Convert '19-04-2024' to '2024-04-19'
          if (type === 'booked') {
              return itemDate >= currentDate;
          } else {
              return itemDate <= currentDate;
          }
      });
      return result;
  }
  

        return (
    <div className='my-10 mx-5 md:mx-36'>
        <h2 className='font-bold text-[20px] my-2'>My Bookings</h2>
        <Tabs defaultValue="booked" className="w-full">
  <TabsList className="w-full justify-start">
    <TabsTrigger value="booked">Booked</TabsTrigger>
    <TabsTrigger value="completed">Completed</TabsTrigger>
  </TabsList>
  <TabsContent value="booked">
    {loading?(
      <p>Loading.....</p>
    ) : (
      <BookingHistoryList bookingHistory={filterData('booked')}/>
    )}
  </TabsContent>
  <TabsContent value="completed">
  {loading?(
      <p>Loading.....</p>
    ) : (
      <BookingHistoryList bookingHistory={filterData('completed')}/>
    )}
  </TabsContent>
</Tabs>

    </div>
  )
}

export default MyBooking