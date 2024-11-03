import React from 'react';

function Description_Design() {
    const balls = [
        { x: -60, y: 150 },
        { x: 8, y: 180 },
        { x: 60, y: 110 },
        { x: 85, y: 30 },
        { x: 145, y: 55 },
      ];
  return (
    <div className="flex max-w-6xl mx-auto sm:p-0 mt-10 ml-10 mr-10 mb-[10%]">
            <div className="flex justify-end w-full sm:w-auto">
                <div className="max-w-6xl mt-0 mx-auto p-4 sm:p-8 mt-10">
                    <h1 className="text-7xl leading-tight text-left text-1 mb-2 sm:mb-6">Fueling Future <br />Careers!</h1>
                    <p className="text-5xl leading-tight mt-2 sm:mt-6 text-left text-2">Introducing <br /> Student Internship Portal</p>
                    <p className="text-3xl leading-tight mt-2 sm:mt-6 text-left text-3">BY E-CELL</p>
                    <div className="h-1 bg-black mt-6" />
                </div>
            </div>
            <div className="flex-1 ml-[25%] mt-[8%] relative hidden lg:block "> {/* Hide this on smaller screens */}
                <div className="absolute inset-1.5">
                <div className="mt-12 relative w-64 h-64 bg-transparent">
                {/* Row 1 */}
                <div className="absolute left-0 top-0 w-16 h-16 bg-transparent"></div>
                <div className="absolute left-16 top-0 w-16 h-16 bg-transparent"></div>
                <div className="absolute left-32 top-0 w-16 h-16 bg-transparent"></div>
                <div className="absolute left-48 top-0 w-16 h-16 bg-white"></div> {/* (1,4) */}

                {/* Row 2 */}
                <div className="absolute left-0 top-16 w-16 h-16 bg-transparent"></div>
                <div className="absolute left-16 top-16 w-16 h-16 bg-transparent"></div>
                <div className="absolute left-32 top-16 w-16 h-16 bg-white"></div> {/* (2,3) */}
                <div className="absolute left-48 top-16 w-16 h-16 bg-transparent"></div>

                {/* Row 3 */}
                <div className="absolute left-0 top-32 w-16 h-16 bg-transparent"></div>
                <div className="absolute left-16 top-32 w-16 h-16 bg-white"></div> {/* (3,2) */}
                <div className="absolute left-32 top-32 w-16 h-16 bg-transparent"></div>
                <div className="absolute left-48 top-32 w-16 h-16 bg-transparent"></div>

                {/* Row 4 */}
                <div className="absolute left-0 top-48 w-16 h-16 bg-white"></div> {/* (4,1) */}
                <div className="absolute left-16 top-48 w-16 h-16 bg-transparent"></div>
                <div className="absolute left-32 top-48 w-16 h-16 bg-transparent"></div>
                <div className="absolute left-48 top-48 w-16 h-16 bg-transparent"></div>
                </div>
            </div>
            <div className="absolute inset-0">
            <div className="mt-12 relative w-64 h-64 bg-transparent">
                {/* Row 1 */}
                <div className="absolute left-0 top-0 w-16 h-16 bg-transparent"></div>
                <div className="absolute left-16 top-0 w-16 h-16 bg-transparent"></div>
                <div className="absolute left-32 top-0 w-16 h-16 bg-transparent"></div>
                <div className="absolute left-48 top-0 w-16 h-16 bg-black"></div> {/* (1,4) */}

                {/* Row 2 */}
                <div className="absolute left-0 top-16 w-16 h-16 bg-transparent"></div>
                <div className="absolute left-16 top-16 w-16 h-16 bg-transparent"></div>
                <div className="absolute left-32 top-16 w-16 h-16 bg-black"></div> {/* (2,3) */}
                <div className="absolute left-48 top-16 w-16 h-16 bg-transparent"></div>

                {/* Row 3 */}
                <div className="absolute left-0 top-32 w-16 h-16 bg-transparent"></div>
                <div className="absolute left-16 top-32 w-16 h-16 bg-black"></div> {/* (3,2) */}
                <div className="absolute left-32 top-32 w-16 h-16 bg-transparent"></div>
                <div className="absolute left-48 top-32 w-16 h-16 bg-transparent"></div>

                {/* Row 4 */}
                <div className="absolute left-0 top-48 w-16 h-16 bg-black"></div> {/* (4,1) */}
                <div className="absolute left-16 top-48 w-16 h-16 bg-transparent"></div>
                <div className="absolute left-32 top-48 w-16 h-16 bg-transparent"></div>
                <div className="absolute left-48 top-48 w-16 h-16 bg-transparent"></div>
                </div>
            </div>
            <div className="absolute inset-0">
            <div className="relative w-full h-full bg-transparent">
            {balls.map((ball, index) => (
                <div
                key={index}
                className="absolute rounded-full w-8 h-8 bg-black"
                style={{ left: ball.x, top: ball.y }}
                />
            ))}
            </div>
            </div>
          </div>
        </div>
  );
}

export default Description_Design;
