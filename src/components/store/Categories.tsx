import { positions } from '@pankod/refine-mui'
import React from 'react'
import men from '../../assets/men.jpg'
import women from '../../assets/women.jpg'
import { ShowButton } from '@pankod/refine-mui'
import { useNavigate } from '@pankod/refine-react-router-v6'

export default function Categories() {
   
    const categories = [{img:men , title:"For Men's" , route:'Men' },{img:women , title:"For Women's" , route:'Women'}]
    const navigate = useNavigate();

  return (
    <>
   <h3  style={{
                color:'black',
                textAlign:'center',
                fontWeight: 'bolder'
            }}>Browse Our Products</h3>
   <div className ="row">
      <div className="poster_row">

        {categories.map((data,id) => (
          <div
            key={id}
            className= "posterlarge"
            style={{
                backgroundImage : `url(${data.img})`,
                backgroundPosition: "cover cover",
                backgroundSize: "cover",
                height:'300px',
                position:'relative'
            }}
          >
           
            <div
            onClick={() => navigate('/store/products/' + data.route )}
             className="field_home">{data.title}</div>

          </div>
          
        ))}   
      </div>

   
    </div>
    </>
  )
}
