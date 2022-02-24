import React from 'react'
import Lahore from '../images/lq.png'
import Kk from './Kk'

function Lq() {

  let team = "Lahore Qalandars is a Pakistani professional cricket franchise which plays in the Pakistan Super League, representing the city of Lahore. The home ground of the team is Gaddafi Stadium. The team is owned by Sheikh Hammad. The team is currently captained by Shaheen Afridi"

  return (
   
    <Kk value={Lahore} title="Lahore Qalanders" text={team} />

  )
}

export default Lq
