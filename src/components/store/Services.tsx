import React from 'react'
import '../store/styles/services.css'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import WifiCalling3RoundedIcon from '@mui/icons-material/WifiCalling3Rounded';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
export default function Services({isLarge}) {
  const text = [
    {
      title : 'Free Shipping',
      sub : 'Free shipping on orders over $99',
      icon : <LocalShippingOutlinedIcon/>
    },
    {
      title : 'Customer Support 24/7',
      sub : 'Instant access to perfect support',
      icon : <WifiCalling3RoundedIcon/>
    },
    {
      title : '100% Secure Payment',
      sub : 'We ensure secure payment!',
      icon : <CreditScoreOutlinedIcon/>
    }
  ]
  return (
    <div className ="row">
    <div className="poster_row">

    {text.map((movie ,id) => (
          <div
            key={id}
            className= {`"poster" && ${isLarge ? "posterlarge" : "poster"}`}
          >
            <span className='serv_icon'>{movie.icon}</span>
            <h4 >{movie.title}</h4>
            <p  className='services_description'>{movie.sub}</p>
          </div>
        ))}   

  </div>
  </div>
  )
}
