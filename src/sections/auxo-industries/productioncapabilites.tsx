"use client";

export default function CustomTable() {
  const tableData = [
    // Row 1 (heading row)
    ["", "Heading 2", "Heading 3", "Heading 4"],

    // Row 2 → 15
    ["Row 2 Col 1", "Row 2 Col 2", "Row 2 Col 3", "Row 2 Col 4"],
    ["Row 3 Col 1", "Row 3 Col 2", "Row 3 Col 3", "Row 3 Col 4"],
    ["Row 4 Col 1", "Row 4 Col 2", "Row 4 Col 3", "Row 4 Col 4"],
    ["Row 5 Col 1", "Row 5 Col 2", "Row 5 Col 3", "Row 5 Col 4"],
    ["Row 6 Col 1", "Row 6 Col 2", "Row 6 Col 3", "Row 6 Col 4"],
  ];

  return (
    <div className="overflow-x-auto p-6 bg-black flex justify-center">
      <table className="border-collapse border border-orange-500 text-white w-full max-w-6xl">
        <tbody>
          {tableData.map((row, rowIndex) => {
            const isHeadingRow = rowIndex === 0; // 1st row

            return (
              <tr
                key={rowIndex}
                className={isHeadingRow ? "bg-orange-500 text-white font-semibold" : ""}
              >
                {row.map((cell, colIndex) => (
                  <td
                    key={colIndex}
                    className="border border-orange-500 px-4 py-2 text-center"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
