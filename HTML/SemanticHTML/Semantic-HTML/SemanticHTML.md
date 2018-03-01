#Semantic HTML
![inline fit](http://mercercognitivepsychology.pbworks.com/f/1353889292/semantic%20image%201.gif)

---

#Importance
- Readability
- Accessibility
- SEO (Search Engine Optimization)
- Consumability
- Separation of Concerns

^Readability - easier for other developers to read
^Accessibility -  Screen readers for visually impaired
^SEO - can map out a site and identify content easier. Better semantic html ends up higher on a list
^Consumability - tools like screen-scrapers and crawlers rely on HTML to separate content from structure
^Separation of Concerns - Let HTML specialize in manipulating content so CSS can concentrate in style and JavaScript concentrate on behavior

---

#Structural Semantic Tags
- header
- main
- footer
- nav
- aside
- section
- article


———

# Section vs Article

![inline](https://assets.hongkiat.com/uploads/html-5-semantics/document-outline-example.jpg)![inline](http://3.bp.blogspot.com/-o8GEeJFEMiE/UnkasLq6ziI/AAAAAAAAATI/2qrUcjQGfYI/s1600/semantics-image.jpg)

^Section represents a standalone section of functionality contained within an HTML document, typically with a heading, which doesn't have a more specific semantic element to represent it.
^Article represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication). Examples include: a forum post, a magazine or newspaper article, or a blog entry.

———

![fit](http://html5doctor.com/downloads/h5d-sectioning-flowchart.png)

——-

#Sample Code

```HTML
<div id="blog-articles-about-animals">

  <section>
    <h1>Articles about Turtles</h1>
    <article>
      <h2>Where Turtles Live</h2>
      <p>blah blah</p>
    </article>
    <article>
      <h2>What Turtles Eat</h2>
      <p>blah blah</p>
    </article>
  </section>

  <section>
    <h1>Articles about Chickens</h1>
    <article>
      <h2>History of Chickens in USA</h2>
      <p>blah blah</p>
    </article>
    <article>
      <h2>Chickens in the Wild</h2>
      <p>blah blah</p>
    </article>
  </section>

</div>
```

—--

# [fit] Let’s Practice!

^Clone repo: https://github.com/jmrigali/semantic-html.git
^ 