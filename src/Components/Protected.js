import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Protected(props) {
     const {Component}=props
     const navigate=useNavigate();

     useEffect (()=>{
          let login = localStorage.getItem('login')
          if(!login){
               navigate('login')
          }
     })
  return (
    <div>
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero mollitia est quia quod ratione. Repudiandae possimus corporis quaerat. Facere inventore qui et quo quos unde reiciendis labore consectetur, dolorem nam autem. Quia debitis ipsum culpa itaque iusto aliquid officia ipsam similique sapiente harum ratione, aliquam voluptates nesciunt eveniet. Eaque sequi dolor sint at, eum quam nostrum ipsa cumque nam ea sed assumenda et autem minima esse officia quas laborum, consectetur ab quasi! Asperiores, facere blanditiis eius a voluptatem quia. Omnis harum beatae facilis molestiae quos iure libero odit vel, eum non nostrum inventore dignissimos obcaecati praesentium, debitis aperiam qui vitae magni maxime doloremque exercitationem culpa. Dolores eaque, minus ipsum odit accusamus doloremque repellendus iusto rerum architecto ullam ipsam ratione harum a quisquam, consequatur sint similique. Fuga ullam ut magni corrupti dolorem nam inventore id asperiores quo cum doloribus dolore sunt blanditiis consequatur eaque consequuntur praesentium officia, quam quisquam consectetur quaerat.
      <Component/>
    </div>
  )
}
