/**
 * 在nextjs中带括号的目录不会暴露在路由上，在路由跳转时可以直接写页面名称
 * site下面的子目录会被当以及目录对待，这样的好处是nextjs在物理上一种组织文件的方法，可以把相关的页面或公共得到放
 * 在这种目录中便于管理
 * 指定链接时只需要按一级目录来指定
 */

import React from 'react'

export default function Page() {
  return (
    <div>
      About
    </div>
  )
}
