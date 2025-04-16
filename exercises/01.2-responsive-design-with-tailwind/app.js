// ResponsiveLayout.js
// 
// Instructions:
// 1. Create a new React component called `ResponsiveLayout`.
// 2. Use Tailwind's responsive utilities to design a layout that:
//    - Displays a single column of items on small screens.
//    - Changes to a two-column layout on medium screens (`md` breakpoint).
//    - Expands to a three-column layout on large screens (`lg` breakpoint).
// 3. Add content to each column to visualize the layout better.
// 4. Test your layout by resizing the browser window to ensure it responds correctly at different breakpoints.

import React from 'react';

const ResponsiveLayout = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Add your grid and column classes here using Tailwind CSS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Add content for each column */}
        <div className="bg-blue-500 p-4 text-white">Column 1</div>
        <div className="bg-green-500 p-4 text-white">Column 2</div>
        <div className="bg-red-500 p-4 text-white">Column 3</div>
      </div>
    </div>
  );
};

export default ResponsiveLayout;
