import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Mercury = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    style={{
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      imageRendering: "optimizeQuality",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }}
    {...props}
  >
    <Path
      fill="#e1e0f4"
      d="M39.5 36.5c-.838.342-1.172 1.008-1 2-8.841 6.415-17.841 6.581-27 .5a54.613 54.613 0 0 1-4-5.5c1.49-2.448.823-4.115-2-5-.53-16.637 7.47-24.137 24-22.5C40.56 9.942 45.06 17.776 43 29.5c-.653 2.64-1.82 4.973-3.5 7Z"
      style={{
        opacity: 0.93,
      }}
    />
    <Path
      fill="#f0bb19"
      d="M39.5 4.5c3.661-.15 4.661 1.35 3 4.5-2.612.741-4.279-.259-5-3 .916-.278 1.583-.778 2-1.5Z"
      style={{
        opacity: 1,
      }}
    />
    <Path
      fill="#8788b8"
      d="M41.5 10.5c1.175-.219 2.175.114 3 1-1.552 1.298-2.552.965-3-1Z"
      style={{
        opacity: 0.511,
      }}
    />
    <Path
      fill="#b07347"
      d="M19.5 12.5c12.82-1.347 18.32 4.32 16.5 17-3.655 6.57-9.155 8.737-16.5 6.5-6.57-3.655-8.737-9.155-6.5-16.5 1.694-2.858 3.86-5.191 6.5-7Z"
      style={{
        opacity: 1,
      }}
    />
    <Path
      fill="#facc59"
      d="M5.5 28.5c2.823.885 3.49 2.552 2 5-3.003-.67-3.67-2.337-2-5Z"
      style={{
        opacity: 0.838,
      }}
    />
    <Path
      fill="#facc58"
      d="M39.5 36.5c.876-.13 1.543.203 2 1-.825.886-1.825 1.219-3 1-.172-.992.162-1.658 1-2Z"
      style={{
        opacity: 0.511,
      }}
    />
    <Path
      fill="#8989b8"
      d="M10.5 41.5h3v3h-3v-3Z"
      style={{
        opacity: 0.475,
      }}
    />
  </Svg>
)
export default Mercury
