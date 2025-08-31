# Bootstrap

- What is a CDN
- Library vs Framework

- What is Bootstrap
- Written with SASS (CSS preprocessor)
- Created by Mark Otto and Jacob Thornton at Twitter

- Download vs CDN
- Bootstrap `map`, `bundle`, and `min` files

- CSS Normalization VS Reset

- Bootstrap grid system
- Screen sizes:
  - `xs: 0` Less than 576px
  - `sm: 576px` Between 576px and 768px
  - `md: 768px` Between 768px and 992px
  - `lg: 992px` Between 992px and 1200px
  - `xl: 1200px` Between 1200px and 1400px
  - `xxl: 1400px` More than 1400px
- Containers:
  - `.container` fixed container
  - `.container-{breakpoint}`: width is 100% until the breakpoint is reached it acts like a fixed container
  - `.container-fluid`
- Rows
  - `.row`
  - `.row-cols-{number}`: to specify the number of columns in a row
  - `.g-{number}`: to specify the gap between columns and rows
  - `.g-{breakpoint}-{number}`: to specify the gap between columns and rows at a specific breakpoint and above. Less than that take the default gap
  - `.gx/y-{number}`: to specify the gap between columns/rows
  - `.align-items-*`
  - `.justify-content-*`
- Columns
  - `.col`: auto size
  - `.col-{number}`: specify the number of columns to span
  - `.col-{breakpoint}-{number}`: take that number of columns at that breakpoint and above. Less than that take 100% width
  - `.col-auto`: size based on content
  - `.order-{number}`: to change the order of the columns
  - `.offset-{number}`: to add space before the column
  - `.offset-{breakpoint}-{number}`: to add space before the column at that breakpoint
