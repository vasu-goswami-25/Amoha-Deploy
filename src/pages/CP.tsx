
import { type FC, useState, useEffect, useMemo } from "react";
interface Problem {
  id: string | number;
  title: string;
  link: string;
  status: boolean;
}

type ProblemsByRating = {
  [rating: number]: Problem[];
};

interface CPProps {
  darkMode: boolean;
}


// // NOTE: The 'status' for all problems is set to 'false' here.
const initialProblemsByRating: ProblemsByRating = {
  800: [
    { id: '1', title: 'Halloumi Boxes', link: 'https://codeforces.com/contest/1800/problem/A', status: false },
    { id: '2', title: 'Line Trip', link: 'https://codeforces.com/problemset/problem/1901/A', status: false },
    { id: '3', title: 'Cover in Water', link: 'https://codeforces.com/problemset/problem/1900/A', status: false },
    { id: '4', title: 'Game with Integers', link: 'https://codeforces.com/problemset/problem/1899/A', status: false },
    { id: '5', title: 'Jagged Swaps', link: 'https://codeforces.com/problemset/problem/1896/A', status: false },
    { id: '6', title: "Doremy's Paint 3", link: 'https://codeforces.com/problemset/problem/1890/A', status: false },
    { id: '7', title: "Don't Try to Count", link: 'https://codeforces.com/problemset/problem/1881/A', status: false },
    { id: '8', title: 'How Much Does Daytona Cost?', link: 'https://codeforces.com/problemset/problem/1878/A', status: false },
    { id: '9', title: 'Goals of Victory', link: 'https://codeforces.com/problemset/problem/1877/A', status: false },
    { id: '10', title: 'Target Practice', link: 'https://codeforces.com/problemset/problem/1873/C', status: false },
    { id: '11', title: 'Ambitious Kid', link: 'https://codeforces.com/problemset/problem/1873/C', status: false },
    { id: '12', title: 'Sequence Game', link: 'https://codeforces.com/problemset/problem/1862/B', status: false },
    { id: '13', title: 'United We Stand', link: 'https://codeforces.com/problemset/problem/1859/A', status: false },
    { id: '14', title: 'Array Coloring', link: 'https://codeforces.com/problemset/problem/1857/A', status: false },
    { id: '15', title: 'Desorting', link: 'https://codeforces.com/problemset/problem/1853/A', status: false },
    { id: '16', title: 'Forbidden Integer', link: 'https://codeforces.com/problemset/problem/1845/A', status: false },
    { id: '17', title: 'Grasshopper on a Line', link: 'https://codeforces.com/problemset/problem/1837/A', status: false },
    { id: '18', title: 'Unit Array', link: 'https://codeforces.com/problemset/problem/1834/A', status: false },
    { id: '19', title: 'Twin Permutations', link: 'https://www.tle-eliminators.com/cp-sheet', status: false },
    { id: '20', title: 'Blank Space', link: 'https://codeforces.com/problemset/problem/1829/B', status: false },
    { id: '21', title: 'Coins', link: 'https://codeforces.com/problemset/problem/1814/A', status: false },
    { id: '22', title: 'Walking Master', link: 'https://codeforces.com/problemset/problem/1806/A', status: false },
    { id: '23', title: 'We Need the Zero', link: 'https://codeforces.com/problemset/problem/1805/A', status: false },
    { id: '24', title: 'Prepend and Append', link: 'https://codeforces.com/problemset/problem/1791/C', status: false },
    { id: '25', title: "Serval and Mocha's Array", link: 'https://codeforces.com/problemset/problem/1789/A', status: false },
    { id: '26', title: 'One and Two', link: 'https://codeforces.com/problemset/problem/1788/A', status: false },
    { id: '27', title: 'Make it Beautiful', link: 'https://codeforces.com/problemset/problem/1783/A', status: false },
    { id: '28', title: 'Everybody Likes Good Arrays!', link: 'https://codeforces.com/problemset/problem/1777/A', status: false },
    { id: '29', title: 'Extremely Round', link: 'https://codeforces.com/problemset/problem/1766/A', status: false },
    { id: '30', title: 'Two Permutations', link: 'https://codeforces.com/problemset/problem/1761/A', status: false },
    { id: '31', title: 'Buttons', link: 'https://codeforces.com/problemset/problem/1858/A', status: false },
  ],
  900: [
    { id: '61', title: 'Forked!', link: 'https://codeforces.com/problemset/problem/1904/A', status: false },
    { id: '62', title: 'Chemistry', link: 'https://codeforces.com/problemset/problem/1883/B', status: false },
    { id: '63', title: 'Vasilije in Cacak', link: 'https://codeforces.com/problemset/problem/1878/C', status: false },
    { id: '64', title: 'Jellyfish and Undertale', link: 'https://codeforces.com/problemset/problem/1875/A', status: false },
    { id: '65', title: 'Make It Zero', link: 'https://codeforces.com/problemset/problem/1875/A', status: false },
    { id: '66', title: 'Longest Divisors Interval', link: 'https://codeforces.com/problemset/problem/1855/B', status: false },
    { id: '67', title: 'Balanced Round', link: 'https://codeforces.com/problemset/problem/1850/D', status: false },
    { id: '68', title: 'Comparison String', link: 'https://codeforces.com/problemset/problem/1837/B', status: false },
    { id: '69', title: 'Permutation Swap', link: 'https://codeforces.com/problemset/problem/1828/B', status: false },
    { id: '70', title: 'Odd Queries', link: 'https://codeforces.com/problemset/problem/1807/D', status: false },
    { id: '71', title: 'Not Dividing', link: 'https://codeforces.com/problemset/problem/1794/B', status: false },
    { id: '72', title: 'Mainak and Array', link: 'https://codeforces.com/problemset/problem/1726/A', status: false },
    { id: '73', title: 'NIT Destroys the Universe', link: 'https://codeforces.com/problemset/problem/1696/B', status: false },
    { id: '14', title: 'AvtoBus', link: 'https://codeforces.com/problemset/problem/1679/A', status: false },
    { id: '15', title: 'Make It Increasing', link: 'https://codeforces.com/problemset/problem/1675/B', status: false },
    { id: '16', title: 'Deletive Editing', link: 'https://codeforces.com/problemset/problem/1666/D', status: false },
    { id: '17', title: 'Array Cloning Technique', link: 'https://codeforces.com/problemset/problem/1665/B', status: false },
    { id: '18', title: 'Make AP', link: 'https://codeforces.com/problemset/problem/1624/B', status: false },
    { id: '19', title: 'Odd Grasshopper', link: 'https://codeforces.com/problemset/problem/1607/B', status: false },
    { id: '20', title: 'AB Balance', link: 'https://codeforces.com/problemset/problem/1606/A', status: false },
    { id: '21', title: 'Make it Divisible by 25', link: 'https://codeforces.com/problemset/problem/1593/B', status: false },
    { id: '22', title: 'Luntik and Subsequences', link: 'https://codeforces.com/problemset/problem/1582/B', status: false },
    { id: '23', title: 'Mocha and Math', link: 'https://codeforces.com/problemset/problem/1559/A', status: false },
    { id: '24', title: 'Exciting Bets', link: 'https://codeforces.com/problemset/problem/1543/A', status: false },
    { id: '25', title: 'Bad Boy', link: 'https://codeforces.com/problemset/problem/1537/B', status: false },
    { id: '26', title: 'Odd Divisor', link: 'https://codeforces.com/problemset/problem/1475/A', status: false },
    { id: '27', title: 'Strange Partition', link: 'https://codeforces.com/problemset/problem/1471/A', status: false },
    { id: '28', title: 'Sum of Medians', link: 'https://codeforces.com/problemset/problem/1440/B', status: false },
    { id: '29', title: 'Three Indices', link: 'https://codeforces.com/problemset/problem/1380/A', status: false },
    { id: '30', title: '01 Game', link: 'https://codeforces.com/problemset/problem/1373/B', status: false },
    { id: '31', title: 'Multiply by 2, divide by 6', link: 'https://codeforces.com/problemset/problem/1374/B', status: false },
  ],
  1000: [
    { id: '174', title: 'Swap and Delete', link: 'https://codeforces.com/problemset/problem/1913/B', status: false },
    { id: '175', title: 'Raspberries', link: 'https://codeforces.com/problemset/problem/1883/C', status: false },
    { id: '176', title: 'Helmets in Night Light', link: 'https://codeforces.com/problemset/problem/1876/A', status: false },
    { id: '177', title: 'Olya and Game with Arrays', link: 'https://codeforces.com/problemset/problem/1859/B', status: false },
    { id: '178', title: 'Monsters', link: 'https://codeforces.com/problemset/problem/1849/B', status: false },
    { id: '179', title: 'Ski Resort', link: 'https://codeforces.com/problemset/problem/1840/C', status: false },
    { id: '180', title: 'Array merging', link: 'https://codeforces.com/problemset/problem/1831/B', status: false },
    { id: '181', title: 'Distinct Split', link: 'https://codeforces.com/problemset/problem/1791/D', status: false },
    { id: '182', title: 'Minimum LCM', link: 'https://codeforces.com/problemset/problem/1765/M', status: false },
    { id: '183', title: 'Traffic Light', link: 'https://codeforces.com/problemset/problem/1744/C', status: false },
    { id: '184', title: 'Basketball Together', link: 'https://codeforces.com/problemset/problem/1725/B', status: false },
    { id: '185', title: 'Beautiful Array', link: 'https://codeforces.com/problemset/problem/1715/B', status: false },
    { id: '186', title: 'Luke is a Foodie', link: 'https://codeforces.com/problemset/problem/1704/B', status: false },
    { id: '187', title: 'Shoe Shuffling', link: 'https://codeforces.com/problemset/problem/1691/B', status: false },
    { id: '188', title: 'Black and White Stripe', link: 'https://codeforces.com/problemset/problem/1690/D', status: false },
    { id: '189', title: 'Red Versus Blue', link: 'https://codeforces.com/problemset/problem/1659/A', status: false },
    { id: '190', title: 'Roof Construction', link: 'https://codeforces.com/problemset/problem/1632/B', status: false },
    { id: '191', title: 'Triangles on a Rectangle', link: 'https://codeforces.com/problemset/problem/1620/B', status: false },
    { id: '192', title: 'Divan and a New Project', link: 'https://codeforces.com/problemset/problem/1614/B', status: false },
    { id: '193', title: 'MEXor Mixup', link: 'https://codeforces.com/problemset/problem/1567/B', status: false },
    { id: '194', title: 'Double-ended Strings', link: 'https://codeforces.com/problemset/problem/1567/B', status: false },
    { id: '195', title: 'Add and Divide', link: 'https://codeforces.com/problemset/problem/1485/A', status: false },
    { id: '196', title: 'Different Divisors', link: 'https://codeforces.com/problemset/problem/1474/B', status: false },
    { id: '197', title: 'Numbers Box', link: 'https://codeforces.com/problemset/problem/1447/B', status: false },
    { id: '198', title: 'Valerii Against Everyone', link: 'https://codeforces.com/problemset/problem/1438/B', status: false },
    { id: '199', title: 'Buying Torches', link: 'https://codeforces.com/problemset/problem/1418/A', status: false },
    { id: '200', title: 'Fair Numbers', link: 'https://codeforces.com/problemset/problem/1411/B', status: false },
    { id: '201', title: 'Move Brackets', link: 'https://codeforces.com/problemset/problem/1374/C', status: false },
    { id: '202', title: 'Johnny', link: 'https://codeforces.com/problemset/problem/1362/A', status: false },
    { id: '203', title: 'Bogosort', link: 'https://codeforces.com/problemset/problem/1312/B', status: false },
    { id: '204', title: 'Reverse a Substring', link: 'https://codeforces.com/problemset/problem/1155/A', status: false },
  ],
  1100: [
    { id: 1, title: 'Dubstep', link: 'https://codeforces.com/contest/208/problem/A', status: false },
    { id: 2, title: 'I Wanna Be the Guy', link: 'https://codeforces.com/contest/469/problem/A', status: false },
    { id: 3, title: 'Arrival of the General', link: 'https://codeforces.com/contest/144/problem/A', status: false },
    { id: 4, title: 'Presents', link: 'https://codeforces.com/contest/136/problem/A', status: false },
    { id: 5, title: 'HQ9+', link: 'https://codeforces.com/contest/133/problem/A', status: false },
    { id: 6, title: 'Beautiful Year', link: 'https://codeforces.com/contest/271/problem/A', status: false },
    { id: 7, title: 'New Year and Hurry', link: 'https://codeforces.com/contest/750/problem/A', status: false },
    { id: 8, title: 'Drinks', link: 'https://codeforces.com/contest/200/problem/B', status: false },
    { id: 9, title: 'Even Odds', link: 'https://codeforces.com/contest/318/problem/A', status: false },
    { id: 10, title: 'Football', link: 'https://codeforces.com/contest/96/problem/A', status: false },
    { id: 11, title: 'Queue at the School', link: 'https://codeforces.com/contest/266/problem/B', status: false },
    { id: 12, title: 'Young Physicist', link: 'https://codeforces.com/contest/69/problem/A', status: false },
    { id: 13, title: 'Lucky Division', link: 'https://codeforces.com/contest/122/problem/A', status: false },
    { id: 14, title: 'Gravity Flip', link: 'https://codeforces.com/contest/405/problem/A', status: false },
    { id: 15, title: "Panoramix's Prediction", link: 'https://codeforces.com/contest/80/problem/A', status: false },
    { id: 16, title: 'Shaass and Oskols', link: 'https://codeforces.com/contest/294/problem/A', status: false },
    { id: 17, title: 'Supercentral Point', link: 'https://codeforces.com/contest/165/problem/A', status: false },
    { id: 18, title: 'Lights Out', link: 'https://codeforces.com/contest/275/problem/A', status: false },
    { id: 19, title: 'Twins', link: 'https://codeforces.com/contest/160/problem/A', status: false },
    { id: 20, title: 'Amusing Joke', link: 'https://codeforces.com/contest/141/problem/A', status: false },
    { id: 21, title: 'Helpful Maths', link: 'https://codeforces.com/contest/339/problem/A', status: false },
    { id: 22, title: 'System of Equations', link: 'https://codeforces.com/contest/214/problem/A', status: false },
    { id: 23, title: 'Reconnaissance 2', link: 'https://codeforces.com/contest/34/problem/A', status: false },
    { id: 24, title: 'Cupboards', link: 'https://codeforces.com/contest/248/problem/A', status: false },
    { id: 25, title: 'Insomnia cure', link: 'https://codeforces.com/contest/148/problem/A', status: false },
    { id: 26, title: 'Is your horseshoe on the other hoof?', link: 'https://codeforces.com/contest/228/problem/A', status: false },
    { id: 27, title: 'Police Recruits', link: 'https://codeforces.com/contest/427/problem/A', status: false },
    { id: 28, title: 'Word', link: 'https://codeforces.com/contest/59/problem/A', status: false },
    { id: 29, title: 'Games', link: 'https://codeforces.com/contest/268/problem/A', status: false },
    { id: 30, title: 'Soft Drinking', link: 'https://codeforces.com/contest/151/problem/A', status: false },
  ],
  1200: [
    { id: 1, title: 'Taxi', link: 'https://codeforces.com/contest/158/problem/B', status: false },
    { id: 2, title: 'Effective Approach', link: 'https://codeforces.com/contest/227/problem/B', status: false },
    { id: 3, title: 'Kefa and First Steps', link: 'https://codeforces.com/contest/580/problem/A', status: false },
    { id: 4, title: 'Cut Ribbon', link: 'https://codeforces.com/contest/189/problem/A', status: false },
    { id: 5, title: 'Way Too Long Words 2 (Palindrome)', link: 'https://codeforces.com/contest/1462/problem/B', status: false },
    { id: 6, title: 'Perfect Permutation', link: 'https://codeforces.com/contest/233/problem/A', status: false },
    { id: 7, title: 'Sereja and Dima', link: 'https://codeforces.com/contest/381/problem/A', status: false },
    { id: 8, title: 'Football Kit', link: 'https://codeforces.com/contest/432/problem/A', status: false },
    { id: 9, title: "Kitahara Haruki's Gift", link: 'https://codeforces.com/contest/433/problem/A', status: false },
    { id: 10, title: 'Cakeminator', link: 'https://codeforces.com/contest/330/problem/A', status: false },
    { id: 11, title: 'Hungry Sequence', link: 'https://codeforces.com/contest/327/problem/A', status: false },
    { id: 12, title: 'Vasya and Socks', link: 'https://codeforces.com/contest/460/problem/A', status: false },
    { id: 13, title: 'Beautiful Paintings', link: 'https://codeforces.com/contest/651/problem/A', status: false },
    { id: 14, title: 'Dima and Friends', link: 'https://codeforces.com/contest/272/problem/A', status: false },
    { id: 15, title: 'Lunch Rush', link: 'https://codeforces.com/contest/276/problem/A', status: false },
    { id: 16, title: 'Fancy Fence', link: 'https://codeforces.com/contest/270/problem/A', status: false },
    { id: 17, title: 'Nearly Lucky Substring', link: 'https://codeforces.com/contest/146/problem/A', status: false },
    { id: 18, title: 'Jeff and Digits', link: 'https://codeforces.com/contest/352/problem/A', status: false },
    { id: 19, title: 'Translation 2 (Substrings)', link: 'https://codeforces.com/contest/514/problem/A', status: false },
    { id: 20, title: 'Playing with Dice', link: 'https://codeforces.com/contest/378/problem/A', status: false },
    { id: 21, title: 'Vasya the Hipster', link: 'https://codeforces.com/contest/581/problem/A', status: false },
    { id: 22, title: 'LLPS (Lexicographically Largest Palindrome Subsequence)', link: 'https://codeforces.com/contest/202/problem/A', status: false },
    { id: 23, title: 'Parallelepiped', link: 'https://codeforces.com/contest/224/problem/A', status: false },
    { id: 24, title: 'Games with Coins', link: 'https://codeforces.com/contest/455/problem/A', status: false },
    { id: 25, title: 'Xenia and Ringroad', link: 'https://codeforces.com/contest/339/problem/B', status: false },
    { id: 26, title: 'Ilya and Bank Account', link: 'https://codeforces.com/contest/313/problem/A', status: false },
    { id: 27, title: 'Buy a Shovel', link: 'https://codeforces.com/contest/732/problem/A', status: false },
    { id: 28, title: 'Games', link: 'https://codeforces.com/contest/268/problem/A', status: false },
    { id: 29, title: 'Cows and Poker Game', link: 'https://codeforces.com/contest/284/problem/A', status: false },
    { id: 30, title: 'HQ9+ 2 (Special Strings)', link: 'https://codeforces.com/contest/350/problem/A', status: false },
  ],
  1300: [
    { id: 1, title: 'Twins', link: 'https://codeforces.com/contest/160/problem/A', status: false },
    { id: 2, title: 'Nearly Lucky Number (extended)', link: 'https://codeforces.com/contest/146/problem/A', status: false },
    { id: 3, title: 'Football Kit 2', link: 'https://codeforces.com/contest/268/problem/A', status: false },
    { id: 4, title: 'Cheap Travel', link: 'https://codeforces.com/contest/466/problem/A', status: false },
    { id: 5, title: 'Dragons', link: 'https://codeforces.com/contest/230/problem/A', status: false },
    { id: 6, title: 'Puzzles', link: 'https://codeforces.com/contest/337/problem/A', status: false },
    { id: 7, title: 'Beautiful Matrix 2', link: 'https://codeforces.com/contest/271/problem/A', status: false },
    { id: 8, title: 'Games with Sticks', link: 'https://codeforces.com/contest/451/problem/A', status: false },
    { id: 9, title: 'Cinema Line', link: 'https://codeforces.com/contest/349/problem/A', status: false },
    { id: 10, title: 'Lucky Division', link: 'https://codeforces.com/contest/122/problem/A', status: false },
    { id: 11, title: 'Beautiful Year (extended)', link: 'https://codeforces.com/contest/271/problem/A', status: false },
    { id: 12, title: 'Expression', link: 'https://codeforces.com/contest/479/problem/A', status: false },
    { id: 13, title: "Greg's Workout", link: 'https://codeforces.com/contest/255/problem/A', status: false },
    { id: 14, title: 'Sereja and Dima', link: 'https://codeforces.com/contest/381/problem/A', status: false },
    { id: 15, title: 'Jzzhu and Children', link: 'https://codeforces.com/contest/450/problem/A', status: false },
    { id: 16, title: "Kuriyama Mirai's Stones", link: 'https://codeforces.com/contest/433/problem/B', status: false },
    { id: 17, title: 'DZY Loves Chessboard', link: 'https://codeforces.com/contest/445/problem/A', status: false },
    { id: 18, title: 'Valera and Plates', link: 'https://codeforces.com/contest/369/problem/A', status: false },
    { id: 19, title: 'Little Pony and Crystal Mine', link: 'https://codeforces.com/contest/454/problem/A', status: false },
    { id: 20, title: 'Petya and Countryside', link: 'https://codeforces.com/contest/66/problem/B', status: false },
    { id: 21, title: 'Fence', link: 'https://codeforces.com/contest/363/problem/B', status: false },
    { id: 22, title: 'Array', link: 'https://codeforces.com/contest/300/problem/A', status: false },
    { id: 23, title: "Hexadecimal's Theorem", link: 'https://codeforces.com/contest/199/problem/A', status: false },
    { id: 24, title: 'Xenia and Divisors', link: 'https://codeforces.com/contest/342/problem/A', status: false },
    { id: 25, title: 'Amusing Joke', link: 'https://codeforces.com/contest/141/problem/A', status: false },
    { id: 26, title: 'Playing with Dice', link: 'https://codeforces.com/contest/378/problem/A', status: false },
    { id: 27, title: 'Ilya and Bank Account', link: 'https://codeforces.com/contest/313/problem/A', status: false },
    { id: 28, title: 'Vasya the Hipster', link: 'https://codeforces.com/contest/581/problem/A', status: false },
    { id: 29, title: 'Buy a Shovel', link: 'https://codeforces.com/contest/732/problem/A', status: false },
    { id: 30, title: 'Little Girl and Game', link: 'https://codeforces.com/contest/276/problem/B', status: false },
  ],
  1400: [
    { id: 1, title: 'Boy or Girl 2 (Distinct Count)', link: 'https://codeforces.com/contest/443/problem/A', status: false },
    { id: 2, title: 'Little Elephant and Rozdil', link: 'https://codeforces.com/contest/205/problem/A', status: false },
    { id: 3, title: 'Colorful Stones (Simplified Edition)', link: 'https://codeforces.com/contest/265/problem/A', status: false },
    { id: 4, title: 'Domino Effect', link: 'https://codeforces.com/contest/405/problem/B', status: false },
    { id: 5, title: 'Shaass and Bookshelf', link: 'https://codeforces.com/contest/294/problem/B', status: false },
    { id: 6, title: 'Dragons', link: 'https://codeforces.com/contest/230/problem/A', status: false },
    { id: 7, title: 'Games 2 (Home Away)', link: 'https://codeforces.com/contest/268/problem/B', status: false },
    { id: 8, title: 'Anton and Letters', link: 'https://codeforces.com/contest/443/problem/A', status: false },
    { id: 9, title: 'Petya and Countryside', link: 'https://codeforces.com/contest/66/problem/B', status: false },
    { id: 10, title: 'Beautiful Sets of Points', link: 'https://codeforces.com/contest/268/problem/C', status: false },
    { id: 11, title: 'Little Pony and Crystal Mine', link: 'https://codeforces.com/problemset/problem/454/A', status: false },
    { id: 12, title: 'Puzzles', link: 'https://codeforces.com/contest/337/problem/A', status: false },
    { id: 13, title: 'Dragons 2', link: 'https://codeforces.com/contest/510/problem/A', status: false },
    { id: 14, title: 'Valera and Plates', link: 'https://codeforces.com/contest/369/problem/A', status: false },
    { id: 15, title: "Kuriyama Mirai's Stones", link: 'https://codeforces.com/problemset/problem/433/B', status: false },
    { id: 16, title: 'Jzzhu and Children', link: 'https://codeforces.com/contest/450/problem/A', status: false },
    { id: 17, title: 'Cinema Line', link: 'https://codeforces.com/contest/349/problem/A', status: false },
    { id: 18, title: 'Little Girl and Game', link: 'https://codeforces.com/contest/276/problem/B', status: false },
    { id: 19, title: 'Sereja and Bottles', link: 'https://codeforces.com/contest/315/problem/A', status: false },
    { id: 20, title: 'Cut Ribbon 2', link: 'https://codeforces.com/contest/189/problem/B', status: false },
    { id: 21, title: 'Array', link: 'https://codeforces.com/contest/300/problem/A', status: false },
    { id: 22, title: 'Expression', link: 'https://codeforces.com/contest/479/problem/A', status: false },
    { id: 23, title: 'Kefa and Park', link: 'https://codeforces.com/contest/580/problem/C', status: false },
    { id: 24, title: 'DZY Loves Chessboard', link: 'https://codeforces.com/contest/445/problem/A', status: false },
    { id: 25, title: 'Vasya and Wrestling', link: 'https://codeforces.com/contest/493/problem/A', status: false },
    { id: 26, title: 'Fence', link: 'https://codeforces.com/contest/363/problem/B', status: false },
    { id: 27, title: "Greg's Workout", link: 'https://codeforces.com/contest/255/problem/A', status: false },
    { id: 28, title: 'Soroban', link: 'https://codeforces.com/contest/363/problem/A', status: false },
    { id: 29, title: "Hexadecimal's theorem", link: 'https://codeforces.com/contest/199/problem/A', status: false },
    { id: 30, title: 'Xenia and Divisors', link: 'https://codeforces.com/contest/342/problem/A', status: false },
  ],
  1500: [
    { id: 1, title: 'Ice Skating', link: 'https://codeforces.com/contest/217/problem/A', status: false },
    { id: 2, title: 'Football', link: 'https://codeforces.com/contest/96/problem/A', status: false },
    { id: 3, title: 'Little Elephant and Function', link: 'https://codeforces.com/contest/221/problem/A', status: false },
    { id: 4, title: 'Effective Approach', link: 'https://codeforces.com/contest/227/problem/B', status: false },
    { id: 5, title: 'Cut Ribbon', link: 'https://codeforces.com/contest/189/problem/A', status: false },
    { id: 6, title: 'Twins', link: 'https://codeforces.com/contest/160/problem/A', status: false },
    { id: 7, title: 'Sereja and Dima', link: 'https://codeforces.com/contest/381/problem/A', status: false },
    { id: 8, title: 'Jzzhu and Children', link: 'https://codeforces.com/contest/450/problem/A', status: false },
    { id: 9, title: 'Cinema Line', link: 'https://codeforces.com/contest/349/problem/A', status: false },
    { id: 10, title: 'Puzzles', link: 'https://codeforces.com/contest/337/problem/A', status: false },
    { id: 11, title: 'Dragons', link: 'https://codeforces.com/contest/230/problem/A', status: false },
    { id: 12, title: "Kuriyama Mirai's Stones", link: 'https://codeforces.com/contest/433/problem/B', status: false },
    { id: 13, title: 'Expression', link: 'https://codeforces.com/contest/479/problem/A', status: false },
    { id: 14, title: 'Fence', link: 'https://codeforces.com/contest/363/problem/B', status: false },
    { id: 15, title: 'Little Pony and Crystal Mine', link: 'https://codeforces.com/contest/454/problem/A', status: false },
    { id: 16, title: 'Petya and Countryside', link: 'https://codeforces.com/contest/66/problem/B', status: false },
    { id: 17, title: 'DZY Loves Chessboard', link: 'https://codeforces.com/contest/445/problem/A', status: false },
    { id: 18, title: 'Valera and Plates', link: 'https://codeforces.com/contest/369/problem/A', status: false },
    { id: 19, title: 'Array', link: 'https://codeforces.com/contest/300/problem/A', status: false },
    { id: 20, title: "Greg's Workout", link: 'https://codeforces.com/contest/255/problem/A', status: false },
    { id: 21, title: "Hexadecimal's Theorem", link: 'https://codeforces.com/contest/199/problem/A', status: false },
    { id: 22, title: 'Xenia and Divisors', link: 'https://codeforces.com/contest/342/problem/A', status: false },
    { id: 23, title: 'Playing with Dice', link: 'https://codeforces.com/contest/378/problem/A', status: false },
    { id: 24, title: 'Ilya and Bank Account', link: 'https://codeforces.com/contest/313/problem/A', status: false },
    { id: 25, title: 'Vasya the Hipster', link: 'https://codeforces.com/contest/581/problem/A', status: false },
    { id: 26, title: 'Buy a Shovel', link: 'https://codeforces.com/contest/732/problem/A', status: false },
    { id: 27, title: 'Little Girl and Game', link: 'https://codeforces.com/contest/276/problem/B', status: false },
    { id: 28, title: 'Amusing Joke', link: 'https://codeforces.com/contest/141/problem/A', status: false },
    { id: 29, title: 'Soft Drinking', link: 'https://codeforces.com/contest/151/problem/A', status: false },
    { id: 30, title: 'Games', link: 'https://codeforces.com/contest/268/problem/A', status: false },
  ],
  1600: [
    { id: 1, title: 'Partitioning the Array', link: 'https://codeforces.com/contest/1886/problem/C', status: false },
    { id: 2, title: 'Good Triples', link: 'https://codeforces.com/contest/1907/problem/E', status: false },
    { id: 3, title: 'Decreasing String', link: 'https://codeforces.com/contest/1798/problem/D', status: false },
    { id: 4, title: 'To Become Max', link: 'https://codeforces.com/contest/1514/problem/D', status: false },
    { id: 5, title: 'Tracking Segments', link: 'https://codeforces.com/contest/1843/problem/B', status: false },
    { id: 6, title: 'Round Dance', link: 'https://codeforces.com/contest/1433/problem/E', status: false },
    { id: 7, title: 'Hits Different', link: 'https://codeforces.com/contest/1907/problem/E', status: false },
    { id: 8, title: 'Shocking Arrangement', link: 'https://codeforces.com/contest/1798/problem/D', status: false },
    { id: 9, title: 'Triangle Coloring', link: 'https://codeforces.com/contest/1321/problem/C', status: false },
    { id: 10, title: 'Equal Frequencies', link: 'https://codeforces.com/contest/1482/problem/B', status: false },
    { id: 11, title: 'Flexible String', link: 'https://codeforces.com/contest/1321/problem/C', status: false },
    { id: 12, title: 'Interesting Sequence', link: 'https://codeforces.com/contest/1321/problem/C', status: false },
    { id: 13, title: 'Sending a Sequence Over the Network', link: 'https://codeforces.com/contest/1321/problem/C', status: false },
    { id: 14, title: 'Meeting on the Line', link: 'https://codeforces.com/contest/1321/problem/C', status: false },
    { id: 15, title: 'Split Into Two Sets', link: 'https://codeforces.com/contest/1321/problem/C', status: false },
    { id: 16, title: 'Fixed Point Guessing', link: 'https://codeforces.com/contest/1321/problem/C', status: false },
    { id: 17, title: 'Maximum Product Strikes Back', link: 'https://codeforces.com/contest/1321/problem/C', status: false },
    { id: 18, title: 'Make them Equal', link: 'https://codeforces.com/contest/1321/problem/C', status: false },
    { id: 19, title: 'Keshi Is Throwing a Party', link: 'https://codeforces.com/contest/1321/problem/C', status: false },
    { id: 20, title: 'Say No to Palindromes', link: 'https://codeforces.com/contest/1321/problem/C', status: false },
    { id: 21, title: 'Erase and Extend (Easy Version)', link: 'https://codeforces.com/contest/1321/problem/C', status: false },
    { id: 22, title: "Parsa's Humongous Tree", link: 'https://codeforces.com/contest/1321/problem/C', status: false },
    { id: 23, title: 'Planar Reflections', link: 'https://codeforces.com/contest/1321/problem/C', status: false },
    { id: 24, title: 'Advertising Agency', link: 'https://codeforces.com/contest/1321/problem/C', status: false },
    { id: 25, title: 'Row GCD', link: 'https://codeforces.com/contest/1321/problem/C', status: false },
    { id: 26, title: 'Chocolate Bunny', link: 'https://codeforces.com/contest/1321/problem/C', status: false },
    { id: 27, title: 'Good Subarrays', link: 'https://codeforces.com/contest/1321/problem/C', status: false },
    { id: 28, title: 'Array Walk', link: 'https://codeforces.com/contest/1321/problem/C', status: false },
    { id: 29, title: 'Orac and LCM', link: 'https://codeforces.com/contest/1321/problem/C', status: false },
    { id: 30, title: 'Linova and Kingdom', link: 'https://codeforces.com/contest/1321/problem/C', status: false },
    { id: 31, title: 'Kuroni and Impossible Calculation', link: 'https://codeforces.com/contest/1321/problem/C', status: false },
  ],
  1700: [
    { id: 1, title: 'Maximum Modulo Equality', link: 'https://codeforces.com/contest/1730/problem/C', status: false },
    { id: 2, title: 'Drunken Maze', link: 'https://codeforces.com/contest/1602/problem/C', status: false },
    { id: 3, title: 'Tree Pruning', link: 'https://codeforces.com/contest/1092/problem/F', status: false },
    { id: 4, title: 'Iris and Game on the Tree', link: 'https://codeforces.com/contest/1665/problem/D', status: false },
    { id: 5, title: 'Ruler (Hard Version)', link: 'https://codeforces.com/contest/1196/problem/F', status: false },
    { id: 6, title: 'Swap Dilemma', link: 'https://codeforces.com/contest/1971/problem/F', status: false },
    { id: 7, title: 'Beauty of the Mountains', link: 'https://codeforces.com/contest/1985/problem/H', status: false },
    { id: 8, title: 'Tandem Repeats?', link: 'https://codeforces.com/contest/1417/problem/C', status: false },
    { id: 9, title: 'Chat Screenshots', link: 'https://codeforces.com/contest/1623/problem/C', status: false },
    { id: 10, title: 'Neutral Tonality', link: 'https://codeforces.com/contest/1760/problem/F', status: false },
    { id: 11, title: 'Sum of XOR Functions', link: 'https://codeforces.com/contest/1442/problem/B', status: false },
    { id: 12, title: 'Ira and Flamenco', link: 'https://codeforces.com/contest/1818/problem/C', status: false },
    { id: 13, title: "Don't Blame Me", link: 'https://codeforces.com/contest/1972/problem/C', status: false },
    { id: 14, title: 'Running Miles', link: 'https://codeforces.com/contest/1791/problem/G', status: false },
    { id: 15, title: 'Magic Triples (Easy Version)', link: 'https://codeforces.com/contest/1921/problem/B', status: false },
    { id: 16, title: 'Fixed Prefix Permutations', link: 'https://codeforces.com/contest/1872/problem/G', status: false },
    { id: 17, title: 'Quiz Master', link: 'https://codeforces.com/contest/1873/problem/H', status: false },
    { id: 18, title: "SlavicG's Favorite Problem", link: 'https://codeforces.com/contest/1870/problem/C', status: false },
    { id: 19, title: 'Meta-Set', link: 'https://codeforces.com/contest/1712/problem/C', status: false },
    { id: 20, title: 'Even Subarrays', link: 'https://codeforces.com/contest/1739/problem/C', status: false },
    { id: 21, title: 'Monoblock', link: 'https://codeforces.com/contest/1601/problem/A', status: false },
    { id: 22, title: 'Rororobot', link: 'https://codeforces.com/contest/1917/problem/C', status: false },
    { id: 23, title: 'Zero Path', link: 'https://codeforces.com/contest/1878/problem/B', status: false },
    { id: 24, title: 'Gambling', link: 'https://codeforces.com/contest/1819/problem/A', status: false },
    { id: 25, title: 'Shifting String', link: 'https://codeforces.com/contest/286/problem/B', status: false },
    { id: 26, title: 'Road Optimization', link: 'https://codeforces.com/contest/1625/problem/C', status: false },
    { id: 27, title: 'Training Session', link: 'https://codeforces.com/contest/1915/problem/G', status: false },
    { id: 28, title: 'The Number of Impostors', link: 'https://codeforces.com/contest/1946/problem/C', status: false },
    { id: 29, title: 'Moamen and XOR', link: 'https://codeforces.com/contest/1557/problem/B', status: false },
    { id: 30, title: 'Kavi on Pairing Duty', link: 'https://codeforces.com/contest/1916/problem/D', status: false },
    { id: 31, title: 'Baby Ehab Partitions Again', link: 'https://codeforces.com/contest/1912/problem/F', status: false },
  ],
  1800: [
    { id: 1, title: 'Gerrymandering', link: 'https://codeforces.com/contest/2014/problem/E', status: false },
    { id: 2, title: 'Rendez-vous de Marian et Robin', link: 'https://codeforces.com/contest/1974/problem/E', status: false },
    { id: 3, title: 'Money Buys Happiness', link: 'https://codeforces.com/contest/1935/problem/D', status: false },
    { id: 4, title: 'Exam in MAC', link: 'https://codeforces.com/contest/1915/problem/G', status: false },
    { id: 5, title: 'Bicycles', link: 'https://codeforces.com/contest/1912/problem/K', status: false },
    { id: 6, title: "Kim's Quest", link: 'https://codeforces.com/contest/1824/problem/F1', status: false },
    { id: 7, title: 'LuoTianyiyi and the Floating Islands (Easy Version)', link: 'https://codeforces.com/contest/1805/problem/D', status: false },
    { id: 8, title: 'A Wide, Wide Graph', link: 'https://codeforces.com/contest/2018/problem/C', status: false },
    { id: 9, title: 'Friendly Spiders', link: 'https://codeforces.com/contest/2014/problem/H', status: false },
    { id: 10, title: 'Lucky Permutation', link: 'https://codeforces.com/contest/2014/problem/E', status: false },
    { id: 11, title: 'Sheikh (Easy Version)', link: 'https://codeforces.com/contest/2014/problem/E', status: false },
    { id: 12, title: 'Moving Both Hands', link: 'https://codeforces.com/contest/2014/problem/E', status: false },
    { id: 13, title: 'Recover an RBS', link: 'https://codeforces.com/contest/2014/problem/E', status: false },
    { id: 14, title: 'Max GEQ Sum', link: 'https://codeforces.com/contest/2014/problem/E', status: false },
    { id: 15, title: 'Explorer Space', link: 'https://codeforces.com/contest/2014/problem/E', status: false },
    { id: 16, title: 'The Sports Festival', link: 'https://codeforces.com/contest/2014/problem/E', status: false },
    { id: 17, title: 'Zookeeper and The Infinite Zoo', link: 'https://codeforces.com/contest/2014/problem/E', status: false },
    { id: 18, title: 'Road Reform', link: 'https://codeforces.com/contest/2014/problem/E', status: false },
    { id: 19, title: 'Apollo versus Pan', link: 'https://codeforces.com/contest/2014/problem/E', status: false },
    { id: 20, title: 'The Treasure of The Segments', link: 'https://codeforces.com/contest/2014/problem/E', status: false },
    { id: 21, title: 'Catching Cheaters', link: 'https://codeforces.com/contest/2014/problem/E', status: false },
    { id: 22, title: 'Identify the Operations', link: 'https://codeforces.com/contest/2014/problem/E', status: false },
    { id: 23, title: 'Chef Monocarp', link: 'https://codeforces.com/contest/2014/problem/E', status: false },
    { id: 24, title: 'Maximum Distributed Tree', link: 'https://codeforces.com/contest/2014/problem/E', status: false },
    { id: 25, title: 'Stoned Game', link: 'https://codeforces.com/contest/2014/problem/E', status: false },
    { id: 26, title: 'Count Triangles', link: 'https://codeforces.com/contest/2014/problem/E', status: false },
    { id: 27, title: 'Edge Weight Assignment', link: 'https://codeforces.com/contest/2014/problem/E', status: false },
    { id: 28, title: 'Three Blocks Palindrome (hard version)', link: 'https://codeforces.com/contest/2014/problem/E', status: false },
    { id: 29, title: 'Irreducible Anagrams', link: 'https://codeforces.com/contest/2014/problem/E', status: false },
    { id: 30, title: 'Numbers on Tree', link: 'https://codeforces.com/contest/2014/problem/E', status: false },
    { id: 31, title: 'Christmas Trees', link: 'https://codeforces.com/contest/2014/problem/E', status: false },
  ],
  1900: [
    { id: 1, title: 'Easy Demon Problem', link: 'https://codeforces.com/contest/2044/problem/F', status: false },
    { id: 2, title: 'Recommendations', link: 'https://codeforces.com/contest/2044/problem/G', status: false },
    { id: 3, title: 'XORificator 3000', link: 'https://codeforces.com/contest/2036/problem/F', status: false },
    { id: 4, title: 'Robin Hood Archery', link: 'https://codeforces.com/contest/2014/problem/H', status: false },
    { id: 5, title: "Yunli's Subarray Queries (Easy Version)", link: 'https://codeforces.com/contest/2009/problem/G1', status: false },
    { id: 6, title: 'Longest Max Min Subsequence', link: 'https://codeforces.com/contest/2001/problem/D', status: false },
    { id: 7, title: 'Funny Game', link: 'https://codeforces.com/contest/1994/problem/B', status: false },
    { id: 8, title: 'Valuable Cards', link: 'https://codeforces.com/contest/2036/problem/G', status: false },
    { id: 9, title: 'Non-academic Problem', link: 'https://codeforces.com/contest/2036/problem/H', status: false },
    { id: 10, title: 'A BIT of an Inequality', link: 'https://codeforces.com/contest/2036/problem/I', status: false },
    { id: 11, title: 'Shuffling Songs', link: 'https://codeforces.com/contest/2036/problem/I', status: false },
    { id: 12, title: 'Feed Cats', link: 'https://codeforces.com/contest/2036/problem/K', status: false },
    { id: 13, title: 'Good Trip', link: 'https://codeforces.com/contest/2036/problem/L', status: false },
    { id: 14, title: 'Blocking Elements', link: 'https://codeforces.com/contest/2036/problem/M', status: false },
    { id: 15, title: 'Accumulator Apex', link: 'https://codeforces.com/contest/2036/problem/N', status: false },
    { id: 16, title: 'Merge Not Sort', link: 'https://codeforces.com/contest/2036/problem/O', status: false },
    { id: 17, title: 'Collapsing Strings', link: 'https://codeforces.com/contest/2036/problem/P', status: false },
    { id: 18, title: 'Absolute Beauty', link: 'https://codeforces.com/contest/2036/problem/Q', status: false },
    { id: 19, title: 'Tree XOR', link: 'https://codeforces.com/contest/2036/problem/R', status: false },
    { id: 20, title: 'Tenzing and His Animal Friends', link: 'https://codeforces.com/contest/2036/problem/S', status: false },
    { id: 21, title: 'The Butcher', link: 'https://codeforces.com/contest/2036/problem/T', status: false },
    { id: 22, title: 'Fish Graph', link: 'https://codeforces.com/contest/2036/problem/U', status: false },
    { id: 23, title: 'Hot Start Up (Easy Version)', link: 'https://codeforces.com/contest/2036/problem/V', status: false },
    { id: 24, title: 'Counting Factorizations', link: 'https://codeforces.com/contest/2036/problem/W', status: false },
    { id: 25, title: 'Score of a Tree', link: 'https://codeforces.com/contest/2036/problem/X', status: false },
    { id: 26, title: 'Restore the Permutation', link: 'https://codeforces.com/contest/2036/problem/Y', status: false },
    { id: 27, title: 'Yet Another Problem', link: 'https://codeforces.com/contest/2036/problem/Z', status: false },
    { id: 28, title: 'Divisible Numbers (Hard Version)', link: 'https://codeforces.com/contest/2037/problem/A', status: false },
    { id: 29, title: 'Reset K Edges', link: 'https://codeforces.com/contest/2037/problem/B', status: false },
    { id: 30, title: '2+ doors', link: 'https://codeforces.com/contest/2037/problem/C', status: false },
    { id: 31, title: 'River Locks', link: 'https://codeforces.com/contest/2037/problem/D', status: false },
  ],
};
const allRatings: number[] = Object.keys(initialProblemsByRating).map(Number);
const overallTotal: number = Object.values(initialProblemsByRating).flat().length;

// --- Circular Progress Component ---
interface CircularProgressProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  darkMode: boolean;
}

const CircularProgress: FC<CircularProgressProps> = ({
  percentage,
  size = 48,
  strokeWidth = 4,
  darkMode,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  const baseStroke = darkMode ? "#4b5563" : "#e0e0e0";
  const progressStroke = darkMode ? "#6334B9" : "#6334B9";
  const textFill = darkMode ? "#a1a1aa" : "#4b5563";

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle stroke={baseStroke} fill="transparent" strokeWidth={strokeWidth} r={radius} cx={size / 2} cy={size / 2} />
      <circle
        stroke={progressStroke}
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={offset}
        strokeLinecap="round"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="0.75em" fill={textFill}>
        {percentage}%
      </text>
    </svg>
  );
};

// --- Main Component ---
const CP: FC<CPProps> = ({ darkMode }) => {
  const [allProblems, setAllProblems] = useState<ProblemsByRating>(() =>
    JSON.parse(JSON.stringify(initialProblemsByRating)) as ProblemsByRating
  );
  const [selectedRating, setSelectedRating] = useState<number>(() => {
    const savedRating = localStorage.getItem("selectedRating");
    return savedRating ? Number(savedRating) : allRatings[0];
  });
  const [problemSearchTerm, setProblemSearchTerm] = useState<string>("");

  const currentProblems: Problem[] = useMemo(() => allProblems[selectedRating] || [], [allProblems, selectedRating]);

  const { ratingProgress, overallProgress } = useMemo(() => {
    const problemsForRating = allProblems[selectedRating] || [];
    const ratingSolved = problemsForRating.filter((p) => p.status).length;
    const ratingTotal = problemsForRating.length;
    const allProblemsFlat = Object.values(allProblems).flat() as Problem[];
    const overallSolved = allProblemsFlat.filter((p) => p.status).length;

    return {
      ratingProgress: { solved: ratingSolved, total: ratingTotal },
      overallProgress: { solved: overallSolved, total: overallTotal },
    };
  }, [allProblems, selectedRating]);

  useEffect(() => {
    localStorage.setItem("selectedRating", String(selectedRating));
  }, [selectedRating]);

  const handleProblemStatusChange = (problemId: string | number) => {
    setAllProblems((prev) => {
      const current = prev[selectedRating];
      if (!current) return prev;
      const updated = current.map((p) => (p.id === problemId ? { ...p, status: !p.status } : p));
      return { ...prev, [selectedRating]: updated };
    });
  };

  const getDifficultyColor = (rating: number) => {
    if (rating <= 1000)
      return darkMode ? "bg-green-900 text-green-300" : "bg-green-100 text-green-800";
    if (rating <= 1300)
      return darkMode ? "bg-yellow-900 text-yellow-300" : "bg-yellow-100 text-yellow-800";
    return darkMode ? "bg-red-900 text-red-300" : "bg-red-100 text-red-800";
  };

  const filteredProblems = currentProblems.filter((p) =>
    p.title.toLowerCase().includes(problemSearchTerm.toLowerCase())
  );

  const getPercentage = (solved: number, total: number) => (total === 0 ? 0 : Math.round((solved / total) * 100));

  return (
    <div
      className={`flex flex-col md:flex-row min-h-screen pt-20 transition-colors duration-500 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
        }`}
    >
      {/* Sidebar */}
      <aside
        className={`w-full md:w-64 p-4 md:p-6 border-b mt-5 md:border-b-0 md:border-r transition-colors duration-500 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
          }`}
      >
        <h2 className={`text-lg md:text-xl font-semibold mb-4 ${darkMode ? "text-gray-100" : "text-gray-800"}`}>
          Rating
        </h2>
        <div className="flex flex-wrap gap-2">
          {allRatings.map((rating) => (
            <button
              key={rating}
              onClick={() => setSelectedRating(rating)}
              className={`px-3 py-2 md:px-4 md:py-2 rounded-lg border text-sm transition-colors duration-200 ${selectedRating === rating
                ? "bg-[#6334B9] text-white border-[#6334B9]"
                : darkMode
                  ? "bg-gray-700 text-gray-200 border-gray-600 hover:border-[#6334B9]"
                  : "bg-white text-gray-700 border-gray-300 hover:border-[#6334B9]"
                }`}
            >
              {rating}
            </button>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 space-y-8">
        {/* Progress Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Rating Progress */}
          <div
            className={`p-5 rounded-xl shadow-lg border transition-colors duration-500 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
              }`}
          >
            <h3 className={`font-medium mb-3 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>Rating Progress</h3>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold ">
                {ratingProgress.solved}/{ratingProgress.total}
              </div>
              <CircularProgress
                percentage={getPercentage(ratingProgress.solved, ratingProgress.total)}
                darkMode={darkMode}
              />
            </div>
          </div>

          {/* Overall Progress */}
          <div
            className={`p-5 rounded-xl shadow-lg border transition-colors duration-500 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
              }`}
          >
            <h3 className={`font-medium mb-3 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>Overall Progress</h3>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">
                {overallProgress.solved}/{overallProgress.total}
              </div>
              <CircularProgress
                percentage={getPercentage(overallProgress.solved, overallProgress.total)}
                darkMode={darkMode}
              />
            </div>
          </div>

          {/* Leaderboard */}
          <div
            className={`p-5 rounded-xl shadow-lg border transition-colors duration-500 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
              }`}
          >
            <h3 className={`font-medium mb-3 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>Leaderboard</h3>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">N/A</div>
              <a
                href="#"
                className={`text-sm hover:underline ${darkMode ? "text-[#6334B9]" : "text-[#6334B9]"
                  }`}
              >
                Rank →
              </a>
            </div>
          </div>
        </div>

        {/* Practice Problems */}
        <div
          className={`p-5 rounded-xl shadow-lg border transition-colors duration-500 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
            }`}
        >
          <h2 className={`text-xl font-semibold mb-4 ${darkMode ? "text-gray-100" : "text-gray-800"}`}>
            Practice Problems
          </h2>
          <div className="relative mb-5">
            <input
              type="text"
              placeholder="Search problems..."
              className={`w-full px-4 pl-10 py-2 border rounded-lg  focus:ring-[#6334B9] 
                ${darkMode
                  ? "bg-gray-700 border border-[#6334B9] text-white focus:ring-2 focus:ring-[#6334B9]"
                  : "bg-purple-50 border border-[#6334B9] text-black focus:ring-2 focus:ring-[#6334B9]"
                }`}
              value={problemSearchTerm}
              onChange={(e) => setProblemSearchTerm(e.target.value)}
            />
            <svg
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${darkMode ? "text-[#6334B9]" : "text-[#6334B9]"
                }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="overflow-x-auto">
            <table
              className={`min-w-full divide-y text-sm ${darkMode ? "divide-gray-700" : "divide-gray-200"}`}
            >
              <thead className={darkMode ? "bg-gray-700" : "bg-gray-50"}>
                <tr>
                  <th className="px-4 py-3 text-left font-medium uppercase">Status</th>
                  <th className="px-4 py-3 text-left font-medium uppercase">Problem Title</th>
                  <th className="px-4 py-3 text-left font-medium uppercase">Difficulty</th>
                </tr>
              </thead>
              <tbody className={darkMode ? "divide-gray-700" : "divide-gray-200"}>
                {filteredProblems.length > 0 ? (
                  filteredProblems.map((problem) => (
                    <tr
                      key={problem.id}
                      className={`transition-colors ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"}`}
                    >
                      <td className="px-4 py-3">
                        <input
                          type="checkbox"
                          checked={problem.status}
                          onChange={() => handleProblemStatusChange(problem.id)}
                          className="h-4 w-4 text-[#6334B9] rounded focus:ring-[#6334B9]"
                        />
                      </td>
                      <td className="px-4 py-3 font-medium">
                        <a
                          href={problem.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`transition-colors ${darkMode ? "text-gray-100 hover:text-[#6334B9]" : "text-gray-900 hover:text-[#6334B9]"
                            }`}
                        >
                          {problem.title}
                        </a>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getDifficultyColor(
                            selectedRating
                          )}`}
                        >
                          Rating {selectedRating}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="px-4 py-4 text-center text-gray-500">
                      No problems found for Rating {selectedRating}.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CP;
