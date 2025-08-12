#  Assignment: Mini Blog Post Styling


```html
<div id="blog-post">
    <h1 class="post-title">My CSS Journey</h1>
    <h2 class="post-subtitle">Selectors and Specificity</h2>
    <p class="intro">CSS makes the web beautiful!</p>
    <div class="content">
        <p>Paragraph one. <span class="highlight">Important!</span></p>
        <p>Paragraph two. <a href="https://github.com/">Visit GitHub</a></p>
        <ul class="list">
            <li>Universal selector</li>
            <li>Class selector</li>
            <li id="special-item">ID selector</li>
            <li>Attribute selector</li>
        </ul>
        <input type="text" placeholder="Type here" />
        <input type="submit" value="Submit" />
    </div>
</div>
```


## Instructions

1. Set all elements’ `box-sizing` to `border-box`.
 <!--  all elements = * -->
2. Make all `<h1>` elements have a color of `#2c3e50`.
3. Set the font size of the post title to `2.5rem` and make its text uppercase.
4. Give the list item with the special ID a background color of `yellow`.
5. Make all links inside the content area green.
6. Remove the bullet points from all list items that are direct children of the list.
7. Add a red border to all text input fields.
 <!-- input[type="text"] border 1px solid red -->
8. When the user hovers over any highlighted text, change its color to orange.
9. Make the first letter of the intro paragraph twice as large as the rest of the text.
 <!-- :first-element 2em -->
10. Make all input fields except the submit button have a background color of `#f0f0f0`.
    <!-- input:not([type="submit"]) background-color #f0f0f0 -->
11. Set both the post title and post subtitle to use the font family `Arial, sans-serif`.
    <!-- h1, h2 font-family Arial, sans-serif -->
12. If `<h2>` element has `.post-subtitle` class, set its color to purple.
<!-- h2.post-subtitle color purple -->

---

13. In the HTML, override the post title color (in question 2) using an inline style (e.g., `style="color: red;"`). Then, in your CSS, write a more specific rule to change it back to `#2c3e50`.
14. Add `20px` padding, `10px` margin, and a `2px solid #333` border to the content area (`<div>` element with `.content` class).
15. Set the width of the content area to `80%` and its max-width to `600px`.
16. Center the text of the intro paragraph and underline it.
17. Make the highlighted text display as inline-block and add `10px` horizontal margin.

---

**Instructions:**

- For each task, choose the most appropriate CSS selector and property.
- Comment your CSS code to indicate which instruction you are fulfilling.
- Use the provided HTML structure for your work.

**Deliverables:**

- `blog.html`
- `blog.css` (with your CSS code)

<!-- https://gist.github.com/MohamedEmary/6710594b8e88e702ef230b9bf9c1937d -->
