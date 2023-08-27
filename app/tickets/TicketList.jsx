import Link from 'next/link'
import React from 'react'

async function getTickets() {
  const res = await fetch('http://localhost:4000/tickets', {
    next: {
      revalidate: 0, 
    },
  })
  const json =  res.json()

  return json
}
 
export default async function TicketList() {

  const tickets = await getTickets() // get tickets from API endpoint 

  return (
    <>
    {tickets.map(ticket => ( 
      <div className="card my-5" key={ticket.id}>
        <Link href={`/tickets/${ticket.id}`}  >
          <h3>{ticket.title}</h3>
          <p>{ticket.body.slice(0,200)}...</p>
          <div className= {`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>
        </Link>
      </div>
    ))}
    {tickets.length === 0 && (
      <p className='text-center'>No tickets found</p>
    ) }
    </>
  )
}
