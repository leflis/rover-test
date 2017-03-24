# rover-test

A rover has recently landed on a plateau on Mars by NASA.  This particular plateau is curiously rectangular and must be navigated by the rover so that the on-board cameras can have a complete view of the surrounding terrain to send back to Mission Control on Earth.

The rover’s position and location is represented by a combination of x and y co-ordinates and a letter representing one of the four cardinal compass points. The plateau is divided up into a grid system to simplify navigation.  An example position might be 5, 5, S, which means the rover is in the top left corner facing South.

The rover is control by a simple string of letters sent by NASA.  The letter commands consist of ‘L’, ‘R’, and ‘M’.  ‘L’ and ‘R’ tells the rover to rotate 90 degrees left or right without moving from the current spot.  ‘M’ tells the rover to move forward one grid point and keep the current heading.

Assume that the square directly North from (x, y) is (x, y + 1)

Input:
The first line of input is the upper-right coordinates of the plateau, the lower-left coordinates are assumed to be 0, 0. The second line of input pertains to how the rover has been deployed on the specified grid system. The last line is a series of instructions to tell the rover how to explore the area. 

The position is made up of two integers and a letter separated by spaces, corresponding to the x and y co-ordinates and the rover’s orientation.

The movement commands is made of a string consisting of ‘L’, ‘R’, ‘M’.

Output:
The output that should be displayed will represent the rovers final co-ordinates and heading.

Test Input:
•	Test One: 
5 5
1 2 N
LMLMLMLMM
•	Test Two:
5 5
3 3 E
MMRMMRMRRM

Expected Output:
Test One – 1 3 N
Test Two – 5 1 E
