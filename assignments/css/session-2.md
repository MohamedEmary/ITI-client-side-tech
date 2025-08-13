# Assignment: Responsive Card Layout

```html
<div class="card-container">
    <div class="card">
        <span class="badge">New</span>
        <h2>Card Title 1</h2>
        <p>
            This is the first card. It contains some text and a floating badge.
        </p>
        <button>Read More</button>
    </div>
    <div class="card">
        <span class="badge">Sale</span>
        <h2>Card Title 2</h2>
        <p>
            This is the second card. Try resizing the window to see the layout
            change.
        </p>
        <button>Read More</button>
    </div>
    <div class="card">
        <span class="badge">Hot</span>
        <h2>Card Title 3</h2>
        <p>
            This is the third card. The badge should always stay in the
            top-right corner.
        </p>
        <button>Read More</button>
    </div>
</div>
```

---

## Instructions

- **Flexbox Layout:**
    1. Use Flexbox to display the cards in a row on large screens, and stack them in a column on screens smaller than 700px.
    2. Add a gap of `24px` between cards.
    3. Center the cards horizontally and vertically within the viewport.

- **Card Styling:**
    1. Give each card a fixed width (`300px`), padding (`20px`), border-radius (`12px`), and a subtle box-shadow.
    2. Use Flexbox inside each card to space the content vertically (title, text, button).

- **Badge Positioning:**
    1. Use `position: absolute` to place the `.badge` in the top-right corner of each card.
    2. Make sure the card has `position: relative` so the badge is positioned correctly.
    3. Style the badge with a background color, white text, and some padding.

- **Button Styling:**
    1. Style the button to look modern (rounded corners, background color, hover effect).

- **Responsiveness:**
    1. Use a media query to stack the cards vertically on screens smaller than 700px.

<!-- https://gist.github.com/MohamedEmary/6336cb6bf38e55dbb04fa30a311f478a -->
