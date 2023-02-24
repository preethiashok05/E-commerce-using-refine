import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { useState } from "react";
import img from '../../assets/men.jpg'
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { DeleteButton, Edit, EditButton } from '@pankod/refine-mui';
interface Iitem {
  cart_id: number;
  prdt_id: number;
  count: number;
  product_cost:number;
  size: string;
  user_id: string;
}

interface Props{

  id:number;
  setItems: Dispatch<SetStateAction<Iitem[]>>
  items:Iitem[]
}

export default function CartCard(props: Props) {

  const [item, setItem] = useState<Iitem>({
    cart_id: -1,
    prdt_id:-1,
    count: -1,
    size: "loading",
    product_cost:null,
    user_id: "loading"
})

  useEffect(()=>{
    setItem(props.items[props.id])

  },[])

  const { setItems ,id} = props;

  const compute = (cost: number, count: number) => {
    return cost * count;
  }
  const [count, setcount] = useState(item.count);
  const [total, settotal] = useState(compute(item.product_cost, item.count));
  console.log(item)
  const cost = item.product_cost;
  const increment = (e) => {
    setItems((prv)=>{

      let newPrv  = prv;
      newPrv[id].count++;
      return newPrv;

    })
    e.preventDefault();
    setcount(count + 1);
    settotal(total + cost);
  }

  const decrement = async (e) => {
    e.preventDefault();
    setcount(count - 1);
    setItems((prv) => {

      let newPrv = prv;
      newPrv[id].count--;
      return newPrv;

    })
    settotal(total - cost);
  }


  return (
    <tr key={props.id}
      className='card_row'>
      <td className='card_image'>
        <img className="cart_img" height={'100px'} width={'100px'} src={`http://localhost:9000/img/${item.prdt_id!==-1 && item.prdt_id}`} />
      </td>
      {/* <td className='card_title'>{item.product_name}</td> */}
      <td className='card_size'>{item.size}</td>
      <td className='card_cost'>₹{item.product_cost}</td>
      <td>
        <button className="cnt_btn" onClick={decrement} disabled={item.count ===0}>- </button>
    
        <span className="card_count">{item.count}</span>
        <button className="cnt_btn" onClick={increment} >+</button>
      </td>
      <td className='card_total'>₹{total}</td>
      <td>
        <button className="delete">
          <DeleteButton size="small" recordItemId={item.prdt_id} />/
          <HighlightOffOutlinedIcon />
        </button>
      </td>
    </tr>
  )
}
