import {lazy} from 'react'
const ItemList = lazy(()=> import ('../components/ItemList/itemListView'));
const ItemDetails = lazy(()=> import ('../components/ItemDetails/itemDetailsView'));

const routes = [
  {
    path: 'items',
    name: 'items',
    layout: '/items',
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
