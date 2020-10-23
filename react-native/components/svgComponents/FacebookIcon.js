import * as React from "react"
import Svg, { Path } from "react-native-svg"

function FacebookSVG(props) {
  return (
    <Svg width={26} height={26} viewBox="0 0 26 26" fill="none" {...props}>
      <Path
        d="M22.496 0H3.504A3.504 3.504 0 000 3.504v18.992A3.504 3.504 0 003.504 26h9.367l.016-9.291h-2.414a.57.57 0 01-.57-.567l-.011-2.995a.57.57 0 01.57-.572h2.409V9.681c0-3.358 2.05-5.187 5.047-5.187h2.458a.57.57 0 01.57.57v2.525a.57.57 0 01-.57.57h-1.509c-1.629 0-1.944.775-1.944 1.91v2.506h3.58a.57.57 0 01.565.637l-.355 2.994a.57.57 0 01-.565.503h-3.21L16.924 26h5.574A3.504 3.504 0 0026 22.497V3.504A3.504 3.504 0 0022.496 0z"
        fill="#fff"
      />
    </Svg>
  )
}

export default FacebookSVG
