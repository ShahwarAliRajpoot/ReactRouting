import React from 'react'
import Kk from './Kk'
import King from "../images/kk.png";

function Kd() {

    let team =
    "Karachi Kings is a Pakistani professional franchise Twenty20 cricket team that competes in the Pakistan Super League. The team is based in Karachi, the provincial capital of Sindh, Pakistan, and was formed in 2015 as a result of the formation of the Pakistan Super League by the Pakistan Cricket Board.";

  return (
    <div>
        <Kk value={King} title="Karachi Kings" text={team} />
        </div>
  )
}

export default Kd
