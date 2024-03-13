

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
