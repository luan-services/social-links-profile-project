import React from 'react'

/* filtros https://tailwindcss.com/docs/filter-brightness */

const SocialBtn = (props) => {
  return (
    <button className="p-3 w-full rounded-xl bg-custom-btn 0 text-sm font-bold
        hover:bg-custom-color-green hover:text-gray-900 hover:transition hover:duration-400
    active:scale-95 active:brightness-80"> 
        <span>{props.children != null ? props.children : props.text}</span>
        {/* aqui a props.children é o texto dentro dos <>'txt'</> do componente */}
    </button> 
  )
}

export default SocialBtn
