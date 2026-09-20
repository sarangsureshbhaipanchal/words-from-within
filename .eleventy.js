module.exports = function(eleventyConfig) {

  /* =========================================================
     DATE FILTER
     ========================================================= */

  eleventyConfig.addFilter("readableDate", function(value) {

    const date = new Date(value);

    return new Intl.DateTimeFormat("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "Asia/Kolkata"
    }).format(date);

  });


  /* =========================================================
     CLEAN EXCERPT
     ========================================================= */

  eleventyConfig.addFilter("cleanExcerpt", function(value) {

    if (!value) {
      return "";
    }

    return String(value)
      .replace(/<[^>]*>/g, "")
      .replace(/&quot;/g, '"')
      .replace(/&#34;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&apos;/g, "'")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&nbsp;/g, " ")
      .replace(/\s+/g, " ")
      .trim();

  });


  /* =========================================================
     COPY ASSETS
     ========================================================= */

  eleventyConfig.addPassthroughCopy({
    "public/assets": "assets",
    "public/admin": "admin"
  });


  /* =========================================================
     LATEST POSTS
     All Markdown posts
     Newest first
     ========================================================= */

  eleventyConfig.addCollection("latestPosts", function(api) {

    return api
      .getFilteredByGlob("src/posts/*.md")
      .sort(function(a, b) {
        return b.date - a.date;
      });

  });


  /* =========================================================
     BLOGS
     ========================================================= */

  eleventyConfig.addCollection("blogs", function(api) {

    return api
      .getFilteredByGlob("src/posts/*.md")
      .filter(function(post) {
        return post.data.type === "Blog";
      })
      .sort(function(a, b) {
        return b.date - a.date;
      });

  });


  /* =========================================================
     SHAYARI
     ========================================================= */

  eleventyConfig.addCollection("shayari", function(api) {

    return api
      .getFilteredByGlob("src/posts/*.md")
      .filter(function(post) {
        return post.data.type === "Shayari";
      })
      .sort(function(a, b) {
        return b.date - a.date;
      });

  });


  /* =========================================================
     LIFE LESSONS
     ========================================================= */

  eleventyConfig.addCollection("lifeLessons", function(api) {

    return api
      .getFilteredByGlob("src/posts/*.md")
      .filter(function(post) {
        return post.data.type === "Life Lesson";
      })
      .sort(function(a, b) {
        return b.date - a.date;
      });

  });


  /* =========================================================
     ELEVENTY CONFIGURATION
     ========================================================= */

  return {

    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }

  };

};