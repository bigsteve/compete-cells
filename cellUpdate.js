/**
    There are eight houses represented as cells. Each day, the houses compete with adjacent ones. 1 represents an "active" house and 0 represents an "inactive" house. If the neighbors on both sides of a given house are either both active or both inactive, then that house becomes inactive on the next day. Otherwise it becomes active. For example, if we had a group of neighbors [0, 1, 0] then the house at [1] would become 0 since both the house to its left and right are both inactive. The cells at both ends only have one adjacent cell so assume that the unoccupied space on the other side is an inactive cell.
    Even after updating the cell, you have to consider its prior state when updating the others so that the state information of each cell is updated simultaneously
    The function takes the array of states and a number of days and should output the state of the houses after the given number of days.

    Examples:
        input: states =     [1, 0, 0, 0, 0, 1, 0, 0], days = 1
        output should be [0, 1, 0, 0, 1, 0, 1, 0]
        input: states =     [1, 1, 1, 0, 1, 1, 1, 1], days = 2
        output should be [0, 0, 0, 0, 0, 1, 1, 0]
 */
 
var cellUpdate = (cells, days)  => {
    
    let result = [];
    
    // update states
    for(let i = 0; i < cells.length; i++)  result.push((!Boolean(cells[i-1]) === !Boolean(cells[i+1])) ? 0 : 1) ;
    
    // repeat for each day
    if (days > 1) result = cellUpdate(result, days - 1);
    return result;
    
}
