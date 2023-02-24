import React from 'react'
import bg from '../../assets/shopping.jpg'
function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

export default function Banner() {


  return (
    <>
     <header
            className="header"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundPosition: "cover cover",
                backgroundSize: "cover",
            }}
        >
            <div className="content">
                <div className="title_banner">
                    Fashionable Collection
                </div>

                <h1 className="description">{truncate("get free shipping on all orders above 500" , 100)}</h1>
            </div>

            <div className="faded_btn"></div>
        </header>
    </>
  )
}
