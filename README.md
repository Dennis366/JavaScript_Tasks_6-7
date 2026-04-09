# JavaScript DOM Tasks – Tasks 6 & 7

This repository contains **Tasks 6 and 7** from the JavaScript assignments, demonstrating basic **DOM manipulation** using plain JavaScript.

## Tasks Overview

### Task 6 – Add Text to HTML
**Description:** Add the text `"Ad astra per aspera"` to the `<main>` section of an HTML page using JavaScript.

**Files:** `Task_6.html`, `Task_6.js`

**How it works:**  
The HTML page contains a `<main>` element. The JavaScript file selects the `<main>` element and appends the text `"Ad astra per aspera"`.

**Expected Output (on the page):**

Dom test 1  
Ad astra per aspera

**Console Output (F12):**

Added text: Ad astra per aspera

### Task 7 – Insert Rows into a Table
**Description:** Create a JavaScript function to dynamically add rows to a table when the button `"Insert row"` is clicked.

**Files:** `Task_7.html`, `Task_7.js`

**How it works:**  
The HTML page contains a table with two initial rows. The button uses an inline `onclick` to call the global function `insert_Row()` in the JS file. Each click adds a new row with the next row number.

**Expected Output (on the page):**  

**Initial Table:**

| Row1 cell1 | Row1 cell2 |
|------------|------------|
| Row2 cell1 | Row2 cell2 |

**After clicking "Insert row" once:**

| Row1 cell1 | Row1 cell2 |
|------------|------------|
| Row2 cell1 | Row2 cell2 |
| Row3 cell1 | Row3 cell2 |

**Console Output (F12):**

Inserted Row3  
Inserted Row4  
...

## Instructions
1. Open `Task_6.html` and `Task_7.html` in a modern browser (e.g., Chrome).  
2. For Task 6, verify that `"Ad astra per aspera"` appears below `"Dom test 1"`.  
3. For Task 7, click the `"Insert row"` button to add rows dynamically.  
4. Open the browser console (F12) to view log messages confirming actions.


