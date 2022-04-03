import React from 'react';
import '../../assets/sass/components/common/breadcrumbsStyles.scss'

export default function BreadcrumbsView(props) {
  const {categories} = props;

  return (
   <div className='breadcrumbs-root'>
    {categories?.map((category, index ) => {
        if(index+1 < categories?.length)
            return (
                <span className='label' key={index}><a className="label" href="http://" >{category}</a> {">"}</span>
            );
        else 
            return (
                <a className="label" href="http://" key={index}>{category}</a>
            );
    })}
   </div>
  );
}
