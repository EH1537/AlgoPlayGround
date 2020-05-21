/*
6 
Sample Output

     #
    ##
   ###
  ####
 #####
######
*/

function staircase(n) {
  let space = ' '
  let stair = '*'

  for (let i = 1, j=n-1; i <= n; i++) {
    console.log(space.repeat(j) + stair.repeat(i))
    j--
  }

}

staircase(6)


