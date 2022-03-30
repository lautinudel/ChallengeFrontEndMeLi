import {lazy} from 'react'
const ItemList = lazy(()=> import ('../components/ItemList/itemListMainView'));
const ItemDetails = lazy(()=> import ('../components/ItemDetails/itemDetailsMainView'));

const routes = [
  {
    path: 'itemList',
    name: 'itemList',
    layout: '/itemList',
    element: <ItemList/>,
  },
  {
    path: 'itemDetails',
    name: 'itemDetails',
    layout: '/itemDetails',
    element: <ItemDetails/>,
  },
];

export default routes;
