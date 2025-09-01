# Bootstrap Session 2

### **2. Typography & Text Styling**

- **Headings & Display:**

  - `<h1>` - `<h6>` are styled by default.
  - **Display Classes:** For large, impactful titles, use `.display-1` through `.display-6`.

- **Font Size (`.fs-*`):**

  - Control font size independently of HTML tags.
  - Classes: `.fs-1` (largest) down to `.fs-6` (smallest).

- **Font Weight & Style:**

  - `.fw-bold`, `.fw-bolder`, `.fw-semibold`, `.fw-normal`, `.fw-light`, `.fw-lighter`.
  - `.fst-italic`, `.fst-normal`.

- **Text Alignment & Transform:**

  - **Alignment:** `.text-start`, `.text-center`, `.text-end`.
  - **Responsive Alignment:** `.text-md-center` (aligns center on medium screens and up).
  - **Transform:** `.text-lowercase`, `.text-uppercase`, `.text-capitalize`.

- **Other Text Utilities:**
  - `.lead`: Makes a paragraph stand out.
  - `.text-decoration-none`: Removes underlines from links.
  - `.text-muted`: For de-emphasized or secondary text.
  - `.text-white-50` / `.text-black-50`: White or black text with 50% opacity.
  - **Text Wrap & Overflow:** `.text-wrap`, `.text-nowrap`.
  - **Line Height:** `.lh-1`, `.lh-sm`, `.lh-base`, `.lh-lg`.
  - **Monospace Font:** `.font-monospace`.
  - **Reset Color & Link:** `.text-reset`.

---

### **3. The Color System**

- **Theme Colors:** `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`.

- **Text Color (`.text-*`):**

  - Applies color to text. **Example:** `<p class="text-danger">Error message.</p>`

- **Background Color (`.bg-*`):**

  - Applies a background color. **Example:** `<div class="bg-info bg-opacity-25 p-3">Informational box.</div>`

- **Opacity Utilities:**
  - Control the opacity of text and backgrounds independently.
  - **Text:** `.text-opacity-75`, `.text-opacity-50`, `.text-opacity-25`.
  - **Background:** `.bg-opacity-75`, `.bg-opacity-50`, `.bg-opacity-10`.

---

### **4. Dark Mode & Color Modes**

Bootstrap has built-in support for color modes, most notably dark mode. It works by changing CSS variables globally.

- **How it Works:** The magic happens by adding a `data-bs-theme` attribute to the `<html>` tag or another parent element.

  - `data-bs-theme="light"` (The default)
  - `data-bs-theme="dark"`

- **Static Implementation (Dark by Default):**

  - To make your entire page dark by default, simply set the attribute on the `<html>` tag in your HTML file:
    ```html
    <!DOCTYPE html>
    <html lang="en" data-bs-theme="dark">
    	...
    </html>
    ```

- **Theme-Aware Colors:**

  - Many components (like Cards and Navbars) will automatically adapt.
  - For custom styling, use the new **body** color classes, which adapt to the current mode:
    - `.text-body`: Main text color (black in light mode, white in dark mode).
    - `.bg-body`: Main background color.
    - `.bg-body-secondary`, `.bg-body-tertiary`: Lighter/subtle background shades that work in both modes.
    - `.border-secondary`, `.border-tertiary`: Adaptive border colors.

- **Creating a Theme Switcher (with JavaScript):**

  - This is the most common use case. You can use JavaScript to toggle the `data-bs-theme` attribute.
  - **Example:**

    ```html
    <button id="theme-toggler" class="btn btn-secondary">Toggle Theme</button>

    <script>
    	const themeToggler = document.getElementById("theme-toggler");
    	const htmlElement = document.documentElement;

    	themeToggler.addEventListener("click", () => {
    		if (htmlElement.getAttribute("data-bs-theme") === "dark") {
    			htmlElement.setAttribute("data-bs-theme", "light");
    		} else {
    			htmlElement.setAttribute("data-bs-theme", "dark");
    		}
    	});
    </script>
    ```

---

### **5. Spacing, Sizing, Borders, & Shadows (The Box Model)**

- **Spacing (Margin & Padding):**

  - **Format:** `{property}{sides}-{size}` (e.g., `mt-3`, `px-5`).
  - **Property:** `m` (margin), `p` (padding).
  - **Sides:** `t`, `b`, `s` (start), `e` (end), `x` (horizontal), `y` (vertical).
  - **Size:** `0` (none) to `5` (largest), and `auto` for margin.
  - **Centering:** Use `.mx-auto` on a block element to center it.

- **Sizing:**

  - **Width:** `.w-25`, `.w-50`, `.w-75`, `.w-100`, `.w-auto`.
  - **Height:** `.h-25`, `.h-50`, `.h-75`, `.h-100`, `.h-auto`.
  - **Viewports:** **`min-vw-100`**, **`min-vh-100`**, **`vw-100`**, **`vh-100`**.

- **Borders:**

  - **Add/Remove:** `.border`, `.border-0`, `.border-top`, etc.
  - **Color:** `.border-primary`, `.border-danger`. Uses theme-aware colors.
  - **Width:** `.border-1` to `.border-5`.
  - **Rounding:** `.rounded`, `.rounded-top`, `.rounded-circle`, `.rounded-pill`. Sizes `0-5`.

- **Shadows:**
  - `.shadow-sm` (small), `.shadow` (regular), `.shadow-lg` (large).
  - **No Shadow:** `.shadow-none`.

---

### **6. Display & Visibility **

- **Display Property:**

  - Change the `display` value: `.d-block`, `.d-flex`, `.d-grid`, etc.

- **Hiding Elements:**

  - `.d-none`: Hides element completely (removes from layout).
  - `.invisible`: Hides element but it still takes up space.

- **Responsive Display:**
  - Show/hide based on screen size. **Format:** `.d-{breakpoint}-{value}`.
  - **Example 1:** `<div class="d-none d-lg-block">Only shows on large screens and up.</div>`
  - **Example 2:** `<div class="d-lg-none">Hidden on large screens and up.</div>`

---

### **7. Content-Specific Utilities**

- **Images:**

  - `.img-fluid`: **Essential.** Makes images responsive.
  - `.img-thumbnail`: Adds a simple padded border.
  - **Object Fit:** `.object-fit-contain`, `.object-fit-cover`, `.object-fit-fill`, `.object-fit-scale-down`, `.object-fit-none`.

---

### **8. Positioning & Z-Index**

- **Positioning:**

  - **Set `position`:** `.position-static`, `.position-relative`, `.position-absolute`, `.position-fixed`, `.position-sticky`.
  - **Pin to a corner:** `top-0`, `start-0`, `bottom-0`, `end-0`. Combine with `position-absolute` or `position-fixed`.

- **Z-Index:**
  - **Stacking context:** `.z-1`, `.z-2`, `.z-3` (and so on) to `.z-n1` for negative values.
