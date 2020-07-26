function average(arr){
	var sum=0;
	for(var i=0; i<arr.length; i++){
		sum+=arr[i]
	}
	var avg;
	avg=sum/arr.length;
	return Math.round(avg);
}

console.log("Average of Test Scores-");
var scores=[90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));