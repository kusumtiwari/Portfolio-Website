import Affiliations from "../aboutpage/Affiliations";

{
  /* <div className="h-[50vh] w-[50%] bg-green-200">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 800 390"
    fill="none"
  >
    <defs>
      <clipPath id="curvedPath">
        <path d="M800 390H0V0H800C800 0 745.441 131 887.441 230C1029.44 329 976.44 390 976.44 390Z" />
      </clipPath>
    </defs>

    <image
      xlinkHref="/images/common/Footer.png" // Replace with the URL or path to your image
      width="100%"
      height="100%"
      preserveAspectRatio="xMinYMin slice"
      clipPath="url(#curvedPath)"
    />
  </svg>
</div>; */
}

//achievements awards section fallback curve
{
  /* <div className="h-fit w-full " style={{ transform: "rotate(180deg)" }}>
        <svg
          viewBox="0 0 500 70"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M0,0 L500,0 L500,50 C300,110 150,20 0,50 Z"
            style={{
              stroke: "none",
              fill: "#FFF0E180",
            }}
          ></path>
        </svg>
      </div> */
}

// Affiliations section bottom curve
<div className="w-full mb-4">
  <svg
    viewBox="0 0 500 70"
    preserveAspectRatio="none"
    style={{ height: "100%", width: "100%" }}
  >
    <defs>
      <pattern
        id="image-pattern"
        patternUnits="userSpaceOnUse"
        width="100%"
        height="100%"
      >
        <image
          href="/images/AffiliationBg.png"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
        />
      </pattern>
    </defs>

    <path
      d="M0,0 L500,0 L500,50 C300,110 150,20 0,50 Z"
      style={{
        stroke: "none",
        fill: "url(#image-pattern)",
      }}
    ></path>
  </svg>
</div>;
