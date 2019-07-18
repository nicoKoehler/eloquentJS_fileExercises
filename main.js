console.log("Exercise: 1 > Route Triangle")
let route = '';
for (let count = 0; count < 7; count++){
	route += "#";
	console.log(route);
}

console.log("Exercise: 2 > Chessboard")
let chessGrid = '';
let gridSize = 8;
let space = ["_","#"];
let rowCount = 0;
let bSpaceBin; 
let iInsightCount=0; 


for (let count1 = 0; count1 < gridSize*gridSize; count1++){
	// 1: insert line break after length of one row
	// 2: Set row count variable to start alternating depending on even or odd rows
	if (count1%(gridSize) == 0 && count1 >1){
		chessGrid += "\n";
		rowCount++;
		if (rowCount%2 == 0){
			iInsightCount = 0;
		}else{iInsightCount = 1;}

	}
	// based on alternating variable, set the alternating binary to retrieve char
	if (iInsightCount%2 == 0){
		bSpaceBin = 1;
	} else{
		bSpaceBin = 0;
	}

	iInsightCount ++; 
	chessGrid += space[bSpaceBin];



}

console.log(chessGrid)

console.log("Exercise: 3 > FizzBuzz")


let value; 
for (let count2 = 0; count2 < 100; count2++){

	if ((count2+1)%3 == 0 && (count2+1)%5 == 0){
		value = "FizzBuzz";
	}else if((count2+1)%5 == 0 ){
		value = "buzz"
	} else if((count2+1)%3 == 0){
		value = "fizz"
	}else{value = count2+1}

	console.log(value)


}

console.log("Exercise: 4 > Recursion")


function findSolution(target) {
	function find(current, history){
		if (current == target) {
			return history;
		}else if(current > target){
			return null;
		}else{
			return find(current + 5, `(${history} + 5)`) || find(current*3,`(${history} *3)`);
		}
	}
	return find(1,"1");
}

console.log(findSolution(24))


console.log("Exercise: 5 > Minimum")

function min1(num1, num2) {
	
	if (num1 < num2) {
		return num1;
	}else{return num2;}
	
}

const min2 = function(a,b) {
	if(a < b){
		return a;
	}else{return b;}
}

console.log(min2(-5.1,5))

console.log("Exercise: 6 > recursion")

function isEven(a) {
	
	if (a < 0){
		a = -a;
	}

	if (a == 0) {
		return true;
	} else if (a == 1){
		return false;
	}else{
		return isEven(a-2);
	}
	
}

console.log(isEven(-10))

console.log("Exercise: 7 > countBs")

function countBs(sCountString) {

	return countChar(sCountString, "B");
	
}

function countChar(sCountString2, sCharCount) {
	
	let iCount = 0
	let iFindChar = 0
	while(iCount < sCountString2.length){

		if (sCountString2[iCount] == sCharCount){
			iFindChar ++;
		}

		iCount++
	}

	return iFindChar;
}

console.log(countBs("Bean ^BBbBeaches"))

	


console.log("Exercise: 8 > SumRange")


function rangeN(start,end, step = 1) {
	let aRange = [];
	let iCount; 

	if (end > start){
		for (iCount = start; iCount <= end; iCount+=step){
			aRange.push(iCount);
		}
		
	} else{
		for (iCount = start; iCount >= end; iCount+=step){
			aRange.push(iCount);
		}
	}
	//aRange.push(iCount);
	return aRange; 
}

function sumN(aOfNums, start=0, end=aOfNums.length-1) {
	let total = 0;
	console.log(start, end)
	for (let iCount = start; iCount <= end; iCount ++){
		total += aOfNums[iCount];
	}

	return total;
}

console.log(sumN(rangeN(1,10)))


console.log("Exercise: 9 > reverseArray")

function reverseArray(array) {
	let newArray=[]; 
	for (iCount = array.length-1; iCount >= 0; iCount --){
		console.log(iCount);
		newArray.push(array[iCount])
	}

	return newArray;
}

console.log(reverseArray(rangeN(1,10)))

function reverseSliceArray(array, start, end) {
	console.log(array.slice(0,start).concat(array.slice(start+1, end-1)))
	console.log(array.concat(reverseArray(array.slice(start+1, end-1))))
	array.slice(0,start).concat(reverseArray(array.slice(start+1, end-1))).concat(array.slice(end,array.length))
}

let aTestArray = rangeN(1,10)
reverseSliceArray(aTestArray,2,4)

console.log(aTestArray)