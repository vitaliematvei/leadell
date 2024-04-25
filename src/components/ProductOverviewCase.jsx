function ProductOverviewCase() {
  return (
    <section className="max-w-[1512px] mx-auto md:px-24 mb-14 text-black">
      <div className="flex gap-4 md:gap-8 py-8 md:py-16 mb-8 text-3xl md:text-7xl border-b border-black uppercase">
        <h1 className="font-Poppins">Product</h1>
        <span className="font-GalleryModern">Overview</span>
      </div>
      <div className="max-w-[1171] mx-auto  md:flex md:py-14 font-Poppins">
        <h1 className="uppercase mx-auto mb-4 w-1/4">PRODUCT OVERVIEW</h1>
        <p className="w-3/4 mx-auto">
          It doesn't matter what style or on what level you draw, this
          application helps bring many interesting and creative ideas to life.
          FlipaClip is a comprehensive drawing tool for creating stories on your
          smartphone in a convenient, fast, and simple yet detailed way with
          tons of different tools.
          <br />
          <br />
          One of the best things about FlipaClip is that it also includes an
          animation system so users can add that special something to whatever
          they draw.
          <br />
          <br />
          <a
            href="https://www.google.com"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
            onclick="window.location.href='https://www.google.com'"
          >
            View the website
          </a>
        </p>
      </div>
    </section>
  );
}

export default ProductOverviewCase;
