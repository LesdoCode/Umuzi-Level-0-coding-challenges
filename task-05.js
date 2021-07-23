function getTriangleArea(side1, side2, side3) {
	let semiPerimeter = (side1 + side2 + side3) / 2;

	return Math.sqrt(
		semiPerimeter *
			(semiPerimeter - side1) *
			(semiPerimeter - side2) *
			(semiPerimeter - side3)
	);
}
