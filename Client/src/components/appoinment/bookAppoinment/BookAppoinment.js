import BookingCard from "./BookingCard";

const bookingData = [
    {
        id: 1,
        subject: 'Teeth Orthodontics',
        bookinghour: '8:00AM - 9:00AM',
        totalspace: 10
    },
    {
        id: 2,
        subject: 'Cosmetic Dentistry',
        bookinghour: '10:05:00AM - 11:30AM',
        totalspace: 10
    },
    {
        id: 3,
        subject: 'Teeth Cleaning',
        bookinghour: '5:00AM - 6:30AM',
        totalspace: 10
    },
    {
        id: 4,
        subject: 'Cavity Protection',
        bookinghour: '7:00AM - 8:30AM',
        totalspace: 10
    },
    {
        id: 5,
        subject: 'Teeth Orthodontics',
        bookinghour: '8:00AM - 9:00AM',
        totalspace: 10
    },
    {
        id: 6,
        subject: 'Teeth Orthodontics',
        bookinghour: '8:00AM - 9:00AM',
        totalspace: 10
    },
]

function BookAppoinment({ bookingDate }) {
    return (
        <section className="container-xl mt-5 mb-5">
            <h2 className="header-text bg-main text-center mb-5">Available appoinments on {bookingDate.toDateString()}</h2>
            <div className="row">
            {
                bookingData.map(data=><BookingCard key={Math.random()*10} date={bookingDate} bookingdata={data}/>)
            } 
            </div>
        </section>
    );
}

export default BookAppoinment;