module.exports = function(eleventyConfig) {

  eleventyConfig.addFilter("readableDate", function(value) {
    const date = new Date(value);

    return new Intl.DateTimeFormat("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "Asia/Kolkata"
    }).format(date);
  });

  eleventyConfig.addPassthroughCopy({
    "public/assets": "assets"
  });

  eleventyConfig.addCollection("posts", api =>
    api.getFilteredByGlob("src/posts/*.md")
      .sort((a, b) => b.date - a.date)
  );

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};