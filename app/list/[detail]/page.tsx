'use client'
import React, { useEffect } from 'react'
type params = {
    params: { detail: string };
    searchParams: {}
}

export default function page(params: params) {

useEffect(() => {
    console.log('pa:',params.params);
  }, [])
    return (
        <div>
            详情页
        </div>
    )
}
