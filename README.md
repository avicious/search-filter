# Search & Filter Component

A lightweight, responsive React component designed to demonstrate efficient data filtering within an array of objects. This component allows users to search by planet name and filter by size criteria simultaneously.

## 🚀 Features

- **Combined Logic:** Search and Filter act as an "AND" operation (e.g., Search for "u" + Size > 25,000km correctly returns "Uranus").
- **Derived State:** Instead of duplicating data into multiple state variables, the list is calculated on-the-fly during render for better performance and fewer bugs.
- **Case Insensitivity:** Search is normalized to handle any combination of uppercase/lowercase input.
- **Empty State Handling:** Displays a "No results found" message when criteria are too restrictive.

## 📂 Component Structure

| State Property | Type     | Description                                                 |
| :------------- | :------- | :---------------------------------------------------------- |
| `searchQuery`  | `string` | Tracks the user's text input.                               |
| `minSize`      | `number` | Tracks the minimum diameter selected in the dropdown.       |
| `filteredList` | `Array`  | **Derived State:** The result of the `.filter()` operation. |

## 📖 Usage

1.  **Data Setup:** The component consumes a constant `PLANET_DATA` array.
    ```javascript
    { id: "01", name: "Mercury", size: 2440, unit: "km" }
    ```
2.  **Search:** Type into the input field to filter by the `name` property.
3.  **Filter:** Select a size from the dropdown to filter by the `size` property.
4.  **Reset:** Clear the search box and set the dropdown to "All Sizes" to see the full list again.

## 💡 Implementation Details

This component avoids the common "Syncing State" anti-pattern. Instead of using `useEffect` or multiple `setState` calls to update a filtered list, it calculates the `filteredList` directly in the body of the function:

```javascript
const filteredList = PLANET_DATA.filter((planet) => {
  const matchesSearch = planet.name
    .toLowerCase()
    .includes(searchQuery.toLowerCase());
  const matchesSize = planet.size >= minSize;
  return matchesSearch && matchesSize;
});
```
