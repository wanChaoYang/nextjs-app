'use client'
/**
 * 如果参数个数不确定的时候可以采用[...detail]的形式‘
 * 唯一的区别是参数是列表形式传递的
 */
import React from 'react'
type params = {
    params:number[];
    searchParams: {}
}
export default function pages(params:params) {
    console.log(params);
    
  return (
    <div>
      详情页2
    </div>
  )
}
