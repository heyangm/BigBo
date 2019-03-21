### video标签属性 webkit-playsinline 会报错没有该属性
在特殊属性前添加 is
    <video src='' width='100%' style={{objectFit: 'fill',transformOrigin: 0}} playsInline="true" is webkit-playsinline x5-video-player-type="h5" x5-video-orientation="portrait" preload="auto"></video>
###  * touchend获取不到touches
使用touchmove替代
获取touchmove的touches  