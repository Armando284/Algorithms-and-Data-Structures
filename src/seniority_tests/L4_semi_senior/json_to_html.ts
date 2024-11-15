/**
 * Semi-Senior: JSON to HTML Table Converter
 *
 * Description:
 * Implement a function that takes an array of JSON objects and generates an HTML table in plain text.
 * The first row of the table should contain headers based on the object keys.
 *
 * Example:
 * const data = [
 *   { name: "Alice", age: 30, city: "New York" },
 *   { name: "Bob", age: 25, city: "San Francisco" }
 * ];
 * generateTable(data);
 *
 * Expected Output:
 * <table>
 *   <tr><th>name</th><th>age</th><th>city</th></tr>
 *   <tr><td>Alice</td><td>30</td><td>New York</td></tr>
 *   <tr><td>Bob</td><td>25</td><td>San Francisco</td></tr>
 * </table>
 *
 * Key Points in an Interview:
 * - Key Point 1: Ensure the JSON data is valid and that the table structure is consistent (same number of columns per row).
 * - Key Point 2: Handle cases where the JSON object keys are not the same in each object.
 * - Key Point 3: Describe how you managed table headers for logical HTML design.
 *
 * Additional Requirement:
 * Add basic inline styles so the table has borders and centered text, without needing a separate stylesheet.
 */

function generateTable (data: Array<{}>): string {
  const tHead = (headers: string[]): string => `\n<tr>${headers.map(key => '<th style="border: 1px solid black; text-align:center">' + key + '</th>').join('')}</tr>`
  const tRow = (headers: string[], row: { [key: string]: string }): string => `\n<tr>${headers.map(head => '<td style="border: 1px solid black; text-align:center">' + (row[head] ?? '') + '</td>').join('')}</tr>`
  const tBody = (data: Array<{}>): string => data.map(row => tRow(headers, row)).join('')

  const headers: string[] = []

  data.forEach(row => {
    Object.keys(row).forEach(key => {
      if (!headers.includes(key)) { headers.push(key) }
    })
  })

  console.log(headers)

  return `<table>${tHead(headers)}${tBody(data)}\n</table>`
}

const data = [
  { name: 'Alice', age: 30, city: 'New York' },
  { name: 'Bob', age: 25, city: 'San Francisco', job: 'SDE' },
  { name: 'Ted', lastname: 'Brown', age: 50, city: 'Sin City' }
]

console.log(generateTable(data))
