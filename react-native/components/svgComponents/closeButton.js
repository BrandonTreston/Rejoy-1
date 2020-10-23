import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CloseButton(props) {
  return (
    <Svg width={22} height={22} viewBox="0 0 22 22" fill="none" {...props}>
      <Path
        d="M14.248 11l6.288-6.288a2.297 2.297 0 10-3.248-3.249L11 7.751 4.712 1.463a2.297 2.297 0 10-3.249 3.249L7.751 11l-6.288 6.288a2.297 2.297 0 003.249 3.248L11 14.248l6.288 6.288a2.29 2.29 0 001.624.673 2.297 2.297 0 001.624-3.921L14.248 11z"
        fill="#979797"
      />
    </Svg>
  )
}

export default CloseButton
