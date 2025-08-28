const myObj = {
	fname: "Mohamed",
	lname: "Ahmed",
	sayHi: function () {
		console.log(`${this.fname} ${this.lname}`);
	},
	// address: {
	// 	city: "Cairo",
	// 	country: "Egypt",
	// },
};

myObj.sayHi();
// myObj['address'] =
console.log(myObj?.address?.city);

myObj?.sayHello?.();

/* 
response:{
  data: [
    {
      age
    }
  ],
  status: 200,
}
console.log(response?.data);
*/
