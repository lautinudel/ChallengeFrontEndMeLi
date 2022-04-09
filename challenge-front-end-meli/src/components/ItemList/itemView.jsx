import React from 'react';
import FreeShippingLogo from '../../assets/images/ic_shipping.png';
import '../../assets/sass/components/ItemList/itemStyles.scss'
import { useNavigate } from 'react-router-dom';

export default function ItemView(props) {
  const {item} = props;
  const navigate = useNavigate();

  return (
   <div className='item-root' onClick={() => navigate("/itemDetails")}>
       <div className='item-picture'><img src={item?.picture} alt="item" className='item-picture'/></div>
       <div className='item-info'>
           <div className='item-info-header'>
             <div className='container-price'>
              <p className='label-price'>{item?.price?.currency} ${item?.price?.amount}{item?.price?.decimals ? ","+item?.price?.decimals : ''}</p>
              {item?.free_shipping && <div><img src={FreeShippingLogo} alt="free-shipping" className="free-shipping-logo" /></div>}
              </div>
              <p className='label-address'>{item?.address}</p>
           </div>
           <p className='label-title'>{item.title}</p>
       </div>
   </div>
  );
}
